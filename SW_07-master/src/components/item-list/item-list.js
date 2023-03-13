import React, {  useEffect, useState } from 'react';
import './item-list.css';


const ItemList = ({setItemId, children, getData})=> {
  const [state, setState] = useState({data: []})
 
  useEffect(() => {
   getData()
  .then(data => setState({data: data}))
}, [])

//js-array
const content = state.data.map(item => {
  return ( 
  <li key={item.id} onClick={() => setItemId(item.id)} className="list-group-item">
    {children(item)}
    </li>
  )
})
  return(
    <ul className="item-list list-group">

            {content}
       </ul>
  )
}

export default ItemList;