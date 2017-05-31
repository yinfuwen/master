import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
////////////////////////////////////////////////////////
import Login from "./test2"
/*import testApp from "./test";
testApp.info();*/
/*class Animal{
  constructor(name){
    this.name=name;
  }
  move(){
    console.log(this.name + "is moving");
  }
}

class Dog extends Animal {
  constructor (name, color){
    super(name);
    this.color=color;
  }

  move(){
    console.log(this.name + "is 2 moving........");
  }

  wow(){
    console.log(this.name + "have"+this.color);
  }
}

var animal=new Animal("小黄");
animal.move();
var wangcai=new Dog("小黑","black");
wangcai.move();
wangcai.wow();*/
let arr=["a","b","c"];

let name="父组件传给子组件";

////////////////////////////////////////////////////////
class App extends Component {
  doLogin(uName,uPswd){
    console.log(`${uName},${uPswd}`);
  }
  constructor(props){
    super(props);
    this.state={
      test:"test-state1"
    }
  }

  handClk = () =>{
    this.setState({
      test:"test-state2"
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React33</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.handClk}>点我改变state</div>
        <ul>
        {arr.map(function(val,index){
          return (<li key={index}>{val}</li>)
        })}
        </ul>
        <Login html={name} test={this.state.test} handLogin={this.doLogin}/>
      </div>
    );
  }
}

export default App;
