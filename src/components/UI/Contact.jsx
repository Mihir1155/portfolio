import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get In Touch
        </h2>
        <div className="md:flex justify-center items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118198.49218422391!2d84.7417500504304!3d22.21339509087838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20199b4c94c2a5%3A0xb4a4e62e77879624!2sRourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1687675149903!5m2!1sen!2sin"
              className="boeder-0 w-full h-full"
              allowfullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full" action="https://formspree.io/f/mrgwzlve" method="POST">
              <div className="mb-4">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Your Name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="Message"
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <button className="w-full text-white bg-headingColor hover:bg-smallTextColor focus:outline-none text-center p-3 rounded-[5px] ease-in duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
