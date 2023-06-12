import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Styles } from './components/Styles';
import { UserLogin } from './components/UserLogin';
import { Counter } from './components/Counter';

const personName ={
  first:'Mary',
  last:'Bob',
}

const nameList =[
  {
    first:'Miya',
    last:'Tom',
  },
  {
    first:'Bob',
    last:'Alice',
  },
  {
    first:'Diana',
    last:'Lay',
  },
]
function App() {
  return (
          <div>
            <Greet count={10} isLoggedIn={true} />
          <Person name={personName}/>
          <PersonList names={nameList} />
          <Status status='loading...' />
          <Styles styles={{color:'darkblue',padding:'10px',border:'2px solid blue',fontSize:'2em',textAlign:'center'}} />
          <UserLogin name='Grace' email='grace@gmail.com' />
          <Counter />
          </div>
  );
}

export default App;
