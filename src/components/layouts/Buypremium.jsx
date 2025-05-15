import { NotebookPen, PencilRuler, X } from "lucide-react";
import uiData from "../../assets/ui-data.json";

export default function SubscriptionUI() {
  const { plan, upgradeLabel, } = uiData.subscription;
  return (
    <div className="bg-gradient-purple py-4 px-4 rounded-lg mt-10 text-white ">
      {/* Header with border reaching corners */}
      <div className="-mx-4 px-4 mb-4 border-b border-white/30 pb-3">
        <div className="flex justify-between items-center">
          <div className="text-xs font-display font-semibold">{plan}</div>
          <button className="bg-white font-display text-purple-800 rounded-xl px-5 py-2 text-xs font-medium shadow-sm hover:bg-purple-100 transition">
            {upgradeLabel}
          </button>
        </div>
      </div>

      {/* Content below */}
      <div className="flex rounded-full bg-transparent border border-white text-white overflow-hidden">
        {/* Completed section */}
        <div className="flex items-center justify-center py-1 px-3 md:px-1 lg:py-2 lg:px-3 gap-2">
          <NotebookPen size={22} className="text-yellow-600 rounded bg-[#1F296A]" />
          <span className="font-medium">20/300</span>
        </div>

        {/* Divider */}
        <div className="w-px bg-white opacity-40"></div>

        {/* Failed section */}
        <div className="flex items-center justify-center py-1 px-4 md:p-1 lg:py-2 lg:px-3 rounded gap-2">
          <PencilRuler size={22} className="text-yellow-600 rounded-full bg-[#1F296A]" />
          <span className="font-medium">15/300</span>
        </div>
      </div>
    </div>
  );
}