import { forwardRef } from "react";
import { createTodo, getTodos } from "../api/todoAPIs";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

const TodoInput = (props: any, ref: any) => {
  const handleSubmit = () => {
    const accessToken = getAccessTokenFromLocalStorage();
    const todo = ref.current.value;
    // console.log(ref.current.value);
    createTodo(accessToken, todo);
  };
  return (
    <>
      <div className="w-40 h-8 flex">
        <input type="text" className="input" ref={ref} />
        <button className="w-8 button" onClick={handleSubmit}>
          추가
        </button>
      </div>
    </>
  );
};

export default forwardRef(TodoInput);
