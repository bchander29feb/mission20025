function About({ mydata }) {
  const handleClick = () => {
    // sending data to parent
    mydata("Hello from About component!");
  };

  return (
    <div>
      <h1>About Component</h1>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default About;
