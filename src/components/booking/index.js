import Filters from "@/components/booking/filters";
import FlightDetails from "@/components/booking/flight-details";

export default function Home() {
  return (
    <div className="flex w-9/12 m-auto h-full space-x-6">
      <Filters />
      <FlightDetails flight="Flight details" />
    </div>
  );
}
