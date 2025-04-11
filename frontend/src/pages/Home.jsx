import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

function Home() {
    return (
        <div className="">
            <Navbar/>

            {/* Hero Section */}
            <main className="w-full mx-auto pt-12 mt-14">
                <div className="space-y-8">
                    {/* Main Heading */}
                    <div className="space-y-4 max-w-6xl mx-auto mb-20 flex items-center justify-between">
                        <h1 className="text-8xl font-bold ">
                            We design first
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-gray-400">class</span>
                                <span>SaaS</span>
                                <span className="text-9xl h-20 w-20 relative rounded-full bg-gray-300 ">
                                    <p className='absolute -top-9 left-1'>∗</p>
                                </span>
                            </div>
                        </h1>
                        <div className='gap-10 flex flex-col items-end text-right'>
                            <p className="text-sm text-gray-600 max-w-sm">
                                WE ARE A DIGITAL PRODUCT STUDIO. WE HELP BUSINESS ACHIEVE GOALS THROUGH DESIGN.
                            </p>
                            <button className="text-sm underline">+ Explore works</button>
                        </div>
                    </div>

                    {/* Scrolling Text */}
                    <div className="overflow-hidden flex item justify-center py-4">
                        <div className="flex gap-4 text-gray-400">
                            <span>HEALTHCARE</span>
                            <span>•</span>
                            <span>EFFICIENCY</span>
                            <span>•</span>
                            <span>INNOVATION</span>
                            <span>•</span>
                            <span>ANALYTICS</span>
                            <span>•</span>
                            <span>HEALTHCARE</span>
                            <span>•</span>
                            <span>EFFICIENCY</span>
                            <span>•</span>
                            <span>INNOVATION</span>
                        </div>
                    </div>

                    {/* Interactive Area */}
                    <div className="flex items-cente w-full justify-center ">
                        <img className=' w-full' src="https://floridasuretybonds.com/wp-content/uploads/2019/07/Construction-Vector.png" alt="" />
                    </div>
                </div>
            </main>

            <Footer/>
            
        </div>
    )
}

export default Home