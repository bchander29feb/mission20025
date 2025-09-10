import { memo, useMemo, useState } from "react";
import React from "react";


const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <p>Value: {value}</p>;
});

 function Parent() {

let usememo =  useMemo(() => ({
    name : 'bhuvan',
    age : 32

  }),[])



  const [count, setCount] = useState(0);
  return (
    <>
      <Child value="static prop" name={usememo} />
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </>
  );
}


export default Parent