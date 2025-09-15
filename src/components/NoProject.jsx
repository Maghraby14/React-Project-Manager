export default function NoProject({onclick}){
    return(
        <>
          <img src="./src/assets/no-projects.png" alt="No Projects" className="mx-auto my-20 w-25 h-10" />
          <h2 className="text-center text-black font-mono text-base py-10">
            No Projects Found
          </h2>
          <button className="block mx-auto bg-black text-white font-mono text-base py-2 px-4 rounded-lg hover:bg-gray-800"
          onClick={onclick}
          >
  Create a new project to get started
</button>
          </>
    )
}