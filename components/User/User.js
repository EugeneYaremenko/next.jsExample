import Link from "next/link";
import Image from "next/image";

const User = ({ id, image, name, prof }) => {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-5 px-4">
      <Link href={`/users/${id}`}>
        <a>
          <div className="px-6">
            <Image
              alt={name}
              src={image}
              className="shadow-lg rounded-full max-w-full mx-auto"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">{name}</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                {prof}
              </p>
              <div className="mt-6">
                <button
                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default User;
