import "../styles/footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Papayaya</h3>
                <p>
                  49 High Street, <br />
                  Bromley, BR1 1LE
                  <br />
                  <br />
                  <strong>Phone:</strong>
                  +44 1234 5678 90
                  <br />
                  <strong>Email:</strong>
                  info@example.com
                  <br />
                </p>

                <div className="social-links mt-3">
                  <a
                    href="https://www.facebook.com/toypapayaya/"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/papayaya.bromley/"
                    className="instagram"
                  >
                    <i className="bx bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Home</a>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Menu</a>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Events</a>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </div>

            {/* footer Links */}

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Functions</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Parties</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Events</a>
                </li>
              </ul>
            </div>

            {/* Download our apps */}
            <div className="col-lg-2 download-links">
              <h4>Download our app </h4>
              {/* <div className="download"> */}
              <a href="#">
                <img src="assets/images/app_store_badge.png" alt="app-store" />
              </a>
              <a href="#">
                <img src="assets/img/google-play.png" alt="google-play" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{""}
          <strong>
            <span>Restaurant</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#"> Justincodes.netlify.com</a>
        </div>
      </div>
    </footer>
  );
}
