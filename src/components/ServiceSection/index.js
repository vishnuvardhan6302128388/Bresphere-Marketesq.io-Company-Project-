import {Component} from 'react'

import Loader from 'react-loader-spinner'

import ServiceCard from '../ServiceCard'

import './index.css'

class ServiceSection extends Component {
  state = {serviceData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getupdatedData = item => ({
    id: item.id,
    imageUrl: item.image_url,
    description: item.description,
    serviceName: item.service_name,
  })

  getData = async () => {
    const url =
      'https://672dbee7fd89797156437fc5.mockapi.io/ladakh/tour/HotelServices'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = data.map(each => this.getupdatedData(each))
      this.setState({serviceData: updatedData, isLoading: false})
      console.log(data)
    } else {
      this.setState({isLoading: true})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" width={50} height={50} color="black" />
    </div>
  )

  render() {
    const {serviceData, isLoading} = this.state
    return (
      <div className="service-container">
        <h1 className="mainHead">Services</h1>
        {isLoading ? (
          this.renderLoadingView()
        ) : (
          <ul className="unorderList-container">
            {serviceData.map(each => (
              <ServiceCard key={each.id} itemDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default ServiceSection
