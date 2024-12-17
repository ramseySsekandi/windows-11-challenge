"use client"; // For client-side rendering in Next.js 13+

import { useState, useEffect } from "react";

interface TimeObject {
  currentTime: string;
  currentDate: string;
}

const Clock = () => {
  const [time, setTime] = useState<TimeObject>({
    currentTime: "",
    currentDate: "",
  });

  // Function to get the current time in 12-hour format (no seconds) and formatted date
  const getCurrentTime = (): TimeObject => {
    const now = new Date();

    // Format the current time (12-hour format with AM/PM, no seconds)
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 (midnight) to 12
    const currentTime = `${hours}:${minutes} ${ampm}`;

    // Format the current date (e.g., 'Tuesday December, 17')
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];

    const dayName = daysOfWeek[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();

    const currentDate = `${dayName} ${monthName}, ${day}`;

    return { currentTime, currentDate };
  };

  // useEffect to update the time every minute
  useEffect(() => {
    setTime(getCurrentTime());

    // Update every 1 minute
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
     <p className="text-8xl">
       {time.currentTime}
      </p>
      <p className="text-3xl">
       {time.currentDate}
      </p> 
    </>
  );
};

export default Clock;
