import Link from 'next/link';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
        About Us
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Welcome to <span className="font-bold text-blue-600">Pet Care</span>, your trusted partner in ensuring the well-being and health of your beloved pets. Our website is dedicated to providing comprehensive information and top-notch services for pet care and veterinary needs.
        </p>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          At <span className="font-bold text-blue-600">Pet Care</span>, we understand that pets are more than just animals—they are family. Our team of experienced veterinarians and pet care professionals is committed to delivering exceptional care tailored to the unique needs of each pet. Whether you are looking for routine check-ups, emergency care, or guidance on pet nutrition and wellness, we are here to support you every step of the way.
        </p>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Explore our website to learn more about our services, meet our team, and find valuable resources to help you provide the best care for your furry friends. We are passionate about making a positive impact on the lives of pets and their owners, and we look forward to being a part of your pet care journey.
        </p>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-500 hover:underline text-lg font-medium">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
