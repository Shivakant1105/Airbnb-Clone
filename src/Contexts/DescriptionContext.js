import React, { useContext, useState } from "react";

export const detailsContext = React.createContext();

export const DetailsContextProvider=({ children })=> {
    const [inDate, setInDate] = useState(null);
  const [outDate, setOutDate] = useState(null);
  const [inTime, setInTime] = useState(null);
  const [outTime, setOutTime] = useState(null);
  const [price, setPrice]= useState("")

  let dtToday = new Date();
  let month = dtToday.getMonth() + 1;
  let day = dtToday.getDate();
  let year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  let currentDate = year + "-" + month + "-" + day;

  let Difference_In_Time = outTime - inTime;

  const totalDays =
    inDate?.toString() == outDate?.toString()
      ? Difference_In_Time / (1000 * 60 * 60 * 24) + 1
      : Difference_In_Time / (1000 * 60 * 60 * 24);

  const taxIncluded = (price * 14) / 100;

  const totalPrice = (price + taxIncluded) * totalDays;

  let date = JSON.stringify(inDate);
  date = date.slice(1, 11);
  let maxDate = JSON.stringify(outDate);
  maxDate = maxDate.slice(1, 11);


  return (
    <detailsContext.Provider value={{inDate, setInDate,outDate, setOutDate, currentDate, price, setPrice,inTime, setInTime,outTime, setOutTime, totalDays, totalPrice}}>
      {children}
    </detailsContext.Provider>
  );
}
const useDetails = () => {
    return useContext(detailsContext);
  };
export default useDetails;