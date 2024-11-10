import {Component} from 'react'

import {FaFacebook, FaInstagramSquare} from 'react-icons/fa'

import BookingSection from '../BookingSection'

import './index.css'

class Home extends Component {
  state = {isClicked: false}

  onChangeBooking = () => {
    this.setState({isClicked: true})
  }

  renderTopSection = () => (
    <div className="top-container">
      <div className="firstOne">
        <div className="image-container">
          <h1 className="top-header">
            Work from <br />
            ladakh
          </h1>
          <p className="top-description">
            India first true digital tourism ecosystem
          </p>
          <div className="logos-container">
            <FaFacebook className="logo3" />
            <FaInstagramSquare className="logo3" />
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1731039032/w4fjh8wz3jp8nvqxg7hz.avif"
          className="logo4"
          alt="logo-img"
        />
      </div>
      <div className="checkin-container two">
        <div className="checkin">
          <h1 className="checks ">CHECK-IN</h1>
          <p className="date1">20 Nov 2024 </p>
        </div>
        <div className="checkin">
          <h1 className="checks">CHECK-OUT</h1>
          <p className="date1">30 Nov 2024 </p>
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
        <button
          type="button"
          onClick={this.onChangeBooking}
          className="locationBtn"
        >
          BOOK
        </button>
      </div>
    </div>
  )

  render() {
    const {isClicked} = this.state
    return <>{isClicked ? <BookingSection /> : this.renderTopSection()}</>
  }
}

export default Home
