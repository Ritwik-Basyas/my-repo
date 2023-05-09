import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let ContactList = () => {

  
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    Add New Contact
                  </Link>
                </p>
                <p className="fst-italic">
                  This page is created by Ritwik Basyas for the assignment given
                  by Taiyo.AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            
            {
              contacts.map(contact => (
                <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                      <div className="col-md-4">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                          alt=""
                          className="contact-img"
                        />
                      </div>
                      <div className="col-md-7">
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                            Name: <span className="fw-bold">{contact.name}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Mobile Number: <span className="fw-bold">{contact.mobileNo}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Status <span className="fw-bold">{contact.status}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-1 d-flex flex-column align-items-center">
                          <Link to={'/contacts/view/:contactID'} className="btn-btn-primary my-1">
                              <i className="fa fa-eye"></i>
                          </Link>
                          <Link to={'/contacts/edit/:contactID'} className="btn-btn-primary my-1 ">
                              <i className="fa fa-pen"></i>
                          </Link>
                          <button className="btn-btn-danger my-4">
                              <i className="fa fa-trash"></i>
                          </button>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
  
              ))
            }


            

          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactList;
