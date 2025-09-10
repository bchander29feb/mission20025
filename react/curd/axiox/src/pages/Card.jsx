// Card.jsx
const Card = ({ currEle }) => {
   const {Poster,Title,Year,Type} = currEle 
   
//    console.log('card movie data is:', moviedata)

  return (
    <div 
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        width: "220px",
        textAlign: "center",
        background: "#fafafa",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
        <img 
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/200x300"} 
        alt={Title} 
        style={{ width: "200px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
        />

      <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{Title}</h2>
      <p style={{ margin: "5px 0" }}>Year: {Year}</p>
      <p style={{ fontWeight: "bold" }}>Type: {Type}</p>
    </div>
  );
};

export default Card;
