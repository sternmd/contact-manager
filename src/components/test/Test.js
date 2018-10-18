import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  }
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => this.setState({
    title: data.title
  }))
} // runs after it mounts

// componentWillMount() {
//     console.log('component will mount');
// } // runs before it mounts
//
// componentDidUpdate() {
//     console.log('component did update');
// } // runs if updates
//
// componentWillUpdate() {
//     console.log('component did update');
// } // runs before did update

compoentWillReceiveProps(nextProps, nextState){
  console.log('test')
} // whne component receives new properties, it will run

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Test;
