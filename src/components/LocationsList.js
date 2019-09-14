import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function LocationsList({api}) {
     // TODO: Add useState to track data from useEffect
     const [locations, setLocations] = useState([])
     useEffect(() => {
       // TODO: Add API Request here - must run in `useEffect`
       axios
       .get(`${api}/location`)
       .then(response => console.log(response.data.results))
       .catch(err => console.log("Error: ", err))
       //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
     }, [locations]);
   
     return (
       <section className="location-list grid-view">
         <h2>TODO: `array.map()` over your state here!</h2>
         {locations.map(location => console.log(location)) }
       </section>
     );
}
