import { Link } from 'react-router-dom';
import './Tour.css';

function Tour(props) {
  return (
    <>
      <Link className='card' to={`/${props.tour.name}/${props.tour.id}`}>
        <h2>{props.tour.name}</h2>
        <img
          src={props.tour.image}
          className="tours-image"
          alt={props.tour.name}
        />
      </Link>
    </>
  );
}

export default Tour;
