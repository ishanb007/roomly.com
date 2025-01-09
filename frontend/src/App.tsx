import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import AddHotel from "./pages/AddHotel";
import SignIn from "./pages/SignIn";
import MyHotels from "./pages/MyHotels";
import { useAppContext } from "./contexts/AppContext";
import EditHotel from "./pages/EditHotel";

function App() {
  const {isLoggedIn} = useAppContext();
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

        {isLoggedIn && <>
          <Route path="/add-hotel" element={
            <Layout>
              <AddHotel />
            </Layout>
          } />

          <Route path="/my-hotels" element={
            <Layout>
              <MyHotels />
            </Layout>
          } />

          <Route path="/edit-hotel/:hotelId" element={
            <Layout>
              <EditHotel />
            </Layout>
          } />
        </>}
      </Routes>
    </Router>
  );
};

export default App;
