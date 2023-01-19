import webDesktop from "./Images/image-web-3-desktop.jpg";
import webmobile from "./Images/image-web-3-mobile.jpg";
function Hero() {
  return (
    <div className="Herowrapper container">
      <div className="hero ">
        <img className="heroImage" src={webDesktop} />
        <img className="webmob" src={webmobile} />
        <div className="HeroSplitDiv">
          <h1 className="heroh1">The Bright Future Of Web 3.0?</h1>
          <div className="hhh">
            <p>
              we dive into the next evolution of web that claims to put the
              power of the platforms back into the hands of the people, but is
              it really fufilling its promise?
            </p>
            <button className="button">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <h1 className="h1">New</h1>
        <h5>Hydrogen vs Electric Cars</h5>
        <p>Will hydrogen-fuelled cars ever catch up with EV's?</p>
        <hr></hr>
        <h5>The Down Side Of AI artistry</h5>
        <p>
          What are the possible downside effects of on-demand AI image
          generation?
        </p>
        <hr></hr>
        <h5>Is VC Funding Drying Up?</h5>
        <p>
          Private funding by VC firms is down by 50% YOY. We take a look at what
          that means
        </p>
      </div>
    </div>
  );
}

export default Hero;
