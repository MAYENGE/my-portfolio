import "./topbar.scss";
import "./topbar.css"
import me from "../../images/me.jpeg";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
      
        <div className="left">
        
        <a href="#intro" className="logo">
            <img src={me} alt="mike" className="me" /><b>Simba</b>
          </a>
          
          <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          
        </a>
          <div className="itemContainer">
           <a href="#intro" className="logo">
            <span>Home</span>
            </a>
            </div>
            <div className="itemContainer">
           <a href="#about" className="logo">
            <span>About</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#p" className="logo">
            <span>Projects</span>
            </a>
          </div>
          
          <div className="itemContainer">
            <a href="#c" className="logo">
            <span>Contact</span>
            </a>
            
          </div>
          
        </div>
        <div className="right">
         <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
         </div>
        </div>
      </div>
    </div>
  );
}