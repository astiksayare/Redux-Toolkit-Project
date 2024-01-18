import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";


const App = () => {

  return (
    <>
     <div className="w-full h-screen bg-indigo-300">
      <div className="flex flex-col ">
      <TodoForm />
      <Todo />
      </div>
    </div>
    </>
  )
}

export default App;