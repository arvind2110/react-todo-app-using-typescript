import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import TodosContext from '../Context/TodosContext';
import useEditTodo from '../../Hooks/useEditTodo';
import useInitiateEditTodo from '../../Hooks/useInitiateEditTodo';

const TodoForm: React.FC = () => {
    const [ todo, setTodo ] = useState("");
    const { todos, setTodos, todoId, setTodoId } = useContext(TodosContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTodo(value);
    };

    const submitTodoFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (todo.trim() !== "") {
          if (todoId) {
            const { updateTodos } = useEditTodo({todoId: todoId, todo: todo, todos: todos});
            setTodos(updateTodos);
          } else {
            setTodos([...todos, { id: (todos.length + 1), todo: todo}]);
          }
        }

        setTodo("");
        setTodoId(null);
    }

    // You can use react-hook-form package or useRef hook instead of this approach
    const resetTodoForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setTodo("");
        setTodoId(null);
    }

    useInitiateEditTodo({ todoId: todoId, todos: todos, setTodo: setTodo });

    return (
        <Form onSubmit={submitTodoFormHandler} >
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Todo Item
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Enter Text"
                value={todo}
                onChange={handleChange}
              />
            </Col>
            <Col xs="auto">
              <Button variant="success" type="submit" className="mb-2">
                Submit
              </Button>
              {
                todoId ?
                  <Button variant="secondary" type="reset" className="mb-2 ms-2" onClick={resetTodoForm}>
                    Cancel
                  </Button>
                  : 
                  null
              }
            </Col>
          </Row>
        </Form>
    );
};

export default TodoForm;