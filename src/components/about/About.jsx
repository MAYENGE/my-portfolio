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
        I am a self starter who exhibits wonderful qualities
         that shine well at the work place.
        </p>
        <p className="a-desc">
          I'm michael simba - a software developer, enthusiastic about 
          learning new ways of having things done as well as passionate about
           writting cleane and readable code that makes sense both to me and others 
           and therefore resulting in good user experience. it always very compassinate for me to talk about code as well as 
           working with other developers.
           
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