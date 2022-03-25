import {Component} from 'react'

import './index.css'

const HEADS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: 'HEADS_IMAGE_URL', headsNo: 0, tailsNo: 0}

  onChangeCoinNo = () => {
    const {headsNo, tailsNo} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let updateHeadsNo = headsNo
    let updateTailsNo = tailsNo
    let tossImage = ''

    if (tossResult === 0) {
      tossImage = HEADS_IMAGE_URL
      updateHeadsNo += 1
    } else {
      tossImage = TAILS_IMAGE_URL
      updateTailsNo += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsNo: updateHeadsNo,
      tailsNo: updateTailsNo,
    })
  }

  render() {
    const {tossResultImage, headsNo, tailsNo} = this.state
    const totalCount = headsNo + tailsNo
    return (
      <div className="coin-app-container">
        <div className="coin-details-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-image"
          />
          <button
            type="button"
            className="toss-button"
            onClick={this.onChangeCoinNo}
          >
            Toss Coin
          </button>
          <div className="toss-count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsNo}</p>
            <p className="count">Tails: {tailsNo}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
