import React from "react"
import LandingpageNavbar from '../components/LandingpageNavbar'
import Footer from "../components/Footer"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
        <LandingpageNavbar/>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32  ">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Streamline Your Contract Management with ContractFlow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  ContractFlow is a powerful AI-driven contract management system that automates your contract workflows, generates personalized contracts, and securely stores all your documents.
                </p>
                <div className="space-x-4 mt-6">
                  <a href="/login" className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50">Get Started</a>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="grid gap-4">
                  <FeatureItem icon={<CircleCheckIcon />} title="AI-Powered Contract Generation" description="Automatically generate personalized contracts based on your business requirements." />
                  <FeatureItem icon={<WorkflowIcon />} title="Automated Workflows" description="Streamline your contract approval and signing processes with automated workflows." />
                  <FeatureItem icon={<LockIcon />} title="Secure Document Storage" description="Keep all your contracts and documents safe and organized in our secure cloud storage." />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center lg:py-32 bg-gray-100 mt-4">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Experience the Future of Contract Management</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                ContractFlow's AI-powered features and automated workflows will revolutionize the way you manage your contracts.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="w-full max-w-lg flex-1 p-2 border border-gray-300 rounded-md" />
                <button type="submit" className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50">Get a Demo</button>
              </form>
              <p className="text-xs text-gray-500">
                Sign up to experience ContractFlow's powerful features.{" "}
                <a href="#" className="underline underline-offset-2">Terms &amp; Conditions</a>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 flex items-center justify-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Contract Workflows</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                  ContractFlow's powerful features help you manage your contracts efficiently, from generation to storage and everything in between.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img src="/placeholder.svg" width="550" height="310" alt="ContractFlow Screenshot" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">AI-Powered Contract Generation</h3>
                      <p className="text-gray-500">
                        Automatically generate personalized contracts based on your business requirements.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automated Workflows</h3>
                      <p className="text-gray-500">
                        Streamline your contract approval and signing processes with automated workflows.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Secure Document Storage</h3>
                      <p className="text-gray-500">
                        Keep all your contracts and documents safe and organized in our secure cloud storage.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Take Control of Your Contracts with ContractFlow</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                ContractFlow's AI-powered features and automated workflows will revolutionize the way you manage your contracts.
              </p>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50">Get a Demo</a>
              <a href="#" className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50">Learn More</a>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

const CircleCheckIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-2a8 8 0 110-16 8 8 0 010 16zm-1-4.586L8.707 13.293l1.414-1.414L11 14.172l5.879-5.879 1.414 1.414L11 17.414z" clipRule="evenodd" />
  </svg>
)

const WorkflowIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M12 2a2 2 0 012 2v2h3a3 3 0 013 3v1a3 3 0 01-3 3h-3v4h3a3 3 0 013 3v1a3 3 0 01-3 3h-6a3 3 0 01-3-3v-1a3 3 0 013-3h3v-4h-3a3 3 0 01-3-3v-1a3 3 0 013-3h3V4a2 2 0 012-2zm1 2h-2v6h2V4zm-2 14v2h2v-2h-2zm0-4v-2h-2v2h2zm2 2v-2h2v2h-2z" clipRule="evenodd" />
  </svg>
)

const LockIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M6 10V8a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h1zm2 0V8a4 4 0 118 0v2H8zm8 2v2h-4v-2h4z" clipRule="evenodd" />
  </svg>
)

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-2">
    {icon}
    <div className="space-y-1">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
)
