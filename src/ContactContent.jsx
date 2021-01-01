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
    <div>
      <div className="ASSEMBLER">
            <div className="MAP">       
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.1250035478488!2d77.28008918791511!3d28.5622544659342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38c812c0029%3A0x73f56fbe2fc71d28!2sDepartment%20of%20Computer%20Science!5e0!3m2!1sen!2sin!4v1604419720615!5m2!1sen!2sin" title="jamia" width="100%" height="100%" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className="container-fluid" id="CONTACTUSFORM">
                <div className="row sets">
                    <div className="col-12 "style={{padding: "0%"}}>
                        <div className="card col-md-12 col-sm-12" >
                            <div className="row">
                                
                                <div className="col-md-4 col-sm-6 col-xs-6 contact order-md-2 order-sm-2" style={{padding: "2%"}}>
                                    <div className="conatiner">
                                        <h1>Contact Information</h1>
                                        <div className="conatiner">
                                            <div className="d-flex" style={{marginTop:"10%"}}>
                                                <div class="col-md-11"><img src={location} alt="" style={{height:"30px",width:"30px",float:"left",marginRight:"5px"}}/><h3 >Department Of Computer Science, JMI.<br/>
                                                    New Delhi-110025</h3></div>
                                            </div>
                                            <div className="d-flex " style={{marginTop:"10%"}}>
                                                <div className="col-md-10"><img src={email} alt="" style={{height:"30px",width:"30px",float:"left",marginRight:"5px"}}/>
                                                   <h3> hivejamia@gmail.com</h3>
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
                                    <div className="container" style={{padding: "0%"}}>
                                        <h3>Send Message</h3><br/><br/><br/><br/>
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
    </div>
  );
};

export default ContactContent;