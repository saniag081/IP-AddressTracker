import './SectionInfo.css'

export default function SectionInfo() {
	return (
		<div className='c-info'>
			<div className='c-info-container'>
				<div className='c-info-container-box'>
					<span className='u-color-gray'>IP Adress</span>
					<h3>192.212.174.101</h3>
				</div>
				<div className='c-info-container-box'>
					<span className='u-color-gray'>LOCATION</span>
					<h3>Brooklyn, NY</h3>
				</div>
				<div className='c-info-container-box'>
					<span className='u-color-gray'>TIMEZONE</span>
					<h3>UTC - 05:00</h3>
				</div>
				<div className='c-info-container-box'>
					<span className='u-color-gray'>ISP</span>
					<h3>Space X</h3>
				</div>
			</div>
			</div>
	)
}