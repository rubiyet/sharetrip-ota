import { BsDot } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

const FlightDetailsCard = ({ flight }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white px-5 py-4 rounded-t-lg border-b border-[#EBF0F5]">
        <div className="flex items-center space-x-4">
          <div className="bg-[#1882FF] rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm text-white">
            1
          </div>
          <div>
            <div className="flex items-center text-[#1A2B3D] text-lg font-semibold space-x-1 leading-[26px]">
              <span>{flight.fromIata}</span>
              <HiArrowRight />
              <span>{flight.toIata}</span>
            </div>
            <div className="flex items-center text-[#5A6573] text-[13px] space-x-1 leading-[18px]">
              <span>{flight.type}</span>
              <BsDot />
              <span>{flight.date}</span>
              <BsDot />
              <span>{flight.stoppage}</span>
            </div>
          </div>
        </div>
        <div className="text-xs font-medium leading-4 text-[#1882FF] bg-[#E8F3FF] p-2 rounded-full">
          {flight.totalDuration}
        </div>
      </div>
      <div className="bg-white px-4 py-5 rounded-b-lg space-y-3">
        <div className="flex items-center space-x-3 w-full">
          <div className="flex items-center justify-center">
            <Image
              src={"https://i.ibb.co/CJ37n1n/Location-Icon1.png"}
              alt="icon"
              width={32}
              height={36}
            />
          </div>
          <div className="bg-[#F5F7FA] text-[13px] leading-[18px] grow px-4 pt-[10px] pb-3 flex items-center justify-between">
            <div className="font-medium space-x-1 text-[#1A2B3D]">
              <span>Departure from</span>
              <span>{flight.fromCity}</span>
            </div>
            <div className="font-medium space-x-1 text-[#5A6573]">
              <span>{flight.fromTerminal}</span>
              <span>:</span>
              <span className="font-normal">{flight.fromTerminalName}</span>
            </div>
          </div>
        </div>
        {flight.trip.map((trip, index) => (
          <div key={index}>
            <div className="flex space-x-3">
              <Image
                src={"https://i.ibb.co/MRNy6RX/" + flight.airlines + ".png"}
                alt={flight.airlines}
                width={32}
                height={32}
              />
              <div className="grid grid-cols-3 gap-3 grow">
                <div className="">
                  <div className="text-[#1A2B3D] font-semibold">
                    {trip.departureIata} - {trip.arrivalIata}
                  </div>
                  <div className="text-[#5A6573] text-sm leading-5 font-normal">
                    {trip.duration}
                  </div>
                </div>
                <div className="">
                <div className="text-[#1A2B3D] font-semibold">
                    {trip.departureTime}
                  </div>
                  <div className="text-[#5A6573] text-sm leading-5 font-normal">
                    {trip.departureDate}
                  </div>
                </div>
                <div className="">
                <div className="text-[#1A2B3D] font-semibold">
                    {trip.arrivalTime}
                  </div>
                  <div className="text-[#5A6573] text-sm leading-5 font-normal">
                    {trip.arrivalDate}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-stretch space-x-3">
              <div className="flex flex-col items-center">
                <div className="flex-grow w-0.5 bg-[#D8E1EB]"></div>
                <Image
                  src={"https://i.ibb.co/1GLfTBJ/plane-icon.png"}
                  alt={"kkk"}
                  width={32}
                  height={32}
                />
                <div className="flex-grow w-0.5 bg-[#D8E1EB]"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 grow py-4">
                <div className="space-y-[6px]">
                  <div className="text-[#3E4957] text-sm leading-[18px] font-medium">
                    {trip.airlines}
                  </div>
                  <div className="text-[#5A6573] text-sm leading-[18px]">
                    {trip.flight}
                  </div>
                </div>
                <div className="col-span-2 space-y-[6px]">
                <div className="text-[#5A6573] text-sm leading-[18px] font-medium">
                    {trip.airbusIndustries}
                  </div>
                  <div className="text-[#5A6573] text-sm leading-[18px] space-x-1">
                    <span>Class :</span>
                    <span className="font-medium">{trip.class}</span>
                  </div>
                </div>
                {trip.stoppageMessage && (
                  <div className="col-span-3 border border-[#FFE1C2] bg-[#FFEEDB] py-2 px-3 rounded-[6px] flex items-center space-x-2">
                                    <Image
                  src={"https://i.ibb.co/Thd9hJd/Warning.png"}
                  alt={"Warning"}
                  width={25}
                  height={20}
                />
                    <span className=" text-[#3E4957] text-xs leading-4">{trip.stoppageMessage}</span></div>
                )}
              </div>
            </div>
            {trip?.layover?.length > 0 &&
              trip?.layover?.map((lay, index) => (
                <div
                  className="flex items-center space-x-3 w-full pt-1"
                  key={index}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={"https://i.ibb.co/CJ37n1n/Location-Icon1.png"}
                      alt="icon"
                      width={32}
                      height={36}
                    />
                  </div>
                  <div className="bg-[#F5F7FA] text-[13px] leading-[18px] grow px-4 pt-[10px] pb-3 flex items-center justify-between">
                    <div className="font-medium space-x-1 text-[#1A2B3D]">
                      <span>Layover at</span>
                      <span>{lay?.layoverCity}:</span>
                      <span>{lay?.layoverTime}</span>
                    </div>
                    <div className="font-medium space-x-1 text-[#1A2B3D]">
                      <span>{lay?.layoverTerminalName}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
        <div className="flex items-center space-x-3 w-full">
          <div className="flex items-center justify-center w-8 h-9">
            <Image
              src={"https://i.ibb.co/8KHxhY9/Location-Icon.png"}
              alt="icon"
              width={32}
              height={36}
            />
          </div>
          <div className="bg-[#F5F7FA] text-[13px] leading-[18px] grow px-4 pt-[10px] pb-3 flex items-center justify-between">
            <div className="font-medium space-x-1 text-[#1A2B3D]">
              <span>Destination at</span>
              <span>{flight.toCity}</span>
            </div>
            <div className="font-medium space-x-1 text-[#5A6573]">
              <span>{flight.toTerminal}</span>
              <span>:</span>
              <span className="font-normal">{flight.toTerminalName}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetailsCard;
