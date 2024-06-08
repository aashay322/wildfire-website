const LocationInfoBox = ({ info, onClose }) => {
  return (
      <div className="location-info">
          <button className="close-btn" onClick={onClose}>X</button>
          <h2>Event Location Info</h2>
          <ul>
            <li>ID: <strong>{ info.id }</strong></li>
            <li>TITLE: <strong>{ info.title }</strong></li>
          </ul>
      </div>
  )
}

export default LocationInfoBox