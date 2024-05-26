import { BsDot } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi';

const FlightDetailsCard = ({ flight }) => {
  return (
    <div className="flex justify-between items-center bg-white px-5 py-4 rounded-t-lg">
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
      <div className="text-xs font-medium leading-4 text-[#1882FF] bg-[#E8F3FF] p-2 rounded-full">{flight.totalDuration}</div>
    </div>
  );
}

export default FlightDetailsCard;