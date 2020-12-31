import './Wrapper.css'

export default function Wrapper({ children }) {
	return (
		<div className='c-wrapper'>
			{children}
		</div>
	)
}