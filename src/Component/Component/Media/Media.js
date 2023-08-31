import { FaComment, FaHeart } from 'react-icons/fa';

import { useQuery } from '@tanstack/react-query';
// import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Media = () => {

    const[like,setLike] = useState(0)
    const[isLike,setIsLike] = useState(false)
    
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
    const onLikeHandle = event=>{
        // console.log(onLikeHandle)
        setLike (like + (isLike?-1:1));
        setIsLike(!isLike)

    }

    return (
     <section className='container'>
           <div className=''>
            <h2 className='text-3xl'>total status:{statusOptions?.length}</h2>
            <div className=' flex justify-center items-center mt-10 mb-10 drop-shadow-2xl'>
                <thead>

                </thead>
                <div className='grid gap-6 '>
                    {
                        statusOptions?.map((statusOption, i) => <div className="card card-compact w-1/2   bg-base-100 mx-auto" key={statusOption._id}>

                            <div className='card-body'>{statusOption.post}</div>
                            <div className="card-actions justify-center mb-3">
                                <Link to='/aboutDetails'>
                                <button className="btn btn-sm rounded">Details</button>

                                </Link>
                            </div>

                            <td>
                                <div className="">
                                    <img className=' mx-auto w-full h-[500px]' src={statusOption.image} alt="" />

                                </div>
                            </td>
                            <hr></hr>
                            <div className='text-red-600 flex justify-start gap-2 my-4 mx-2'>
                            <div >
                                <FaHeart onClick={onLikeHandle}></FaHeart>
                                <p>{like}</p>
                                </div>
                            <div className='text-gray-500'>
                            <FaComment></FaComment>
                            </div>
                            </div>
                            



                        </div>)
                    }
                </div>

            </div>
        </div>
     </section>



    );
};

export default Media;