import React from 'react';
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../../assets/logo 2.png"

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate/40 font-montserrat  font-bold text-orange-600 backdrop-blur-md shadow-md  top-1 z-60 py-3 rounded-2xl">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <Link to="/" className="flex items-center h-250 w-400">
          <img src={logo} className="h-20 w-20 " alt="FlaveMe logo" />
        </Link>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Restaurants</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link to="/foods" className="hover:underline">Foods</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link to="https://instagram.com/Linkmaldevharidas" className="hover:underline">Instagram</Link>
              </li>
              <li>
                <Link to="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 dark:text-yellow-400">
          © 2024 <Link to="/" className="hover:underline">FlaveMe™</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:mt-0 gap-4">
          <Link to="https://facebook.com" className="text-yellow-400 hover:text-white">
            <FaFacebook />
          </Link>
          <Link to="https://instagram.com" className="text-yellow-400 hover:text-white">
            <FaInstagram />
          </Link>
          <Link to="https://twitter.com" className="text-yellow-400 hover:text-white">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default Footer;
