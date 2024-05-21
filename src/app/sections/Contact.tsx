"use client";

import { BASE_API_URL } from "../utils/constants";
import SectionTitle from "../components/SectionTitle";
import { useState, FormEvent } from "react";
import InputBox from "../components/InputBox";
import { toast } from "react-hot-toast";

import "../styles/contact.css";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${BASE_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Email sent successfully");
      setData({ name: "", email: "", subject: "", message: "" }); // clear the form
      toast.success(`Hey ${data.name}, your message has been sent!`);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Contact" subtitle="Contact Us" />
      </div>

      <div>
        <iframe
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.086215937977!2d0.013914275649341263!3d51.401470518437655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8aa6ee1c5af5d%3A0x7430c7095effb8e2!2sPapayaya!5e0!3m2!1sen!2suk!4v1711813326787!5m2!1sen!2suk"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  49 High Street, Bromley
                  <br />
                  BR1 1LE
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>0208 466 8886</p>
              </div>
            </div>
          </div>

          {/* input section */}

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={sendEmail} className="contact-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <InputBox
                    required
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="form-control"
                    placeholder="Your Name"
                    maxLength={50}
                  />
                </div>

                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <InputBox
                    required
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className="form-control"
                    placeholder="Your Email"
                    maxLength={50}
                  />
                </div>

                <div className="form-group mt-3">
                  <InputBox
                    required
                    type="text"
                    value={data.subject}
                    onChange={(e) =>
                      setData({ ...data, subject: e.target.value })
                    }
                    className="form-control"
                    placeholder="Subject"
                    maxLength={100}
                  />
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    rows={4}
                    value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                    placeholder="Message"
                    required
                    maxLength={500}
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
