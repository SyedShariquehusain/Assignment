import * as React from "react";
import { useState, useEffect } from "react";

import Todos from "../Todos";
import Login from "../../components/Login";
const App: React.FC = () => {
  const [token1, setToken1] = useState("");
  useEffect(() => {
    var token = localStorage.getItem("token");
    setToken1(token);
  }, []);

  return (
    <div>
      {!token1 && <Login />}
      {token1 && <Todos />}
    </div>
  );
};

export default App;
