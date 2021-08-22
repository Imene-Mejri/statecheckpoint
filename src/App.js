import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './components/user';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
         user: {

            name: 'imene',
          
            Bio: 'hello it is me',
            age: 30, 
            pic: '/images/pic1.jpg',
            job: 'student',
               },

       
      show: 'false',
      time:0,
      title: 'userlist'

              }
            
  };

  show=()=>{
    this.setState({
      show :!this.state.show}   
    )
  }
  functiontime = () => {
    this.myInterval = setInterval(() => {
      this.setState((nweState) => ({
        time: nweState.time + 1,
      }));
    }, 1000);
  };

  render() {
    return (
      <div   style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>

        <button onClick={this.show} style={{color: "red"}} > {this.state.show === true ? "Hide Profile" : "Show Profile"} </button>
       


        <div>
        
          {this.state.show === true ? (
            <div>
               <button onClick={this.functiontime}> {this.state.time}</button>
              <User 
       title={this.state.title}
        name={this.state.user.name} 
        age={this.state.user.age}
        Bio={this.state.user.Bio}
       job={this.state.user.job}
       pic={this.state.user.pic}
        />
        </div>
      ) : null}
    </div>
  </div>
);
}
}


export default App;
