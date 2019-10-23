import React from 'react'
import Title from '../Globals/Title'


export default function Contact() {
    return (
     <section className="contact py-5">
        <Title title="contact us" />
        <div className="row">
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
                <form action="https://formspree.io/mdlcodes@gmail.com" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="john smith"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="text" className="form-control" name="Email" id="email" placeholder="email@me"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Desription</label>
                       <textarea name="description" id="description" className="form-control" rows="5" placeholder="your enquiry here...">
                       </textarea>
                    </div>
                    <button type="submit" className btn btn-yellow btn-block text-capitalize mt-5>Submit</button>
                </form>
            </div>
        </div>
     </section>
    )
}

