import { useState } from "react";

const Card = ({currElem,onToggle,isActivated}) => {
    const {question,answer,id} = currElem;




    return (
            <>

            <div className="card-item">
                <div>
                <button onClick={onToggle}> {isActivated ? "Close": 'Show'} </button>
                <p className="question">{question} </p>
                {isActivated &&  <p className="answer">{answer} </p> } 
                </div>

            </div>

            </>
    )

}

export default Card ;