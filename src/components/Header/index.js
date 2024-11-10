import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="company-header">
          <Link to="/" className="link-item">
            Brisphere
          </Link>
        </h1>
        <ul className="links-container">
          <Link to="/discover" className="link-item">
            <li className="list-item">Discover</li>
          </Link>
          <Link to="/services" className="link-item">
            <li className="list-item">Services</li>
          </Link>
          <li className="list-item">About Us</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Header)
