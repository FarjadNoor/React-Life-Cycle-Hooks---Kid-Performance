import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kid from './Component/Kid/Kid'
import Teacher from './Component/Teacher/Teacher'
import Judge from './Component/Judge/Judge'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0
    };

    this.updateSteps = this.updateSteps.bind(this);
    this.updateEmotion = this.updateEmotion.bind(this);
    this.kidQualified = this.kidQualified.bind(this);
    this.isQualified = this.isQualified.bind(this);
    this.unmountJudge = this.unmountJudge.bind(this);

  }

  unmountJudge(unmountJudge){
    this.setState({unmountJudge})
  }

  static getDerivedStateFromProps() {
    return { volume: 5 }
  }

  updateEmotion() {
    this.setState({ emotion: 'Happy' })
  }

  updateSteps(furtherSteps) {
    this.setState({ furtherSteps })
  }

  kidQualified(stars) {
    this.setState({ stars });
  }

  isQualified(isQualified){
    this.setState({isQualified : true});
  }

  render() {
    const { volume, furtherSteps, emotion, stars, isQualified, unmountJudge } = this.state;
    console.log('volume***', volume);
    console.log('furtherSteps***', furtherSteps)
    return (
      <div>
        
        {!isQualified && <Kid dressColor='green' furtherSteps={furtherSteps} emotion={emotion} unmountJudge={this.unmountJudge} stars={stars} isQualified = {isQualified}/>}
        <br />
        <hr />
        <br />
        <Teacher updateSteps={this.updateSteps} />
        <br />
        <br />
        {!unmountJudge && <Judge updateEmotion={this.updateEmotion} kidQualified={this.kidQualified} />}
        <br />
        <button onClick={this.isQualified}>Ask the Kid to Leave the Show</button>
      </div>

    );
  }
}

export default App;
