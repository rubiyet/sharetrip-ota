import Filters from "@/components/booking/filters";
import FlightDetails from "@/components/booking/flight-details";
import Breadcrumbs from "@/components/common/others/Breadcrumbs";
import Link from "next/link";

const breadcrumbs = [
  <Link key="home" href="/">
    Home
  </Link>,
  <Link key="booking" href="/booking">
    Booking History
  </Link>,
  <Link key="flight" href="/booking/flight-details">
    Flight
  </Link>,
  <span key="flight-details" color="#1882FF">
    STFL17121182045413
  </span>,
];

export default function Home() {
  return (
    <div className="flex w-9/12 m-auto h-full space-x-6">
      <Filters />
      <div className="overflow-y-auto grow pt-1 space-y-5">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <FlightDetails />
      </div>
    </div>
  );
}
