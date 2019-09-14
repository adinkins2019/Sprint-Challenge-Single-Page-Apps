import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  console.log(residents)
  return (
    <div>
      <h2>Location Name: {name}</h2>
      <h3>Location Type: {type}</h3>
      <h3>Dimension: {dimension}</h3>
      <p>{residents.map(resident => <div>{resident}</div>)}</p>

    </div>
  )
}
