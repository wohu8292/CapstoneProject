import React from 'react';
import exampleImg from '../assets/exampleImg.jpg';

const HomeBody = ({ name }) => {
  return (
    <div className="mb-3 px-4 sm:px-6">
      <div className="grid md:grid-cols-2 items-center gap-6">
        {/* Image Section - Stays on the Left */}
        <div className="order-1 md:order-1 flex justify-start">
          <img src={exampleImg} alt="Example" className="w-32 h-auto rounded-lg shadow-md" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-2 max-w-xl">
        <h2 className="text-xl md:text-2xl font-bold py-2">{name}</h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor voluptatibus cupiditate nam consectetur dolore repudiandae beatae laboriosam ratione necessitatibus. Repellendus suscipit quis ipsum sapiente? Voluptas animi minus recusandae voluptatem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
