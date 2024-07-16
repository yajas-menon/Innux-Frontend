/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react'
import AIGeneratedImage from '../assets/AI-Generated-Image.jpg'
import aaa from '../assets/aaa.jpg'
import bbb from '../assets/bbb.jpg'
import ccc from '../assets/ccc.jpg'
import ddd from '../assets/ddd.jpg'
import eee from '../assets/eee.jpg'
import hero from '../assets/hero.jpg'
import LandingpageNavbar from '../components/LandingpageNavbar'
import Footer from '../components/Footer'


const LandingPage = () => {

    return (
        <div>
            <LandingpageNavbar />

            <div className=" bg-white">

                <div className='ml-12 mr-12'>

                    <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
                        <div className="md:w-1/2 space-y-6">
                            <p className="text-indigo-600 dark:text-indigo-400">#1 in contract management</p>
                            <h1 className="text-6xl font-bold text-zinc-900 ">Streamline</h1>
                            <h1 className="text-6xl font-bold text-zinc-900">Contracts with</h1>
                            <h1 className="text-6xl font-bold text-zinc-900"> HiAI</h1>
                            <p className="text-black font-medium">Streamline your business with HiAICorp: ContractFlow and TPRM redefined</p>
                            <a href="#" className="inline-block px-6 py-3 bg-deep-sky text-white rounded-lg">Sign up today</a>
                        </div>
                        <div className="md:w-5/12 mt-6 md:mt-0">
                            <img src={hero} alt="Robot" className="rounded-lg" />
                        </div>
                    </main>
                </div>
            </div>
            <div>
                <div class="bg-deep-sky text-white py-12">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold">The #1 AI solution for contracts</h2>
                        <p class="text-lg">As recognized by top enterprises and sector leaders</p>
                    </div>
                    <div class="flex justify-center space-x-6">
                        <img src="https://placehold.co/100x100" alt="Logo 1" class="rounded-lg shadow-lg" />
                        <img src="https://placehold.co/100x100" alt="Logo 2" class="rounded-lg shadow-lg" />
                        <img src="https://placehold.co/100x100" alt="Logo 3" class="rounded-lg shadow-lg" />
                        <img src="https://placehold.co/100x100" alt="Logo 4" class="rounded-lg shadow-lg" />
                        <img src="https://placehold.co/100x100" alt="Logo 5" class="rounded-lg shadow-lg" />
                    </div>
                </div>

            </div>
            <div>
                <div class="bg-new-white py-12">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-left">
                            <h2 class="text-3xl font-bold text-zinc-900  sm:text-4xl z-3 whitespace-pre-wrap space-y-3">
                                Seamlessly integrate with your current tools.
                            </h2>
                            <p class="mt-4 text-lg leading-6 text-black font-medium ">
                                Revolutionizing contract management and risk insights with cutting-edge AI solutions.
                            </p>
                        </div>
                        <div class="mt-10">
                            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div class="bg-white  overflow-hidden shadow rounded-lg">
                                    <img
                                        class="w-full h-48 object-cover"
                                        src={ccc}
                                        alt="AI Analysis"
                                    />
                                    <div class="p-6">
                                        <h3 class="text-lg leading-6 font-medium text-zinc-900 ">AI Analysis</h3>
                                        <p class="mt-2 text-base text-zinc-600 ">
                                            Harness AI Analysis to streamline document review and highlight critical contract
                                            points.
                                        </p>
                                        <div class="mt-4">
                                            <a
                                                href="#"
                                                class="inline-block px-4 py-2 border border-blue-500 text-deep-sky rounded "
                                            >
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white overflow-hidden shadow rounded-lg">
                                    <img
                                        class="w-full h-48 object-cover"
                                        src={ddd}
                                        alt="Risk Insights"
                                    />
                                    <div class="p-6">
                                        <h3 class="text-lg leading-6 font-medium text-zinc-900 ">
                                            Risk Insights
                                        </h3>
                                        <p class="mt-2 text-base text-zinc-600 ">
                                            Receive comprehensive risk evaluations and insights with the power of AI-driven
                                            analysis.
                                        </p>
                                        <div class="mt-4">
                                            <a
                                                href="#"
                                                class="inline-block px-4 py-2 border border-blue-500 text-deep-sky rounded "
                                            >
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white  overflow-hidden shadow rounded-lg">
                                    <img
                                        class="w-full h-48 object-cover"
                                        src={eee}
                                        alt="Smart Contracts"
                                    />
                                    <div class="p-6">
                                        <h3 class="text-lg leading-6 font-medium text-zinc-900 ">
                                            Smart Contracts
                                        </h3>
                                        <p class="mt-2 text-base text-zinc-600 ">
                                            Implement automated execution and enforcement of contract terms using Smart Contracts.
                                        </p>
                                        <div class="mt-4">
                                            <a
                                                href="#"
                                                class="inline-block px-4 py-2 border border-blue-500 text-deep-sky rounded "
                                            >
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <h2 class="text-3xl font-extrabold text-zinc-900  sm:text-4xl">
                            Discover Our Features
                        </h2>
                        <p class="mt-4 text-lg leading-6 text-zinc-600 ">
                            Streamline your workflow with cutting-edge AI technology.
                        </p>
                    </div>
                    <div class="mt-10">
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <div class="bg-yajas  p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold text-black ">AI-Powered Ease</h3>
                                <p class="mt-4 text-black ">
                                    Maintain complete control over contract versions.
                                </p>
                                <a href="#" class="mt-4 inline-block text-deep-sky"> Learn more </a>
                            </div>
                            <div class="bg-yajas  p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold text-black">Version Control</h3>
                                <p class="mt-4 text-black">
                                    Use AI to simplify contract processes and workflows.
                                </p>
                                <a href="#" class="mt-4 inline-block text-deep-sky"> Learn more </a>
                            </div>
                            <div class="bg-yajas  p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold text-black ">Easy Integration</h3>
                                <p class="mt-4 text-black">
                                    Revolutionize Contract Management with AI.
                                </p>
                                <a href="#" class="mt-4 inline-block text-deep-sky"> Learn more </a>
                            </div>
                            <div class="bg-yajas  p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold text-black ">Text Editor</h3>
                                <p class="mt-4 text-black">
                                    Edit and customize contracts with an advanced text editor.
                                </p>
                                <a href="#" class="mt-4 inline-block text-deep-sky"> Learn more </a>
                            </div>
                            <div class="bg-yajas  p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold text-black ">Smart Alerts</h3>
                                <p class="mt-4 text-black">
                                    Get notified instantly when contract is created.
                                </p>
                                <a href="#" class="mt-4 inline-block text-deep-sky"> Learn more </a>
                            </div>
                            <div class="bg-yajas  p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold text-black ">Real-Time Updates</h3>
                                <p class="mt-4 text-black">
                                    Experience instant updates across all your documents.
                                </p>
                                <a href="#" class="mt-4 inline-block text-deep-sky"> Learn more </a>
                            </div>
                            <div class="bg-yajas  p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold text-black ">Seamless Integration</h3>
                                <p class="mt-4 text-black">
                                    Effortless integration with existing contract systems.
                                </p>
                                <a href="#" class="mt-4 inline-block text-deep-sky"> Learn more </a>
                            </div>
                            <div class="bg-yajas  p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold text-black ">AI Insights</h3>
                                <p class="mt-4 text-black">
                                    Gain deep insights with our AI-driven analytics for better decision-making.
                                </p>
                                <a href="#" class="mt-4 inline-block text-deep-sky"> Learn more </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* HR TAG */}
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
                    <svg class="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            {/* HR TAG */}
            <div>
                <div class="bg-zinc-50  py-12 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl mx-auto text-center">
                        <h2 class="text-5xl font-bold text-zinc-900 ">Customer Testimonials</h2>
                        <p class="mt-4 text-lg leading-6 text-black">
                            Hear from global professionals who trust HiAI.
                        </p>
                    </div>
                    <div class="mt-10">
                        <div class="relative">
                            <div class="text-center">
                                <div class="whitespace-pre-wrap overflow-visible font-medium text-[20px] text-[var(--color_bTGyP_default)] leading-[1.4] rounded-none opacity-100 self-start min-w-0 order-1 min-h-0 h-max flex-grow-0 flex-shrink-0 w-full mx-0 z-2">
                                    "Utilizing ContractFlow has revolutionized our contract management process. The ease of generating comprehensive, accurate contracts using AI has saved us significant time and resources, allowing us to focus on more strategic tasks. We are incredibly impressed with the system's efficiency and reliability."
                                </div>
                                <p class="mt-4 text-base font-semibold text-black ">
                                    ~ Satish Kumar , CEO at HiAiCorp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div class="max-w-7xl mx-auto p-6">
                    <h2 class="text-3xl font-bold mb-6">Latest blog articles</h2>
                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div class="bg-white  rounded-lg shadow-md overflow-hidden">
                            <img src={AIGeneratedImage} alt="Blog Image 1" class="w-full h-48 object-cover" />
                            <div class="p-4">
                                <h3 class="text-xl font-semibold mb-2">
                                    AI-Powered Efficiency: Reinventing Contract Handling with ContractFlow
                                </h3>
                                <p class="text-zinc-700  mb-4">
                                    Discover the future of contract handling in "AI-Powered Efficiency: Reinventing Contract
                                    Handling with ContractFlow". Uncover how ContractFlow leverages AI to simplify contract
                                    workflows, enhance accuracy, and save valuable time.
                                </p>
                                <a
                                    href="#"
                                    class="inline-block px-4 py-2 border border-blue-500 text-deep-sky rounded"
                                >Learn more</a
                                >
                            </div>
                        </div>
                        <div class="bg-white  rounded-lg shadow-md overflow-hidden">
                            <img src={aaa} alt="Blog Image 2" class="w-full h-48 object-cover" />
                            <div class="p-4">
                                <h3 class="text-xl font-semibold mb-2">
                                    Elevate Contract Management: Unveiling AI's Transformative Power
                                </h3>
                                <p class="text-zinc-700  mb-4">
                                    Explore AI's transformative role in contract management with our latest blog, "Elevate
                                    Contract Management: Unveiling AI's Transformative Power". Learn how AI streamlines
                                    processes and boosts efficiency, making contract handling a breeze.
                                </p>
                                <a
                                    href="#"
                                    class="inline-block px-4 py-2 border border-blue-500 text-deep-sky rounded"
                                >Learn more</a
                                >
                            </div>
                        </div>
                        <div class="bg-white  rounded-lg shadow-md overflow-hidden">
                            <img src={bbb} alt="Blog Image 3" class="w-full h-48 object-cover" />
                            <div class="p-4">
                                <h3 class="text-xl font-semibold mb-2">
                                    Streamline Compliance: How ContractFlow Enhances Risk Management
                                </h3>
                                <p class="text-zinc-700  mb-4">
                                    Streamline Compliance: How ContractFlow Enhances Risk Management - Delve into how
                                    ContractFlow uses AI to streamline compliance processes and mitigate risks. Understand its
                                    impact on contract management, regulatory adherence, and how it safeguards your business
                                    from potential threats.
                                </p>
                                <a
                                    href="#"
                                    class="inline-block px-4 py-2 border border-blue-500 text-deep-sky rounded"
                                >Learn more</a
                                >
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div class="bg-deep-sky text-white py-28 px-16 text-center mt-24">
                    <h2 class="text-5xl font-bold mb-4">Join Our Newsletter</h2>
                    <p class="mb-8 font-medium">Stay informed with our latest product updates and industry insights.</p>
                    <form class="flex justify-center items-center space-x-6">
                        <input type="email" placeholder="user@example.com" class="p-4 px-16 rounded-lg text-zinc-700" />
                        <button type="submit" class="bg-white text-deep-sky font-bold py-4 px-8 rounded-md">
                            Sign up
                        </button>
                    </form>
                </div>

            </div>
            <div >
                <Footer />

            </div>
        </div >


    )
}

export default LandingPage