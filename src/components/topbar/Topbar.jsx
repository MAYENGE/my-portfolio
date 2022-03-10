import "./topbar.scss";
import "./topbar.css"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
      
        <div className="left">
        
          
          simba
          
          <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
          <div className="itemContainer">
           <a href="#about" className="logo">
            <span>About me</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#p" className="logo">
            <span>My projects</span>
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