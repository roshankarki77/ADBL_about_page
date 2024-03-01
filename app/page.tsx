import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-xs ">
      <div className="intro h-full bg-[url('/introBg.png')] bg-cover bg-[#e8ffdb] lg:bg-cover">
        <div className="introtext w-64 relative left-12 lg: top-10 left-40">
          <div className="introduction font-bold mb-3">Introduction</div>
          <div className="introlinks list-none flex">
            <li>
              <a href="#" className="mr-2 text-green-800">Home</a>
            </li>
            <span className="mr-2 text-green-800">/</span>
            <li>
              <a href="#" className="mr-2 text-green-800 ">About Us</a>
            </li>
            <span className="mr-2 text-slate-800">/</span>
            <li>
              <a href="#" className="ml-2 text-slate-500">Introduction</a>
            </li>
          </div>
        </div>
      </div>
      <div className=" aboutcontent pt-5 flex flex-col max-w-[1210px] px-11 lg:pl-0">
        <div className="flex flex-col pb-20 lg:flex-row">
          <div className="flex flex-col text-justify  mt-10 basis-3/5 max-w-[678px] mx-auto lg:mr-10">
            <div className="objective mb-6">
              With the main objective of providing institutional credit for
              enhancing the production and productivity of the agricultural
              sector in the country, the Agricultural Development Bank, Nepal
              was established in 1968 under the ADBN Act 1967, as successor to
              the cooperative Bank. The Land Reform Savings Corporation was
              merged with ADBN in 1973. Subsequent amendments to the Act
              empowered the bank to extend credit to small farmers under group
              liability and expand the scope of financing to promote cottage
              industries. The amendments also permitted the bank to engage in
              commercial banking activities for the mobilization of domestic
              resources.
            </div>
            <div className="quote mb-6 bg-green-100 rounded-r-lg">
              "Sampurna Banking Suvidha sahitko Tapai Hamro Ghar Aanganko Bank
              (The bank with complete banking solution at your own door step)"
            </div>
            <div className="works mb-6">
              The bank worked as a premier rural credit institution since its
              establishment, contributing substantial agricultural credit supply
              in the country. Rural finance has been the principal operational
              area of ADBN in the past. However, the bank is also involved in
              commercial banking operations since 1984, to provide commercial
              banking services.
            </div>
          </div>
          <div className="officeicon mt-10 basis-2/5 ">
            <img src="/officebuilding.png" alt="building" className="officebuilding" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="goal basis-1/3 mb-4 lg:mr-8 ">
            <img src="/vision.png" alt="vision" />
            <div className="goaltitle">Vision</div>
            <div className="goaltext">
              To be a Mass-based Complete Bank serving from Urban to Rural.
            </div>
          </div>
          <div className="goal basis-1/3 mb-4 lg:mr-8 ">
            <img src="/mission.png" alt="mission" />
            <div className="goaltitle">Mission</div>
            <div className="goaltext">
              To deliver comprehensive banking solution strengthening its
              extensive network.
            </div>
          </div>
          <div className="goal basis-1/3 mb-4">
            <img src="/objective.png" alt="objective" />
            <div className="goaltitle">Objective</div>
            <div className="goaltext">
              To provide quality banking services To obtain sustained and
              competitive return on investment.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}