import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useTheme } from "../../context/ThemeContext";

export default function Dashboard() {
  const { isDarkMode } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? "bg-[#1F296A]" : "bg-slate-900"} overflow-hidden`}>
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

      {/* Slide-out sidebar for mobile */}
      <div className={`md:hidden fixed inset-0 z-10 overflow-y-auto bg-black/90 transition-all duration-300 ${showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div className={`flex items-center justify-center min-h-screen transform transition-transform duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}>
          <Sidebar />
        </div>
      </div>

      {/* Main app layout */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-5rem)] overflow-hidden">
        {/* Navigation sidebar - desktop only */}
        <aside className="hidden md:flex flex-shrink-0 w-full md:w-64 lg:w-96 bg-transparent m-3">
          <Sidebar />
        </aside>

        {/* Main content */}
        <div className={`flex flex-col flex-1 h-full min-h-0 p-2 md:p-4 items-center justify-center ${isDarkMode ? "bg-[#1F296A]" : "bg-slate-900"}`}>
          {/* Chat area */}
          <div className="overflow-y-auto flex flex-col items-center w-full px-2">
            <div className="w-full max-w-[800px] mt-4 md:mt-10">
              {/* User message */}
              <div className="flex flex-row items-end justify-end space-x-2">
                <div className="p-0.5 bg-gradient-to-r from-[#C85ED8] to-[#A079F8] rounded-full inline-block">
                  <div className="bg-[#3F51B5] font-public font-medium rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-white text-xs md:text-sm">
                    AH
                  </div>
                </div>
                <div className="bg-[#4253B9] text-white font-public text-sm md:text-base font-normal p-3 md:p-5 max-w-[70%] md:max-w-xs rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]">
                  Create at least 4 image similar to this
                </div>
              </div>

              {/* Genie character */}
              <div className="flex justify-end mb-4 md:mb-6">
                <img
                  src="/geni.svg"
                  alt="Blue genie character"
                  className="h-[180px] w-[150px] md:h-[261px] md:w-[214px] object-cover rounded-lg"
                />
              </div>

              {/* Assistant response */}
              <div className="flex items-start space-x-3 md:-translate-x-13 mb-2">
                <div className="flex-shrink-0">
                  <div className="p-0.5 bg-gradient-to-r from-[#C85ED8] to-[#A079F8] rounded-full inline-block">
                    <div className="bg-[#3F51B5] rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center">
                      <img src="/glass.svg" alt="glass" className="h-6 w-6 md:h-9 md:w-9 mb-1 md:mb-2" />
                    </div>
                  </div>
                </div>
                <p className="text-white mt-1 md:mt-2 text-sm font-public font-normal md:text-base">
                  Sure, here are a few images similar to the one you provided:
                </p>
              </div>

              {/* Image cards */}
              <div className="space-y-3 md:space-y-4">
                {/* AI response card */}
                <div className="bg-[#324094] w-full max-w-2xl rounded-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 relative bg-gradient-to-b from-[#3F51B5] to-[#673AB7] p-4 text-white flex items-center justify-center">
                      <div className="text-xs md:text-[13px] text-center font-public font-semibold">
                        I&rsquo;m still learning and can&rsquo;t create everything yet, especially photorealistic images of people or things that go against my guidelines. Let me know if you&rsquo;d like to try something else!

                      </div>
                      <img
                        src="/draw.svg"
                        alt="Customize"
                        className="absolute top-2 right-3 md:top-4 md:right-5 w-5 h-5 md:w-7 md:h-7"
                      />
                    </div>
                    <div className="w-full md:w-2/3 p-3 md:p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-[#C5BCFF] text-sm md:text-base font-medium font-public">Title Name</div>
                        <button className="text-white">
                          <img src="/more.svg" className="h-5 w-5 md:h-7 md:w-7" />
                        </button>
                      </div>
                      <div className="text-white/80 text-xs md:text-sm mt-4 md:mt-10 font-public font-normal">
                        Lorem ipsum dolor sit amet consectetur. Risus vitae elit sit tellus massa sit morbi pharetra. Lorem ipsum dolor sit amet consectetur. Risus vitae elit sit tellus massa sit morbi pharetra. Lorem ipsum dolor sit amet consectetur. Risus vitae.
                      </div>
                      <div className="flex justify-end mt-3 md:mt-4 space-x-2">
                        <button>
                          <img src="/mic.svg" className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                        <button>
                          <img src="/copy.svg" className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Generated image card */}
                <div className="bg-[#324094] rounded-2xl w-full max-w-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 bg-gray-800">
                      <img
                        src="/Genichat.svg"
                        alt="Genie with lamp"
                        className="object-cover h-48 md:h-full w-full"
                      />
                      <img
                        src="/draw.svg"
                        alt="Customize"
                        className="absolute top-2 right-3 md:top-4 md:right-5 w-5 h-5 md:w-7 md:h-7"
                      />
                    </div>
                    <div className="w-full md:w-2/3 p-3 md:p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-[#C5BCFF] text-sm md:text-base font-medium font-public">Title Name</div>
                        <button >
                          <img src="/more.svg" className="h-5 w-5 md:h-7 md:w-7" />
                        </button>
                      </div>
                      <div className="text-gray-300 text-xs md:text-sm mt-4 md:mt-10 font-public font-normal">
                        Lorem ipsum dolor sit amet consectetur. Risus vitae elit sit tellus massa sit morbi pharetra. Lorem ipsum dolor sit amet consectetur. Risus vitae elit sit tellus massa sit morbi pharetra. Lorem ipsum dolor sit amet consectetur. Risus vitae.
                      </div>
                      <div className="flex justify-end mt-3 md:mt-4 space-x-2">
                        <button>
                          <img src="/mic.svg" className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                        <button >
                          <img src="/copy.svg" className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt input area */}
          <div className="grade-1 rounded-lg p-3 md:p-5 w-full max-w-5xl mt-3 md:mt-4">
            <form className="flex flex-col md:flex-row  gap-2">
              <div className="flex flex-col flex-1 w-full">
                <label className="text-xs md:text-sm text-white ml-2 md:ml-4 font-normal font-public italic">
                  Prompt
                </label>
                <input
                  type="text"
                  name="text"
                  placeholder="Describe your ad copy. Get creative....."
                  className="bg-transparent outline-none text-sm md:text-lg text-white px-2 md:px-3 py-1 md:py-2 font-public italic font-normal w-full"
                />
              </div>
              <button
                type="submit"
                className="ml-0 cursor-pointer md:ml-2 flex bg-[#1F296A] items-center justify-center border-[#C85ED8] hover:bg-indigo-500 text-white font-medium rounded-full px-3 md:px-4 md:mt-4 md:h-10  transition-colors duration-200 border"
              >
                <img src="/glass.svg" className="w-6 h-6 md:w-9 md:h-9 mb-1 md:mb-1" />
                <span className="text-xs md:text-sm font-display font-medium ml-1">Generate</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}