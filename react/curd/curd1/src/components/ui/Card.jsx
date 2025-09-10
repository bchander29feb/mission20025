import { useState } from "react";

const Card = ({currEl,handleDelete}) => {
    const {title,body,id} = currEl
 
  return (
    <>
    <div className="container">
      <div className="cards">
        {/* <p>{id} </p> */}
        <p>{title} </p>
        <p>{body} </p>
        <div className="actios" style={{display:'flex'}}>
        <button type="submit"> Edit </button>
        <button 
        onClick={() => handleDelete(id)}
        style={{justifyContent: 'flex-end', display:'flex'}} type="submit"> Delete </button>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Card;
