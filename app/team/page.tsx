import About from "@/components/about";
import Image from "next/image";

export default function Team() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center text-xs border-b-[3px] border-green-700">
        <div className="intro h-full bg-[url('/introBg.png')] bg-cover bg-[#e8ffdb] lg:bg-cover">
          <div className="introtext w-64 relative left-12 lg: top-10 lg:left-40">
            <div className="introduction font-bold mb-3">Team</div>
            <div className="introlinks list-none flex">
              <li>
                <a href="#" className="mr-2 text-green-800">
                  Home
                </a>
              </li>
              <span className="mr-2 text-green-800">/</span>
              <li>
                <a href="#" className="mr-2 text-green-800 ">
                  About Us
                </a>
              </li>
              <span className="mr-2 text-slate-800">/</span>
              <li>
                <a href="#" className="ml-2 text-slate-500">
                  Introduction
                </a>
              </li>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 ">
          <div  className="flex flex-col">
                <div className="mb-6 relative px-4 mx-auto">
                  <div className="image-wrapper  ">
                    <Image
                      src="/team/Govinda_Gurung_Sir_XDHgYI0 1 (1).png"
                      width={280}
                      height={280}
                      alt="Govinda_Gurung_Sir"
                    />
                  </div>
                  <div className="absolute top-[244px] left-[304px] ">
                    <Image
                      src="/team/Ellipse 45.png"
                      width={40}
                      height={40}
                      alt="Govinda_Gurung_Sir"
                    />
                    <div className="absolute top-[14px] left-[13px]">
                      <Image
                        src="/team/+.png"
                        width={14}
                        height={14}
                        alt="Govinda_Gurung_Sir"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-base text-green-600 mb-3">
                  Mr. Govinda Gurung
                  </div>
                  <div className="text-stone-500 font-medium text-base mb-3">
                  Chief Executive Officer
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="px-3">
                    <Image
                      src="/team/104498_facebook_icon 6.png"
                      width={19}
                      height={19}
                      alt="icon"
                    />
                  </div>
                  <div className="px-3">
                    <Image
                      src="/team/104501_twitter_bird_icon 6.png"
                      width={19}
                      height={19}
                      alt="icon"
                    />
                  </div>
                  <div className="px-3">
                    <Image
                      src="/team/2559760_media_social_video_youtube_icon 6.png"
                      width={19}
                      height={19}
                      alt="icon"
                    />
                  </div>
                  <div className="px-3">
                    <Image
                      src="/team/367593_linkedin_business_network_social_icon 6.png"
                      width={19}
                      height={19}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
          </div>


          <div className="flex flex-col mb-10 2xl:flex-row">
          <div className="flex flex-col md:flex-row"> 
              <div className="mb-10">
                <div className="mb-6 relative px-4">
                  <div className="image-wrapper">
                    <Image
                      src="/team/Pratap_Sir 1.png"
                      width={280}
                      height={280}
                      alt="Govinda_Gurung_Sir"
                    />
                  </div>
                  <div className="absolute top-[244px] left-[304px] ">
                    <Image
                      src="/team/Ellipse 45.png"
                      width={40}
                      height={40}
                      alt="Govinda_Gurung_Sir"
                    />
                    <div className="absolute top-[14px] left-[13px]">
                      <Image
                        src="/team/+.png"
                        width={14}
                        height={14}
                        alt="Govinda_Gurung_Sir"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-base text-green-600 mb-3">
                    Mr. Pratap Subedi
                  </div>
                  <div className="text-stone-500 font-medium text-base mb-3">
                    Deputy General Manager
                  </div>
                  <div className="text-stone-500 font-medium text-base mb-3">
                    Credit Approval and Control
                  </div>
                  <div className="flex justify-center">
                    <div className="px-3">
                      <Image
                        src="/team/104498_facebook_icon 6.png"
                        width={19}
                        height={19}
                        alt="icon"
                      />
                    </div>
                    <div className="px-3">
                      <Image
                        src="/team/104501_twitter_bird_icon 6.png"
                        width={19}
                        height={19}
                        alt="icon"
                      />
                    </div>
                    <div className="px-3">
                      <Image
                        src="/team/2559760_media_social_video_youtube_icon 6.png"
                        width={19}
                        height={19}
                        alt="icon"
                      />
                    </div>
                    <div className="px-3">
                      <Image
                        src="/team/367593_linkedin_business_network_social_icon 6.png"
                        width={19}
                        height={19}
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-6 relative px-4">
                  <div className="image-wrapper  ">
                    <Image
                      src="/team/Prem_Sir 1.png"
                      width={280}
                      height={280}
                      alt="Govinda_Gurung_Sir"
                    />
                  </div>
                  <div className="absolute top-[244px] left-[304px] ">
                    <Image
                      src="/team/Ellipse 45.png"
                      width={40}
                      height={40}
                      alt="Govinda_Gurung_Sir"
                    />
                    <div className="absolute top-[14px] left-[13px]">
                      <Image
                        src="/team/+.png"
                        width={14}
                        height={14}
                        alt="Govinda_Gurung_Sir"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-base text-green-600 mb-3">
                    Mr. Prem Kumar Shrestha
                  </div>
                  <div className="text-stone-500 font-medium text-base mb-3">
                    Deputy General Manager
                  </div>
                  <div className="text-stone-500 font-medium text-base mb-3">
                    Finance
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="px-3">
                    <Image
                      src="/team/104498_facebook_icon 6.png"
                      width={19}
                      height={19}
                      alt="icon"
                    />
                  </div>
                  <div className="px-3">
                    <Image
                      src="/team/104501_twitter_bird_icon 6.png"
                      width={19}
                      height={19}
                      alt="icon"
                    />
                  </div>
                  <div className="px-3">
                    <Image
                      src="/team/2559760_media_social_video_youtube_icon 6.png"
                      width={19}
                      height={19}
                      alt="icon"
                    />
                  </div>
                  <div className="px-3">
                    <Image
                      src="/team/367593_linkedin_business_network_social_icon 6.png"
                      width={19}
                      height={19}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row">
                <div>
                  <div className="mb-6 relative px-4">
                    <div className="image-wrapper">
                      <Image
                        src="/team/IMG-84b678112a0a63bf86f4579d816e8ab0-V_GvCBviA 1.png"
                        width={300}
                        height={280}
                        alt="Govinda_Gurung_Sir"
                      />
                    </div>
                    <div className="absolute top-[244px] left-[304px] ">
                      <Image
                        src="/team/Ellipse 45.png"
                        width={40}
                        height={40}
                        alt="Govinda_Gurung_Sir"
                      />
                      <div className="absolute top-[14px] left-[13px]">
                        <Image
                          src="/team/+.png"
                          width={14}
                          height={14}
                          alt="Govinda_Gurung_Sir"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-base text-green-600 mb-3">
                      Mr. Yagya Prakash Neupane
                    </div>
                    <div className="text-stone-500 font-medium text-base mb-3">
                      Deputy General Manager
                    </div>
                    <div className="text-stone-500 font-medium text-base mb-3">
                      Marketing and Sales
                    </div>
                    <div className="flex justify-center">
                      <div className="px-3">
                        <Image
                          src="/team/104498_facebook_icon 6.png"
                          width={19}
                          height={19}
                          alt="icon"
                        />
                      </div>
                      <div className="px-3">
                        <Image
                          src="/team/104501_twitter_bird_icon 6.png"
                          width={19}
                          height={19}
                          alt="icon"
                        />
                      </div>
                      <div className="px-3">
                        <Image
                          src="/team/2559760_media_social_video_youtube_icon 6.png"
                          width={19}
                          height={19}
                          alt="icon"
                        />
                      </div>
                      <div className="px-3">
                        <Image
                          src="/team/367593_linkedin_business_network_social_icon 6.png"
                          width={19}
                          height={19}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-6 relative px-4">
                    <div className="image-wrapper">
                      <Image
                        src="/team/Dirgha_Sir 1.png"
                        width={280}
                        height={280}
                        alt="Govinda_Gurung_Sir"
                      />
                    </div>
                    <div className="absolute top-[244px] left-[304px] ">
                      <Image
                        src="/team/Ellipse 45.png"
                        width={40}
                        height={40}
                        alt="Govinda_Gurung_Sir"
                      />
                      <div className="absolute top-[14px] left-[13px]">
                        <Image
                          src="/team/+.png"
                          width={14}
                          height={14}
                          alt="Govinda_Gurung_Sir"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-base text-green-600 mb-3">
                      Mr. Dirgha Bahadur Aryal
                    </div>
                    <div className="text-stone-500 font-medium text-base mb-3">
                      Deputy General Manager
                    </div>
                    <div className="text-stone-500 font-medium text-base mb-3">
                      Operation and Service
                    </div>
                    <div className="flex justify-center">
                      <div className="px-3">
                        <Image
                          src="/team/104498_facebook_icon 6.png"
                          width={19}
                          height={19}
                          alt="icon"
                        />
                      </div>
                      <div className="px-3">
                        <Image
                          src="/team/104501_twitter_bird_icon 6.png"
                          width={19}
                          height={19}
                          alt="icon"
                        />
                      </div>
                      <div className="px-3">
                        <Image
                          src="/team/2559760_media_social_video_youtube_icon 6.png"
                          width={19}
                          height={19}
                          alt="icon"
                        />
                      </div>
                      <div className="px-3">
                        <Image
                          src="/team/367593_linkedin_business_network_social_icon 6.png"
                          width={19}
                          height={19}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>
      <About />
    </>
  );
}
