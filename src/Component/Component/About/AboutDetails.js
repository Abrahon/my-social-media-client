import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AboutDetails = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();



    const handleAbout = (data) => {
        console.log(data);

        const details = {

            name: data.name,
            email: data.email,
            university: data.university

        }

        fetch('https://social-media-server-chi.vercel.app/about', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('information is added successfully');

                if(data.acknowledged){

                }
                navigate('/about')
            })



    }


    return (

        <div>
            <div className='h-[350px] flex justify-center items-center drop-shadow-2xl m-10'>

                <div className='w-96 p-7'>
                    <h2 className='text-4xl text-center font-2xl'>About Me</h2>
                    <form onSubmit={handleSubmit(handleAbout)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input type="text" {...register("name", {
                                required: "Name is required"
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email Address:</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: "Email is required"

                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">University Name:</span>
                            </label>
                            <input type="university" {...register("university", {
                                required: "University name is required"

                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.university && <p className='text-red-500'>{errors.university.message}</p>}
                        </div>

                        <input className='btn btn-accent w-full mt-3' value="Submit" type="submit" />

                    </form>


                </div>

            </div>
        </div>

    );
};

export default AboutDetails;