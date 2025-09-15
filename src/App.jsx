import { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";

function App() {
  const [newPressed, setNewPressed] = useState(false);
  const [projectsState, setProjectsState] = useState({
    id: undefined,
    projects: [],
  });

  const handleProjectSubmit = (projectData) => {
    if (projectData) {
      // أضف المشروع الجديد ومعاه tasks فاضية
      setProjectsState((prev) => ({
        ...prev,
        projects: [...prev.projects, { ...projectData, tasks: [] }],
      }));
      console.log("New project added:", projectData);
    } else {
      console.log("Cancelled");
    }
  };

  // إضافة تاسك جديدة لمشروع محدد
  const handleAddTask = (projectIndex) => {
    const taskName = prompt("Enter new task name:");
    if (!taskName) return;

    setProjectsState((prev) => {
      const newProjects = [...prev.projects];
      newProjects[projectIndex] = {
        ...newProjects[projectIndex],
        tasks: [...newProjects[projectIndex].tasks, { name: taskName }],
      };
      return { ...prev, projects: newProjects };
    });
  };

  return (
    <div className="flex h-screen">
      {/* Left column - 1/3 */}
      <SideBar
        onclick={() => {
          setNewPressed(true);
        }}
        projects={projectsState.projects}
      />

      {/* Right column - 2/3 */}
      <div className="bg-slate-300 flex-2 basis-2/3">
        <div className="items-center">
          {!newPressed && projectsState.projects.length === 0 && (
            <NoProject
              onclick={() => {
                setNewPressed(true);
              }}
            />
          )}

          {newPressed && (
            <NewProject
              onSubmit={(projectData) => {
                setNewPressed(false);
                handleProjectSubmit(projectData);
              }}
            />
          )}
        </div>

        {/* عرض المشاريع */}
        {projectsState.projects.length > 0 && !newPressed && (
          <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Projects List</h2>
            <ul className="space-y-4">
              {projectsState.projects.map((p, i) => (
                <div
                  key={i}
                  className="w-full p-4 bg-white rounded shadow space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <li>
                      <b>{p.title}</b> - {p.desc} (Due: {p.date})
                    </li>
                    <button
                      className="bg-black text-white font-mono text-sm py-2 px-3 rounded-lg hover:bg-gray-800"
                      onClick={() => handleAddTask(i)}
                    >
                      + New Task
                    </button>
                  </div>

                  {/* عرض التاسكات الخاصة بالمشروع */}
                  {p.tasks && p.tasks.length > 0 && (
                    <ul className="pl-5 list-disc">
                      {p.tasks.map((t, j) => (
                        <li key={j}>{t.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
