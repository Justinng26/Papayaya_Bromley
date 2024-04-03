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
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </div>

            {/* follow and review us */}

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow and review us</h4>
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

            {/* Download our apps */}
            <div className="col-lg-2 download-links">
              <h4>Download our app </h4>
              <div className="download">
                <a href="https://apps.apple.com/gb/app/papayaya/id1447042589?itsct=apps_box_badge&amp;itscg=30200">
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1545004800"
                    alt="Download on the App Store"
                  />
                </a>

                <a href="https://play.google.com/store/apps/details?id=uk.co.my_orders.papayaya&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                  <img
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy;
          <strong>2023 My Orders Ltd.</strong>
        </div>
        <div className="credits">
          Designed by <a href="#"> Justincodes.netlify.com</a>
        </div>
      </div>
    </footer>
  );
}