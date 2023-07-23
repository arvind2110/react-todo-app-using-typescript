import React, { useContext } from 'react';
import Message from '../Common/Message';
import Todo from './Todo';
import TodosContext from '../Context/TodosContext';

const TodoList: React.FC = () => {
    const { todos } = useContext(TodosContext);

    return(
        todos.length ?
            todos.map((todo) => {
                return <Todo key={"todo-" + todo.id} todo={todo} />
            })
        :
        <Message variant="primary" message="No records found!!!" />
    );
};

export default TodoList;