import Link from 'next/link';
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-lg md:text-xl text-gray-800 mb-8 text-center">
        We would love to hear from you! Whether you have questions about our services, need advice on pet care, or want to schedule an appointment, feel free to reach out to us using the form below.
      </p>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-200">
        <form>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
              placeholder="Share your message or question"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="mt-12 text-center text-gray-600">
        <p className="text-lg mb-4 font-semibold">Other Ways to Reach Us:</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-blue-600 text-xl" />
            <span>(+123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-600 text-xl" />
            <span>info@mypetsclinic.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLocationArrow className="text-blue-600 text-xl" />
            <span>123 Pet Street, Petville, PV 12345</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
