import React from "react";

export default function CharacterCard({created, episode, gender, image, location, name, origin, species, status, type, url}) {
  return (
    <div>
      <img src={image} alt={`Picture of ${name}`}/>
      <h2>{name}</h2>
      <p>Created:{created}<br/>
         Gender: {gender}<br/>
         Species: {species}<br/>
         Status: {status}<br/>
         Type: {type}<br/>
         Origin: {origin.name} <br/>
         Location: {location.name}<br />
         Url: {url}

      </p>
    </div>
  );
}
