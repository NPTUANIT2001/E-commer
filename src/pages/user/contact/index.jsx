import './style.scss';
const Contact = () => {
  return <>
  <div className="contact_container">
    <div className="contant">
      <h2>contact us</h2>
      <div className="form">
        <form action="">
          <input type="text" placeholder='Enter your full name' required autoComplete='off' />
          <input type="email" placeholder='Enter your email' autoComplete='off' />
          <input type="text" placeholder='Enter your subject' />
          <textarea name="Massage" id="" cols="30" rows="10" placeholder='Your message' autoComplete='off'></textarea>
        </form>
      </div>
    </div>
  </div>
</>;
};

export default Contact;
