import React, { Fragment } from 'react'

export const CounterWithCustomHook = () => {
    return (
        <Fragment>
            <h1>Counter with Hook:{0}</h1>
            <hr/>
            <button className="btn btn-primary" 
            onClick="">
                +1
            </button>
            <button className="btn btn-primary" 
            onClick="">
                -1
            </button>
        </Fragment>
    )
}
