import React, {useState} from 'react'
import { PlanetList, PlanetItemDetails } from '../sw-components'
import Row from '../row'
import {Record} from '../item-details/item-details'


const PlanetsPage = () => {
    const [state, setState] = useState({itemId: 1})

    const leftElement=  (
        <PlanetList seItemId = {(id) => setState({itemId: id})}>
            {(item) => `${item.name} - ${item.diameter}`}
            </PlanetList>
    )
    const rightElement = (
        <PlanetItemDetails itemId={state.itemId}>
                <Record label='Population'label_key='population'/>
                <Record label='Ratation period'label_key='rotationPeriod'/>
                <Record label='Diameter'label_key='diameter '/>
        </PlanetItemDetails>
    )

  return (
    <Row left={leftElement} right={rightElement}/>
  )
}

export default PlanetsPage;