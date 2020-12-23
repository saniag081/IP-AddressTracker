import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

export default function Map () {
	return (
		<MapContainer className='c-map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
				url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
				id='mapbox/streets-v11'
				accessToken='pk.eyJ1Ijoic2FudGlhZ28wODEiLCJhIjoiY2tpdzFtMm0zMDRzZjMxbjY5dTR3MWp6YSJ9.nWBKaQBWCBlAOIiGi2M0Og'
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					Location
				</Popup>
			</Marker>
		</MapContainer>
	)
}