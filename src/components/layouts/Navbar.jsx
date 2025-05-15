import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar({ showSidebar, setShowSidebar }) {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <nav className={`w-full ${isDarkMode ? "bg-[#3F51B5]" : "bg-black"} px-4 md:px-6 py-4 h-20 flex items-center justify-between shadow-md`}>      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Menu toggle for small screens */}
        <button
          className="md:hidden p-2 text-white hover:bg-[#4253B9] rounded-lg z-50 relative h-12 w-12"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6">
            {/* Animated hamburger icon */}
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out 
      ${showSidebar ? 'rotate-45' : '-translate-y-2'}`} />

            {/* Middle bar */}
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out 
      ${showSidebar ? 'opacity-0' : ''}`} />

            {/* Bottom bar */}
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out 
      ${showSidebar ? '-rotate-45' : 'translate-y-2'}`} />
          </div>
        </button>

        {/* Logo*/}
        <div className="flex items-center h-[49px]">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-8 w-[100px] md:h-[49px] md:w-[161px]"
          />
        </div>

        {/* Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-3 p-2 md:p-5">
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-to-r cursor-pointer font-display font-semibold text-center 
               from-[#C85ED8] to-[#A079F8] rounded-full px-4 py-2 md:p-5 mt-1
               text-sm md:text-base"
          >
            Home
          </Button>
          <span className="font-display hidden md:flex p-2 text-lg items-center justify-center 
                   font-semibold text-white bg-transparent">
            Ad Creative History
          </span>
        </div>
      </div>

      {/* Right section - Actions */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Competitor Button - Hidden on mobile */}
        <Button
          variant="default"
          size="sm"
          className="hidden md:flex text-white cursor-pointer font-display font-semibold rounded-full h-8 px-4 bg-[linear-gradient(284.35deg,#C85ED8_-20.82%,#6D3DDA_108.46%)]"
        >
          <span className="w-6 h-6 flex items-center mb-1 justify-center">
            <img src="/glass.svg" alt="magnifying glass" />
          </span>
          <span className="hidden lg:inline ml-2">Emulate Competitor Ad</span>
        </Button>

        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-300">
              <Globe className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline text-sm font-display font-medium">English</span>
              <span className="text-xs ml-1">▼</span>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>

        {/* Dark Mode Toggle */}
        <div
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-12 h-6 rounded-full p-1 cursor-pointer flex ${isDarkMode ? "bg-[#1F296A] justify-end" : "bg-gray-300 justify-start"
            }`}
        >
          <div className="h-4 w-4 rounded-full bg-[#F4DC9F]" />
        </div>

        {/* User Avatar */}
        <div className="p-0.5 bg-gradient-to-r from-[#C85ED8] to-[#A079F8] rounded-full inline-block">
          <div className="bg-[#3F51B5] font-nun font-semibold rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-white text-sm">
            AH
          </div>
        </div>
      </div>
    </nav>
  );
}