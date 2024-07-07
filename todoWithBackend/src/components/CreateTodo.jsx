import { useState } from "react";

export function CreateTodo() {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    return (
        <>
            <div style={{ 
                padding: '20px', 
                maxWidth: '400px', 
                margin: 'auto', 
                backgroundColor: '#f0f0f0', 
                borderRadius: '8px', 
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
            }}>
                <input 
                    style={{ 
                        padding: '10px', 
                        marginBottom: '10px', 
                        width: '100%', 
                        boxSizing: 'border-box', 
                        borderRadius: '4px', 
                        border: '1px solid #ccc' 
                    }} 
                    type="text" 
                    placeholder="Title" 
                    onChange={function(e){
                        const value = e.target.value;
                        setTitle(value);
                    }}
                /> 
                <br />
                <input 
                    style={{ 
                        padding: '10px', 
                        marginBottom: '10px', 
                        width: '100%', 
                        boxSizing: 'border-box', 
                        borderRadius: '4px', 
                        border: '1px solid #ccc' 
                    }} 
                    type="text" 
                    placeholder="Description" 
                    onChange={function(e){
                        const value = e.target.value;
                        setDescription(value);
                    }}
                /> 
                <br />
                <button 
                    style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#007bff', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer' 
                    }} 
                    onClick={()=>{
                        fetch("http://localhost:3000/todo", {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description
                            }),
                            headers:{
                                "Content-Type": "application/json"
                            }
                        })
                            .then(async function(res){
                                const json = await res.json();
                            })
                    }}
                >
                    Create Todo
                </button>
            </div>
        </>
    );
}

