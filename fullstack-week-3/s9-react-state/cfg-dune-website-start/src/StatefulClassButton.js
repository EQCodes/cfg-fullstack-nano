import './Button.css';
import React from 'react';

class StatefulClassButton extends React.Component {
    constructor(props) { // takes in a constructor
        super(props); // tells react that when you creat this component, pass in the props, then initialise them (props list of quotes)
        this.state = { quoteIdx: 0 } // component should be initialiased with code index of 0 , another way of writing it 
        this.whenButtomPressed = this.whenButtomPressed.bind(this); // find this button?
    }
    
    whenButtomPressed() {
        this.setState((state, props) => { // hook equivalent of saying 'hey the state updated, can you re render the component'
            console.log('logging state+props: ', state, props)
            if (state.quoteIdx === props.quotes.length - 1) {
                return { quoteIdx: 0 }
            } else {
                return { quoteIdx: state.quoteIdx + 1 }
            }
        });
    }

    render() { // in class based need to specify render 
        return (
            <>
              <button 
                className="duneButton"
                onClick={this.whenButtomPressed} // tag onclick to be current instance of this class
                >{ this.props.buttonText }
              </button>
              <p>Quote: { this.props.quotes[this.state.quoteIdx] } - Some dude</p>
            </>
          );
    }
}

export default StatefulClassButton;