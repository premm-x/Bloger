import React from 'react';
import Footer from '../component/Footer'
import { Link } from 'react-router-dom';

function Hometwo() {
    return (
        <div className="min-h-screen bg-white">

            <header className="border-b">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold">Blog Spot.</div>
                    <div className="flex items-center gap-2">
                        <Link to={'/signin'} className="ml-2 px-4 py-2 rounded-full border border-gray-200">
                            Login
                        </Link>
                        <Link to={'/register'} className="ml-2 px-4 py-2 rounded-full border border-gray-200">
                            Register
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Best of the week section */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-4xl font-bold">Best of the week</h2>
                        <Link to={'/signin'} className="text-gray-500 text-sm md:text-base">
                            See all posts →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Main Feature Card */}
                        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Travel"
                                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 px-3 py-1 rounded-full text-xs md:text-sm">Sep 05, 2022</span>
                            </div>
                            {/* <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 bg-white p-4 md:p-6 rounded-xl">
                                <span className="text-xs md:text-sm text-gray-500">Travel</span>
                                <h3 className="text-lg md:text-xl font-semibold mt-2">Get to your dream now destinations with Travel Pro</h3>
                            </div> */}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Ad Card */}
                            <div className="bg-[#B8D8E3] rounded-3xl p-4 md:p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">ADS</span>
                                    <button className="text-xl md:text-2xl">+</button>
                                </div>
                                <h3 className="font-semibold mb-2 text-sm md:text-base">Become A BROADCAST MEMBER</h3>
                                <p className="text-xs md:text-sm mb-4">Real talk in a corporate world</p>
                                <button className="text-xs md:text-sm">Learn more</button>
                            </div>

                            {/* See all picks card */}
                            <div className="bg-[#D8E3D5] rounded-3xl p-6 relative h-[200px] md:h-[250px] lg:h-[300px]">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                    alt="Portrait"
                                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                                />
                                <div className="relative z-10 h-full flex flex-col justify-end">
                                    <button className="text-white text-sm md:text-base">See all picks →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <Footer />

        </div>
    );
}

export default Hometwo;