import { useCallback, useMemo, useState, memo } from "react";

// ✅ Memoized Button
const Button = memo(({ onClick, children }) => {
  console.log("🔘 Button rendered:", children);

  return (
    <button className="custom-btn" onClick={onClick}>
      {children}
    </button>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [callIncrement, setCallIncrement] = useState(0);

  // ✅ Expensive calculation memoized
  const users = useMemo(() => {
    console.log("♻️ Generating users...");
    return Array.from({ length: 5000 }, (_, i) => `User ${i + 1}`);
  }, []); // runs only once

  // ✅ Stable functions with useCallback
  const handleIncrement = useCallback(() => {
    setCallIncrement((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCallIncrement((prev) => prev - 1);
  }, []);

  return (
    <>
      <h1>Parent</h1>
      <p>Value: {callIncrement}</p>

      {/* Buttons will NOT re-render unless props change */}
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>

      <hr />
      <p>Total Users: {users.length}</p>
      <p>First User: {users[0]}</p>
    </>
  );
};

export default Parent;
