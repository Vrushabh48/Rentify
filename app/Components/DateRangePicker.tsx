import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Date Range Picker</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {/* Start Date Picker */}
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date ?? undefined)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          dateFormat="yyyy/MM/dd"
        />
        
        {/* End Date Picker */}
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date ?? undefined)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
          dateFormat="yyyy/MM/dd"
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        {startDate && endDate ? (
          <p>
            Selected Range: {startDate.toLocaleDateString()} -{" "}
            {endDate.toLocaleDateString()}
          </p>
        ) : (
          <p>Select a date range</p>
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;
