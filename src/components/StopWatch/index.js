import React, { Component } from 'react';
import styles from './StopWatch.module.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, props: 1};
    this.idInterval = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  tick=()=>{
    this.setState((state) => {
      return {count: state.count + 1};
    });
  } 
  start = ()=>{
    this.stop();
    this.idInterval = setInterval(this.tick, 1000)
  }
  stop = ()=>{
    clearInterval(this.idInterval);
    this.idInterval = null;
  }
  reset = ()=>{
    this.stop();
    this.setState({count: 0})
  }
  upper=()=>{
    this.setState((state) => {
      return {count: state.count + state.props};
    })
  }
  down=()=>{
    this.setState((state) => {
      return {count: state.count - state.props};
    })
  }
  
  handleChange(event) {
    this.setState({value: event.target.props});
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount(){
    setTimeout(() => {
      this.start(); // count is 0 here
    }, 3000);
  }
  componentDidUpdate(){
  }
  componentWillUnmount(){
    this.stop();
  }
  
  render() {
    const {count,props} = this.state;  
    return (
      <article className={styles.container}>
        <h2>{count}</h2>
        <h2>{props}</h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
        <button onClick={this.upper}>add</button>
        <button onClick={this.down}>remove</button>
        <form onSubmit={this.handleSubmit}>
        <label>
          ШАГ
          <textarea props={this.state.props} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
      </article>
    );
  }
}

export default StopWatch;
