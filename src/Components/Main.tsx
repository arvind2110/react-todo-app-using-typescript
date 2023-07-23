import React, { useState } from 'react';
import TodoForm from './Forms/TodoForm';
import TodoList from './Lists/TodoList';
import { Col, Row } from 'react-bootstrap';
import TodosContext from './Context/TodosContext';

const Main: React.FC = () => {
    const [todoId, setTodoId] = useState<number>(null);
    const [todos, setTodos] = useState<any[]>([]);

    return(
        <React.Fragment>
            <TodosContext.Provider value={{todos: todos, setTodos: setTodos, todoId: todoId, setTodoId: setTodoId}}>
                <Row className='mt-2'>
                    <Col>
                        <TodoForm />
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <TodoList />
                    </Col>
                </Row>
            </TodosContext.Provider>
        </React.Fragment>
    );
};

export default Main;