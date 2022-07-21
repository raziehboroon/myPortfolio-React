import "./Contact.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ height }) => {
  return (
    <section
      className={`contact ${height && "max-height"}`}
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), URL(${process.env.PUBLIC_URL}/assets/images/contact-us.jpg) center/cover scroll no-repeat`,
      }}
    >
      <div className="contact-center">
        <div className="title">
          <h2>let's get in touch</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-container">
          <h4>
            If you are looking to get ahold of me, you can send me an email at
            <a href="mailto:razieh.boroon@gmail.com" target="noopener">
              <span>
                {" "}
                Razieh.Boroon
                <FontAwesomeIcon icon={["fas", "at"]} />
                gmail.com
              </span>
            </a>
            <br />
            <br />
            can also reach me through this number<span> +98-***-****</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Contact;
