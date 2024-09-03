import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav className='navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0'>
        <Link to='index.html' className='navbar-brand p-0'>
          <h1 className='m-0 text-primary'>
            <img
              src='/images1/nbdlogo.png'
              alt='Namaami Bharat Darshan Logo'
              style={{ maxHeight: '100px', maxWidth: '150px' }}
            />
          </h1>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <div className='navbar-nav ms-auto py-0'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'active nav-item nav-link' : 'nav-item nav-link'
              }
            >
              Home
            </NavLink>

            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'active nav-item nav-link' : 'nav-item nav-link'
              }
            >
              {/* <NavLink to="/about" className="nav-item nav-link "> */}
              About Us
            </NavLink>
          
           
            {/* Therapy Tools */}
            <div className='nav-item dropdown'>
              <Link
                to='/therapy-tools'
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
              >
                Services
              </Link>
              <div className='dropdown-menu m-0'>
                <Link to='/locations' className='dropdown-item'>
                  Tirth Special Package
                </Link>
                <Link to='/therapy-tools/spidercage' className='dropdown-item'>
                  Cab Service
                </Link>
                <Link to='/therapy-tools/dmi' className='dropdown-item'>
                  Event Management
                </Link>
                {/* <Link
                  to='/therapy-tools/functional-estim'
                  className='dropdown-item'
                >
                  
                </Link> */}
                {/* <Link to='/therapy-tools/galileo' className='dropdown-item'>
                  Galileo
                </Link>
                <Link to='/therapy-tools/theratogs' className='dropdown-item'>
                  Theratogs
                </Link> */}
              </div>
            </div>
            <NavLink to='/contact' 
             className={({ isActive }) =>
             isActive ? 'active nav-item nav-link' : 'nav-item nav-link'
           }
           >
              Contact Us
            </NavLink>
            <div className='nav-item dropdown'>
              <Link
                to='#'
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
              >
                Get Started
              </Link>
              <div className='dropdown-menu m-0'>
                <Link to='/registration-process' className='dropdown-item'>
                   Booking Process
                </Link>
                <Link to='/intake-forms' className='dropdown-item'>
                  Enquire Now
                </Link>
                <Link
                  to='/Frequently-asked-questions'
                  className='dropdown-item'
                >
                  Frequently Asked
                </Link>
                <Link
                  to='/contact'
                  className='dropdown-item'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <Link to='/intake-forms' className='btn btn-primary py-2 px-4 ms-3'>
            Book Now
          </Link>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;
