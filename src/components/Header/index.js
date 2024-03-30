import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {isMenuHeader: false}

  mobileMenuClick = () => {
    this.setState(prevState => ({isMenuHeader: !prevState.isMenuHeader}))
  }

  mobileMenu = () => (
    <>
      <ul className="mobile-unorderlist">
        <Link to="/" className="header-link-class">
          <li className="header-menu-paragraph">Home</li>
        </Link>

        <Link to="/about" className="header-link-class">
          <li className="header-menu-paragraph">About</li>
        </Link>
      </ul>
    </>
  )

  render() {
    const {isMenuHeader} = this.state
    return (
      <>
        <nav className="nav-container">
          <Link to="/" className="link-class">
            <h1 className="header-covid-logo">COVID19INDIA</h1>
          </Link>
          <ul className="header-menu">
            <Link to="/" className="link-class">
              <li className="header-menu-paragraph">Home</li>
            </Link>

            <Link to="/about" className="link-class">
              <li className="header-menu-paragraph">About</li>
            </Link>
          </ul>
        </nav>
        <div>
          <nav className="header-list-container">
            <Link to="/" className="link-class">
              <h1 className="header-covid-logo">COVID19INDIA</h1>
            </Link>
            <button
              type="button"
              className="mobile-menu"
              onClick={this.mobileMenuClick}
            >
              <img
                src="https://res.cloudinary.com/charani/image/upload/v1636961155/add-to-queue_1_jbzrnv.png"
                alt="menu"
              />
            </button>
          </nav>
          <div className="mobile-class-menu">
            {isMenuHeader ? this.mobileMenu() : ''}
          </div>
        </div>
      </>
    )
  }
}

export default Header