import { useState, useEffect } from "react";
import "./DatePicker.css"
const Datepicker = () => {
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".datepicker")) {
                setShowCalendar(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleDateChange = (e) => {
        setDate(new Date(e.target.value));
    };

    const handleCalendarToggle = () => {
        setShowCalendar(!showCalendar);
    };

    return (
        <div className="datepicker">
            <input type="date" value={date.toISOString().substring(0, 10)} onChange={handleDateChange} />
            <button type="button" onClick={handleCalendarToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
            </button>

            {showCalendar && (
                <div className="calendar-container">
                    {/* Здесь можно добавить логику для рендеринга календаря */}
                </div>
            )}
        </div>
    );
};

export default Datepicker;
