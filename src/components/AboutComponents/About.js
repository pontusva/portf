import React from "react";

const About = () => {
	return (
		<>
			<div className="flex flex-col space-y-5 justify-center items-center h-screen bg-vomblue text-cream font-montserrat">
				<h1 className="md:text-4xl text-3xl uppercase text-greenish">About</h1>
				<p className="text-cream w-96 text-justify">
					Hi, my name is Pontus and I am a web developer from Sweden. During the year that has passed
					I have been learning web-development. All of this
					because of a friend that said I should give it a go, I
					owe him alot. I have had real good time with it so i
					decieded to apply to a school that specialize in IT. So
					I am very happy to say that in this coming fall I will
					be attending IT-högskolan in Göteborg. I am also a
					proud gamer that likes to read books about programming.
					You could say that I am an enthusiast when it comes to
					about just anything I do really.
				</p>
			</div>
		</>
	);
};

export default About;
