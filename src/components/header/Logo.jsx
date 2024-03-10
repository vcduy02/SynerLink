import { Link } from 'react-router-dom'
const Logo = () => {
    return (
        <div className="demo-logo">
            <h1 style={{ paddingRight: "20px", color: "#FFFFFFD9" }}><Link to={'/'} style={{ color: "#FFFFFFD9" }}>DONATE</Link></h1>
        </div>
    )
}

export default Logo