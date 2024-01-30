import { useState } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import ToDoDisplay from './components/ToDoDisplay';

type ToDo = {
    id: number;
    task: string;
};

export default function App() {
    const [toDos, setToDos] = useState<ToDo[]>([]);

    const addTask = (task: string) => {
        setToDos([...toDos, { id: Date.now(), task }]);
    };

    return (
        <>
            <Nav />
            <div className="container">
                <Form addTask={addTask} />
                <ToDoDisplay toDos={toDos} />
            </div>
        </>
    );
}