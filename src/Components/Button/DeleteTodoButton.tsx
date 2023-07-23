import React, {useContext} from 'react';
import CustomButton from './CustomButton';
import TodosContext from '../Context/TodosContext';

interface IDeleteTodoButtonProps {
    id: number
}

const DeleteTodoButton: React.FC<IDeleteTodoButtonProps> = (props: IDeleteTodoButtonProps) => {
    const { id } = props;
    const { todos, setTodos } = useContext(TodosContext);

    const deleteHandler = (id: number) => {
        if (todos.length > 0) {
            const proceed = confirm("Do you want to delete this todo task?");
            if (proceed) {
                const filteredTodos = todos.filter((todo) => {
                    return todo.id !== id;
                });
                setTodos(filteredTodos);
            }
        }
    }

    return(
        <CustomButton className="float-end ms-2" title="Delete" variant="danger" onClick={() => deleteHandler(id)}>
            Item
        </CustomButton>
    );
};

export default DeleteTodoButton;