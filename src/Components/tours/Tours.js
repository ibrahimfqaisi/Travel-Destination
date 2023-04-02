import './Tours.css';

function Tours(params) {
    return (
      <div>
        <h2>{params.tours_name}</h2>
        <img src={params.image_url} className="tours-image" alt={params.tours_name} />
      </div>
    );
  }
  
  export default Tours;
  