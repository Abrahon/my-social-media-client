import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AboutRow = ({ info }) => {
  const loadedUsers = useLoaderData()
  const [users, setUser] = useState(loadedUsers)
  const { name, university, email } = info;
  return (
    // <div>
    //   {
    //     users?.map(user => <tr
    //       key={user._id}
    //     >
         
          

    //     </tr>)
    //   }
    // </div>
    <tr>
       <td>{name}</td>
          <td>{university}</td>
          <td>{email}</td>
          <Link to={`/edit`}>
          <button>Edit</button>

          </Link>
    </tr>

  );
};

export default AboutRow;
