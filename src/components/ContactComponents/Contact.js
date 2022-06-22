import React from "react";
import ContactIcons from "./ContactIcons";




const Contact = () => {
	return (
		<>
			<div className="flex flex-col space-y-5 justify-center items-center h-screen bg-vomblue text-cream font-montserrat">
				<ul className="space-y-3 text-center">
					<li>PontusAbrahamsson92@gmail.com</li>
					<li>(+46 ) 7 2015-4994 (0720154994)</li>
				</ul>
                <ContactIcons />
			</div>
		</>
	);
};

export default Contact;
