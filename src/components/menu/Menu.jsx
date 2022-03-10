import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")} >
        <ul>
            <li onClick={()=>setMenuOpen(!menuOpen)}>
                <a href='#intro'>Intro</a>
            </li> 
            <li onClick={()=>setMenuOpen(!menuOpen)}>   
                <a href='#about'>About me </a>
             </li>
             <li onClick={()=>setMenuOpen(!menuOpen)}>
                <a href='#p'>My projects</a>
            </li>
            
             <li onClick={()=>setMenuOpen(!menuOpen)}>
                <a href='#c'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
