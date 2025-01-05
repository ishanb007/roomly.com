import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" 
               element={<Layout><>Hi</></Layout>} 
        />
        <Route path="/register" 
               element={<Layout><Register /></Layout>} 
        />

        <Route path="/Sign-in" 
               element={<Layout><SignIn /></Layout>} 
        />
      </Routes>
    </Router>
  );
};

export default App;
