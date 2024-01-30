import ToDoCard from './ToDoCard';

type ToDoDisplayProps = {
    toDos: {
        id: number;
        task: string;
    }[];
};

export default function ToDoDisplay({ toDos }: ToDoDisplayProps) {
    return (
        <ul className="list-group">
            {toDos.map((toDo) => <ToDoCard key={toDo.id} toDo={toDo} />)}
        </ul>
    );
}