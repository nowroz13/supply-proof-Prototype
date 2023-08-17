import React from 'react'
import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
        <div className='text-center'> 
            <h3> Supply Chain Management using Ethereum blockchain For Start-A-Thon:- </h3>
            <br /><br/>
            <h5> Register Product suppliers ,Manufacturers, Distributors and Retailers</h5>
            <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
            <br /> <br /><br/>
            <h5> Owner should order Products</h5>
            <button onClick={redirect_to_addmed} className="btn btn-outline-warning">Order Products</button>
            <br /> <br /><br/>
            <h5> Control Supply Chain</h5>
            <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">Control Supply Chain</button>
            <br /> <br /><br/>
            <hr />
            <br />
            <h5><b>Track</b> Products:</h5>
            <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">Track Medicines</button>
        </div>
    )
}

export default Home
