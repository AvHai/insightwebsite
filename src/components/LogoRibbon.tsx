import React from 'react';

const logos = [
	{ name: 'IEM', src: '/logos/iemlogo.png' },
	{ name: 'Internet Society India Kolkata Chapter', src: '/logos/india-kolkata.jpg' },
	{ name: 'ISTE', src: '/logos/istelogo.png' },
	{ name: 'IEM Centre of Excellence for Data Science', src: '/logos/cedslogo.png' },
	{ name: 'UEM', src: '/logos/uemlogo.png' },
];

const LogoRibbon = () => {
	return (
		<div className="w-full bg-white backdrop-blur-sm border-b border-primary/20">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-center gap-6 md:gap-12">
					{logos.map((item, index) => (
						<div
							key={index}
							className="flex flex-col items-center group"
						>
							<img
								src={item.src}
								alt={item.name}
								className="h-12 md:h-32 object-contain transition-transform duration-300 group-hover:scale-110"
								style={{ maxWidth: '200px' }}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LogoRibbon;