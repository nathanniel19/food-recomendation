import React from 'react'


const pStyle = {
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "300",
    marginTop: "20px"
}

const Description = () => {
    return (
        <div style = {pStyle}>
            <p>This is Random Food Recomendation from South East Asia Country</p>
            <p>How to use:</p>
            <p>1. Select the country you want</p>
            <p>2. Press the "Get Food Recomendation!!!" button</p>
            <p>3. The food will we display below the button</p>
        </div>
    )
}

export default Description
