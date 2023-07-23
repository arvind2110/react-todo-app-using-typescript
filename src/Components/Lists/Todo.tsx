import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DeleteTodoButton from '../Button/DeleteTodoButton';
import EditTodoButton from '../Button/EditTodoButton';

interface ITodo {
    id: number,
    todo: string
}

interface ITodoProps {
    todo: ITodo
}

const Todo: React.FC<ITodoProps> = (props: ITodoProps) => {
    const { todo } = props;
    return(
        <Row className='mt-2'>
            <Col md="1">
                {todo.id}
            </Col>
            <Col md="8">
                {todo.todo}
            </Col>
            <Col md="3">
                <DeleteTodoButton id={todo.id}/>
                <EditTodoButton id={todo.id}/>
            </Col>
        </Row>
    );
};

export default Todo;