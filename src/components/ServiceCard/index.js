import './index.css'

const ServiceCard = props => {
  const {itemDetails} = props
  const {serviceName, imageUrl, description} = itemDetails
  return (
    <li className="list-container">
      <img src={imageUrl} alt={serviceName} className="serviceImg" />
      <h1 className="service-name">{serviceName}</h1>
      <p className="service-description">{description}</p>
    </li>
  )
}

export default ServiceCard
