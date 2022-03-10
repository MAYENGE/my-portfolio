// import { Copyright } from "@material-ui/icons";
import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Copyright from "./components/copyright/Copyright";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Topbar from "./components/topbar/Topbar";
import { ThemeContext } from "./context";


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
      <Topbar/>
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