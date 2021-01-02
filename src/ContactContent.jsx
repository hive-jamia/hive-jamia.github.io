import React from "react";
import location from "./image/location.svg";
import discord from "./image/discord.svg";
import email from "./image/email.svg";
import facebook from "./image/facebook.svg";
import github from "./image/github.svg";
import instagram from "./image/instagram.svg";
import linkedin from "./image/linkedin.svg";
import submit from "./image/submit.svg";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const ContactContent = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail','template_zv382de',e.target,'user_Per9BVAvagkCBJUdZihvd')
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
        e.target.reset();
        alert('Mail Sent Succesfully!');
    }

  return (
    <div id="OUTER-DIV">

            
            <div className="container" id="CONTACTUSFORM">
                <div className="row sets">
                    <div className="col-12 "style={{padding: "0%"}}>
                        <div className="card col-md-12 col-sm-12" >
                            <div className="row">
                                
                                <div className="col-md-4 col-sm-6 col-xs-6 contact order-md-2 order-sm-2" style={{padding: "2%"}}>
                                    <div className="container">
                                        <h1 style={{fontSize:"18px"}}>Contact Information</h1>
                                        <div className="container">
                                            <div className="d-flex" style={{marginTop:"10%"}}>
                                                <div class="col-md-11"><img src={location} alt="" style={{height:"30px",width:"30px",float:"left",marginRight:"5px"}}/><h3 style={{fontSize:"18px"}}>Department Of Computer Science, JMI.<br/>
                                                    New Delhi-110025</h3></div>
                                            </div>
                                            <div className="d-flex " style={{marginTop:"10%"}}>
                                                <div className="col-md-10"><img src={email} alt="" style={{height:"30px",width:"30px",float:"left",marginRight:"5px"}}/>
                                                   <h3 style={{fontSize:"17px"}}> hivejamia@gmail.com</h3>
                                                </div>
                                            </div>
                                            <br/><br/>
                                            <div className="row" style={{marginLeft:"5px"}}>
                                                <div className="col-md-2">
                                                    <Link to="/">
                                                        <img src={discord} alt="" style={{height:"30px",width:"30px",marginRight:"5px"}}/>
                                                    </Link>
                                                </div>
                                                <div className="col-md-2">
                                                    <Link to="/">
                                                        <img src={facebook} alt="" style={{height:"30px",width:"30px",marginRight:"5px"}}/>
                                                    </Link>
                                                </div>
                                                <div className="col-md-2">
                                                    <Link to="/">
                                                        <img src={instagram} alt="" style={{height:"30px",width:"30px",marginRight:"5px"}}/>
                                                    </Link>
                                                </div>
                                                <div className="col-md-2">
                                                    <Link to="/">
                                                        <img src={github} alt="" style={{height:"30px",width:"30px",marginRight:"5px"}}/>
                                                    </Link>
                                                </div>
                                                <div className="col-md-2">
                                                    <Link to="/">
                                                        <img src={linkedin} alt="" style={{height:"30px",width:"30px",marginRight:"5px"}}/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>


                                <div className="col-md-8 col-sm-6 col-xs-6 ">
                                    <div className="container form-content" style={{padding: "0%"}}>
                                        <h4>Send Message</h4><br/><br/><br/><br/>
                                        <form onSubmit={sendEmail}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="form-group col-md-6 ">
                                                        <input type="text" className="form-control" placeholder="First Name" id="fname" name="fname" required/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control" placeholder="Last Name" id="lname" name="lname" required/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" id="email" name="email" required/>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control" placeholder="College" id="college" name="college" required/>
                                                    </div>
                                
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control" placeholder="Course" id="course" name="course" required/>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="form-group">
                                                        <textarea id="message" name="message" placeholder="Message" rows="2" cols="100"></textarea>
                                                    </div>    
                                                </div>
                                                <div style={{marginLeft: "80%"}}>
                                                        <br/>
                                                        <button type="submit" className="btn"><img src={submit} alt="" style={{height:"50px",width:"50px"}} /></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
  );
};

export default ContactContent;