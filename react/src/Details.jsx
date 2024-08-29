import{entrys} from './data.js';
function Details(props)
{
    // get the product id from props
    const {Item} =props;
 
    // find the product that match product id
    const entry = entrys.find(p => p.Item === Item);
return(
    <div>
        <h2>{entry.Item}</h2>
        <h3>Class :{entry.Class}</h3>
        <p>{entry.description}</p>
        <p><img src={entry.image} ait={entry.Item}/></p>
       
    </div>
)
}
export default Details;