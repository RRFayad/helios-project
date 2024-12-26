import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TimeSelector from "@/components/TimeSelector";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full">
        {/* <TimeSelector /> */}
        <div className="grid md:grid-cols-[1fr_204px]">
          <div>AA</div>
          <Sidebar />
        </div>
      </main>
    </>
  );
}
