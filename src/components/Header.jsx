import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import  useUserAuth  from '../Contexts/AuthContext';
import logo from '../assets/logo.png'
import { SearchContext } from "../Contexts/SearchContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {

  const {setSearch} = useContext(SearchContext)
  const {setInput} = useContext(SearchContext)
  const {search} = useContext(SearchContext)
  const {logOut} = useUserAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // const {user} = useUserAuth()
  const [showMyModal, setshowMyModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('userData'));
 

 //LOGOUT FUNCTION
 const handleLogOut=async()=>{
  try {
    await logOut();
    alert("You have been logged out")
    navigate('/')
  } catch (error) {
    alert(error.message)
  }
}
useEffect(() => {
  if (user===null){
    setIsLoggedIn(false)
  }else{
    setIsLoggedIn(true)
  }

  // return () => {
  //   second
  // }
}, [user])



// Search Function
 const handleSearch = (e)=>{
    const value = e.target.value;
    setSearch(value);
 }

 const handleClick = ()=>{
 setInput(search)
 }

  const handleOpen = (e) => {
    e.stopPropagation();
    setshowMyModal(true);
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-2 md:px-10 ">
      <div className="relative flex items-center justify-between h-15 cursor-pointer pl-5 my-auto mr-0">
      <Link to='/'>
        <img
          src={logo}
          width="122px"
          alt="logo"
        />
      </Link>
      {location.pathname =='/' &&
        <div className="flex items-center justify-end md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sn text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Enter the Location"
          onChange={(e)=>handleSearch(e)}
        />
        <SearchIcon onClick={handleClick} className="hidden md:inline-flex h-8 bg-red-500 mr-2 text-white rounded-full p-2 cursor-pointer md:max-2" />
      </div>
      }
      </div>
    
     
      <div className=" flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className=" h-6 cursor-pointer " />
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
              <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                <MenuIcon className="h-6 cursor-pointer" />
                <UserCircleIcon className="h-6 cursor-pointer" />
              </div>
            </Menu.Button>
            <Transition as={Fragment}>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div>
                  <hr />
                  {isLoggedIn ? (
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={handleLogOut}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          style={{ cursor: "pointer" }}
                        >
                          Logout
                        </div>
                      )}
                    </Menu.Item>
                  ) : (
                    <>
                      <Menu.Item>
                        {({ active }) => (
                          <div>
                            <Link
                              // onClick={(e) => handleOpen(e)}
                              to='/login'
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Log in
                            </Link>

                            {/* <Loginmodal
                              onClose={handleOnClose}
                              visible={showMyModal}
                            /> */}
                          </div>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/signup"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Sign up
                          </Link>
                        )}
                      </Menu.Item>
                    </>
                  )}

                  <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Host your experience
                    </a>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to ="/contact"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Help
                    </Link>
                  )}
                </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
