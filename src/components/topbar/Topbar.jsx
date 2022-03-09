import "./topbar.scss";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            simba
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
          {/* <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
}