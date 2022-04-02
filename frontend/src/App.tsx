import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

type fetchData = {
  message: string;
};

function App() {
  const [message, setMessage] = useState("初期値");
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
