import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
const memesData = require("../../data/db.json")
function Home(params) {
    return (
        <>
            <Header />
            {
                memesData.map(element => {
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
