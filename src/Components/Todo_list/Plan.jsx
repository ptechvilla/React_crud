import React from 'react'

const Plan = (props) => {
    return (
        <>
            <div className='container' style={{ display: "flex" }}>
                <li>{props.value}</li>
            </div>

        </>
    )
}

export default Plan;
