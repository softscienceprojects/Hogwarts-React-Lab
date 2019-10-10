import React from 'react'

const Options = props => {

    return(
        <div>
            <button onClick={props.handleGreased}>Show Greased Hogs</button>
            <button onClick={props.handleAZ}>Sort A-Z Name</button>
            <button onClick={props.handleWeight}>Sort 0+ Weight</button>
        </div>
    )
}

export default Options