import React from 'react'

const ListItemDeps = ({department})=> {
  return (
      <div>
    <div>
      <h2>{department.id}</h2>
    </div>
    <div>
      <p>{department.date}</p>
    </div>
    
    </div>
  )
}

export default ListItemDeps
