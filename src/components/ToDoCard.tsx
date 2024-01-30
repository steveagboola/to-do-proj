type ToDoCardProps = {
    toDo: {
        id: number;
        task: string;
    };
};

export default function ToDoCard({ toDo }: ToDoCardProps) {
    return (
        <li className="list-group-item">{toDo.task}</li>
    );
}