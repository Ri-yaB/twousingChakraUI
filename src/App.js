import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import login from "./components/login";
import signup from "./components/signup";
function App(){

  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<videos />} />
        <Route path='/Upload' element={<Upload />} />
        <Route path='/login' element={<login />} />
        <Route path='/signup' element={<signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;