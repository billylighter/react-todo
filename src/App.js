import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BsFillTrashFill} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from "react";
import TaskForm from "./components/TaskForm";


function App() {

    const [todos, setTodos] = useState([]);

    const addNewTask = (newPost) => {
        setTodos([...todos, newPost]);
    }

    const removeTask = (task) => {
        setTodos(todos.filter(t => t.id !== task.id));
    }

    return (
        <>
            <Container className='mt-5'>

                <Row>
                    <Col className='col-md-10 mx-auto'>

                        <div className="row">

                            <Col className='col-12'>
                                <h1 className='text-center mb-4'>
                                    Tasks
                                </h1>
                            </Col>

                            <Col className='col-md-6'>

                                {todos?.length > 0 ? (
                                    <ListGroup className=''>

                                        {todos.map((todo, index) => (
                                            <ListGroup.Item as="li" key={todo.id} className='py-3 ps-3'>
                                                <div className=''>
                                                    <div className='mb-2'>
                                                        <strong>
                                                            {todo.title}
                                                        </strong>
                                                    </div>
                                                    <div className='pb-3'>
                                                        {todo.description}
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <Button variant="danger"
                                                            onClick={() => {
                                                        removeTask(todo)
                                                    }}>
                                                        <BsFillTrashFill/>
                                                    </Button>
                                                </div>
                                            </ListGroup.Item>
                                        ))}

                                    </ListGroup>
                                ) : (
                                    <>
                                        <Alert variant="warning" style={{'minHeight': '164px'}}>
                                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                                            <p>
                                                Aww yeah...
                                            </p>
                                            <hr/>
                                            <p className="mb-0">
                                                This is empty now.
                                            </p>
                                        </Alert>
                                    </>
                                )}

                            </Col>

                            <Col className='col-md-6'>

                                <TaskForm create={addNewTask}/>

                            </Col>

                        </div>

                    </Col>
                </Row>

            </Container>

        </>
    );
}

export default App;
