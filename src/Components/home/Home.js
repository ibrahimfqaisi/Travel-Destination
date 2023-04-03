import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
function Home(params) {
    return (
        <>
            <Header />
            {
                params.memesData.map(element => {
                    return (
                        <Tours tours_name={element.name} image_url={element.image} />

                    )
                })
                }
            <Footer />
        </>
    )
}
export default Home;
