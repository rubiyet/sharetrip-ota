import { FlightDetailsData } from "@/json";
import FlightDetailsCard from "@/components/booking/flight-details/flight-Details-Card";

const FlightDetails = () => (
  <FlightDetailsCard flight={FlightDetailsData[0]} />
);

export default FlightDetails;
