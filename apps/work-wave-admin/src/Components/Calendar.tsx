import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';

interface CalendarProps {
    periods: { start: Date; end: Date, label: String, category: String }[];
}

const Calendar: React.FC<CalendarProps> = ({ periods }) => {
    // Create a calendar grid
    const currentDate = new Date();
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const weekStart = startOfWeek(monthStart);
    const weekEnd = endOfWeek(monthEnd);

    const calendarGrid: Date[][] = [];
    let currentDay = weekStart;
    let startDay  = new Date(currentDay);

    while (currentDay <= weekEnd) {
        const week: Date[] = [];

        for (let i = 0; i < 7; i++) {
            week.push(currentDay);
            currentDay = addDays(currentDay, 1);
        }

        calendarGrid.push(week);
    }

    // Helper function to check if a date is within a period
    const isWithinPeriod = (date: Date, period: { start: Date; end: Date }) => {
        return date >= period.start && date <= period.end;
    };

    return (
        <div>
            <table style={{ width: "100%" }}>
                <thead>
                <tr>
                    <th colSpan={7}>
                        Date period {format(startDay, 'D/MM/YYYY')} to {format(currentDay, 'D/MM/YYYY')}
                    </th>
                </tr>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                </thead>
                <tbody>
                {calendarGrid.map((week, rowIndex) => (
                    <tr key={rowIndex}>
                        {week.map((day, colIndex) => (
                            <td key={colIndex}>
                                {format(day, 'D')}
                                <div className="periods">
                                    {periods.map((period, periodIndex) => {
                                        console.log(day, period);
                                        if (isWithinPeriod(day, period)) {
                                            return <div key={periodIndex} className="period">{format(period.start, "HH:mm")} - {format(period.end, "HH:mm")} {period.label}</div>;
                                        }
                                        return null;
                                    })}
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <style>
                {`
          table {
            border-collapse: collapse;
          }
          th,
          td {
            border: 1px solid #ccc;
            padding: 5px;
            text-align: center;
          }
          .periods {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100px;
          }
          .period {
            background-color: #0074d9;
            height: 20px;
            width: 100%;
            color: #fff;
            font-weight:bold;
          }
        `}
            </style>
        </div>
    );
};

export default Calendar;