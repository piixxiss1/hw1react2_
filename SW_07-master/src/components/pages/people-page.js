import React,{useState} from 'react'
import ItemDetails, { Record } from '../item-details';
import ItemList from '../item-list';
import Row from '../row';
import withSwapi from '../hoc';
import { PeopleList, PersonItemDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';



const PeoplePage = ({itemId, history}) => {
const [state, setState] = useState({itemId: 1})

const leftElement = (
  <PeopleList setItenId={(id) => history.push(id)}>
    {(item) => `${item.name} -${item.eyeColor}`}
  </PeopleList>
)

const rightElement = (
  <PersonItemDetails itemId={itemId} >
    <Record label='Gender' label_key='gender'/>
    <Record label='Eye color' label_key='eyeColor'/>
    <Record label='Birth year' label_key='birthYear'/>
  </PersonItemDetails>

)


  return (


    <Row left={leftElement} right={rightElement} />
  )
}

export default   {PeoplePage, withRouter};