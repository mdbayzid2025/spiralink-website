import React from "react";
import CollaborationBanner from "./components/CollaborationBanner";

export default function CollaborationPage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/collaboration/collaboration-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen"
    >
      <CollaborationBanner />
    </section>
  );
}
