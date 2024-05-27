const FlightInfoSecondCol = ({ title, content, flightClass }) => (
  <div className="space-y-[6px]">
    <div className="text-[#5A6573] text-sm leading-[16px] font-medium">{title}</div>
    {content && (
      <div className="text-[#5A6573] text-sm leading-[18px]">{content}</div>
    )}
    {flightClass && (
      <div className="text-[#5A6573] text-sm leading-[18px] space-x-1">
        <span>Class :</span>
        <span className="font-medium">{flightClass}</span>
      </div>
    )}
  </div>
);

export default FlightInfoSecondCol;