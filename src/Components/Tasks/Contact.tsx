import React, { useState, useEffect } from 'react'
import { Task } from './Task';

export const Contact = () => {
    
    const [tasks, setTasks] = useState<string[]>([]);
    const [inputTask, setInputTask] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const tasksUpdate: string[] = [...tasks]
        tasksUpdate.push(inputTask)
        setTasks(tasksUpdate)
    }

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Nom de la tâche : </label>
                <input type="text" name='task' onChange={(e) => setInputTask(e.target.value)} value={inputTask} />
                <button>Ajouter</button>
            </form>

            {
                tasks.map((task, index) => (
                    <Task key={index} text={task} taskId={index} setTasks={setTasks} />
                ))
            }
        </div>
    )
}