interface IUseEditTodo {
    todoId: number,
    todo: string,
    todos: any[]
}

const useEditTodo = (params: IUseEditTodo): {updateTodos : any[]} => {
    const { todoId, todo, todos } = params;

    const targetTodoItem = todos.find((todoItem) => {
        return todoItem.id === todoId
    });
    
    const updatedTodoItem = {...targetTodoItem, todo: todo};

    const filteredTodos = todos.filter((todoItem) => {
        return todoItem.id !== todoId;
    });

    const updateTodos = [...filteredTodos, updatedTodoItem];

    updateTodos.sort(function(todoA, todoB){ 
        return todoA.id - todoB.id;
    });

    return { updateTodos };
}

export default useEditTodo;