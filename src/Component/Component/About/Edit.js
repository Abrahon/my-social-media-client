// import { error } from 'daisyui/src/colors/colorNames';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const { register, formState: { errors } } = useForm();
    // const navigate = useNavigate();
    const loadUsers = useLoaderData()

    const handleEdit = (data) => {
        console.log(data);

        const updateInfo = {

            name: data.name,
            email: data.email,
            university: data.university

        }
        fetch(`http://localhost:5000/users/${loadUsers._id}`, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount>0) {
                alert('user updated successfully ')
                
            }
            
        })
        


    }
    return (
        <div>
        <div className='h-[350px] flex justify-center items-center drop-shadow-2xl m-10'>

            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center font-2xl'>Update About</h2>
                <form onSubmit={handleEdit} >

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input type="text" defaultValue={loadUsers.name} {...register("name", {
                            required: "Name is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email Address:</span>
                        </label>
                        <input type="email"defaultValue={loadUsers.email} {...register("email", {
                            required: "Email is required"

                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">University Name:</span>
                        </label>
                        <input type="university" defaultValue={loadUsers.university} {...register("university", {
                            required: "University name is required"

                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.university && <p className='text-red-500'>{errors.university.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-3' value="Update" type="submit" />

                </form>


            </div>

        </div>
    </div>
    );
};

export default Edit;