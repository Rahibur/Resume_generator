import React, { useEffect, useState } from 'react'


const Contact =()=>{


 
  



  return (
    <>
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='contact_info_item '>
            <label htmlFor='password'>
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
              <div className='contact_info_content'>
                  
                <div className='contact_info-title'>
                  phone
                </div>
                <div className='contact_info-text'>
                  +987678950
                </div>
              </div>
            </div>

            <div className='contact_info_item'>
            <label htmlFor='password'>
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
              <div className='contact_info_content'>
                  
                <div className='contact_info-title'>
                  Email
                </div>
                <div className='contact_info-text'>
                  yoyorahib@gmail.com
                </div>
              </div>
            </div>

            <div className='contact_info_item '>
            <label htmlFor='password'>
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
              <div className='contact_info_content'>
                  
                <div className='contact_info-title'>
                  Address
                </div>
                <div className='contact_info-text'>
                  Mohini 160 lamapara,Sylhet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

<div className='contact_us'>
     <div className='container-con'>
      <form  class="text-center border border-light p-5" action="https://formsubmit.co/32bf6ae93af912518828d5a0f1b4cde0" method="POST">
        <p className="h4 mb-4">Get in touch</p>
        <input type="text" id="defaultContactFormName" className="form-control mb-4"  name="name"  placeholder="Name"required/>
        <input type="number" id="defaultContactFormName" className="form-control mb-4"  name="phone"  placeholder="phone number"required/>
        <input type="email" id="defaultContactFormEmail" className="form-control mb-4"  name="email"  placeholder="E-mail"required/>
        <div className="form-group">
            <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" name="message" placeholder="Message"required></textarea>
        </div>
        <button className="btn btn-info btn-block" type="submit" style={{marginTop:12}}>Send</button>

      </form>
    </div>
</div>
    </>
  )
}
export default Contact