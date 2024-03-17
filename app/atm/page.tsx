"use client";
import { useState, useEffect } from "react";
import { headers } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Atm = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(18);
  const [province , setProvince] = useState(0);
  const [district , setDistrict] = useState(0);

  const [atmData, setAtmData] = useState<Object[]>([]);
  const [paginations, setPaginations] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {
      if (!API_URL ||!API_KEY) {
        console.error("URL is not defined");
        return;
      }

      let url = API_URL+`?page=${currentPage}&per-page=${itemsPerPage}`;
      
      if (province !== 0) {
        url += `&province=${province}`;
      }

      if (province !== 0 && district !== 0) {
        url += `&district=${district}`;
      }

      const response = await fetch(
        url ,
        {
          headers: {
            accept: "application/json",
            "X-localization": "en",
            nmbKey: API_KEY,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("responseData",responseData);
      console.log("responseData",responseData.pagination.meta.last_page);
      setAtmData(responseData.data);
      setPaginations(responseData.pagination.meta.last_page);
      setPaginations(Math.ceil(responseData.data.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="mb-16 mt-4">
      <div className="mx-auto w-[95%] md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
        <div>
          <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {atmData.map((item : any, index) => (
              <div
                key={index}
                className="flex min-h-28 flex-col justify-center rounded-xl bg-white p-4 shadow-[2px_3px_5px_2px_rgba(0,0,0,0.04)]"
              >
                <p className="text-base font-bold text-custom-green">
                  {item.atm_title}
                </p>
                <p className="text-stone-800">{item.address}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Atm;
