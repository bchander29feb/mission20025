import { useEffect, useState } from "react";
import Card from "./ui/Card";
import { useNavigation } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]); // ✅ fix here
  const [loader, setLoader] = useState(true);


  const api = "https://jsonplaceholder.typicode.com/todos";


  const apidaa = async () => {
    try {
      let res = await fetch(api);
      if (!res.ok) {
        throw new Error(`Error message is : ${res.status}`);
      }
      let resData = await res.json();
      setLoader(false)
      setData(resData);
    } catch (error) {
      console.log(error.message);
       setLoader(false)
    }
  };

  useEffect(() => {
    apidaa();
  }, []);

  return (
    <>
      { loader ? 'Loading ....' : 
      
      <>
      <h1>Home</h1>
      <ul>
        {data.map((currData) => (
          <Card currData={currData} key={currData.id} />
        ))}
      </ul>
      </>
      
      }
    </>
  );
};

export default Home;
