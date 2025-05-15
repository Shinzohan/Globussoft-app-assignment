// Icon imports
import {
  ChevronDown,
  Crown,
  Laugh,
  LayoutGrid,
  RectangleHorizontal,
  RectangleVertical,
  Square
} from 'lucide-react';
import { useState } from 'react';
import SubscriptionUI from './Buypremium';
import uiData from "../../assets/ui-data.json";


export default function AdCreatorSidebar() {
  // State management for form controls
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [imageStyle, setImageStyle] = useState('Auto');
  const [generationPace, setGenerationPace] = useState('Fast');
  const [adCount, setAdCount] = useState(1);
  return (
    <div className="w-72 grade overflow-y-auto text-white p-4 flex flex-col h-full rounded-2xl">
      {/* Tab Navigation */}
      <nav className="flex mb-5 -mx-4 px-4 border-b border-white/30 pb-1">
        <button className="flex-1 py-2 text-sm font-semibold font-display">
          Ad Copy
        </button>
        <button className="relative text-sm text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 font-display font-semibold after:h-1 after:w-full after:bg-gradient-to-r after:from-[#C85ED8] after:to-[#A079F8]">
          Ad Creative
        </button>
        <button className="flex-1 py-2 text-sm font-semibold font-display">
          Ad Video
        </button>
      </nav>

      {/* Platform Selection */}      {/* Platform Selection Form Group */}
      <div className="form-group mb-4">
        <label className="flex text-white items-center font-public font-normal text-xs mb-2">
          Select Platform
          <span className="ml-1">
            <img src="/Question.svg" className="h-3 w-3 opacity-50" alt="Help" />
          </span>
        </label>

        <div className="relative">
          <select className="w-full bg-[#3445A1] font-public font-normal text-white/60 rounded px-3 py-2 appearance-none text-sm pr-24">
            <option>Select ad platform</option>
          </select>

          <button className="absolute font-public hidden font-medium bottom-12 right-1 lg:flex items-center gap-1 text-xs text-white rounded bg-[#3445A1] px-2 py-1 z-10">
            <img src="/Spine.svg" alt="Reset" className="h-3 w-3" />
            Reset all options
          </button>

          <div className="absolute right-3 top-2 pointer-events-none">
            <span className="text-xs"><ChevronDown /></span>
          </div>
        </div>
      </div>
      
      {/* Brand Name Input */}
      <div className="form-group mb-4">
        <label className="flex items-center font-public font-medium text-xs mb-2">
          Brand Name
          <span className="ml-1">
            <img src="/Question.svg" className="h-3 w-3 opacity-50" alt="Help" />
          </span>
        </label>
        <input
          type="text"
          placeholder="Enter brand name"
          className="w-full bg-[#3445A1] text-white font-public font-medium rounded px-3 py-2 text-sm"
        />
      </div>

      {/* Brand Description Input */}
      <div className="form-group mb-4">
        <label className="flex items-center font-public font-medium text-xs mb-2">
          Brand Description
          <span className="ml-1">
            <img src="/Question.svg" className="h-3 w-3 opacity-50" alt="Help" />
          </span>
        </label>
        <div className="relative">
          <textarea
            placeholder="Enter description"
            className="w-full bg-[#3445A1] text-white font-public font-medium resize-none rounded px-3 py-2 text-sm"
            rows={2}
          />
          <div className="absolute bottom-1 right-2 text-xs text-white/50">
            50 characters
          </div>
        </div>
        <div className="-mx-4 px-4 mb-4 border-b border-white/30 pb-3" />
      </div>

            
      {/* Aspect Ratio Selection */}
      <div className="form-group mb-4">
        <label className="flex items-center font-public font-medium text-xs mb-2">
          Aspect Ratio
          <span className="ml-1 text-purple-300 text-xs">
            <img src="/Question.svg" className="h-3 w-3 opacity-50" alt="Help" />
          </span>
        </label>
        <div className="flex space-x-1">
          {uiData.aspectRatios.map(({ value, icon, label }) => {
            // Map icon strings to components
            let IconComponent = null;
            if (icon === 'Square') IconComponent = Square;
            if (icon === 'RectangleVertical') IconComponent = RectangleVertical;
            if (icon === 'RectangleHorizontal') IconComponent = RectangleHorizontal;
            return (
              <div key={value} className={`p-[1px] rounded-md ${aspectRatio === value ? 'bg-gradient-to-r from-[#C85ED8] to-[#A079F8]' : 'bg-transparent'}`}>
                <button
                  className="w-full rounded-md bg-[#3445A1] px-3 py-1 text-xs flex items-center border border-transparent"
                  onClick={() => setAspectRatio(value)}
                >
                  {IconComponent && <IconComponent className="opacity-50 mr-1" />} {label}
                </button>
              </div>
            );
          })}
          <div className="rounded-md border hidden lg:flex border-white/20 bg-[#3445A1] p-1 items-center">
            <ChevronDown size={17} />
          </div>
        </div>
      </div>

           
      {/* Image Style Selection */}
      <div className="form-group mb-4">
        <label className="flex items-center font-public font-medium text-xs mb-2">
          Image Style
          <span className="ml-1">
            <img src="/Question.svg" className="h-3 w-3 opacity-50" alt="Help" />
          </span>
        </label>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-2 font-display font-medium">
          {uiData.imageStyles.map(({ value, icon, label, type }) => {
            // Map icon strings to components
            let IconComponent = null;
            if (icon === 'LayoutGrid') IconComponent = LayoutGrid;
            if (icon === 'Laugh') IconComponent = Laugh;
            return (
              <div key={value} className={`p-[1px] rounded ${imageStyle === value ? 'bg-gradient-to-r from-[#C85ED8] to-[#A079F8]' : 'bg-transparent'}`}>
                <button
                  className="w-full py-2 px-2 rounded text-xs flex justify-center items-center bg-[#3445A1]"
                  onClick={() => setImageStyle(value)}
                >
                  <span className="mr-1">
                    {type === 'img' ? <img src={icon} className="h-4 w-4" /> : IconComponent && <IconComponent size={15} />}
                  </span> {label}
                </button>
              </div>
            );
          })}
        </div>
      </div>

            
      {/* Generation Pace Selection */}
      <div className="form-group mb-4">
        <label className="flex items-center font-public font-medium text-xs mb-2">
          Generation Pace
          <span className="ml-1 text-purple-300 text-xs">
            <img src="/Question.svg" className="h-3 w-3 opacity-50" alt="Help" />
          </span>
        </label>

        <div className="flex gap-2 font-public font-normal">
          {/* Fast Generation Option */}
          <div className={`flex-1 p-[1px] rounded-l ${generationPace === 'Fast' ? 'bg-gradient-to-r from-[#C85ED8] to-[#A079F8]' : 'bg-transparent'}`}>
            <button
              className="w-full py-2 px-2 rounded-l text-xs bg-[#3445A1] relative"
              onClick={() => setGenerationPace('Fast')}
            >
              <Crown
                size={15}
                className="absolute bottom-4.5 left-13 lg:left-16 p-0.5 rounded-bl-[5px] text-white z-10 bg-gradient-to-r from-[#C85ED8] to-[#A079F8]"
              />
              Fast
            </button>
          </div>

          {/* Medium Button */}
          <div className={`flex-1 p-[1px] ${generationPace === 'Medium' ? 'bg-gradient-to-r from-[#C85ED8] to-[#A079F8]' : 'bg-transparent'}`}>
            <button
              className="w-full py-2 px-2 text-xs bg-[#3445A1]"
              onClick={() => setGenerationPace('Medium')}
            >
              Medium
            </button>
          </div>

          {/* Slow Button */}
          <div className={`flex-1 p-[1px] rounded-r ${generationPace === 'Slow' ? 'bg-gradient-to-r from-[#C85ED8] to-[#A079F8]' : 'bg-transparent'}`}>
            <button
              className="w-full py-2 px-2 rounded-r text-xs bg-[#3445A1]"
              onClick={() => setGenerationPace('Slow')}
            >
              Slow
            </button>
          </div>
        </div>
      </div>

          
      {/* Ad Count Selection */}
      <div className="form-group mb-4">
        <label className="flex items-center text-xs font-public font-medium mb-2">
          Number of Ad Creatives
          <span className="ml-1 text-purple-300 text-xs">
            <img src="/Question.svg" className="h-3 w-3 opacity-50" alt="Help" />
          </span>
        </label>
        <div className="flex space-x-2">
          {uiData.adCounts.map(num => (
            <div
              key={num}
              className={`p-[1px] rounded-md ${adCount === num ? 'bg-gradient-to-r from-[#C85ED8] to-[#A079F8]' : 'bg-transparent'}`}
            >
              <button
                className="w-8 h-8 rounded-md flex items-center justify-center text-xs bg-[#3445A1]"
                onClick={() => setAdCount(num)}
              >
                {num}
              </button>
            </div>
          ))}
        </div>
      </div>

           
      {/* Color Palette Selection */}
      <div className="form-group mb-4">
        <div className="mb-4">
          <label className="flex items-center font-public font-medium text-xs mb-2">
            Color Palette
            <span className="ml-1 text-purple-300 text-xs">
              <img src="/Question.svg" className="h-3 w-3 opacity-50" alt="Help" />
            </span>
          </label>
          <div className="flex justify-between items-center">
            {/* Color Selection Container */}
            <div className="flex items-center mb-2 bg-[#3445A1] w-58">
              <button className="rounded px-4 py-1 text-xs mr-2 font-public font-normal">Auto</button>
              {/* Color Swatches */}
              <div className="flex gap-[3px] p-2 bg-[#2D3A84] w-full items-center justify-center">
                {uiData.colorPalette.map((c, i) => (
                  <div key={i} className="w-5 h-5 rounded-[2px]" style={{ backgroundColor: c.color }}></div>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-white/20 flex bg-[#3445A1] p-2 h-10 items-center mb-2 ml-2">
              <ChevronDown size={17} className="text-white" />
            </div>
          </div>
          <div className="-mx-4 px-4 mb-4 border-b border-white/30 pb-3" />
        </div>
      </div>


      {/* Bottom Section */}
      <SubscriptionUI />
    </div>
  );
}