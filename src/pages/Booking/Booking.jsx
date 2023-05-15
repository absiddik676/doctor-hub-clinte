import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {
    const [booking, setBooking] = useState([])
    const [updateData, setUpdateData] = useState(true)

    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [updateData])
    const handelPay = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ pay: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setUpdateData(!updateData)

            })
    }

    const handelDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/booking/${id}`,{
            method:'DELETE',
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setUpdateData(!updateData)
            })
    }
    return (
        <div>
            <div className="overflow-x-auto max-w-7xl mx-auto mt-10 w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Doctor Name </th>
                            <th> Time </th>
                            <th> Date </th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(book => <BookingRow
                                handelDelete={handelDelete}
                                handelPay={handelPay}
                                key={book._id}
                                book={book}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;