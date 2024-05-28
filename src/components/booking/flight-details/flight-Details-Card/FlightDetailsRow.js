import Image from "next/image";

const FlightInfoRow = ({
  iconUrl,
  title,
  city,
  terminal,
  terminalName,
  layoverTime,
}) => (
  <div className="flex items-center space-x-3 w-full">
    <div className="flex items-center justify-center">
      <Image
        src={iconUrl}
        alt="icon"
        width={32}
        height={36}
        className="w-8 h-9"
      />
    </div>
    <div className="bg-color-900 text-[13px] leading-[18px] grow px-4 pt-[10px] pb-3 flex items-center justify-between">
      <div className="font-medium space-x-1 text-color-100">
        <span>{title}</span>
        <span>{city}</span>
        {layoverTime && <span>: {layoverTime}</span>}
      </div>
      <div className="font-medium space-x-1 text-color-200">
        {terminal && <span>{terminal}:</span>}
        <span className="font-normal">{terminalName}</span>
      </div>
    </div>
  </div>
);

export default FlightInfoRow;
