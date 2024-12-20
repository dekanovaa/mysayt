import Downup from '../Downup/Downup'
import './Contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='container contact_container'>
        <h2 className='contact_title'>Contacts</h2>
        <Downup/>
        <ul className="contact_list">
          <li className="contact_item">
            <div className='contact_wrap'>
            <i class="fa-regular fa-envelope"></i>
            <h3 className="contact_name">E-mail</h3>
            </div>
            <a className='contact_link' href="mailto:dekanovasevinchhh@gmail.com?subject=Hello&body=How are you?" >dekanovasevinchhh@gmail.com</a>
          </li>
          <li className="contact_item">
            <div className='contact_wrap'>
            <i class="fa-solid fa-phone"></i>
            <h3 className="contact_name">Telephone number</h3>
            </div>
            <a className='contact_link' href="tel:+998932251944" >+998 93 225 19 44</a>
          </li>
          <li className="contact_item">
          <div className='contact_wrap'>
          <i class="fa-solid fa-share-nodes"></i>
          <h3 className="contact_name">Social media</h3>
          </div>
          <a href="https://github.com/dekanovaa"><i class="fa-brands fa-github"></i></a>
          <a href="https://t.me/pr0grammer_blog"><i class="fa-brands fa-telegram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact