import React, { useEffect, useState } from "react";
import { getPassengers, getExceptions } from "../api";

export default function DriverPage() {
  const [passengers, setPassengers] = useState([]);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  useEffect(() => {
    const fetchData = async () => {
      const { data: allPassengers } = await getPassengers();
      const { data: exceptions } = await getExceptions();

      let todayPassengers = allPassengers.filter(p => p.days.includes(today));

      exceptions.forEach(exc => {
        if (exc.status === "absent" && todayPassengers.find(p => p._id === exc.passengerId)) {
          todayPassengers = todayPassengers.filter(p => p._id !== exc.passengerId);
        }
      });

      setPassengers(todayPassengers);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Driver Page</h1>
      <p>מספר נוסעות היום: {passengers.length}</p>
      <ul>
        {passengers.map(p => (
          <li key={p._id}>{p.name} | {p.station}</li>
        ))}
      </ul>
      <div id="map" style={{ width: "600px", height: "400px", background: "#eee" }}>
        {/* כאן אפשר לשלב Google Maps API ולהציג תחנות עם קו */}
      </div>
    </div>
  );
}
