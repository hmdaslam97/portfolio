import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => setExpandNavbar(!expandNavbar)}><ReorderRoundedIcon /></button>
            </div>

            <div className="links">
                <Link id="l1" to="/">Home</Link>
                <Link id="l2" to="/project">Projects</Link>
                <Link id="l3" to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar