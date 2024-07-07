import React from 'react';

export function Todos({ todos }) {
    return (
        <div style={{ margin: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            {todos.map(todo => (
                <div key={todo._id} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ fontSize: '20px', marginBottom: '5px' }}>{todo.title}</h1>
                    <h2 style={{ fontSize: '16px', color: '#666' }}>{todo.description}</h2>
                    <button
                        onClick={() => {
                            const id = todo._id;
                            fetch("http://localhost:3000/completed", {
                                method: "PUT",
                                body: JSON.stringify({
                                    id: id
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                                .then(async function (res) {
                                    alert("Updated");
                                })
                        }}
                        style={{
                            padding: '8px 12px',
                            backgroundColor: todo.completed ? '#28a745' : '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {todo.completed ? "Completed" : "Mark as done"}
                    </button>
                </div>
            ))}
        </div>
    );
}
