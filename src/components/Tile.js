import React from 'react'
//import HogIndex from './HogIndex'


class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: false, display: true }
    }

    handleTileClick = () => {
        this.setState({ selected: !this.state.selected })
    }

    showDetails = () => {
        return (
            <div>
                <p>Weight: {this.props.weight}</p>
                <p>Speciality: {this.props.specialty}</p>
                <p>Highest medal achieved: {this.props['highest medal achieved']}</p>
                <p>{this.props.greased ? "" : "Not" } Greased</p>
            </div>
        )
    }

    slugifyPigName = (name) => {
        return name.toLowerCase().replace(/ /g,"_");
    }

    handleHidePig = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        return(
            <div className={!!this.state.display ? "pigTile ui eight wide column" : "hidden" } onClick={this.handleTileClick}>
                <h3>{this.props.name}</h3> 
                <img src={require(`../hog-imgs/${this.slugifyPigName(this.props.name)}.jpg`)} alt={this.props.name}/>
                <button onClick={this.handleHidePig}>Hide this pig</button>
                {!!this.state.selected ? this.showDetails() : null}
            </div>
        )
    }
   
}

export default Tile