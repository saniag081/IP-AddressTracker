import './Input.css'
import { useRef } from 'react'

export default function Input() {
	const refForm = useRef()
	function handleSubmit(e) {
		e.preventDefault()
		const elem = refForm.current
		const data = new FormData(elem)
		console.log(data.get('text_ip'))
	}
	return (
		<form
			method="post"
			onSubmit={handleSubmit}
			ref={refForm}
		>
			<label  className='c-header-input'>
				<input
					id="inputIp"
					name="text_ip"
					className='c-header-input-elem'
					type='number'
					required
					placeholder='Search for any IP address or domain'
				/>
				<span className="material-icons">
					keyboard_arrow_right
				</span>
			</label>
		</form>
	)
}