import React, { Component } from 'react';

class Test extends Component {
componentDidMount() {
  console.log('component did mount');
} // runs after it mounts

componentWillMount() {
    console.log('component will mount');
} // runs before it mounts

componentDidUpdate() {
    console.log('component did update');
} // runs if updates

componentWillUpdate() {
    console.log('component did update');
} // runs before did update

compoentWillReceiveProps(nextProps, nextState){
  console.log('test')
} // whne component receives new properties, it will run

  render() {
    return (
      <div>
        <h1>Test component</h1>
      </div>
    );
  }
}

export default Test;
