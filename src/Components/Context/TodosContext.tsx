import React from 'react';

interface MyContextData {
    todoId: number,
    setTodoId: (id: number) => void,
    todos: any[],
    setTodos: (todos: any[]) => void
}

// Create the initial context data
const initialContextData: MyContextData = {
    todoId: null,
    setTodoId: (id: number) => null,
    todos: [],
    setTodos: (todos: any[]) => []
};

const TodosContext = React.createContext<MyContextData>(initialContextData);

export default TodosContext;