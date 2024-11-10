import {Component} from 'react'

import {FaRupeeSign} from 'react-icons/fa'

import './index.css'

class OrderSection extends Component {
  render() {
    return (
      <div className="main-order-container">
        <div className="order-container">
          <div className="order-container1">
            <h1 className="head5">Amit Jha</h1>
            <p className="person-details-container det">+91 -7764997022</p>
            <p className="person-details-container"> amit.jha6700@gmail.com</p>
            <p className="person-details-container">1 Adults and 2 children</p>
          </div>
          <div className="order-container2">
            <img
              src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1731156633/asltm9goq9rikbusbqfo.png"
              alt="success"
              className="success-logo"
            />
            <div className="order-status-container">
              <h1 className="order-status">Order Complete</h1>
              <p className="question">
                have questions?
                <br /> <span className="contactUs">contact us</span>
              </p>
            </div>
          </div>
        </div>
        <div className="checkin-container thre ">
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
            <p>1</p>
          </div>
          <button type="button" className="locationBtn">
            <FaRupeeSign />
            12,430
          </button>
        </div>
      </div>
    )
  }
}

export default OrderSection
