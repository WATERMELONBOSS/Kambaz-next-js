"use client";
import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map((t) => (t.id === todo.id ? { ...t, editing: true } : t));
    setTodos(updatedTodos);
  };
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || error.message || String(error));
    }
  };

  const handleTitleChangeLocal = (id: any, newTitle: string) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));
  };

  const finishEdit = async (todo: any) => {
    const current = todos.find((t) => t.id === todo.id) || todo;
    const updated = { ...current, editing: false };
    try {
      await client.updateTodo(updated);
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)));
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || error.message || String(error));
    }
  };
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h4>
        Todos
        <FaPlusCircle onClick={createNewTodo} className="text-success float-end fs-3" id="wd-create-todo" />
        <FaPlusCircle onClick={postNewTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
      </h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <FaTrash onClick={() => removeTodo(todo)} className="text-danger float-end mt-1" id="wd-remove-todo" />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
              id="wd-delete-todo"
            />
            <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />
            <input
              type="checkbox"
              checked={!!todo.completed}
              className="form-check-input me-2 float-start"
              onChange={(e) => {
                const updated = { ...todo, completed: e.target.checked };
                setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)));
                updateTodo(updated);
              }}
            />
            {!todo.editing ? (
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</span>
            ) : (
              <FormControl
                className="w-50 float-start"
                value={todo.title}
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    finishEdit(todo);
                  }
                }}
                onChange={(e: any) => handleTitleChangeLocal(todo.id, e.target.value)}
              />
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
