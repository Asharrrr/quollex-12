import React from 'react';

const Features: React.FC = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
                    Why Shop With Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="bg-gray-800 p-6 rounded-full shadow-lg">
                            <i className="fas fa-shipping-fast text-4xl text-yellow-400"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Fast Shipping</h3>
                        <p className="text-gray-400">
                            Get your orders delivered to your doorstep quickly and reliably.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="bg-gray-800 p-6 rounded-full shadow-lg">
                            <i className="fas fa-tags text-4xl text-yellow-400"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Best Prices</h3>
                        <p className="text-gray-400">
                            Enjoy unbeatable prices and exclusive deals on all your favorite items.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="bg-gray-800 p-6 rounded-full shadow-lg">
                            <i className="fas fa-headset text-4xl text-yellow-400"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
                        <p className="text-gray-400">
                            Our customer support team is here to assist you anytime, day or night.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
