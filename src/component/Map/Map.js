import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import './Map.css'

export default function Map () {
	const [getLocation, setLocation] = useState({
		lat: 4.570868,
		lng: - 74.297333
	})
	const { getDataResponse, loading } = useSelector(data => data.dataApi)
	useEffect(() => {
		getDataResponse && setLocation(getDataResponse.location)
	}, [loading, getDataResponse])

	return (
		<>
			{loading
				? 'loading'
				:<MapContainer className='c-map' center={[getLocation.lat, getLocation.lng]} zoom={13} scrollWheelZoom={false}>
						<TileLayer
							attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
							url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
							id='mapbox/streets-v11'
							accessToken='pk.eyJ1Ijoic2FudGlhZ28wODEiLCJhIjoiY2tpdzFtMm0zMDRzZjMxbjY5dTR3MWp6YSJ9.nWBKaQBWCBlAOIiGi2M0Og'
						/>
						<Marker position={[getLocation.lat, getLocation.lng]}>
							<Popup>
								Location IP
							</Popup>
						</Marker>
					</MapContainer>
			}
		</>
	)
}