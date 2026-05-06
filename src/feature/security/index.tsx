import React from 'react'
import SecurityBanner from './components/SecurityBanner'
import ExplicitConsent from './components/ExplicitConsent'
import TransparencyConversation from './components/TransparencyConversation'
import LimitedDataLoggin from './components/LimitedDataLoggin'

const SecurityPage = () => {
  return (
    <div
     style={{
        backgroundImage: "url('/assets/bg/security/seciruty-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen overflow-hidden lg:pt-20"
      >
        <SecurityBanner />
        <ExplicitConsent />
        <TransparencyConversation />
        <LimitedDataLoggin />
    </div>
  )
}

export default SecurityPage