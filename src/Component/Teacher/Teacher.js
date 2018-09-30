import React from 'react';


export default class Teacher extends React.Component {
 sendDataToKid() {
	const furtherSteps = ['step3', 'step4', 'step5']
  //Send this data to Kid.js
  console.log('teacher btn click');
  this.props.updateSteps(furtherSteps)
 }


 render() {
   
   return (
     <div>
       <h1>Teacher</h1>
     <button onClick={this.sendDataToKid.bind(this)}>Get Help From Teacher</button>
     </div>
   );
 }
}
