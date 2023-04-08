import { TodoType } from "../types";

const Todo = (props: TodoType) => {
  const { title } = props;
  return (
    <li className="flex">
      <label>
        <input type="checkbox" />
        <span>{title}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  );
};

export default Todo;
