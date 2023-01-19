import retro from "./Images/image-retro-pcs.jpg";
import gaming from "./Images/image-gaming-growth.jpg";
import laptop from "./Images/image-top-laptops.jpg";
function Footer() {
  return (
    <div className="footer container">
      <div className="footerContent">
        <img src={retro} />
        <div>
          <h2>01</h2>
          <h4>Reviving Retro PC's</h4>
          <p>What happens when old PC's are given modern upgrade?</p>
        </div>
      </div>
      <div className="footerContent">
        <img src={laptop} />
        <div>
          <h2>02</h2>
          <h4>Top 10 Laptops Of 2022</h4>
          <p>Our best picks for various needs and budget</p>
        </div>
      </div>
      <div className="footerContent">
        <img src={gaming} />
        <div>
          <h2>03</h2>
          <h4>The growth of gaming</h4>
          <p>How the pandemic has sparked fresh opportunities</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
