import logo from "./logo.svg";
import "./App.css";
import { MainRoutes } from "./pages/MainRoutes";
import { Navbar } from "./components/Navbar";
import { ImageSlider } from "./components/ImageSlider";
import { StudentLoginSignup } from "./pages/StudentLoginSignup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      {/* <ImageSlider /> */}
      {/* <StudentLoginSignup /> */}
    </div>
  );
}

export default App;
