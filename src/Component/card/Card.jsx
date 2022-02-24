
function Card({city,weatherTemp}){
    
    return (
        <div className="styleCard">
           <div className="card">
               <div>{city}</div>
                <div>{weatherTemp}</div>
                   
            </div>
        </div>
)
}
export default Card;
