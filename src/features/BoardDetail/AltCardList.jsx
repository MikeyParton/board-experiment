import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Card from './AltCard'

class CardsLists extends React.Component {
  render() {
    const { cards } = this.props
    return cards.map((card, index) => (
      <Draggable
        key={card.id}
        draggableId={card.id}
        index={index}
      >
        {(provided, snapshot) => (
          <div>
            <Card
              card={card}
              provided={provided}
              snapshot={snapshot}
            />
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    ))
  }
}

export default CardsLists
