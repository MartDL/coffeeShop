import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5" >
            <div className="container">
                <Title title="our story" />
                <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-muted mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus alias veniam consequatur. Unde saepe iusto illo maiores cumque a, assumenda, harum suscipit explicabo nam animi. Tenetur, sequi beatae veritatis sit laudantium perspiciatis aperiam perferendis quas vitae ipsam! Tempore mollitia ducimus eos reprehenderit earum in dolor obcaecati amet eveniet, debitis aperiam sequi magnam sint? Quae, ratione quas. Pariatur eaque laudantium 
                </p>
                <Link to="/about/">
                <button className="btn text-uppercase btn-yellow">about page</button>
                </Link>
                </div>
                </div>
            </div>
        </section>
    )
}
            
