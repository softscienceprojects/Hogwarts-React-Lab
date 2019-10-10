import React from 'react'
import Tile from './Tile'

// class HogIndex extends React.Component {
//     constructor(props) {
//         super(props)
        

//     }

//     componentDidMount = (props) => { 
//         console.log(props)
//     }


//     render() {
//         return(
//           <div>
              
//         {/* {this.props.hogsList.map(hog=><Tile name={hog.name} specialty={hog.specialty} greased={hog.greased} />  )  } */}
          
//           </div> 
//         )
//     }
// }

const HogIndex = props => {
    //console.log(props.hogsList)
    return !!props.hogsList ? props.hogsList.map(hog => <Tile key={hog.id} {...hog} /> ) :null 
}

export default HogIndex