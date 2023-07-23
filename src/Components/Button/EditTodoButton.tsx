import React, {useContext} from 'react';
import CustomButton from './CustomButton';
import TodosContext from '../Context/TodosContext';

interface IEditTodoButtonProps {
    id: number
}

const EditTodoButton: React.FC<IEditTodoButtonProps> = (props: IEditTodoButtonProps) => {
    const { id } = props;
    const { todos, setTodoId } = useContext(TodosContext);

    const editHandler = (id: number) => {
        if (todos.length > 0) {
            const todoItem = todos.find((todo) => {
                return todo.id === id;
            });

            if (todoItem) {
                setTodoId(todoItem.id);
            }
        }
    }

    return(
        <CustomButton className="float-end" title="Edit" variant="primary" onClick={() => editHandler(id)}>
            Item
        </CustomButton>
    );
};

export default EditTodoButton;