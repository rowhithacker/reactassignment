import { Link } from "react-router-dom";
import { entrys } from "./data.js";
 
function Navmenu()
{
return(
   < nav className ="nv" >
   
        <ul>
            {
                entrys.map(
                    entry =>(
                        <li key={entry.Item}>
                            <Link to={`/entry/${entry.Item}`}>{entry.Item}
                            </Link>
                        </li>
                    )
                )
 
            }
        </ul>
        </nav>

)
}
export default Navmenu;
 