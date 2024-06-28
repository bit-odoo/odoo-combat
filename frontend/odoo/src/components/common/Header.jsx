import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LuHeart } from 'react-icons/lu';
import { GoSearch } from 'react-icons/go';
// import ShopingBagButton from './ShopingBagbutton';

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-10 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2 space-x-4">
            <Link
              to="#"
              className="text-gray-800 hover:text-orange-600 transform hover:scale-110 transition duration-300"
            >
              <GoSearch className="w-6 h-6" />
            </Link>
            <Link
              to="/wishlist"
              className="text-gray-800 hover:text-orange-600 transform hover:scale-110 transition duration-300"
            >
              <LuHeart className="w-6 h-6" />
            </Link>

            <Link
              to="/cart"
              className="text-gray-800 hover:text-orange-600 transform hover:scale-110 transition duration-300"
            >
              {/* <ShopingBagButton /> */}
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Pages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
