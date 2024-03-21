"use client";
import { useState, useEffect } from "react";
import { headers } from "next/headers";
import Pagination1 from "../components/Pagination1";
import AtmTable from "../components/AtmTable";

const API_URL = process.env.NEXT_PUBLIC_ATM_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Atm = () => {
  const [view, setView] = useState<number>(1);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(18);
  const [province, setProvince] = useState(0);
  const [district, setDistrict] = useState(0);

  const [atmData, setAtmData] = useState<Object[]>([]);
  const [allData, setAllData] = useState<Object[]>([]);
  const [slicedData, setSlicedData] = useState<Object[]>([]);
  const [districtList, setDistrictList] = useState<Object[]>([]);
  const [paginations, setPaginations] = useState<number>(0);
  const [totalData, setTotalData] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState("0");

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [district, province]);

  useEffect(() => {
    setPaginations(Math.ceil(atmData.length / itemsPerPage));
  }, [itemsPerPage]);

  useEffect(() => {
    sliceData();
    console.log("sliced", atmData.length);

    setPaginations(Math.ceil(atmData.length / itemsPerPage));
    console.log("sli", Math.ceil(atmData.length / itemsPerPage));
    console.log("pagi", paginations);
  }, [currentPage, itemsPerPage, atmData]);

  useEffect(() => {
    handleDistrictListChange();
    setDistrict(0);
  }, [province]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSetView = (view: number) => {
    setView(view);
    setCurrentPage(1);
    setProvince(0);
    setDistrict(0);
    setSelectedOption("0");
    if (view == 2) {
      setItemsPerPage(10);
    } else {
      setItemsPerPage(18);
    }
  };

  const fetchData = async () => {
    try {
      if (!API_URL || !API_KEY) {
        console.error("URL is not defined");
        return;
      }

      let url = API_URL;

      if (province !== 0) {
        url += `?province=${province}`;
      }

      if (province !== 0 && district !== 0) {
        url += `&district=${district}`;
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
      setAtmData(responseData.data);
      // console.log('resp',responseData.data)
      // setTotalData(responseData.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const sliceData = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = atmData.slice(indexOfFirstItem, indexOfLastItem);
    console.log("slicedfunction");
    setSlicedData(currentItems);
  };

  const fetchAllData = async () => {
    try {
      if (!API_URL || !API_KEY) {
        console.error("URL is not defined");
        return;
      }

      const response = await fetch(API_URL, {
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
      setAllData(responseData.data);
      // console.log("alldata", responseData.data[1].district.province.id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDistrictListChange = () => {
    const DistrictList = allData
      ?.filter(
        (item) =>
          item.district !== null &&
          Number(province) === Number(item.district?.province?.id),
      )
      .map((item) => ({
        title: item?.district?.dist_title,
        district_id: item?.district?.id,
      }));

    const uniqueDistrictList = [];

    DistrictList.forEach((item) => {
      const isDuplicate = uniqueDistrictList.some(
        (uniqueItem) =>
          uniqueItem.title === item.title &&
          uniqueItem.district_id === item.district_id,
      );

      if (!isDuplicate) {
        uniqueDistrictList.push({
          title: item.title,
          district_id: item.district_id,
        });
      }
    });

    setDistrictList(uniqueDistrictList);
  };

  const handleProvinceChange = (e) => {
    const selectedProvinceId = parseInt(e.target.value);
    setSelectedOption(e.target.value);
    if (selectedProvinceId == 0) {
      setProvince(0);
    } else if (selectedProvinceId == 1) {
      setProvince(1);
    } else if (selectedProvinceId == 2) {
      setProvince(2);
    } else if (selectedProvinceId == 3) {
      setProvince(3);
    } else if (selectedProvinceId == 4) {
      setProvince(4);
    } else if (selectedProvinceId == 5) {
      setProvince(5);
    } else if (selectedProvinceId == 6) {
      setProvince(6);
    } else if (selectedProvinceId == 7) {
      setProvince(7);
    }
  };
  const handleSetItemsPerPage = (e: any) => {
    const selectedItemsPerPage = parseInt(e);
    if (selectedItemsPerPage == 1) {
      setItemsPerPage(10);
    } else if (selectedItemsPerPage == 2) {
      setItemsPerPage(20);
    } else if (selectedItemsPerPage == 3) {
      setItemsPerPage(30);
    }
  };

  return (
    <section className="mb-16 mt-4">
      <div className="mx-auto w-[95%] md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
        <h1 className="text-2xl font-bold text-custom-green">ATM</h1>
        <div className="mb-3 flex justify-center">
          <div className="flex ">
            <div
              className={`${view == 1 ? "border-b-[3px] border-custom-green text-custom-green" : ""} px-6 hover:cursor-pointer hover:text-custom-green`}
              onClick={() => handleSetView(1)}
            >
              Grid View
            </div>
            <div
              className={`${view == 2 ? "border-b-[3px] border-custom-green text-custom-green" : ""} px-6 hover:cursor-pointer hover:text-custom-green`}
              onClick={() => handleSetView(2)}
            >
              List View
            </div>
            <div
              className={`${view == 3 ? "border-b-[3px] border-custom-green text-custom-green" : ""} px-6 hover:cursor-pointer hover:text-custom-green`}
              onClick={() => handleSetView(3)}
            >
              Map View
            </div>
          </div>
        </div>
        <div>
          <div className="my-4 flex">
            <div className="mr-6 border-2 border-custom-green">
              <select
                value={selectedOption}
                onChange={handleProvinceChange}
                className="w-44 "
              >
                <option value="0" className="text-xs lg:text-lg ">
                  Filter By Province
                </option>{" "}
                <option value="1" className="text-xs lg:text-lg ">
                  Province 1
                </option>
                <option value="2" className="text-xs lg:text-lg ">
                  Province 2
                </option>
                <option value="3" className="text-xs lg:text-lg ">
                  Bagmati Province
                </option>
                <option value="4" className="text-xs lg:text-lg ">
                  Gandaki Province
                </option>
                <option value="5" className="text-xs lg:text-lg ">
                  Lumbini Province
                </option>
                <option value="6" className="text-xs lg:text-lg ">
                  Karnali Province
                </option>
                <option value="7" className="text-xs lg:text-lg ">
                  Sudurpashchim Province
                </option>
              </select>
            </div>
            <div className="border-2 border-custom-green">
              <select
                onChange={(e) => {
                  setDistrict(parseInt(e.target.value));
                }}
                className="form-select border-none"
              >
                <option className="text-xs lg:text-lg " value={0}>
                  Filter By District
                </option>
                {districtList?.map((item) => {
                  return (
                    <option
                      key={item.district_id}
                      value={item.district_id}
                      className="text-xs lg:text-lg "
                    >
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div>
          {view == 1 && (
            <div>
              <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                {slicedData.map((item: any, index) => (
                  <div
                    key={index}
                    className="flex min-h-28 flex-col justify-center rounded-xl bg-white p-4 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)]"
                  >
                    <p className="text-base font-bold text-custom-green">
                      {item.atm_title}
                    </p>
                    <p className="text-stone-800">{item.address}</p>
                  </div>
                ))}
              </div>

              <Pagination1
                currentPage={currentPage}
                totalPages={paginations}
                onPageChange={handlePageChange}
              />
            </div>
          )}
          {view == 2 && (
            <div>
              <AtmTable
                data={atmData} // Add the missing data prop
                handleSetItemsPerPage={handleSetItemsPerPage}
              />
            </div>
          )}
          {view == 3 && <div>map view</div>}
        </div>
      </div>
    </section>
  );
};

export default Atm;
