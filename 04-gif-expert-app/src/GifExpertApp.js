import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';



const GifExpertApp = () => {

    // const categories=['Carros','Barcos','Helicopteros','Trenes'];
    const [categories, setcategories] = useState(['Carros', 'Barcos', 'Helicopteros', 'Trenes']);

    // const handleAdd=()=>{
    //     const newElemento='Aviones';
    //     setcategories([...categories,newElemento]);
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((category, i) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;