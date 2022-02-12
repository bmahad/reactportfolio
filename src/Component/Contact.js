import React, { useRef, useState } from "react";
import address from '../images/add1.png';
import phone from '../images/ph1.png';
import mail from '../images/m1.png';
import emailjs from '@emailjs/browser';
import './intro.css';

const Contact = () => {
    const[user,setUser] = useState({
        name:'',
        email:'',
        description:'',
    })
    let name,value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value})
    }

    const postData = async (e) => {
        e.preventDefault();

        const{name,email,description} = user;

        if(name && email && description){
            const res = await fetch("https://reactportfolio-fbe74-default-rtdb.firebaseio.com/reactportfolioform.json",
        {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                description,
            })
        }
        );
        if(res) {
            setUser({
                name:'',
                email:'',
                description:'',
            });
            alert("Thank you for contact me...... :)")
        }
        }
        else{
            alert('Warning please fill all the fields.....!');
        }
    }
    return(
        <>
        <div className="container-fluid pt-5 pb-5">
            <div className="row">
                <div className="col-lg-1 side-color"></div>
                <div className="col-lg-3 col-md-3 col-12 text-center text-lg-start">
                    <h1 className="c-touch">Get In Touch</h1>
                    <div className="pt-5">
                        <div className="image-1">
                            <img src={phone} alt="images" className="c-icon"/>
                            +92 318 6350578
                        </div>
                        <div className="image-2 py-5">
                            <img src={mail} alt="images" className="c-icon"/>
                            bmahad083@gmail.com
                        </div>
                        <div className="image-3">
                            <img src={address} alt="images" className="c-icon"/>
                            Multan Cantt , Pakistan
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-9 col-12">
                    <div className="px-5">
                    <form method="POST">
                        <div class="mb-3 mt-3">
                            <label for="name" class="form-label d-none d-md-block">Name:</label>
                            <input type="text" required value={user.name} onChange={getUserData} class="form-control py-3" id="email" placeholder="Enter name" name="name"/>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label d-none d-md-block">Email:</label>
                            <input type="email" required class="form-control py-3" value={user.email} onChange={getUserData} id="email" placeholder="Enter email" name="email"/>
                        </div>
                        <div class="input-group">
                            <textarea class="form-control py-4" required value={user.description} onChange={getUserData} placeholder="Your Description" name="description" aria-label="With textarea"></textarea>
                        </div>
                        <input type="submit" className="custom-btn mt-4" value="Send" onClick={postData}/>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;

{/* <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
</form> */}