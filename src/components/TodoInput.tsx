import { forwardRef } from "react";
import { createTodo, getTodos } from "../api/todoAPIs";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

const TodoInput = (props: any, ref: any) => {
  const handleSubmit = async () => {
    const accessToken = getAccessTokenFromLocalStorage();
    const todo = ref.current.value;
    if (accessToken && todo) {
      const response = await createTodo(accessToken, todo);
      return response === "success" ? "다시 getTodos 해주기" : "에러 메시지";
    }
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
