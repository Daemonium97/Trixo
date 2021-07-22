import portada from '../images/portada.jpg'
import '../App.css'


export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro' style={{background:'#6474fc'}}>
        <div className='overlay'>
          <div className='container'>
            <div className='row' >
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <p id="mainTitle" style={{ color:'white', fontSize:'28px', letterSpacing:'2px'}}>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </p>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
