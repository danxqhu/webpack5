import React, { Suspense, lazy } from "react";
import { Link, Routes, Route } from "react-router-dom";
// import Home from "./page/Home";
// import About from "./page/About";

// 路由懒加载
const Home = lazy(() => import(/* webpackChunkName: 'home' */ "./page/Home"));
const About = lazy(() =>
  import(/* webpackChunkName: 'about' */ "./page/About")
);

function App() {
  return (
    <div>
      <h1>App</h1>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Suspense>
      {/* <About /> */}
    </div>
  );
}

export default App;
