"use client";
import { useState, useEffect } from "react";
// import { Pagination, Button } from "@nextui-org/react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";
import { headers } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Atm = () => {
  const [atmData, setAtmData] = useState<Object[]>([]);
  const [slicedData, setSlicedData] = useState<Object[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  const [province , setProvince] = useState(0);
  const [district , setDistrict] = useState(0);
  const [url, setUrl] = useState(API_URL);

  const [otherState, setOtherState] = useState(0);

  const [paginations, setPaginations] = useState<number>(0);
  const [paginationsArray, setPaginationsArray] = useState<number[]>([]);

  useEffect(() => {
    const newArray = [];
    for (let i = currentPage-3; i <= currentPage+3; i++) {
      if(i<1) continue;
      if(i>paginations) break;
      newArray.push(i);
    }
    setPaginationsArray(newArray);
  }, [paginations,currentPage]);

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    if(province!=0 && district==0){
      setUrl(prevUrl => prevUrl + `?province=${province}`);
      fetchData();
    }
    if(province!=0 && district!=0){
      setUrl(prevUrl => prevUrl + `?province=${province}&district=${district}`);
      fetchData();
    }
  }, [province , district]);


  

  const fetchData = async () => {

    try {
      if (!url ||!API_KEY) {
        console.error("URL is not defined");
        return;
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
      setAtmData(responseData.data);
      setPaginations(Math.ceil(responseData.data.length / itemsPerPage));

      setSlicedData( responseData.data.slice((currentPage-1)*itemsPerPage, (currentPage)*itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setSlicedData(atmData.slice((currentPage)*itemsPerPage, (currentPage+1)*itemsPerPage));
  };

  const  handleNext = () => {
    if(currentPage<paginations) {
    setCurrentPage((prev) =>  prev + 1 )
    setSlicedData(atmData.slice((currentPage)*itemsPerPage, (currentPage+1)*itemsPerPage));
    }
    console.log("currentPage",currentPage,itemsPerPage,paginations);
    
  };

  return (
    <section className="mb-16 mt-4">
      <div className="mx-auto w-[95%] md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
        <div>
          <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {slicedData.map((item : any, index) => (
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
          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem onClick={handlePrevious}>
                <PaginationPrevious href="#"/>
              </PaginationItem>
              {paginationsArray.map((item, index) => (
                <PaginationItem key={index} onClick={()=>{setCurrentPage(item);setSlicedData(atmData.slice((currentPage-1)*itemsPerPage, (currentPage)*itemsPerPage));}} >
                  <PaginationLink href="#" className={`${index+1==currentPage?"bg-stone-300":""}`}>{item}</PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem onClick={handleNext}>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          {/* <div className="flex flex-col gap-5">
            <p className="text-small text-default-500">
              Selected Page: {currentPage}
            </p>
            <Pagination
              total={10}
              color="secondary"
              page={currentPage}
              onChange={setCurrentPage}
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="flat"
                color="secondary"
                onPress={() =>
                  setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
                }
              >
                Previous
              </Button>
              <Button
                size="sm"
                variant="flat"
                color="secondary"
                className="bg-red-900 text-white p-2 rounded-md"
                onPress={() =>
                  setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
                }
              >
                <span>Next {'>>'}</span>
              </Button>
            </div>
          </div> 
          
    // <div>
    //   <div>
    //     <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
    //     <span>Page {currentPage}</span>
    //     <button onClick={handleNext}>Next</button>
    //   </div>
    // </div>*/}
          
        </div>
      </div>
    </section>
  );
};

export default Atm;
