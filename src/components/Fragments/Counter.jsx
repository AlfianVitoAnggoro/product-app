import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructore');
  }

  componentDidMount() {
    this.setState({ count: 10 });
    console.log('didmount');
  }

  componentDidUpdate() {
    console.log('didupdate');
    if (this.state.count === 11) {
      this.setState({ count: 20 });
    }
  }

  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log('render')}
      </div>
    );
  }
}

export default Counter;
