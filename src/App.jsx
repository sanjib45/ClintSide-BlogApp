import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className=" bg-slate-600 min-h-screen flex flex-col">
          <Navbar/>
        <div className=" flex-grow">
          <Outlet />
        </div>
        <footer className="mt-auto"><Footer/></footer>
      </div>
    </>
  );
}

export default App;
