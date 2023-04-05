import url from '../../assests/instagram.jpeg';
import './Footer.css';

function Footer() {

    return(
        <>
<div className='footer'>
        <a href ="https://web.facebook.com/qasrawi.ibrahim"> my facebook link</a><br></br>
        <a href ="https://instagram.com/ibrahim_adnan98?igshid=OTJhZDVkZWE="> my instgram link</a>
        <img src= {url} className="footer-image" alt="qr qode"/>
        </div>
        </>
    )
}
export default Footer;
