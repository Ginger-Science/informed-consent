"use client"

import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";

const Home: NextPage = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/questions");
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%]">
        <h1 className="text-center mb-6">
          <span className="block text-2xl mb-2">DSCI-Core</span>
          <span className="block text-4xl font-bold">Automated health care data packages for DeSci companies</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          
          <div className="max-w-3xl space-y-8">
            <div className="bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Accelerating DeSci companies addressing global human health</h2>
              <p>
                DSCI-Core are market-tested EVM-compatible smart contracts built specifically to meet the needs of the global health care industry. 
              </p>
            </div>
            <div className="bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-2">DSCI-Core enables personal data sovereignty </h2>
              <p>
                Data sovereignty enables infinite reuse of human health data like never before, promoting innovation and driving value.
              </p>
            </div>
            <div className="bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Secure & Scalable Health Data Use Cases</h2>
              <p>
                Built on a secure, multi-jurisdictional and scalable blockchain framework, our compliance solution is designed to grow with your business.
              </p>
            </div>
            <div className="bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-2">🚀 DSCI Token for DeSci Companies</h2>
              <p>
                DSCI powers the DsciLife network. During our testnet phase, we are offering DeSci companies an unprecedented opportuntity to seize the value prop of decentralized healthcare using DSCI and DSCI-Core.
              </p>
            </div>
          </div>
          <button onClick={handleGetStartedClick} className="btn btn-secondary">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;
