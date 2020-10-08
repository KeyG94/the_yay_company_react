import React from 'react';


function ContactList() {
    return (
        <div>
            <ul>
                <li className="contact-list"><span><i className="fas fa-envelope mb-2 p-2"></i></span><span className="contact-span_element">hello@yay.com</span></li>
                <li className="contact-list"><span><i class="fas fa-phone mb-2 p-2"></i></span><span className="contact-span_element">123 456 7890</span></li>
                <li className="contact-list"><span><i class="fas fa-map-marker-alt p-2"></i></span>
                    <span className="contact-span_element">
                        <li className="address">123 Some Street</li>
                        <li className="address">Somewhere Some City</li>
                        <li className="address">10000</li>   
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default ContactList
