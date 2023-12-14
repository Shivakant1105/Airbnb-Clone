import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../Contexts/Context";
import useDetails from "../Contexts/DescriptionContext";

const ProductDescription = () => {
  const data = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const singleId = data.filter((myid) => {
    return myid?.id == id;
  });
  useEffect(() => {
    setPrice(singleId[0].price);
  }, [singleId]);

  const {
    inDate,
    setInDate,
    outDate,
    setOutDate,
    currentDate,
    setPrice,
    setInTime,
    setOutTime,
    totalPrice,
  } = useDetails();

  let date = JSON.stringify(inDate);
  date = date.slice(1, 11);
  let maxDate = JSON.stringify(outDate);
  maxDate = maxDate.slice(1, 11);

  const handleReserve = () => {
    navigate("/checkout", { state: totalPrice });
  };
  const handleDate = (e) => {
    const newDate = new Date(e.target.value);
    const newTime = new Date(e.target.value).getTime();
    const date = newDate;
    setInTime(newTime);
    setInDate(date);
  };

  const handleDate2 = (e) => {
    const newDate = new Date(e.target.value);
    const newTime = new Date(e.target.value).getTime();
    const date = newDate;
    setOutDate(date);
    setOutTime(newTime);
  };

  
  return (
    <div className="grid grid-cols-2 p-5 md:px-10 mt-10">
      {singleId !== [] ? (
        <>
          <div>
            <span className="font-medium text-xl pl-5">
              {singleId[0].typeofplace},{singleId[0].name}
            </span>
            <img
              src={singleId[0].image}
              className="relative flex items-center h-15 cursor-pointer pl-5 my-auto"
              style={{ height: "400px", width: "600px" }}
              alt="no image found"
            />
          </div>
          <div className="pl-10">
            <div className="py-5">
              <div className=" mx-auto bg-white shadow-lg rounded-lg md:max-w-xl ">
                <div className="">
                  <div className="w-full p-4 px-5 py-5">
                    <span className="font-semibold text-2xl">Details</span>
                    <div className="relative pt-8">
                      <span className="font-semibold text-xl">
                        {singleId[0].name}
                      </span>
                      <br />
                      <span className="font-semibold text-xl">
                        {singleId[0].location}
                      </span>

                      <div className="grid md:grid-cols-2 md:gap-2">
                        <div className="grid grid-cols-2 pt-4">
                          <span className="text-l font-medium">
                            Check-in Date
                          </span>
                        </div>
                        <div className="grid grid-cols-2 pt-4">
                          <span className="text-l font-medium">
                            Check-out Date
                          </span>
                        </div>

                        <input
                          type="date"
                          name="date"
                          className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2  text-sm cursor-pointer"
                          min={currentDate}
                          max={maxDate}
                          onChange={handleDate}
                          // value={inDate}
                        />

                        <input
                          type="date"
                          name="mail"
                          className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2  text-sm cursor-pointer"
                          onChange={handleDate2}
                          min={date}
                          // value={outDate}
                        />
                      </div>
                      <div className="grid grid-cols-2 pt-4">
                        <span className="font-medium text-l">Price</span>
                        <span className=" text-l">
                          {singleId[0].price} /night
                        </span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="font-medium text-l">
                          All Taxes (14%)
                        </span>
                        <span className=" text-l">
                          {" "}
                          {(singleId[0].price * 14) / 100}
                        </span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="font-medium text-l">Total</span>
                        <span className=" text-l">
                          {outDate && inDate && totalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      {outDate && inDate && (
                        <button
                          type="button"
                          onClick={handleReserve}
                          className=" mt-7 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-10 py-2.5 text-center mr-2 mb-2"
                        >
                          Reserve
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div
              key={id}
              className="flex items-center m-2 nt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transforma duration-200 ease-out"
            ></div>
          </div>
        </>
      ) : (
        <>
          <div> No data founds</div>
        </>
      )}
    </div>
  );
};

export default ProductDescription;
