import './Header.css'
import Input from '../Input'
import Wrapper from '../Wrapper'
import SectionInfo from '../SectionInfo'

export default function Header() {
	return (
		<header className="c-header">
			<Wrapper>
				<h1 className='c-header-title'>IP Adress Tracker</h1>
				<Input />
				<SectionInfo/>
			</Wrapper>
		</header>
	)
}