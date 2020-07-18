import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    // const categories=['Carros','Barcos','Helicopteros','Trenes'];
    const [categories, setcategories] = useState(['Carros']);

    // const handleAdd=()=>{
    //     const newElemento='Aviones';
    //     setcategories([...categories,newElemento]);
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((category, i) =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;