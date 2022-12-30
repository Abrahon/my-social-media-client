import { FaComment, FaFacebook, FaHeart, FaHeartBroken } from 'react-icons/fa';

import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';



const Media = () => {
    // const {image}=useState([])
    const { data: statusOptions, image, post} = useQuery({
        queryKey: ['statusOptions'],
        queryFn: async () => {
            try {
                const res = await fetch('https://social-media-server-chi.vercel.app/statusOptions', {
                    headers: {

                    }

                });
                const data = await res.json();
                return data;

            }
            catch (error) {

            }
        }
    })
    return (
        <div className=''>
            <h2 className='text-3xl'>total status:{statusOptions?.length}</h2>
            <div className=' flex justify-center items-center mt-10 mb-10 drop-shadow-2xl'>
                <thead>

                </thead>
                <div className='grid gap-6 '>
                    {
                        statusOptions?.map((statusOption, i) => <div className="card card-compact w-96 bg-base-100" key={statusOption._id}>

                            <div className='card-body'>{statusOption.post}</div>
                            <div className="card-actions justify-center mb-3">
                                <Link to='/aboutDetails'>
                                <button className="btn btn-primary rounded">Details</button>

                                </Link>
                            </div>

                            <td><div className="">
                                <div className="w-96 rounded-full">
                                    <img src={statusOption.image} alt="" />

                                </div>
                            </div></td>
                            <hr></hr>
                            <p className='bg-error-content m-3 d-flex-justify-between'>
                                <FaHeart></FaHeart>
                                <p>
                                    <FaComment></FaComment>

                                </p>
                            </p>



                        </div>)
                    }
                </div>

            </div>
        </div>



    );
};

export default Media;