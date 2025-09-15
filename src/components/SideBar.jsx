export default function SideBar({onclick,projects}){
    return(
        <aside className="bg-black flex-1 basis-1/3 mt-10 rounded-lg">
         <h2 className="text-center text-white font-mono text-base py-10">
          Your Projects 
         </h2>
         <button className="bg-white text-black font-mono text-base py-2 px-4 rounded-lg ml-10" onClick={onclick}>
          + New Project
          </button>
          <ul>
            {projects.length === 0 && (
              <li className="text-white text-center mt-10">No Projects</li>
            )}
            {projects.map((project, index) => (
              <li key={index} className="text-white text-center mt-5 ">
                {project.title} - {project.desc} (Due: {project.date})
              </li>
            ))}
          </ul>
        </aside>

    );
}