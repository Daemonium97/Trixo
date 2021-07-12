
import logo from '../images/logo.jpg';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top' style={{background:'linear-gradient(to right, #32373f, #2f3f45, #2f4746, #394d41, #4b513c)'}}>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
            style={{background:'linear-gradient(to right, #32373f, #2f3f45, #2f4746, #394d41, #4b513c)'}}
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src={logo} alt="" style={{width:'100px'}}/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right' >
            <li>
              <a href='#about' className='page-scroll' style={{color:'white'}}>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll' style={{color:'white'}}>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll' style={{color:'white'}}>
                Gallery
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll' style={{color:'white'}}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
