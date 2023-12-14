import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/Context";
import { SearchContext } from "../Contexts/SearchContext";
import Error from '../pages/Error'

const Card = () => {
  const { input } = useContext(SearchContext);
  const data1 = useContext(DataContext);
  const filteredData = data1.filter((myid) => {
    let location = myid.location.toLowerCase();
    return location == input.toLowerCase();
   
  });

  const filterGetData =
    filteredData && filteredData?.length !== 0
      ? filteredData
      : input?.length !== 0 && filteredData?.length == 0
      ? "No Data Found"
      : data1;

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-16 ">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {typeof filterGetData == "string"
          ? filterGetData
          : filterGetData.map(({ image, location, name, price, id }) => {
              return (
                <Link key={id} to={`/description/${id}`}>
                  <div className="items-center m-4 nt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transforma duration-200 ease-out">
                    <div>
                      <img
                        src={image}
                        alt="no image found"
                        className="rounded-lg"
                        style={{ height: "200px", width: "300px" }}
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold">{location}</h2>
                      <h2 className="text-gray-500">{name}</h2>
                      <h2 className="font-semibold">₹{price} per night</h2>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Card;
