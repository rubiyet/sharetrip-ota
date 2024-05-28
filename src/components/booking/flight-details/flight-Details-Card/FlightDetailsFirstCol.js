const FlightInfoFirstCol = ({ title, content }) => (
  <div className="space-y-[2px]">
    <div className="text-color-100 leading-6 font-semibold">{title}</div>
    <div className="text-color-200 text-sm leading-5 font-normal">
      {content}
    </div>
  </div>
);

export default FlightInfoFirstCol;