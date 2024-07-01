import "./footerComp.css"
import unpark from "../../assets/images/unpark.png";
function Footer(){
    return (
      <>
        <hr />
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h2><img src={unpark} alt="unpark"/></h2>
              </div>
              <div className="col-md-3">
                <h5><a href="#">About Us</a></h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque sed hic expedita pariatur numquam, dolorem ad vitae dolorum est.
                </p>
              </div>
              <div className="col-md-3">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                  <li><strong>Email:</strong> info@example.com</li>
                  <li><strong>Phone:</strong> +1233567890</li>
                  <li><strong>Address:</strong> 123 Street, City, Country</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Follow Us</h5>
                <ul className="list-inline footer-links">
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="https://www.svgrepo.com/show/473600/facebook.svg" alt="facebook"/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="https://www.svgrepo.com/svg/513089/youtube-168" alt="youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <p>© 2024 Un-Park. All rights reserved.</p>
              </div>
              <div className="col-md-6 text-end">
                <ul className="list-inline footer-links">
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Service</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
export default Footer;