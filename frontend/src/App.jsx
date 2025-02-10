import { Routes, Route } from "react-router-dom";

export const Home = () => {
  return <div>Home</div>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
