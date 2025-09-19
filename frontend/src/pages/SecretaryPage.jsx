import React, { useEffect, useState } from "react";
import { getPassengers, addPassenger, updatePassenger, deletePassenger, getExceptions, addException } from "../api";

export default function SecretaryPage() {
  const [passengers, setPassengers] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [station, setStation] = useState("");

  useEffect(() => fetchPassengers(), []);

  const fetchPassengers = async () => {
    const { data } = await getPassengers();
    setPassengers(data);
  };

  const handleAdd = async () => {
    await addPassenger({ name, phone, station, days: [] });
    setName(""); setPhone(""); setStation("");
    fetchPassengers();
  };

  const handleDelete = async (id) => {
    await deletePassenger(id);
    fetchPassengers();
  };

  return (
    <div>
      <h1>Secretary Page</h1>
      <input placeholder="שם" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="טלפון" value={phone} onChange={e=>setPhone(e.target.value)} />
      <input placeholder="תחנה" value={station} onChange={e=>setStation(e.target.value)} />
      <button onClick={handleAdd}>הוסף נוסעת</button>

      <ul>
        {passengers.map(p => (
          <li key={p._id}>
            {p.name} | {p.phone} | {p.station}
            <button onClick={()=>handleDelete(p._id)}>מחק</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
