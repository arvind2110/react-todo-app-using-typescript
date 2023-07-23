import { useEffect } from "react";

interface IUseInitiateEditTodo {
    todoId: number,
    todos: any[],
    setTodo: (todo: string) => void
}

const useInitiateEditTodo = ((params: IUseInitiateEditTodo) => {
    const { todoId, todos, setTodo } = params;

    useEffect(() => {
        if (todoId) {
          const targetTodoItem = todos.find((todoItem) => {
            return todoItem.id === todoId
          });

          if (targetTodoItem) {
            setTodo(targetTodoItem.todo);
          }
        }
    }, [todoId]);
});

export default useInitiateEditTodo;