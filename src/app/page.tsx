import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Pet Care</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        This website is dedicated to providing information and services for pet care and veterinary needs. 
        Explore our pages to learn more about how we can help your furry friends.
      </p>
      
      {/* Main Image */}
      <div className="mb-8">
        <Image
          src="/images/pett.jpg"
          alt="Pet Care"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Services and Works */}
      <div className="w-full max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/pet1.jpg"
              alt="Service 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Veterinary Consultations</h3>
              <p className="text-gray-600">
                We offer expert veterinary consultations to ensure your pets receive the best care.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/pet2.png"
              alt="Service 2"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Pet Grooming</h3>
              <p className="text-gray-600">
                Professional grooming services to keep your pets looking and feeling their best.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/pet3.png"
              alt="Service 3"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Emergency Care</h3>
              <p className="text-gray-600">
                Available emergency care services to provide immediate assistance to your pets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Link href="/about">
          <span className="text-blue-500 hover:underline">Learn more about us</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
