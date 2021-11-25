import React, {useEffect} from 'react';
import { gsap } from 'gsap/all';
import "./Style.css";
import Aside from './aside';

const Page = () => {
    useEffect(() => {
        gsap.registerEffect({
					name: "multiBlink",
					extendTimeline: true,
					effect(targets, config) {
						return gsap.fromTo(
							targets,
							{
								opacity: 0.3,
							},
							{
								opacity: 0.9,
								stagger: {
									each: 0.1,
									amount: 1,
									from: "random",
									repeat: -1,
									yoyo: true,
								},
								duration: "random(0.5, 1)",
								ease: "sine.inOut",
								...config,
							}
						);
					},
				});
        
        const objects = document.querySelectorAll('.star polygon, .star circle');
        
        const timeline = gsap.timeline({ }).multiBlink(objects);},[])

    return (
        
        <div className="container">
            <Aside />
            <div className="text">
            <h1> ¡Piccolino!</h1>
            <h2> Ganaste 50 puntos</h2>
            </div>
            <div className="star">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800">
                <polygon points="279.02 423.13 263.89 424.28 256.26 437.39 250.49 423.36 235.66 420.15 247.23 410.33 245.69 395.24 258.61 403.2 272.49 397.08 268.9 411.82 279.02 423.13" fill="#fff19c"/>
                <polygon points="373.45 251 345.14 239.23 319.4 255.89 321.84 225.32 298.04 205.99 327.86 198.87 338.9 170.26 354.89 196.42 385.5 198.07 365.57 221.37 373.45 251" fill="#fff19c"/>
                <polygon points="161.33 285.83 151.8 278.3 140.2 281.89 144.41 270.5 137.42 260.57 149.55 261.06 156.83 251.34 160.12 263.03 171.61 266.94 161.51 273.69 161.33 285.83" fill="#E20613"/>
                <circle cx="560.5" cy="239.5" r="10.5" fill="#fff19c"/>
                <polygon points="781.97 251.49 773.35 239 758.18 239.02 767.39 226.97 762.68 212.54 777 217.58 789.26 208.64 788.89 223.81 801.18 232.71 786.64 237.05 781.97 251.49" fill="#fff19c"/>
                <polygon points="1048.01 325.3 1017.93 331.25 1005.77 359.39 990.83 332.62 960.3 329.76 981.14 307.27 974.43 277.36 1002.26 290.23 1028.64 274.6 1024.99 305.04 1048.01 325.3" fill="#fff19c"/>
                <polygon points="211.9 601.37 202 608.4 202.18 620.54 192.43 613.3 180.94 617.22 184.82 605.72 177.54 596 189.68 596.13 196.67 586.2 200.3 597.79 211.9 601.37" fill="#fff19c"/>
                <circle cx="980.5" cy="586.5" r="15" fill="#332190"/>
                <circle cx="506" cy="650" r="15" fill="#E20613"/>
                </svg>
            </div>
        </div>
    )
}

export default Page


