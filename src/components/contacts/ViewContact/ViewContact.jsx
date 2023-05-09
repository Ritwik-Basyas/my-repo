import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let ViewContact = () => {

  const contacts = useSelector(state => state.contacts);
    return(
    <React.Fragment>
        <section className="view-contact-intro p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">View Contact</p>
                        <p className="fst-italic">This page is created by Ritwik Basyas for the assignment given
                  by Taiyo.AI</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="view-contact mt-3">
            <div className="container">
                <div className="row align-items-center">
                  {}
                    <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" className="contact-img" />

                    </div>
                    <div className="col-md-8">

                    <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold">Ritwik Basyas</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobile Number: <span className="fw-bold">7002865290</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Status <span className="fw-bold">Active</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          E-mail: <span className="fw-bold">job@taiyo.ai.com</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                         Company Name: <span className="fw-bold">Ritwik Basyas</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Job Title: <span className="fw-bold">7002865290</span>
                        </li>
                        
                      </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to={'/contacts/list'} className="btn btn-warning ms-2">Back</Link>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}

export default ViewContact;