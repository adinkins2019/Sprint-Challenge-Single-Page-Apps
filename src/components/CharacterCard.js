import React from "react";
import {Card, Image} from 'semantic-ui-react'

export default function CharacterCard({created, episode, gender, image, location, name, origin, species, status, type, url}) {
  return (
    <Card>
      <Image src={image} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>Created:{created}<br/>
          Gender: {gender}<br/>
          Species: {species}<br/>
          Status: {status}<br/>
          Type: {type}<br/>
          Origin: {origin.name} <br/>
          Location: {location.name}<br />
           Url: {url}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
