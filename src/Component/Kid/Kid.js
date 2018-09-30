import React from 'react';

export default class Kid extends React.Component {

  constructor(props) {
    super(props);
    this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false, qualified: 'No' };
  }

  static getDerivedStateFromProps(props, state) {
    // const oldSteps = state.danceSteps;
    // const newSteps = props.furtherSteps;
    // const allSteps = oldSteps.concat(newSteps);
    console.log('getDerivedStateFromProps');
    const danceSteps = [...state.danceSteps, ...props.furtherSteps]
    console.log('all Dance Steps',danceSteps);
    //ye ...operator merge krdega
    return {
      danceSteps: state.danceSteps.length < 5 ? danceSteps : state.danceSteps,
      startedPerforming: danceSteps.length >= 5,
      emotion: props.emotion || 'nervous'
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    if(prevProps.stars === 4){
      this.qualified();
    }
  }

  componentDidMount() {
    this.setState({ danceSteps: ['step1', 'step2'] })
  }

  qualified() {
    this.setState({ startedPerforming: false, qualified: 'Yes' });
    // this.props.
  }

  render() {
    const { dressColor} = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex, qualified } = this.state;
    setTimeout(console.log('danceSteps***', danceSteps), 500);
    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
        <div>Emotion: {emotion}</div>
        <div>Qualified: {qualified}</div>
        {startedPerforming &&
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
          </div>}
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
