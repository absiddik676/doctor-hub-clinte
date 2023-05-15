import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../../Provider/AuthProvider';

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext)
    const handleSubmit = e =>{
        e.preventDefault();
        const form  = e.target;
        const name = form.name.value;
        const email =  form.email.value;
        const time = form.time.value;
        const doctor = form.doctor.value;
        const appointmentInfo = {name,email,time,doctor,startDate}
        console.log(appointmentInfo);

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(appointmentInfo)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
        })
        console.log(startDate);
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-lg font-bold mb-4">Schedule an Appointment</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name='name'
          defaultValue={user.displayName}
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="doctor">
          Doctor Name
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="doctor"
          name='doctor'
        >
          <option value="">Select a doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Johnson">Dr. Johnson</option>
          <option value="Dr. Brown">Dr. Brown</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name='email'
          defaultValue={user.email}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Date
        </label>
      <DatePicker className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
          Time
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="time"
          type="time"
          name='time'
          placeholder="Select a time"
        
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>

        </div>
    );
};

export default Appointment;