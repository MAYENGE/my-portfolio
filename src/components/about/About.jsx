import "./about.css";
import Award from "../../images/award.png";
import me from "../../images/me.jpeg"
const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        
        </p>
        <p className="a-desc">
        I liked computer games as a kid, and wanted to make my own. So I decided to take a 
        few computer science classes. Once I began I realized writing user friendly web 
        applications was what I like the most. I loved the challenge of it.
         One of my shining qualities is keeping track of many details and
          making few mistakes. As well as being proficient in
           HTML, CSS,Javascript, React JS, Python, and C just to name a few.
            I want to do this sort of work moving forward, especially
             as long as I get to work on something lots of people will use!
           
        </p>
         <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              {/* Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit. */}
            </p>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default About;