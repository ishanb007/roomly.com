import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><>Hi</></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
