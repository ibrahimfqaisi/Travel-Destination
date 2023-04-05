import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import './Home.css';

function Home(params) {
    return (
        <>
            <div className='header'><Header /></div>
           
           <div  className='tours'><Tours data={params.data}  /></div>
            
           <div className='footer'> <Footer /></div>
        </>
    )
}
export default Home;
