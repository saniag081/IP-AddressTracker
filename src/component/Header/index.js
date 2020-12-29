import './Header.css'
import Input from '../Input'

export default function Header() {
	return (
		<header className="c-header">
			<h1 className='c-header-title'>IP Adress Tracker</h1>
			<Input />
		</header>
	)
}