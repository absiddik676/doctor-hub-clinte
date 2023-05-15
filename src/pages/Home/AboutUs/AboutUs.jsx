import React from 'react';
import img from '../../../assets/New folder/about3.jpg'
import { GiDoctorFace,GiBed,GiBunkBeds } from "react-icons/gi";

const AboutUs = () => {
    return (
        <div className='max-w-7xl gap-6 mx-auto flex  bottom-0 '>
            <div className='w-1/2'>
                <img className='w-11/12' src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <h5 className='text-lg font-bold text-blue-700'>About Us</h5>
                <h1 className='text-5xl font-bold mb-3'>Welcome to Disin <br /> Hospital We have...</h1>
                <div className='flex mt-11'>
                    <div className='border-8 mr-4 flex justify-center hover:border-black duration-1000 items-center rounded-full w-24 h-24 border-blue-500'>
                    <GiDoctorFace className='text-5xl'/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-3'>Certified Doctors</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='flex mt-11'>
                    <div className='border-8 flex mr-4 justify-center hover:border-black duration-1000 items-center rounded-full w-24 h-24 border-blue-500'>
                    <GiBed className='text-5xl'/>
                    </div>
                    <div>
                        <h1 className='text-2xl mr-4 font-bold mb-3'>Emergency 24 hours</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='flex mt-11'>
                    <div className='border-8 mr-4 flex justify-center hover:border-black duration-1000 items-center rounded-full w-24 h-24 border-blue-500'>
                    <GiBunkBeds className='text-5xl'/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Modern Technologey</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;