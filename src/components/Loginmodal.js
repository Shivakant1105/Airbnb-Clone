import React from 'react'

export default function Loginmodal({visible, onClose}) {
  const handleOnClose = (e) =>{
    if(e.target.id==='container') onClose();
  };

if (!visible) return null;

  return (
    <div 
    id='container'
    onClick= {handleOnClose}
    className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">

      <div className="bg-white p-2 rounded w-72">
      <button onClick={onClose}>X</button>
        <h1 className="font-semibold text-center text-xl text-gray-700">
        Log in or sign up
        </h1>
        <hr />
       
        <p className="text-center text-gray-700 mb-5">Welcome to Airbnb</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="email@example.com"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

