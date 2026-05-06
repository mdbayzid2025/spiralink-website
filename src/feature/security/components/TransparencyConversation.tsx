import { Card } from 'antd'
import { Asterisk, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ExplicitConsent = () => {
    return (
        <div className="bg-black">
            <div className='container flex flex-col md:flex-row items-center gap-20 lg:gap-32  py-24 lg:py-32 relative'>
                {/* Left Side Content */}
                <div className="relative w-full md:w-[40%] z-20">
                    <Image width={400} height={400} quality={100} src="/assets/bg/security/device.png" alt="Image" className="h-full w-full rounded-lg shadow-lg" />
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-[60%] z-20">
                    <h1 className='section-title leading-[1.1]'>Transparency during <br /> the conversation</h1>
                    <p className='section-subtitle whitespace-nowrap!'>The voicebot communicates clearly throughout the interaction.</p>

                    <div className="mt-5">
                        <p className='text-xl text-primary font-bold mb-7'>This includes:</p>
                        <ul className='flex flex-col gap-4 text-lg'>
                            <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' /> Informing the caller when data is retrieved from internal systems</li>
                            <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Indicating when information is used to resolve the request</li>
                            <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Clearly announcing when a handover to a human agent occurs</li>
                        </ul>
                        <p className='section-subtitle mt-7'>There are no hidden processing steps from <br /> the caller’s perspective.</p>
                    </div>
                </div>
                {/* glow */}
                <div
                    className="absolute h-[40%] w-[40%] top-1/3 left-0 inset-0 blur-xl opacity-70 rounded-full group-hover:opacity-30 transition-opacity duration-500 z-0"
                    style={{ backgroundColor: "#BC72F873" }}
                />
            </div>
        </div>
    )
}

export default ExplicitConsent