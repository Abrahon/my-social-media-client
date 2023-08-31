import React, { useRef, useState } from 'react';
import img from '../Home/yellow (2).jpg'
import useref from 'useref';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    const { register, placeholder, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_Key

    const navigate = useNavigate();

    const handleMedia = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const media = {
                        post: data.post,
                        image: imgData.data.url

                    }
                    // save image

                    fetch('https://social-media-server-chi.vercel.app/statusOptions', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                           
                        },
                        body: JSON.stringify(media)

                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('post is added successfully');
                            navigate('/media')
                        })
                }
            })




    }


    return (
        <div className='h-[500px] flex justify-center items-center drop-shadow-2xl'>
            <div className='w-96 p-7'>
                <form onSubmit={handleSubmit(handleMedia)}>
                    <div className='mt-10 '>
                        <div className=" mb-10 gap-5">
                            {/* <div className="h-10 rounded-3xl  ">
                                <img src={img} alt="/" />
                            </div> */}
                           
                            <div className="form-control w-full rounded-full">

                            <textarea className="textarea textarea-accent w-full rounded" placeholder="whats on your mind"  {...register("post", {
                                   
                                })}>
                                
                                </textarea>
                                {errors.post && <p className='text-red-500'>{errors.post.message}</p>}
                            </div>
                        </div>
                        <div className="form-control w-full max-w-xs">

                            <input type="file" {...register("image", {
                                required: "Photo is required"
                            })}
                                className="" />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}

                        </div>

                    </div>
                    {/* <Link to='/aboutDetails'> */}
                    <input className='btn btn-secondary text-red-500 w-full mt-4 rounded-xl' value="Submit" type="submit" />
                    {/* </Link> */}

                </form>
            </div>
        </div>
    );
};

export default Home;