import { Link } from "react-router-dom"

const HomePage = ()=>{
return(
    <div>
        <ul>
            <h2>Orders</h2>
        </ul>
        <Link to="/items">
        <ul>
            <h2>Items</h2>
        </ul></Link>
        <Link to="/customers">
        <ul>
            <h2>Customers</h2>
        </ul></Link>
    </div>
)

}
export default HomePage