import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'Shuvo', 'Omar Sani'];

  const cinemas = [
    { nayok: 'Koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'Jashim', nayika: 'Suchorita' },

  ]
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
    </div>
  );
}

/*
<Friend phone="01700" address="Noakhali"></Friend>
      <Friend phone="01899" address="Rongpur"></Friend>
      <Friend phone="01655" address="Jessore"></Friend>
      <Friend phone="01900" address="Dhaka"></Friend>
      <p id="title">title</p>
      
       
*/

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nayika}</h4>
    </div>
  );
}

function Cinema(props){
  return(
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return(
    <div className="person">
      <h3>phone:{props.phone}</h3>
      <h5>address:{props.address}</h5>
    </div>
  )
}

/*
 <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="BappaRaz" nayika="chekha"></Person>
      <Person name="Koober" nayika="Kopila"></Person> 
      */
export default App;
