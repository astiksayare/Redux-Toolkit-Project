
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../feature/todo/todoSlice";

const Todo = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
        {todos.map((todo) => (
            <div
            key={todo.id}
            className="w-[50%] m-auto flex justify-center items-center p-4"
            >
                <input type="text" 
                className="w-full rounded-l-lg p-4 outline-none font-semibold"
                value={todo.text}
                readOnly
                />
                <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="p-4 px-8 rounded-r-lg text-white bg-red-500"
                >Delete</button>
            </div>
        ))}
        </>
    )
}

export default Todo;