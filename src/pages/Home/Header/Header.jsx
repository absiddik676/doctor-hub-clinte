import React from 'react';
import bg from '../../../assets/New folder/home-2-slider1.jpg'
import bg1 from '../../../assets/New folder/home-2-slider2.jpg'
import bg2 from '../../../assets/New folder/contact-info-bg1.png'
import { FiPhoneCall } from "react-icons/fi";
import { FaAmbulance } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
    return (
        <div> 
            <div className="carousel h-[550px] w-full relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bg} className="w-full" />

                    <div className="absolute  transform -translate-y-1/2 left-5 ml-16 w-2/4 right-5 top-1/2">
                        <h1 className='text-4xl font-bold'>We have Fantastic Doctors and Dentist</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis corrupti asperiores obcaecati! Deserunt minima voluptas mollitia provident officiis nam debitis tempore saepe cumque odio!</p>
                        <div className='flex gap-5 mt-7'>
                            <button className="btn btn-primary">Get Appointment</button>
                            <button className="btn btn-outline btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bg1} className="w-full" />
                    <div className="absolute  transform -translate-y-1/2 left-5 ml-16 w-2/4 right-5 top-1/2">
                        <h1 className='text-4xl font-bold'>We have Fantastic Doctors and Dentist</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis corrupti asperiores obcaecati! Deserunt minima voluptas mollitia provident officiis nam debitis tempore saepe cumque odio!</p>
                        <div className='flex gap-5 mt-7'>
                            <button className="btn btn-primary">Get Appointment</button>
                            <button className="btn btn-outline btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bg1} className="w-full" />
                    <div className="absolute  transform -translate-y-1/2 left-5 ml-16 w-2/4 right-5 top-1/2">
                        <h1 className='text-4xl font-bold'>We have Fantastic Doctors and Dentist</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis corrupti asperiores obcaecati! Deserunt minima voluptas mollitia provident officiis nam debitis tempore saepe cumque odio!</p>
                        <div className='flex gap-5 mt-7'>
                            <button className="btn btn-primary">Get Appointment</button>
                            <button className="btn btn-outline btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
                <div className='rounded-lg bg-cover relative -top-24 mt-0 bg-no-repeat flex justify-around mx-44 h-44 items-center bg-blue-600' style={{ backgroundImage: `url(${bg2})` }}>
                    <div className='flex justify-start text-white gap-4'>
                        <FiPhoneCall className='text-4xl mt-2  text-white'/>
                        <div>
                        <h1 className='text-3xl font-bold '>Emergency Call</h1>
                        <p>+07 5554 3332 322</p>
                        <p>+07 5554 3332 322</p>
                        </div>
                    
                    </div>
                    <div className='flex justify-start text-white gap-4'>
                        <CiLocationOn className='text-4xl mt-2  text-white'/>
                       <div>
                       <h1 className='text-3xl font-bold'>Location</h1>
                        <p>2108-267 Road Quadra, Toronto,</p>
                        <p>+Canada Victiria Canada</p>
                       </div>
                    
                    </div>
                    <div className='flex justify-start text-white gap-4'>
                        <FaAmbulance className='text-4xl mt-2  text-white'/>
                        <div>
                        <h1 className='text-3xl font-bold'>Ambulance</h1>
                        <p>+07 5554 3332 322</p>
                        <p>+07 5554 3332 322</p>
                    
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Header;