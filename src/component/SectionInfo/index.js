import './SectionInfo.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function SectionInfo() {
	const [getData, setData] = useState({})
	const { dataApi } = useSelector(data => data)
	console.log(getData)
	useEffect(() => {
		setData(dataApi)
	},[dataApi])
	return (
	<>
		{getData.loading ? 'loading'
		:	<div className='c-info'>
				<div className='c-info-container'>
					<div className='c-info-container-box'>
						<span className='u-color-gray'>IP Adress</span>
						<h3>{ getData.getDataResponse?.ip }</h3>
					</div>
					<div className='c-info-container-box'>
						<span className='u-color-gray'>LOCATION</span>
							<h3>{getData.getDataResponse?.location.city}</h3>
					</div>
					<div className='c-info-container-box'>
						<span className='u-color-gray'>TIMEZONE</span>
							<h3>{ getData.getDataResponse?.location.timezone }</h3>
					</div>
					<div className='c-info-container-box'>
						<span className='u-color-gray'>ISP</span>
							<h3>{  getData.getDataResponse?.isp}</h3>
					</div>
				</div>
			</div>
			}
		</>
	)
}