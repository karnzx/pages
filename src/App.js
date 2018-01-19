import React, { Component } from 'react';
import _ from 'lodash'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const students =[
  {id:'3', name: 'putek', score: 100},
  {id:'9', name: 'aloc', score: 70},
  {id:'27', name: 'azzip', score: 60}
]

const Home = () => (<div>Home</div>)

const Students = () => (
  <div>
    {
      _.map(students, s => <StudentLink {...s} key={s.id}/>)
    }
     <Route path="/students/:id" component={StudentContainer}/>
  </div>
)

const StudentContainer = ({match}) => {
  let s = _.find(students, ['id', match.params.id])
  return (
    <StudentLine {...s} key={s.id}/>
  )
}

const StudentLink = ({id, name}) => (
  <div><Link to={`/students/${id}`}>{name}</Link></div>
)
const StudentLine = ({id, name, score}) => (
    <div>{id} {name} = {score}</div>
  )

class App extends Component {
  render() {
    return (
      <Router>
      <div >
        
          <Route exact path="/" component={Home}/>
          <Route path="/students" component={Students}/> 
        
      </div>
      </Router>
    );      
  }
}

export default App;
