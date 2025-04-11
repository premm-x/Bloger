import React from 'react';

const Footer = () => {


    return (
        <footer className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <h2 className="text-6xl font-bold leading-tight">
                            Let's Launch Your Journey
                            <div className="flex items-center gap-2 mt-4">
                                <span className="text-4xl">*</span>
                                <span className="text-4xl">⬡</span>
                            </div>
                        </h2>
                        <p className="text-gray-400 max-w-md">
                            We are providing consultations, for free. Get advice on customer activation, onboarding design, reducing product complexity or growth experiments.
                        </p>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400">Contact us</p>
                            <a href="mailto:hello@uwwa.co" className="block text-white">hello@uwwa.co</a>
                            <a href="tel:+49701448970" className="block text-white">+49 701 448 970</a>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="FIRST & LAST NAME"
                                className="w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white"
                            />
                            <input
                                type="email"
                                placeholder="EMAIL"
                                className="w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white"
                            />
                            <textarea
                                placeholder="ABOUT YOUR PROJECT"
                                rows="4"
                                className="w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white"
                            ></textarea>
                        </div>
                        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};



export default Footer;