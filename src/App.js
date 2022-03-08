import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import './app.css'

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
<<<<<<< HEAD
      <div className="right">
       <p>Copyright &copy;2022,<a  href="mayengemichael@gmail.com" target="_blank" rel="noreferrer"><span>Mchael Simba</span></a> </p>
=======
      <div>
       
          <p>copy right &copy;2022, the <a href="http://simbas.com">simbas.com</p>
      
>>>>>>> e6383744bd37060efbf687ac2331e87a98e92651
      </div>
    </div>
  );
};

export default App;
