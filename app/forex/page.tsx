"use client";
import { useState, useEffect } from "react";
import ForexTable from "../components/ForexTable";

const API_URL = process.env.NEXT_PUBLIC_FOREX_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Atm = () => {
  const [forexData, setForexData] = useState<Object[]>([]);
  const [date, setDate] = useState("");

  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [date]);

  const fetchData = async () => {
    try {
      if (!API_URL || !API_KEY) {
        console.error("URL is not defined");
        return;
      }

      let url = API_URL;

      if (date !== "") {
        url += `?date=${date}`;
      }
      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          "X-localization": "en",
          nmbKey: API_KEY,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      const resData = await responseData.data;
      const timeData = await resData[Object.keys(resData)[0]];
      setForexData(timeData);
      setDate(timeData[0].date);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="mb-16 mt-4">
      <div className="mx-auto w-[95%] md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
        <div>
          <h1 className="text-custom-green font-bold text-2xl">Forex</h1>
          <div className="flex justify-end">
          <input
            type="date"
            className="form-control  border-2 border-custom-green"
            placeholder="MM/DD/YYYY"
            value={date}
            onChange={handleDateChange}
          /></div>
          <div className="mb-3">
          Forex data as of {`${date}`} 10:00 AM
          </div>
          <ForexTable
            data={forexData} // Add the missing data prop
          />
        </div>
      </div>
    </section>
  );
};

export default Atm;
