import { useCallback, useEffect, useReducer, useState } from "react";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";
import { BASE_URL } from "../constants/globalVariables";

type State = {
  loading: boolean;
  data: any;
  error: any;
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const useFetch = (callback: any) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state, fetchData];
};
