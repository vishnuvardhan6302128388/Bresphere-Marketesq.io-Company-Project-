import {withRouter} from 'react-router-dom'
import {Component} from 'react'

import {FaArrowRight, FaRupeeSign} from 'react-icons/fa'

import OrderSection from '../OrderSection'

import './index.css'

class BookingSection extends Component {
  state = {isClicked: false}

  changeBtn = () => {
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  renderingFor = () => (
    <form className="form-container">
      <div className="details-container">
        <div className="names-container">
          <p className="name2">Amit Jha</p>
        </div>
        <div className="email-container">
          <p className="email">amit.jha6700@gmail.com</p>
        </div>
        <div className="phNo-container">
          <p className="phNo">+91 7764997022</p>
        </div>
        <div className="persons-container">
          <div className="adult-container">
            <p className="adults">1 Adult</p>
          </div>
          <div className="child-container">
            <p className="child">1 Children</p>
          </div>
        </div>
      </div>
      <div className="checkin-container">
        <div className="checkin">
          <h1 className="checks">CHECK-IN</h1>
          <p className="date">09 Nov 2024</p>
        </div>
        <div className="checkout-container">
          <h1 className="checks">CHECK-OUT</h1>
          <p className="date">14 Nov 2024</p>
        </div>
        <div className="rooms-container">
          <h1 className="checks">ROOMS</h1>
          <div className="noOfRooms-container">
            <button type="button" className="btn1">
              -
            </button>
            <p>1</p>
            <button type="button" className="btn2">
              +
            </button>
          </div>
        </div>
        <div className="confirm-container">
          <div className="btn-container">
            <button type="submit" className="btn3" onClick={this.changeBtn}>
              <span className="amount">
                <FaRupeeSign /> 12,430
              </span>
              <FaArrowRight className="logo1" />
            </button>
          </div>
          <p className="payDescription">Click to pay token amount</p>
        </div>
      </div>
    </form>
  )

  render() {
    const {isClicked} = this.state
    return <div>{isClicked ? <OrderSection /> : this.renderingFor()}</div>
  }
}

export default withRouter(BookingSection)
