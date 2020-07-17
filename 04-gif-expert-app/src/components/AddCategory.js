import React, { Fragment,useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setinputValue] = useState('hola.');
    const handleInputChange=(e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Enter precionado')
    }
    
    return (
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
    )
}
