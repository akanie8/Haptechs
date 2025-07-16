import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="py-16 bg-body text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <p className="text-white-500 mb-10 max-w-xl mx-auto">
        We'd love to hear from you! Whether you have a question about features,
          pricing, need a demo, or anything else, our team is ready to answer all your
          questions.
        </p>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#1e1e1e] text-white placeholder:text-gray-400 outline-none focus:ring-2 ring-[#b936f5]"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-[#1e1e1e] text-white placeholder:text-gray-400 outline-none focus:ring-2 ring-[#b936f5]"
              required
            />
          </div>
          <div>
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded bg-[#1e1e1e] text-white placeholder:text-gray-400 outline-none focus:ring-2 ring-[#b936f5]"
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-full lg:w-auto transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
