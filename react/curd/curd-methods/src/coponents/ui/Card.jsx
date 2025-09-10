const Card = ({ currEle, handleDelet }) => {
  const { body, title,id } = currEle;

   
  return (
    <div
      style={{
        background: "#333",
        color: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    > 
    <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
        {id}
      </p>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
        {title}
      </p>
      <p style={{ fontSize: "14px", color: "#ddd" }}>{body}</p>
      <p> <button onClick={() =>handleDelet(id)  }> Delete </button> </p>
    </div>
  );
};

export default Card;
