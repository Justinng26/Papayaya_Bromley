import "../styles/footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Restaurant</h3>
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
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>

                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>

                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>

                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>

                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
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

            {/* newsletter?? */}
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
