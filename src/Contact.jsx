import React, { useState } from "react"

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        msg: ''
    })


    const InputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`
        aap Shreeman ---${data.name}--- hai
        aapka phone number [${data.phone}] hai  
        aapke email address "${data.email}" hai
        or aapke is sujhav ("${data.msg}") k liye dhanyavad
        `)

    };


    return (
        <>
            <div className="my-5">
                <h1 className="text-center text-info">Contact Us</h1>
            </div>

            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>
                            <div class="form-group my-3">
                                <label for="exampleInputPassword1">Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    name="name"
                                    value={data.name}
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                            </div>
                            <div class="form-group my-3">
                                <label for="exampleInputPassword1">Phone no.</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="phone number" />
                            </div>
                            <div class="form-group my-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group my-3">
                                <label for="exampleFormControlTextarea1">Any suggestions</label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    placeholder="Write your suggestion">

                                </textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-info">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;