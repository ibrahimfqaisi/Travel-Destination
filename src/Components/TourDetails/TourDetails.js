import { useState } from "react";
import { useParams } from "react-router-dom";
import './TourDetails.css';


function TourDetails(props) {
    const [view, setViwe] = useState(false);
function viweHandler() {
    
    setViwe(!view)
}
    const { id } = useParams();

    const tour = props.data.find((element) => {
        return element.id === id;
    });

    console.log(tour);

    return (
        <>
           <div className="container">
    <div className="carde" style={{ width: "400px" }}>
                <h1>{`${tour.name}`}</h1>
                {/* <p>{`info: ${tour.info}`}</p> */}
                <p>{view ?`info: ${tour.info.substr(0,165)}` :`info: ${tour.info}` }</p>
                  {view && <button className="boton" onClick={viweHandler}> view more</button>}
                  {!view && <button className="boton" onClick={viweHandler}>view lese</button>}
                
                <img style={{ width: "400px" } } src={tour.image} alt={tour.name} />
            </div></div>
        </>
    );
}

export default TourDetails;


