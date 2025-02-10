import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="shadow-xl p-10">
      <div className="main">
        <p className="text-3xl font-bold">Welcome to JayJay Login</p>

        <div className="grid gap-4">
          <div className="grid gap-2 mt-10">
            <label className="text-left text-blue-500">Username</label>
            <input
              type="text"
              id="first"
              name="first"
              placeholder="Enter your Username"
              className="p-2 border-2 border-solid border-black rounded-lg hover:border-blue-500"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-left text-blue-500">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="p-2 border-2 border-solid border-black rounded-lg hover:border-blue-500"
              required
            />
          </div>

          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-700  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 active:bg-blue-900"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
