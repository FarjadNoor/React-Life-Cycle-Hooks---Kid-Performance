import React from 'react';


export default class Judge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stars: 0, available: false }
  }

  applaud() {
    //Send this applaud status to Kid.js
    this.props.updateEmotion()
  }

  provideStars() {
    const { stars } = this.state;

    this.setState({ stars: stars + 1 })
    this.props.kidQualified(stars);
  }




  shouldComponentUpdate(nextProps, nextState) {
    return nextState.stars <= 5
  }

  render() {
    const { stars, available } = this.state;

    return (
      <div>
       <h1>Judge</h1>
        <button type="button" onClick={this.applaud.bind(this)}>
          Appreciate performance
        </button>
        <button type="button" onClick={this.provideStars.bind(this)}>
          Provide stars
        </button>

        Kid is available: {available}

        Stars gained: {stars}
      </div>
    );
  }
}
