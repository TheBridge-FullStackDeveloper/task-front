import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const API_URL = "http://localhost:8080/tasks";

const initialState = {
  tasks: [],
  task: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTasks = async () => {
    const res = await axios.get(API_URL);
    const action = {
      type: "GET_TASKS",
      payload: res.data,
    };
    dispatch(action);
  };

  const deleteTask = async (id) => {
    const res = await axios.delete(API_URL + "/id/" + id);
    // getTasks()
    console.log("res data", res.data);
    dispatch({
      type: "DELETE_TASK",
      payload: res.data.task,
    });
  };

  const addTask = async (task) => {
    try {
      const res = await axios.post(API_URL, task);
      dispatch({
        type: "ADD_TASK",
        payload: res.data.task,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getTaskById = async (_id) => {
    const res = await axios.get(API_URL + "/id/" + _id);
    dispatch({
      type: "GET_TASK_BY_ID",
      payload: res.data,
    });
  };

  const updateTaskById = async(_id,task) =>{
    await axios.put(API_URL+"/id/"+_id,task)
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        getTasks,
        deleteTask,
        addTask,
        getTaskById,
        updateTaskById
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
