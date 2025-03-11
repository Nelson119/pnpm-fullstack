import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
// import { Routes, Route, Link, useRoutes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import "./App.css";
import "virtual:uno.css";

import useHelloStore from "./store/useHelloStore";
import { Suspense, useEffect, useState } from "react";
import routes from "./routes";

function App() {
  const routing = useRoutes(routes);
  const { hello, loading, error, fetchHello } = useHelloStore();

  const [count, setCount] = useState(0);
  useEffect(() => {
    fetchHello();
  }, [fetchHello]);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {loading && <p>載入中...</p>}
        {error && <p style={{ color: "red" }}>錯誤: {error}</p>}
        {!loading && !error && <h1>{hello?.message}</h1>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Suspense fallback={<div>載入中...</div>}>{routing}</Suspense>
    </>
  );
}

export default App;
