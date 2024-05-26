import { BsDot } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

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
      <div className="flex justify-between items-center bg-white px-4 py-5 rounded-b-lg">
        <div className="flex items-center space-x-3 w-full">
          <div className="flex items-center justify-center w-8 h-9">
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                opacity="0.5"
                cx="7"
                cy="18"
                rx="4"
                ry="2"
                fill="#9BA6B2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.00377 0C10.7135 0.0180664 13.75 3.14514 13.75 7C13.75 9.18384 12.805 11.3662 11.5846 12.8939L11.4998 13L7.55324 17.7051C7.53394 17.7295 7.51369 17.7527 7.4925 17.7744C7.47414 17.7932 7.45531 17.811 7.43553 17.8278C7.39127 17.8654 7.34419 17.8975 7.29428 17.9233C7.27968 17.9312 7.26461 17.9385 7.24908 17.9451L7.218 17.9575L7.18504 17.9691C7.12054 17.9896 7.05462 18 6.98823 18C6.88323 18 6.77917 17.974 6.68218 17.9233C6.58519 17.8727 6.49714 17.7986 6.42322 17.7051L2.50016 13L2.40081 12.8755C1.18227 11.3513 0.25 9.18445 0.25 7C0.25 3.13403 3.27187 0 7.00377 0ZM7 9C8.5533 9 9.8125 7.7408 9.8125 6.1875C9.8125 4.6342 8.5533 3.375 7 3.375C5.4467 3.375 4.1875 4.6342 4.1875 6.1875C4.1875 7.7408 5.4467 9 7 9Z"
                fill="#9BA6B2"
              />
            </svg>
          </div>
          <div className="bg-[#F5F7FA] text-[13px] leading-[18px] grow px-4 pt-[10px] pb-3 flex items-center justify-between">
            <div className="font-medium space-x-1 text-[#1A2B3D]"><span>Departure from</span><span>{flight.fromCity}</span></div>
            <div className="font-medium space-x-1 text-[#1A2B3D]"><span>{flight.fromTerminal}</span><span>:</span><span className="font-normal">{flight.fromTerminalName}</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetailsCard;
