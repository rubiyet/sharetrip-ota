import { FlightDetailsData } from "@/json";
import FlightDetailsCard from "@/components/booking/flight-details/FlightDetailsCard";

const FlightDetails = () => (
  <div className="overflow-y-auto">
    <FlightDetailsCard flight={FlightDetailsData[0]} />
  </div>
);

export default FlightDetails;
