import Header from "@/components/Header";
import ChartContainer from "@/components/ChartContainer";
import TimeSelector from "@/components/TimeSelector";

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
