"use client";

import SectionTitle from "../components/SectionTitle";
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import InputBox from "../components/InputBox";
import "../styles/contact.css";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

export default function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values } = state;

  // this function is used to handle the onBlur event. It destructures the target from the event object and sets the touched state to true.
  const onBlur = ({ target }: any) =>
    setTouched((prev: any) => ({ ...prev, [target.name]: true }));

  // this function is used to handle the onChange event. It destructures the target from the event object and sets the state to the new value.
  const handleChange = ({ target }: any) =>
    setState((prev: any) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

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

              {/* <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Tuesday-Sunday:
                  <br />
                  11:30 AM - 14:30 PM
                  <br />
                  17:00 PM - 22:00 PM
                  <br />
                  Monday: Closed
                </p>
              </div> */}

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
            <FormControl isRequired isInvalid={touched.name && !values.name}>
              <FormLabel>Name</FormLabel>
              <InputBox
                type="text"
                name="name"
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Name"
                onBlur={onBlur}
              />
              <FormErrorMessage>Please enter your name</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.email && !values.email}>
              <FormLabel>Email</FormLabel>
              <InputBox
                type="email"
                name="email"
                errorBorderColor="red.300"
                value={values.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Email"
                onBlur={onBlur}
              />
              <FormErrorMessage>Please enter your email</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={touched.subject && !values.subject}
            >
              <FormLabel>Subject</FormLabel>
              <InputBox
                type="text"
                name="subject"
                errorBorderColor="red.300"
                value={values.subject}
                onChange={handleChange}
                className="form-control"
                placeholder="Subject"
                onBlur={onBlur}
              />
              <FormErrorMessage>Please enter the subject</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={touched.message && !values.message}
            >
              <FormLabel>Message</FormLabel>
              <Textarea
                // type="text"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Subject"
                onBlur={onBlur}
              />
              <FormErrorMessage>Please enter your message</FormErrorMessage>
            </FormControl>

            {/* <form role="form" className="contact-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <InputBox
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <InputBox
                    type="email"
                    className="form-control"
                    name="email"
                    //  id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <InputBox
                    type="text"
                    className="form-control"
                    name="subject"
                    // id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={8}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
