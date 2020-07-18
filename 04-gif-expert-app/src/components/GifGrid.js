// import React, { useState, useEffect, Fragment } from 'react'
import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {


    // const [images, setimages] = useState([]);

    const { data: images, loading } = useFetchGifs(category);

    // getGifs();

    return (
        <Fragment>
            <h3 className=' animate__animated animate__backInDown'>{category}</h3>
            {loading && <p className=' animate__animated animate__flash'>'Cargando...'</p>}
            <div className='card-grid'>
                {
                    images.map(img =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </Fragment>
    )
}
