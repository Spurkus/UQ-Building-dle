'use client'
import Image from 'next/image';
import imageToAdd from "/precinct/default.png";
import Container from 'react-bootstrap/Container';

function Precinct() {
    return (
        <Image
        src="/precinct/default.png"
        width="640"
        height="360"
        className="d-inline-block align-top"
        alt="Correct precinct not selected"
      />


    )

    
}
export default Precinct;