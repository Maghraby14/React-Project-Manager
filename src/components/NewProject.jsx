import { useState } from "react";
import Input from "./input";

export default function NewProject({ onSubmit }) {
  // state لكل input
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const handleSave = () => {
    const projectData = {
      title,
      desc,
      date,
    };
    onSubmit(projectData); // بعت البيانات للأب
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 font-mono border-b pb-3">
        Create New Project
      </h2>

      {/* Form Inputs */}
      <div className="w-full">
        <Input
          forwt="title"
          placeholder="Enter your project title..."
          isTextArea={false}
          type="text"
          value={title}
          onchange={(e) => setTitle(e.target.value)}
        >
          Project Title
        </Input>

        <Input
          forwt="desc"
          placeholder="Describe your project..."
          isTextArea={true}
          value={desc}
          onchange={(e) => setDesc(e.target.value)}
        >
          Project Description
        </Input>

        <Input
          forwt="date"
          placeholder="Select a due date..."
          isTextArea={false}
          type="date"
          value={date}
          onchange={(e) => setDate(e.target.value)}
        >
          Project Date
        </Input>
      </div>

      {/* Buttons */}
      <menu className="flex justify-end gap-4 pt-4 border-t">
        <li>
          <button
            className="bg-red-500 text-white font-mono text-base py-2 px-6 rounded-lg hover:bg-red-600 transition"
            onClick={() => onSubmit(null)} // cancel
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-green-600 text-white font-mono text-base py-2 px-6 rounded-lg hover:bg-green-700 transition"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
    </div>
  );
}
