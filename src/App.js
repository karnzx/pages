import React, { Component } from 'react';
import _ from 'lodash'

const students =[
  {id:'3', name: 'putek', score: 100},
  {id:'9', name: 'aloc', score: 70},
  {id:'27', name: 'azzip', score: 60}
]

const StudentsLine = (props)=>(
  <div> {props.id} {props.name} = {props.score} </div>
)

class App extends Component {
  render() {
    return (
      <div >
        {
          _.map(students, s => <StudentsLine {...s} key={s.id}/>)
        }
      </div>
    );
  }
}

export default App;
