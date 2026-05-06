import { Card } from 'antd'
import { Asterisk, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const LimitedDataLoggin = () => {
    return (
        <div className="bg-black relative">
            <div className='container flex flex-col md:flex-row items-center gap-20 lg:gap-32  py-24 lg:py-32 relative'>

                {/* Right Side Content */}
                <div className="w-full  ">
                    <h1 className='section-title leading-[1.1]'>Conditional and <br /> purpose-limited data <br /> logging (GDPR & HIPAA)</h1>
                    <p className='section-subtitle whitespace-nowrap!'>Conversations are not logged indiscriminately.</p>

                    <div className="mt-5 grid grid-cols-2 md:gap-20">
                        <div className="">
                            <p className='text-xl text-primary font-bold mb-7'>When logging is enabled:</p>
                            <ul className='flex flex-col gap-4 text-lg'>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' /> The purpose of logging is defined in advance</li>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />The scope of stored data is limited</li>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Logging starts only after required disclosures and consent</li>
                            </ul>
                            <p className='section-subtitle mt-7'>This supports data minimization and purpose limitation.</p>
                        </div>


                        <ul className='flex flex-col gap-4 text-lg'>
                            <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' /> Data is used only in real time to resolve the interaction</li>
                            <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Conversation content is not stored</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Image
                src={"/assets/bg/security/logger-line.svg"}
                alt="line"
                width={600}
                height={600}
                // className="absolute bottom-0 md:top-18 md:-right-92 lg:top-3/8 2xl:top-2/5 -left-38.5 lg:-right-60  2xl:left-0 w-contain h-auto 2xl:scale-150 z-0"
                className="absolute bottom-0  z-0"
                draggable={false}
            />
        </div>
    )
}

export default LimitedDataLoggin