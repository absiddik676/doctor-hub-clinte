import React from 'react';
import img from '../../../assets/New folder/doctor1.jpg'
import img1 from '../../../assets/New folder/doctor2.jpg'
import img2 from '../../../assets/New folder/doctor3.jpg'
import { Link } from 'react-router-dom';

const Doctor = () => {
    return (
        <div className='max-w-7xl flex mx-auto justify-between mt-24 gap-5'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Dr. Babatunde</h2>
                    <p>Neurosurgeon</p>
                    <div className="card-actions justify-end">
                        <Link to='appointment'>
                            <button className="btn btn-primary">Get Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Dr. Addision Smith</h2>
                    <p>Neurosurgeon</p>
                    <div className="card-actions justify-end">
                        <Link to='appointment'>
                            <button className="btn btn-primary">Get Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Dr. Sarah Tylor</h2>
                    <p>Dental Surgeon</p>
                    <div className="card-actions justify-end">
                        <Link to='appointment'>
                            <button className="btn btn-primary">Get Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;