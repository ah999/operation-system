import React from 'react'

function ListItemOpRooms({opRoom}) {
  return (
    <div>
    <div>
      <h2>{opRoom.id}</h2>
    </div>
    <div>
      <p>{opRoom.name}</p>
    </div>
    
    </div>
  )
}

export default ListItemOpRooms