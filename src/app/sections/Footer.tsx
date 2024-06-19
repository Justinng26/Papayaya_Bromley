"use client";

import { footer } from "../data/data";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { handleScrollTo } from "../../../lib/utils";
import googlePlayBadge from "../../../public/assets/images/google-play-badge.png";
import appStoreBadge from "../../../public/assets/images/app-store-badge.png";
import Image from "next/image";
import "../styles/footer.css";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h4>Papayaya</h4>
                <p>
                  49 High Street, <br />
                  Bromley, BR1 1LE
                  <br />
                  <br />
                  <strong>Phone: </strong>
                  +44 1234 5678 90
                  <br />
                  <strong>Email: </strong>
                  info@papayaya.com
                  <br />
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {footer.map((item) => (
                  <li key={item.id}>
                    <i className="bx bx-chevron-right"></i>
                    <a
                      onClick={() =>
                        handleScrollTo(item.target, pathname, router)
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
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
                  <Image
                    width={175}
                    height={150}
                    alt="Download on the App Store"
                    src={appStoreBadge}
                  />
                </a>

                <a href="https://play.google.com/store/apps/details?id=uk.co.my_orders.papayaya&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                  <Image
                    width={175}
                    height={150}
                    className="google-play-badge"
                    alt="Get it on Google Play"
                    src={googlePlayBadge}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="foot">
          <div className="copyright">
            &copy;
            <strong>2023 My Orders Ltd.</strong>
          </div>
          <div className="credits">
            Designed by <a href="#"> Justincodes.netlify.com</a>
          </div>

          <div className="privacy-policy">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
