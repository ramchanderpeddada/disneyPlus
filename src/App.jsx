import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer
        containerId={"toast-container"}
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        transition={Slide}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
