import React from "react";
import {Card} from 'semantic-ui-react'

export default function LocationCard({ name, type, dimension, residents }) {
  
  return (
    <Card>
      <Card.Header>Location Name: {name}</Card.Header>
        <Card.Description>
        <p><strong>Location Type: </strong> {type}<br/>
            <strong>Dimension: </strong>{dimension}<br/>
      {residents.map(resident => <div>{resident}</div>)}</p>
        </Card.Description>
      

    </Card>
  )
}
