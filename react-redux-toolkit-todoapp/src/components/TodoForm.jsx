
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

const TodoForm = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    const inputTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <form onSubmit={inputTodoHandler}
        className="w-full mt-10"
        >
            <div
            className="w-[50%] m-auto rounded-lg shadow-sm flex justify-center items-center p-4"
            >
                <input type="text" 
                className="w-full rounded-l-lg p-4 outline-none font-semibold"
                placeholder="Write Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button
                type="submit"
                className="p-4 px-8 rounded-r-lg text-white bg-green-400"
                >Add</button>
            </div>
        </form>
    )
}

export default TodoForm;