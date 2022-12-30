import React from 'react';

const AboutRow = ({info}) => {
    const {name, university, email} = info;
    return (
        <tr>
        {/* <th>{i+1}</th> */}
        <td>{name}</td>
        <td>{university}</td>
        <td>{email}</td>
      </tr>
    );
};

export default AboutRow;