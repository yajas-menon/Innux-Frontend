/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-6 shadow-lg">
        <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-bold text-zinc-900">HiAICorp</span>
        </a>
        </div>
        <div className="flex items-center space-x-8">
          <nav className="space-x-8">
          <a href="/contractflowpage" className="text-zinc-900 font-bold relative group">
              Pricing
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
            </a>
            <a href="/contractflowpage" className="text-zinc-900 font-bold relative group">
              ContractFlow
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
            </a>
            <a href="/TprmPage" className="text-zinc-900 font-bold relative group">
              TPRM Solutions
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="text-zinc-900 font-bold relative group">
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
            </a>
          </nav>
          <a href="#" className="px-4 py-2 bg-deep-sky text-white rounded-lg">Sign up</a>
        </div>
      </header>
    </div>
  )
}

export default Navbar
