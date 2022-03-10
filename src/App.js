// import { Copyright } from "@material-ui/icons";
import { useContext,useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Copyright from "./components/copyright/Copright";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import { ThemeContext } from "./context";


const App = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
    
  
  return (
    <div 
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Copyright/>
      
    </div>
  );
};

export default App;