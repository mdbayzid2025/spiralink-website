import BadgeHero from '@/shared/BadgeHero'
import { ShieldHalf, Zap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SecurityBanner = () => {
  return (
    <div    
    className='text-white  lg:min-h-screen pt-28 pb-20 lg:py-32 relative overflow-hidden'>
      <div className="max-w-4xl mx-auto w-full text-center relative z-10 space-y-6">
        {/* Badge */}
        <div className="mb-8">
          <BadgeHero
            label="Security & Compliance"
            icon={<Image height={30} width={30} src="/assets/bg/security/SheildIcon.png" alt="" />}
          />
          
        </div>

        {/* Title */}
        <h2 className="section-title max-w-4xl leading-[1.4]  lg:leading-[1.1] mb-3">          
          Designed for GDPR and <br /> HIPAA regulated customer <br /> support environments.
        </h2>
        <p className='section-subtitle px-5 lg:px-0 max-w-xl mx-auto'>SpiraLink voicebots are designed to operate in environments governed by GDPR and HIPAA, with compliance built into how conversations are handled, not added afterward.</p>
      </div>

      <div className="absolute bottom-0 md:top-0 left-0 bg-linear-to-t from-black via-black/50 to-transparent h-full w-full z-5"></div>
      <div style={{      
       backgroundImage: "url('/assets/bg/security/11111.svg')",
        backgroundSize: "cover",        
        backgroundRepeat: "no-repeat",
    }}
     className="absolute top-0 lg:top-1/2 left-0 bg-black/50 h-full w-full z-2"></div>
    </div>
  )
}

export default SecurityBanner