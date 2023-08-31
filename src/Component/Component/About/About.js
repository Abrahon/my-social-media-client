import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AboutRow from './AboutRow';

const About = () => {
    const [about, setAbout] = useState([])

    useEffect(() => {
        fetch('https://social-media-server-chi.vercel.app/about')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])


    return (
        <div>
            <h1 className="text-3xl ">Total user information:{about.length}</h1>
            <div className="overflow-x-autoh-[600px] flex justify-center items-center drop-shadow-2xl">
                <table className="table w-96 w-[1000px] flex justify-center   m-5">

                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>University</th>
                            <th>Email</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    
                    <tbody className=''>
                        {
                            about?.map((info, i) => <AboutRow
                            
                                key={info._id}
                                info={info}
                            ></AboutRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default About;