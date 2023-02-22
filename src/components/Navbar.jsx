import logo from '../assets/logo.png'
import Button from './Button';
import Row from './Row'

function Navbar (){
   
    
    return (
        <div>
            <Row>
             <img src={logo} alt="logo"/>
            <Row>
                <div>Work</div>
                <div>Approach</div>
                <div>Culture</div>
                <div>Careers</div>
                <div>Blog</div>
            </Row>
            <Button>Get in touch</Button>
            </Row>
        </div>
    )
}


export default Navbar;