import './Input.css'

export default function Input() {
	return (
		<label  className='c-header-input'>
			<input id="inputIp" className='c-header-input-elem' type='text' placeholder='Search for any IP address or domain' />
			<span className="material-icons">
				keyboard_arrow_right
			</span>
		</label>
	)
}