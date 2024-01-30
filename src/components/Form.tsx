import { useState } from 'react';

type FormProps = {
    addTask: (task: string) => void;
};

export default function Form({ addTask }: FormProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="my-3">
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Add new task" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
    );
}