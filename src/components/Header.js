import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
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