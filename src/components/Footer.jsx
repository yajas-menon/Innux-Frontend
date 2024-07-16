/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../assets/logo.jpeg'

const Footer = () => {
    return (
        <div>
            <div className="flex justify-between items-start p-24 bg-white">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Company Logo" className="w-10 h-10 rounded-full" />
                    <div>
                        <h1 className="text-lg font-bold text-zinc-900">HiAICorp</h1>
                        <p className="text-sm text-zinc-500">© 2024 HiAICorp</p>
                    </div>
                </div>
                <div className="flex space-x-12">
                    <div>
                        <h2 className="font-semibold text-zinc-900">Product</h2>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a href="#" className="text-zinc-600 font-bold relative group">
                                    Overview
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-600 font-bold relative group">
                                    Customers
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-zinc-900">Company</h2>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a href="#" className="text-zinc-600 font-bold relative group">
                                    About
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-600 font-bold relative group">
                                    Jobs
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-zinc-900">Support</h2>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a href="#" className="text-zinc-600 font-bold relative group">
                                    FAQs
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-600 font-bold relative group">
                                    Contact us
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-zinc-900">Legal</h2>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a href="#" className="text-zinc-600 font-bold relative group">
                                    Terms
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-600 font-bold relative group">
                                    Privacy
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
