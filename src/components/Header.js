import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
            color={showAdd ? '#D2001A' : 'green'}
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd}
        />
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