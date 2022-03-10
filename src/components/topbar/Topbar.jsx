import "./topbar.scss";
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          <h5>simba</h5>
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
         
        </div>
      </div>
    </div>
  );
}