
import Tour from './tour/Tour';
function Tours(params) {
 
    return (
     
     <>
     {
        params.data.map(element => {
          
            return (
                <Tour  tour={element}  key={element.id}  />

            )
        })
        }
        </>
    );
  }
  
  export default Tours;
  