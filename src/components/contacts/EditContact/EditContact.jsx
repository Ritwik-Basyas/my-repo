import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import shortid from 'shortid';
import { useParams } from "react-router-dom";


let EditContact = () => {

    let {id} = useParams();

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");


    return(
    <React.Fragment>
        <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary fw-bold">Edit Contact Details</p>
                        <p className="fst-italic">This page is created by Ritwik Basyas for the assignment given
                  by Taiyo.AI</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form action="">
                            <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="Mobile Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="statusSelect">Select Status</label>
                                <br />
                                <select className="form-control" id="statusSelect" value={status} onChange={(e)=>setStatus(e.target.value)}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Company Name" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Job Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                            
                            <div className="mb-2">
                                <input type="submit" className="btn btn-success" value="Update" />
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
)
}

export default EditContact;