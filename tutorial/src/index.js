import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props) {
  return (
    <button className={'square' + (props.highlight ? ' highlight' : '')} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square 
      value={this.props.squares[i]}
      highlight={this.props.winLine.indexOf(i) !== -1 ? true : false}
      onClick={() => {this.props.onClick(i)}}
      key={i}
    />;
  }

  render() {
    let rows = []
    for (let i = 0; i < 3; i++) {
      let row =[]
      for (let j = (i * 3); j < 3 * (i + 1); j ++) {
        row.push(this.renderSquare(j))
      }
      rows.push(<div className="border=row" key={i}>{row}</div>)
    }
    return (
      <div>{rows}</div>
    )
  }
}

class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        currentPlace: 0 // 当前这一步棋落子的位置（0~9）
      }],
      stepNumber: 0,
      isXNext: true,
      historyReverse: false // 历史记录的顺序
    }
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      isXNext: (step % 2) ? false : true,
    })
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const squares = history[history.length - 1].squares.slice()
    if (this.calculateWinner(squares).winner || squares[i]) {
      return
    }
    squares[i] = this.state.isXNext ? 'X': 'O'
    this.setState({
      history: history.concat([{
        squares,
        currentPlace: i
      }]),
      stepNumber: history.length,
      isXNext: !this.state.isXNext
    })
  }

  // 参数 squares 为一个数组
  calculateWinner (squares) {
    // 所有胜利的情况
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      // 如果一条线的value相同，且不为null，则说明其胜利
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          winLine: lines[i]
        }
      }
    }
    return {
      winner: null,
      winLine: []
    }
  }

  render() {
    let history = this.state.history.slice()
    const current = history[this.state.stepNumber]
    const win = this.calculateWinner(current.squares)
    let moves = history.map((step, move) => {
      // move为数组中正在处理的当前元素的索引，即当前执行元素的index
      // step为当前执行此函数的history中的一项
      const desc = move ? `${(move % 2) ? 'X' : 'O'} moved to (${parseInt((step.currentPlace / 3), 10) + 1}, ${(step.currentPlace % 3) + 1})` : 'Game start'
      return (
        <li key={move}>
          <button className={'step' + (move === this.state.stepNumber ? ' highlight' : '')} onClick={() => {this.jumpTo(move)}}>{desc}</button>
        </li>
      )
    })

    if (this.state.historyReverse) {
      moves.reverse()
    }
    let status
    if (win.winner) {
      status = 'Winner: ' + win.winner
    } else {
      status = 'Next player: ' + (this.state.isXNext ? 'X' : 'O')
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => {this.handleClick(i)}} winLine={win.winLine} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => {this.setState({historyReverse: !this.state.historyReverse})}}>切换顺序</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);