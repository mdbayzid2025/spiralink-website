import { Card } from 'antd'
import { Asterisk, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ExplicitConsent = () => {
  return (
    <div className="bg-black">
    <div className='container flex flex-col md:flex-row items-center gap-10  py-24 lg:py-32'>
        {/* Left Side Content */}
        <div className="w-full md:w-[60%]">
        <h1 className='section-title leading-[1.1]'>Explicit consent before <br /> data processing (GDPR)</h1>
        <p className='section-subtitle whitespace-nowrap!'>When a conversation involves the processing or logging of personal <br /> data, the voicebot clearly informs the caller.</p>
        
        <div className="mt-5">
        <p className='text-xl text-primary font-bold mb-7'>Before continuing, the voicebot:</p>
        <ul className='flex flex-col gap-4 text-lg'>
            <li className='flex items-center gap-2 '><BadgeCheck className='text-primary'/> Explains that personal data may be processed or logged</li>
            <li className='flex items-center gap-2 '><BadgeCheck className='text-primary'/> States the purpose of this processing</li>
            <li className='flex items-center gap-2 '><BadgeCheck className='text-primary'/> Asks for explicit consent to proceed</li>
        </ul>
        <p className='section-subtitle mt-7'>Only after consent is given does the system continue within that scope.</p>
        </div>
        </div>
        {/* Right Side Content */}
        <div  className="relative w-full md:w-[40%]">
        <Image width={400} height={200} quality={100} src="/assets/bg/security/shield-bg.png" alt="Image" className=" rounded-lg shadow-lg"/> 
        
        <div className="absolute bottom-10">
        <Card className='bg-black! border border-gray-800!  relative '>
        <p className='text-xl text-primary font-bold mb-3'>If consent is not granted or is withdrawn:</p>
        <ul className='flex flex-col gap-4 text-lg text-white'>
        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary'/> Processing is limited to what is strictly necessary</li>
        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary'/> Or the call is transferred to a human agent</li>
        </ul>
        <p>This ensures lawful processing and transparency under GDPR.</p>
          <Asterisk strokeWidth={3} className='text-primary absolute top-6 right-5' size={30} />

        </Card>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ExplicitConsent