import { useEffect, useState } from 'react'
import accordionapi from '../api/accordata'
import Card from './ui/Card';

const Accordion = () => {
const [data, setData] = useState([]);
const [isActivated, setIsactivated] = useState(false)

useEffect(() => {
    setData(accordionapi)
},[]);

const toggleslide = (id) => {
    setIsactivated((previd) => (previd === id ? false : id))
}


    return  (
            <>
             <div className="container">
                {data.map((currElem)=> {
                    return <Card 
                    isActivated ={isActivated === currElem.id}
                    key={currElem.id} 
                    currElem={currElem}
                    onToggle = {() => toggleslide(currElem.id)}
                    />

                })}
            </div>
            </>
    )
    



}

export default Accordion