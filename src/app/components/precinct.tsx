'use client'
import Image from 'next/image';
import { correct_answer, buildings } from "../shared";
import { Building } from "../shared";
import React from 'react'
import { useShareableState } from '../hooks/useShareableState';
import { useBetween } from 'use-between';

//use default new bc im too scared to delete default from the repo
const precinctImageMap = {
    "Riverside Precinct": "/precinct/riverside.png",
    "Union Road Precinct": "/precinct/union.png",
    "Chancellors Place Precinct": "/precinct/chancellors.png",
    "Staff House Road Precinct": "/precinct/staff_house.png",
    "Glasshouse Road Precinct": "/precinct/glasshouse.png",
    "Great Court Precinct": "/precinct/great_court.png",
    undefined : "/precinct/default_new.png"
  };



function Precinct() {
 
    //gets the building number 
    const { getSelectValue } = useBetween(useShareableState);
  
      var select_val = getSelectValue();

      let precinct_guess = select_val ===undefined ? undefined :  buildings[select_val]["precinct"]; 

    //handling of guess to display appropriate image 
    // @ts-ignore
    const imageSrc = precinctImageMap[precinct_guess];
   
  return (
    <div style={{position: 'relative', top: '-15px', left: '30px'}}>
      <Image
        src={imageSrc}
        style={{objectFit: "cover"}}
        width='220'
        height='220'
        fill={false}
        className="d-inline-block align-top"
        alt={`${precinct_guess} selected`}
      />
    </div>
  );
    
}
export default Precinct;