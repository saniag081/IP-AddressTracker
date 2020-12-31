import './Header.css'
import Input from '../Input'
import Wrapper from '../Wrapper'

export default function Header() {
	return (
		<header className="c-header">
			<Wrapper>
				<h1 className='c-header-title'>IP Adress Tracker</h1>
				<Input />
			</Wrapper>
		</header>
	)
}