import { useEffect, useRef } from "react";

const Inputfocus = () => {
  const firstname = useRef();
  const lastname = useRef();

  // Focus first input on component mount
  useEffect(() => {
    firstname.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = firstname.current.value;
    const lname = lastname.current.value;

    console.log(`Data is: ${fname} ${lname}`);

    // Clear inputs
    firstname.current.value = "";
    lastname.current.value = "";

    // Refocus to first input after submit
    firstname.current.focus();
  };

  // When pressing Enter in firstname → move focus to lastname
  const handleFirstNameKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      lastname.current.focus();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={firstname}
          type="text"
          placeholder="Enter Your first name"
          onKeyDown={handleFirstNameKey}
        />
        <input
          ref={lastname}
          type="text"
          placeholder="Enter Your last name"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Inputfocus;
