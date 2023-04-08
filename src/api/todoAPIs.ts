import { BASE_URL } from "../constants/globalVariables";
import { TodoType } from "../types";

export const getTodos = async (accessToken: any) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response);
};

export const createTodo = (accessToken: any, todo: TodoType) => {
  // 이미 동일한 내용의 Todo가 있으면 에러 메세지 출력하기
  fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo: todo }),
  }).then(() => {
    console.log("success");
  });
};

export const updateTodo = (todo: TodoType) => {
  //
};

export const deleteTodo = (todo: TodoType) => {
  //
};
