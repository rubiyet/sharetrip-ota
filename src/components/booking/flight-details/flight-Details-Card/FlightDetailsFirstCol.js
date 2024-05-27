const FlightInfoFirstCol = ({ title, content }) => (
  <div className="space-y-[2px]">
    <div className="text-[#1A2B3D] leading-6 font-semibold">{title}</div>
    <div className="text-[#5A6573] text-sm leading-5 font-normal">
      {content}
    </div>
  </div>
);

export default FlightInfoFirstCol;