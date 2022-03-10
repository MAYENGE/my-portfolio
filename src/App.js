import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Topbar from "./components/topbar/Topbar";
import Copyright from "./components/copyright/Copyright";

import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import './app.scss'


const App = () => {
 
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="app"
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
