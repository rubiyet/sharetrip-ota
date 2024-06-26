import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import FlightDetailsRow from "@/components/booking/flight-details/flight-Details-Card/FlightDetailsRow";
import FlightDetailsFirstCol from "@/components/booking/flight-details/flight-Details-Card/FlightDetailsFirstCol";
import FlightDetailsSecondCol from "@/components/booking/flight-details/flight-Details-Card/FlightDetailsSecondCol";

const FlightDetailsCard = ({ flight }) => {
  return (
    <div>
      <div className="flex justify-between items-center bg-white px-5 py-4 rounded-t-lg border-b border-color-800">
        <div className="flex items-center space-x-4">
          <div className="bg-color-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm text-white">
            1
          </div>
          <div>
            <div className="flex items-center text-color-100 text-lg font-semibold space-x-1 leading-[26px]">
              <span>{flight.fromIata}</span>
              <HiArrowRight />
              <span>{flight.toIata}</span>
            </div>
            <div className="flex items-center text-color-200 text-[13px] space-x-1 leading-[18px]">
              <span>{flight.type}</span>
              <BsDot />
              <span>{flight.date}</span>
              <BsDot />
              <span>{flight.stoppage}</span>
            </div>
          </div>
        </div>
        <div className="text-xs font-medium leading-4 text-color-600 bg-color-700 p-2 rounded-full">
          {flight.totalDuration}
        </div>
      </div>
      <div className="bg-white px-4 py-5 rounded-b-lg space-y-3">
        <FlightDetailsRow
          iconUrl={"https://i.ibb.co/CJ37n1n/Location-Icon1.png"}
          title={"Departure from"}
          city={flight.fromCity}
          terminal={flight.fromTerminal}
          terminalName={flight.fromTerminalName}
        />
        {flight.trip.map((trip, index) => (
          <div key={index}>
            <div className="flex space-x-3">
                <Image
                  src={"https://i.ibb.co/MRNy6RX/" + flight.airlines + ".png"}
                  alt={flight.airlines}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              <div className="grid grid-cols-3 gap-3 grow">
                <FlightDetailsFirstCol
                  title={`${trip.departureIata} - ${trip.arrivalIata}`}
                  content={trip.duration}
                />
                <FlightDetailsFirstCol
                  title={trip.departureTime}
                  content={trip.departureDate}
                />
                <FlightDetailsFirstCol
                  title={trip.arrivalTime}
                  content={trip.arrivalDate}
                />
              </div>
            </div>
            <div className="flex items-stretch space-x-3">
              <div className="flex flex-col items-center">
                <div className="flex-grow w-0.5 bg-color-1000"></div>
                <Image
                  src={"https://i.ibb.co/1GLfTBJ/plane-icon.png"}
                  alt={"icon"}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="flex-grow w-0.5 bg-color-1000"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 grow py-4">
                <FlightDetailsSecondCol
                  title={trip.airlines}
                  content={trip.flight}
                />
                <FlightDetailsSecondCol
                  title={trip.airlines}
                  flightClass={trip.class}
                />
                {trip.stoppageMessage && (
                  <div className="col-span-3 border border-color-300 bg-color-400 py-2 px-3 rounded-[6px] flex items-center space-x-2">
                    <Image
                      src={"https://i.ibb.co/Thd9hJd/Warning.png"}
                      alt={"Warning"}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-color-500 text-xs leading-4">
                      {trip.stoppageMessage}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {trip?.layover?.length > 0 &&
              trip?.layover?.map((lay, index) => (
                <FlightDetailsRow
                  key={index}
                  iconUrl={"https://i.ibb.co/CJ37n1n/Location-Icon1.png"}
                  title={"Layover at"}
                  city={lay?.layoverCity}
                  layoverTime={lay?.layoverTime}
                  terminalName={lay?.layoverTerminalName}
                />
              ))}
          </div>
        ))}
        <FlightDetailsRow
          iconUrl={"https://i.ibb.co/8KHxhY9/Location-Icon.png"}
          title={"Destination at"}
          city={flight.toCity}
          terminal={flight.toTerminal}
          terminalName={flight.toTerminalName}
        />
      </div>
    </div>
  );
};

export default FlightDetailsCard;
