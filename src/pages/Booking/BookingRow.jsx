import React from 'react';
import moment from 'moment';

const BookingRow = ({ book, handelPay, handelDelete }) => {
    return (

        <tr>
            <th>
                <button onClick={()=>handelDelete(book._id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{book.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {book.email}
            </td>
            <td>{book.doctor}</td>
            <td>{book.time}</td>
            <td>
                {moment(book.startDate).format(" MMMM Do YYYY")}
            </td>
            <th>
                {
                    book.status === 'confirm' ? <p className='text-blue-600'>Confirm</p> : <button onClick={() => handelPay(book._id)} className="btn btn-ghost btn-xs">Pay Now</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;