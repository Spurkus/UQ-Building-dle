'use client'
import Image from 'next/image';
import { correct_answer, buildings } from "../shared";
import { Building } from "../shared";


function Precinct() {
 
    //just a random variable - needs to be linked to guess by user
    var precinct_guess = "Union Road Precinct";

    //handling of guess to display appropriate image 
    //(maybe a quicker way but it wasnt working otherwise)
    if (precinct_guess == "Riverside Precinct") {
    return (
        <Image
        src="/precinct/riverside.png"
        width="640"
        height="360"
        className="d-inline-block align-top"
        alt="Riverside precinct selected"
      />

    )} else if (precinct_guess == "Union Road Precinct"){
        return(
        <Image
        src="/precinct/union.png"
        width="640"
        height="360"
        className="d-inline-block align-top"
        alt="Union road precinct selected"
      />)

    } else if (precinct_guess == "Chancellors Place Precinct"){
       return( <Image
        src="/precinct/chancellors.png"
        width="640"
        height="360"
        className="d-inline-block align-top"
        alt="Chancellors Place precinct selected"
      />
       )
    } else if (precinct_guess == "Staff House Road Precinct"){
        return (<Image
        src="/precinct/staff_house.png"
        width="640"
        height="360"
        className="d-inline-block align-top"
        alt="Staff house road precinct selected"
      />)

    } else if (precinct_guess == "Glasshouse Road Precinct"){
        return(<Image
        src="/precinct/glasshouse.png"
        width="640"
        height="360"
        className="d-inline-block align-top"
        alt="Glasshouse road precinct selected"
      />)

    } else if (precinct_guess == "Great Court Precinct"){
        return(<Image
        src="/precinct/great_court.png"
        width="640"
        height="360"
        className="d-inline-block align-top"
        alt="Great court precinct selected"
      />)

    } else {
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

    
}
export default Precinct;