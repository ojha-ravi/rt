import * as React from "react";
import * as ReactDOM from "react-dom";

// Very Basic
export class App extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

// Just trying follow all the lifeCycleMethods
// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         data: 0
//       }
//       this.setNewNumber = this.setNewNumber.bind(this)
//   };
//   setNewNumber() {
//     this.setState({data: this.state.data + 1})
//   }
//   render() {
//     return <div>
//       <Content myNumber = {this.state.data}></Content>
//       <button onClick = {this.setNewNumber} className="btn btn-secondary">Increment</button>
//     </div>;
//   }
// }


// class Content extends React.Component {
//   componentWillMount() {
//     console.log("I am in componentWillMount");
//   }
//   componentDidMount() {
//     console.log("I am in componentDidMount");
//   }
//   componentWillReceiveProps(nextProps) {
//     console.log("I am in componentWillReceiveProps");
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("I am in shouldComponentUpdate");
//     return true;
//   }
//   componentWillUpdate(nextProps, nextState) {
//     console.log("I am in componentWillUpdate");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("I am in componentDidUpdate");
//   }
//   componentWillUnmount() {
//     console.log("I am in componentWillUnmount");
//   }
//   render() {
//     return <div>
//       <h3>Hello World</h3>
//       <div>Random Number: {this.props.myNumber}</div>
//     </div>;
//   }
// }

// // Trying to simulate SetState
// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: 'Initial data...'
//     }
//     this.updateState = this.updateState.bind(this);
//   };

  // updateState(e) {
  //   this.setState({data: e.target.value});
  // }

  // render() {
  //   return <div>
  //     <input
  //       type="text"
  //       value={this.state.data} 
  //       onChange = {this.updateState}></input>
  //     <h4>{this.state.data}</h4>
  //   </div>;
  // }
// }


// A Bit complex Example
// class App extends React.Component {
//   constructor(props) {
//   super(props);
//     this.state = {
//       data: 'Initial data...'
//     }
//     this.updateState = this.updateState.bind(this);
//   };

//   updateState(e) {
//     this.setState({data: e.target.value});
//   }

//   render() {
//     return <div>
//       <Content myDataProp = {this.state.data} 
//       updateStateProp = {this.updateState}></Content>
//     </div>;
//   }
// }

// class Content extends React.Component {
//   render() {
//     return <div>
//       <input type = "text" value = {this.props.myDataProp} 
//       onChange = {this.props.updateStateProp} />
//       <h3>{this.props.myDataProp}</h3>
//     </div>;
//   }
// }
