import { useRef } from "react";

const Ref = () => {
  const username = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username.current.value);
    console.log("Password:", password.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputComp label="Username" ref={username} type="text" />
        <InputComp label="Password" ref={password} type="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

// ✅ In React 19, you can directly accept `ref` as a prop
const InputComp = ({ label, ref, type }) => {
    
    console.log("Child rerender")

  return (
    <div>
      <label>
        {label}: <input type={type} ref={ref} />
      </label>
      <br />
    </div>
  );
};

export default Ref;
