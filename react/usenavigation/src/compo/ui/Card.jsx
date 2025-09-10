const Card = ({currData}) => {


  const { userId, id, title, completed } = currData;


    return (
        <>

            <li> {userId} </li>
             <li> {title} </li>

        </>
    )


}

export default Card;