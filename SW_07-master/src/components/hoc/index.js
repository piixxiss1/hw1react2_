import React from "react"
import {Consumer} from '../swapi-context'

function withSwapi(View, parserFunc){
    const Wrapper = (props) => {
    return( <Consumer>
        {
          (swapi) => {
            const methods = parserFunc(swapi)
            return <View {...props} {...methods}/>
          }
        }
      </Consumer>
    )
    }
    return Wrapper
  }
  

  export default withSwapi;