import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }
  
    return (
    <header className='header'>
        <div className='container'>
            <h1>{title}</h1>
            <Button color='green' text='Add' 
            onClick={onClick} />
        </div>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// You can style things inline with variables
// <h1 style={headingStyle}>title}</h1>
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'teal'
// }

export default Header