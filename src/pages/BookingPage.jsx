import { useState } from "react";

export default function BookingForm() { const [booking, setBooking] = useState({ date: "", time: "17:00", guests: "2", occasion: "Birthday", });

const [availableTimes, setAvailableTimes] = useState([ "17:00", "18:00", "19:00", "20:00", "21:00", ]);

function handleChange(event) { const { name, value } = event.target;

setBooking((previousBooking) => ({ ...previousBooking, [name]: value, })); }

function handleSubmit(event) { event.preventDefault();

alert(`Дата: ${booking.date}\n` + `Время: ${booking.time}\n` + `Гостей: ${booking.guests}\n`
   + `Повод: ${booking.occasion}` ); }

return ( <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "12px", }}>

<label htmlFor="res-date">Выберите дату</label> <input type="date" id="res-date" name="date" value={booking.date} onChange={handleChange} required />

<label htmlFor="res-time">Выберите время</label> <select id="res-time" name="time" value={booking.time} onChange={handleChange} > {availableTimes.map((time) => ( <option key={time} value={time}> {time} </option> ))} </select>

<label htmlFor="guests">Количество гостей</label> <select id="guests" name="guests" value={booking.guests} onChange={handleChange} > <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> </select>

<label htmlFor="occasion">Повод</label> <select id="occasion" name="occasion" value={booking.occasion} onChange={handleChange} > <option value="Birthday">День рождения</option> <option value="Anniversary">Годовщина</option> </select>

<button type="submit">Забронировать столик</button> </form> ); }

