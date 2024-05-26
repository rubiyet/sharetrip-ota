import Breadcrumbs from "@/components/common/others/Breadcrumbs";
import Link from "next/link";
import { Typography } from "@mui/material";

const FlightDetails = ({ flight }) => {
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

  return (
    <div className="overflow-y-auto grow pt-1 space-y-5">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
};

export default FlightDetails;
