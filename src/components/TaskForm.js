import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function TaskForm(props) {

    const [task, setTask] = useState({title: '', description: ''});

    const addNewTask = (e) => {
        e.preventDefault();

        const newTask = {
            ...task, id: Date.now()
        }

        props.create(newTask);
        setTask({title: '', description: ''});
    }
    return (
        <Form onSubmit={addNewTask}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Enter task here..."
                    aria-label="Enter task here..."
                    value={task.title}
                    onChange={(e) => {
                        setTask({...task, title: e.target.value})
                    }}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Enter task here..."
                    aria-label="Enter task here..."
                    as='textarea'
                    rows={4}
                    value={task.description}
                    onChange={(e) => {
                        setTask({...task, description: e.target.value})
                    }}
                />
            </InputGroup>



            <InputGroup className='mb-3 justify-content-end'>
                <Button variant="primary"
                        id="button-add-task-1"
                        onClick={addNewTask}>
                    Add new
                </Button>
            </InputGroup>
        </Form>
    );
}

export default TaskForm;