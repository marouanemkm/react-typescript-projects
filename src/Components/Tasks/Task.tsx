import React from 'react'

interface TaskProps {
    text: string;
    taskId: number;
    setTasks: React.Dispatch<React.SetStateAction<string[]>>
}

export const Task = ({text, taskId, setTasks} : TaskProps) => {

    const handleClick= () => {
        setTasks((o) => {
            const stateUpdated = [...o]
            stateUpdated.splice(taskId, 1)
            return stateUpdated
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <h3>{text}</h3>
            <button onClick={handleClick}> x </button>
        </div>
    )
}