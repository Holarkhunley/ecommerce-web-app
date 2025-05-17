
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div id='footer-container'>
            <div className='h-[195px] 'id='footer-content1'>
                <h6>NEW TO SHOPFLIX?</h6>
                <p>Subscribe to our newsletter to get updates on the latest deals</p>
                <input className='mb[5%] border h-[30px]' type="email" name='email' placeholder='Enter your mail address' />
                <input className='border h-[30px] w-[65px]'type='submit'value='submit' />
                <div>
                    <h6 className='mt-10'>CONNECT WITH US</h6>
                    <a href={"#"}><FontAwesomeIcon icon={faSquareFacebook} /></a>
                    <a href={"#"}><FontAwesomeIcon icon={faSquareInstagram} /></a>
                    <a href={"#"}><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                    <a href={'#'}><FontAwesomeIcon icon={faYoutube} /></a>
                </div>

            </div>
            <div  id='footer-content2' >
                <div id='content'>
                    <h6>ABOUT SHOPFILX</h6>
                    <ol>
                       <li><a href={'#'}>About Us</a></li>
                       <li><a href={'#'}>Shopflix Blog</a></li>
                       <li><a href={'#'}>Terms And Conditions</a></li>
                       <li><a href={'#'}>Privacy And Policy</a></li>
                    </ol>
                </div>
                <div id='content'>
                    <h6 className='text-nowrap'>BUYING ON SHOPFLIX</h6>
                    <ol>
                       <li><a href={'#'}>FAQs</a></li>
                       <li><a href={'#'}>Delivery</a></li>
                       <li><a href={'#'}>Return And Refunds</a></li>
                    </ol>
                </div>
                <div id='content'>
                    <h6 className='ml-[25%]'>NEED HELP?</h6>
                    <ol>
                       <li><a href={'#'}>Chat With Us</a></li>
                       <li><a href={'#'}>Contact Us</a></li>
                       <li><a href={'#'}>Help Center</a></li>
                    </ol>
                </div>
                <div id='content'>
                    <h6>EARN ON SHOPFLIX</h6>
                    <ol>
                       <li><a className='ml-[3%] text-nowrap' href={'#'}>Become a SHOPFLIX Affiliate</a></li>
                    </ol>
                </div>
            </div>
            <div  id='payment'>
                <h6 className='indent-[25px]'>PAYMENT METHODS</h6>
                <p className='mr-[1.5%] ml-[1.7%]'><FontAwesomeIcon icon={faCcMastercard} /></p>
                <p><FontAwesomeIcon icon={faCcVisa} /></p>
            </div>
            <hr className='clear-both' />
            <p className='text-center'><FontAwesomeIcon icon={faCopyright} /> 2024,Shopflix.com.All rights reserved</p>
        </div>
    )
}
export default Footer