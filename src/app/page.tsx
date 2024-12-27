"use client";

import Chart from "@/components/Chart";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TimeSelector from "@/components/TimeSelector";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full">
        <TimeSelector />
        <div className="grid grid-cols-[5fr_1fr] gap-x-10">
          <div className="flex w-full flex-row items-center justify-center">
            <div className="text-xs font-semibold [-webkit-transform:rotate(180deg)] [writing-mode:vertical-lr]">
              Weighted Avg price per kg
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="h-[301px] w-full">
                <Chart />
              </div>
            </div>
            <div className="text-xs font-semibold [-webkit-transform:rotate(180deg)] [writing-mode:vertical-lr]">
              Weighted Avg % Risk (WA%R)
            </div>
          </div>
          <Sidebar />
        </div>
      </main>
    </>
  );
}
