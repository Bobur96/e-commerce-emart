import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                    <p className="lead mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime impedit accusamus 
                        expedita modi aliquid excepturi dolore quia explicabo in delectus perspiciatis maiores 
                        corrupti numquam esse ducimus facilis a tempore placeat adipisci, aut ex blanditiis 
                        consequuntur sed. Perspiciatis dolorem mollitia, temporibus reiciendis voluptas, 
                        quo quae possimus autem quasi omnis animi cupiditate delectus fugiat minus eveniet 
                        tenetur atque fugit aut maiores! Quia, porro adipisci possimus quasi atque id. Tenetur 
                        velit quaerat temporibus unde? Doloribus commodi consequatur ipsum culpa est facilis, 
                        explicabo enim ipsa libero nam numquam.
                    </p>
                    <NavLink to="/contact" className="btn btn-outline-primary px-3 mt-2">Contact Us</NavLink>
                </div>
                <div className="col-md-6 d-flex justify-content-center pt-5">
                    <img src="/assets/about.png" alt="About Us" height="410px" width="500px"/>
                </div>
            </div>
        </div>
    )
}

export default About