import Header from "@/components/Header/Header";
import ChartContainer from "@/components/Chart/ChartContainer";
import TimeSelector from "@/components/TimeSelector/TimeSelector";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full">
        <TimeSelector />
        <ChartContainer />
      </main>
    </>
  );
}
