import React, {Component} from 'react';

class AddButton extends Component {
    
    render(){
        // console.log(this.props.value)
        return(
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

export default AddButton;