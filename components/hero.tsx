import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
                {/* Text Section */}
                <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Elevate Your Style with <span className="text-gray-400">Exclusive Deals</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Explore our collection of premium products designed just for you. Shop now and enjoy special offers today!
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="px-8 py-3 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out">
                            Shop Now
                        </button>
                        <button className="px-8 py-3 bg-transparent border-2 border-gray-500 text-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center relative">
                    <img
                        className="w-full md:w-4/5 mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
                        src="/hero.jpg"
                        alt="Hero"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;



// import React from 'react';

// const Hero: React.FC = () => {
//     return (
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
//             <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
//                 {/* Text Section */}
//                 <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left space-y-6">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//                         Elevate Your Style with <span className="text-yellow-400">Exclusive Deals</span>
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-100">
//                         Explore our collection of premium products designed just for you. Shop now and enjoy special offers today!
//                     </p>
//                     <div className="flex flex-col md:flex-row gap-4">
//                         <button className="px-8 py-3 bg-yellow-400 text-blue-900 text-lg font-semibold rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
//                             Shop Now
//                         </button>
//                         <button className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out">
//                             Learn More
//                         </button>
//                     </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center relative">
//                     <img
//                         className="w-full md:w-4/5 mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
//                         src="https://via.placeholder.com/600x400"
//                         alt="Hero"
//                     />
//                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-20 rounded-lg"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;