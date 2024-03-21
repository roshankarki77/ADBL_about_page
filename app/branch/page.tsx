"use client";
import { useState, useEffect } from "react";
import { headers } from "next/headers";
import Pagination1 from "../components/Pagination1";
import BranchTable from "../components/BranchTable";

const API_URL = process.env.NEXT_PUBLIC_BRANCH_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Branch = () => {
  const [view, setView] = useState<number>(1);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(18);
  const [province, setProvince] = useState(0);
  const [district, setDistrict] = useState(0);

  const [branchData, setBranchData] = useState<Object[]>([]);
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
    setPaginations(Math.ceil(branchData.length / itemsPerPage));
  }, [itemsPerPage]);

  useEffect(() => {
    sliceData();
    console.log("sliced", branchData.length);

    setPaginations(Math.ceil(branchData.length / itemsPerPage));
    console.log("sli", Math.ceil(branchData.length / itemsPerPage));
    console.log("pagi", paginations);
  }, [currentPage, itemsPerPage, branchData]);

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
      setBranchData(responseData.data);
      // console.log('resp',responseData.data)
      // setTotalData(responseData.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const sliceData = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = branchData.slice(indexOfFirstItem, indexOfLastItem);
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
        <h1 className="text-2xl font-bold text-custom-green">Branch</h1>
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
              <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 xl:grid-cols-3">
                {slicedData.map((item: any, index) => (
                  <div
                    key={index}
                    className="flex min-h-28 flex-col justify-start rounded-xl bg-white p-4 shadow-[2px_3px_5px_2px_rgba(0,0,0,0.04)]"
                  >
                    {/* <p className="text-base font-bold text-custom-green">
                    {item.atm_title}
                  </p>
                  <p className="text-stone-800">{item.address}</p> */}
                    <div className="flex justify-between">
                      <div>
                        <div>
                          <p className="text-base font-bold text-custom-green">
                            {item.branch_title}
                          </p>
                        </div>
                        <ul>
                          <li className="align-center flex text-stone-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-person mr-2 mt-[3px]"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            {item.fullname}
                          </li>
                          <li className="align-center flex text-stone-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-geo-alt mr-2 mt-[3px]"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            <span>
                              {item.address}
                              <a
                                target="_blank"
                                className="inline hover:text-custom-green"
                                href={`${item.map_url}`}
                              >
                                (View in Map)
                              </a>
                            </span>
                          </li>
                          <li className="align-center flex text-stone-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-telephone mr-2 mt-[3px]"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                            {item.phone}
                          </li>
                          <li className="align-center flex text-stone-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-envelope mr-2 mt-[3px]"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            {item.email}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src={`${item.qr_code}`}
                          alt=""
                          className="min-w-12 max-w-12"
                        />
                      </div>
                    </div>
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
              <BranchTable
                data={branchData} // Add the missing data prop
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

export default Branch;
