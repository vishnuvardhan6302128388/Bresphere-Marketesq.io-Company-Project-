import {Component} from 'react'

import './index.css'

class DiscoverSection extends Component {
  state = {isShow1: true, isShow2: true, isShow3: true, isShow4: true}

  changeBtn = () => {
    this.setState(prevState => ({isShow1: !prevState.isShow1}))
  }

  changeBtn2 = () => {
    this.setState(prevState => ({isShow2: !prevState.isShow2}))
  }

  changeBtn3 = () => {
    this.setState(prevState => ({isShow3: !prevState.isShow3}))
  }

  changeBtn4 = () => {
    this.setState(prevState => ({isShow4: !prevState.isShow4}))
  }

  render() {
    const {isShow1, isShow2, isShow3, isShow4} = this.state
    return (
      <div className="discover-container">
        <h1 className="mainHead">Discover</h1>
        <div className="discover-main-container">
          <div className="first-review-container">
            <div className="profile-container">
              <img
                src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1726740974/jhen0nk0dh7ygqkuhkg4.jpg"
                alt="profile"
                className="profileImage"
              />
              <h1 className="profile-name">
                Arjun Raghav <br />
                <img
                  src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729339447/mqoy6s5yv8bdd7nvoo7t.png"
                  alt="stars"
                  className="starImage"
                />
              </h1>
            </div>
            {isShow1 ? (
              <p className="reviewDescription">
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.
                <button className="btn5" type="button" onClick={this.changeBtn}>
                  ...Read More
                </button>
              </p>
            ) : (
              <p className="reviewDescription">
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me. I am writing this after
                reflecting on my one month stay with Bricabin in Ladakh. Right
                from picking us up at the airport to dropping us back there
                after a month, Urgan was very responsible and took good care of
                my friends and me.
                <button className="btn5" type="button" onClick={this.changeBtn}>
                  ...Read Less
                </button>
              </p>
            )}
          </div>
          <div className="second-review-container">
            <img
              src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1731118898/smvwvsiqhiwl1pf92y93.jpg"
              alt="ladakh"
              className="ladakhimg"
            />
            <div className="profile-container2">
              <img
                src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1726740974/jhen0nk0dh7ygqkuhkg4.jpg"
                alt="profile"
                className="profileImage2"
              />
              <h1 className="profile-name2">
                Arjun Raghav <br />
                <img
                  src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729339447/mqoy6s5yv8bdd7nvoo7t.png"
                  alt="stars"
                  className="starImage2"
                />
              </h1>
            </div>
            {isShow2 ? (
              <p className="reviewDescription2">
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.
                <button
                  className="btn6"
                  type="button"
                  onClick={this.changeBtn2}
                >
                  ...Read More
                </button>
              </p>
            ) : (
              <p className="reviewDescription2">
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me. I am writing this after
                reflecting on my one month stay with Bricabin in Ladakh. Right
                from picking us up at the airport to dropping us back there
                after a month, Urgan was very responsible and took good care of
                my friends and me.
                <button
                  className="btn6"
                  type="button"
                  onClick={this.changeBtn2}
                >
                  ...Read Less
                </button>
              </p>
            )}
          </div>
          <div className="third-review-container">
            <div className="third-sub-container1">
              <div className="profile-container2">
                <img
                  src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1726740974/jhen0nk0dh7ygqkuhkg4.jpg"
                  alt="profile"
                  className="profileImage2"
                />
                <h1 className="profile-name2">
                  Arjun Raghav <br />
                  <img
                    src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729339447/mqoy6s5yv8bdd7nvoo7t.png"
                    alt="stars"
                    className="starImage2"
                  />
                </h1>
              </div>
              {isShow3 ? (
                <p className="reviewDescription2">
                  I am writing this after reflecting on my one month stay with
                  Bricabin in Ladakh. Right from picking us up at the airport to
                  dropping us back there after a month, Urgan was very
                  responsible and took good care of my friends and me.
                  <button
                    className="btn6"
                    type="button"
                    onClick={this.changeBtn3}
                  >
                    ...Read More
                  </button>
                </p>
              ) : (
                <p className="reviewDescription2">
                  I am writing this after reflecting on my one month stay with
                  Bricabin in Ladakh. Right from picking us up at the airport to
                  dropping us back there after a month, Urgan was very
                  responsible and took good care of my friends and me. I am
                  writing this after reflecting on my one month stay with
                  Bricabin in Ladakh. Right from picking us up at the airport to
                  dropping us back there after a month, Urgan was very
                  responsible and took good care of my friends and me.
                  <button
                    className="btn6"
                    type="button"
                    onClick={this.changeBtn3}
                  >
                    ...Read Less
                  </button>
                </p>
              )}
            </div>

            <div className="third-sub-container2">
              <div className="profile-container2">
                <img
                  src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1726740974/jhen0nk0dh7ygqkuhkg4.jpg"
                  alt="profile"
                  className="profileImage2"
                />
                <h1 className="profile-name2">
                  Arjun Raghav <br />
                  <img
                    src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1729339447/mqoy6s5yv8bdd7nvoo7t.png"
                    alt="stars"
                    className="starImage2"
                  />
                </h1>
              </div>
              {isShow4 ? (
                <p className="reviewDescription2">
                  I am writing this after reflecting on my one month stay with
                  Bricabin in Ladakh. Right from picking us up at the airport to
                  dropping us back there after a month, Urgan was very
                  responsible and took good care of my friends and me.
                  <button
                    className="btn6"
                    type="button"
                    onClick={this.changeBtn4}
                  >
                    ...Read More
                  </button>
                </p>
              ) : (
                <p className="reviewDescription2">
                  I am writing this after reflecting on my one month stay with
                  Bricabin in Ladakh. Right from picking us up at the airport to
                  dropping us back there after a month, Urgan was very
                  responsible and took good care of my friends and me. I am
                  writing this after reflecting on my one month stay with
                  Bricabin in Ladakh. Right from picking us up at the airport to
                  dropping us back there after a month, Urgan was very
                  responsible and took good care of my friends and me.
                  <button
                    className="btn6"
                    type="button"
                    onClick={this.changeBtn4}
                  >
                    ...Read Less
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoverSection
