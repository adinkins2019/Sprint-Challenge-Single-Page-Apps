import React from "react";
  import {Card} from 'semantic-ui-react'
  export default function EpisodeCard({created, name, air_date, episode, characters, url}) {
  return (
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>Created:{created}<br/>
            Date Aired: {air_date}<br/>
          Episode: {episode}<br/>
        Characters: {characters.map(character => {
          getCharacter(character)
        })}
             Url: {url}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }

  function getCharacter(props) {
    return ( `${props.character}\n`  )
  }
