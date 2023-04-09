import { BASE_URL } from "../constants/globalVariables";
import { TodoType } from "../types";

export const getTodos = async (accessToken: string) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.ok ? response.json() : "fail";
};

export const createTodo = async (accessToken: string, todo: TodoType) => {
  // 이미 동일한 내용의 Todo가 있으면 에러 메세지 출력하기
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo: todo }),
  });
  return response.ok ? "success" : "fail";
};

export const updateTodo = async (accessToken: string, todo: TodoType) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo: todo }),
  });
  return response.ok ? "success" : "fail";
};

export const deleteTodo = (todo: TodoType) => {
  //
};
