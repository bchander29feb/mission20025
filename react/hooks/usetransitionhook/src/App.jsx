import React, { useState, useTransition } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false); // track async task

  const handleTask = () => {
    setLoading(true); // start loading

    // simulate async task
    const taskPromise = new Promise((resolve, reject) => {
      let task = true;
      setTimeout(() => {
        task ? resolve("Task done ✅") : reject("Mission failed ❌");
      }, 2000);
    });

    startTransition(() => {
      taskPromise
        .then((result) => setMessage(result))
        .catch((error) => setMessage(error))
        .finally(() => setLoading(false)); // stop loading
    });
  };

  return (
    <div>
      <button onClick={handleTask} disabled={loading}>
        {loading ? "Processing..." : "Run Task"}
      </button>

      <p>{message}</p>
      {loading && <p style={{ color: "orange" }}>Pending… Please wait!</p>}
    </div>
  );
}

export default App;
