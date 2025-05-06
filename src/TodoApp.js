import react,{useState} from 'react'

function TodoApp(){
    const [title, setTitle]= useState('');
    const [todos, setTodos]= useState([]);
    const [error, setError]= useState('');

    const handleAdd =() =>{
        const trimmed=title.trim();
        if(trimmed=== ''){
            setError('Empty Task cannot be added');
            return;
        }
        setTodos([...todos,trimmed]);
        setTitle('');
        setError('');

    }

    return(
        <div>
            <h1>To Do List</h1>
            <input type="text" value={title} placeholder="enter" onChange={e=>setTitle(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            {error && <p>{error}</p>}
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo}</li>

                ))}
            </ul>
        </div>
    );
}
export default TodoApp;