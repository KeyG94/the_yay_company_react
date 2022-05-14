const ContactList = () => {
	return (
		<div>
			<ul>
				<li className='contact-list'>
					<span>
						<i className='fas fa-envelope mb-2 p-2'></i>
					</span>
					<span className='contact-span_element'>hello@yay.com</span>
				</li>
				<li className='contact-list'>
					<span>
						<i className='fas fa-phone mb-2 p-2'></i>
					</span>
					<span className='contact-span_element'>123 456 7890</span>
				</li>
				<li className='contact-list'>
					<span>
						<i className='fas fa-map-marker-alt p-2'></i>
					</span>
					<span className='contact-span_element'>
						<span className='address d-block'>123 Some Street</span>
						<span className='address d-block'>Somewhere Some City</span>
						<span className='address d-block'>10000</span>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default ContactList;
