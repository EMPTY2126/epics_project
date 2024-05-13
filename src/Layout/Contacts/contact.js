import React from 'react';
import './contact.css';
import cont from "../../imgs/contact.jpg"

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can add your form submission logic
  //   console.log(formData); // For now, just log the form data to the console
  //   // Clear form after submission
  //   setFormData({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   });
  // };

  // return (
  //   <>
  //     {/* <Navbar/> */}
  //     <div className="contact">
  //       <form onSubmit={handleSubmit} className="contact_form">
  //         <p>
  //           <span className="contact Name">
  //             <input
  //               type="text"
  //               name="name"
  //               value={formData.name}
  //               onChange={handleChange}
  //               size="20px"
  //               className="nameinput"
  //               aria-required="true"
  //               aria-invalid="false"
  //               placeholder="Name"
  //               required
  //             />
  //           </span>
  //           <span className="contact Email">
  //             <input
  //               type="email"
  //               name="email"
  //               value={formData.email}
  //               onChange={handleChange}
  //               size="30"
  //               className="emailinput"
  //               aria-required="true"
  //               aria-invalid="false"
  //               placeholder="Email"
  //               required
  //             />
  //           </span>
  //           <span className="contact Subject">
  //             <input
  //               type="text"
  //               name="subject"
  //               value={formData.subject}
  //               onChange={handleChange}
  //               size="30"
  //               className="nameinput"
  //               aria-required="true"
  //               aria-invalid="false"
  //               placeholder="Subject"
  //               required
  //             />
  //           </span>

  //           <span className="contact Message">
  //             <textarea
  //               name="message"
  //               value={formData.message}
  //               onChange={handleChange}
  //               cols="40"
  //               rows="10"
  //               className="contact_textarea"
  //               aria-invalid="false"
  //               placeholder="Message"
  //               required
  //             ></textarea>
  //           </span>
  //           <input type="submit" value="Send" className="contact submit btn" />
  //           <img className="ajax-loader" alt="Sending ..." style={{ visibility: 'hidden' }} />
  //         </p>
  //         <div className="contact display-none"></div>
  //       </form>
  //     </div>
  //   </>
  // );
  return(
  <div>
      <h1 className='hone'>Contact Form</h1>
      <form className='cf'>
        <div >
          <input type='text' placeholder='Name' name='user_name' /><br/>
          <input type='email'   placeholder='Email address' name='user_email' /><br/>
        </div>
        <div className=''>
          <textarea name='message' type='text' placeholder='Message'></textarea> <br/>
        </div>
        <input type='submit' value='Submit' id='input-submit' />
      </form>

    <div >
      <img className='cont_img' src={cont} alt='contact' />
    </div>
    </div>
  )
}

export default Contact;
