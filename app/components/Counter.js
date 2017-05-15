import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import styles from './Counter.scss'

class Counter extends Component {
  static get propTypes() {
    return {
      increment: PropTypes.func.isRequired,
      incrementIfOdd: PropTypes.func.isRequired,
      incrementAsync: PropTypes.func.isRequired,
      decrement: PropTypes.func.isRequired,
      counter: PropTypes.number.isRequired,
    }
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">
            async
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
