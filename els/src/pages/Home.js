import Header from "../components/header/Header"
import Illustrattion from "../images/home/landing-page-illustration.svg"
import Head from "../components/header/Head"
import WOW from 'wowjs';
import React, { useEffect } from 'react';
import '../css/styles.css';
import '../css/animate.css';
import { Player } from '@lottiefiles/react-lottie-player';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import { initializeSlider } from "../js/slider";
import Project1 from "../images/home/dashboard.webp"
import Project2 from "../images/home/dashboard2.webp"
import Project3 from "../images/home/mobile-project.webp"
import Project4 from "../images/home/ecommerce project.webp"
import Logo from "../images/Els-logo-sample/pngs/els_alt_big.png"


const Home =()=>{
	useEffect(() => {
		new WOW.WOW({
			live: false
		  }).init();

		initializeSlider();
	  }, []);
    return(
        <>
		{<Head/>}
        <body class="overflow-x-hidden bg-white" >
    {<Header/>}
    <main style={{minHeight: 100}} id="butter">
        {/* <!-- This style is only for aligning footer to page bottom. You can change appropriately -->

        <!-- Hero Section --> */}

        <section class="relative md:h-screen flex items-center w-full px-8 mx-auto md:px-12 lg:px-24 pt-[120px] pb-[110px]
        md:pt-[150px] md:pb-[120px]
        xl:pt-[180px] xl:pb-[160px]
        2xl:pt-[210px] 2xl:pb-[200px] bg-gradient-to-b from-els-light-blue2 to-white">
            <div class="container">

                <div class="z-10 w-full md:w-3/6 wow fadeInDown" data-wow-delay=".15s">
                    <h1 class="z-10 mb-10 font-sans text-3xl font-extrabold leading-tight sm:leading-tight md:leading-tight md:text-5xl">
                        EasyLiving Software <br class="hidden sm:inline-block"/>Solutions</h1>
                    <h2 class="z-10 w-full text-xl font-sans  md:text-3xl text-els-gray-2">Creating Innovative Technologies
                    </h2>
                    <div class="z-10 flex items-center w-full mt-10 space-x-8 md:w-4/12">
                        <a href="#client-form" class="animate__animated animate__pulse animate__delay-1s flex items-center justify-center w-full font-extrabold text-white transition duration-300 rounded h-14 els-gradient hover:shadow-joinUs hover:bg-opacity-90 ease-in-up">
                            <h3>Get started
                            </h3>
                        </a>
                    </div>
                </div>
                <div class="absolute hidden w-full md:block bottom-24  right-24 md:w-2/4">
                    <img class="wow fadeInRight" data-wow-delay=".15s" src={Illustrattion} alt="Decorative els background image"/>
                </div>
            </div>
        </section>

        {/* <!-- What we do Section --> */}

        <section class="relative flex flex-col w-full px-8 pt-[120px] pb-[50px] mx-auto md:px-12 lg:px-24 items-left md:items-center">
            <h2 class="relative z-10 pb-[20px] leading-[45px] mb-[-20px] font-sans text-3xl font-extrabold text-center md:text-4xl md:text-center before:content-[''] before:absolute before:left-[50%] before:ml-[-25px] before:bottom-[-2px] before:h-[4px] before:w-[50px] before:rounded-[5px] "
                data-wow-delay=".2s">What We Do</h2>
            <hr class="w-16 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>

            <h3 class="mt-20 font-sans text-base leading-loose text-center md:text-lg text-els-gray-2 wow fadeIn" data-wow-delay=".15s">We build outstanding software applications for our customers to make them outstanding in the technology market while meeting their clients' needs. If you require software developers for your team, don't worry. We also outsource our software
                engineers to clients who may need software development services like mobile application development.</h3>

            <div class="grid grid-cols-1 gap-8 my-20 md:grid-cols-2 md:m-20 sm:w-9/12">
                <div class="flex h-auto pb-10 transition duration-300 rounded-md hover:shadow-lg hover:bg-opacity-90 ease-in-up card items-center justify-center sm:pb-10 wow fadeInUp" data-wow-delay=".2s">
				<Player
						src='https://assets9.lottiefiles.com/packages/lf20_o275vod4.json'
						className="player"
						loop
						autoplay
						/>
                    
                    <h3 class="card-heading text-center">Design</h3>
                    <p class="text-center card-content">We do top-notch software designs for our client's mobile UI/UX designs to meet market standards.</p>
                </div>
                <div class="flex h-auto pb-10 transition duration-300 rounded-md hover:shadow-lg hover:bg-opacity-90 ease-in-up card items-center justify-center sm:pb-10 wow fadeInUp" data-wow-delay=".2s">
				<Player
						src='https://assets7.lottiefiles.com/packages/lf20_xhzuyfid.json'
						className="player"
						loop
						autoplay
						/>
					
                    <h3 class="card-heading text-center">Website and App development</h3>
                    <p class="text-center card-content">our software engineers make interactive and customer-friendly software applications.
                    </p>

                </div>
                <div class="flex h-auto pb-10 mt-8 transition duration-300 rounded-md hover:shadow-lg hover:bg-opacity-90 ease-in-up card md:mt-0 items-center justify-center sm:pb-10 wow fadeInUp" data-wow-delay=".2s">
				<Player
						src='https://assets6.lottiefiles.com/packages/lf20_ztcdpayg.json'
						className="player"
						loop
						autoplay
						/>
					{/* <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ztcdpayg.json" background="transparent" speed="1" style={{width: 150, height: 150}} loop autoplay>
                    </lottie-player> */}
                    <h3 class="card-heading text-center">App Launch and Maintenance Operations</h3>
                    <p class="text-center card-content">Source software engineers from our team for application launch and post-launch operations.</p>

                </div>
                <div class="flex pb-10 transition duration-300 rounded-md hover:shadow-lg hover:bg-opacity-90 ease-in-up card items-center justify-center sm:pb-10 wow fadeInUp" data-wow-delay=".2s">
				<Player
						src='https://assets1.lottiefiles.com/packages/lf20_iaqdumdt.json'
						className="player"
						loop
						autoplay
						/>
					{/* <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_iaqdumdt.json" background="transparent" speed="1" style={{width: 150, height: 150}} loop autoplay>
                    </lottie-player> */}
                    <h3 class="card-heading text-center">Cloud Applications</h3>
                    <p class="text-center card-content sm:pb-5">We build software applications that utilize cloud infrastructure such as AWS and Google Cloud.
                    </p>
                </div>
            </div>

            <div class="absolute top-5 right-0 z-[-1]">
                <svg width="238" height="531" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_29_1117)">
						<path opacity="0.3"
							d="M544.117 80.5884L424.069 -69.2536C423.379 -70.1156 422.12 -70.2546 421.258 -69.564L1.69502 266.573C0.832993 267.264 0.694027 268.522 1.38466 269.384L121.432 419.226C122.123 420.088 123.381 420.227 124.243 419.537L543.806 83.3997C544.668 82.7091 544.807 81.4504 544.117 80.5884Z"
							fill="url(#paint0_linear_29_1117)" />
						<path opacity="0.3"
							d="M462.679 189.959L427.818 146.447C427.128 145.585 425.869 145.446 425.007 146.136L5.44404 482.274C4.58202 482.964 4.44305 484.223 5.13368 485.085L39.9939 528.597C40.6846 529.459 41.9433 529.598 42.8053 528.907L462.368 192.77C463.23 192.08 463.369 190.821 462.679 189.959Z"
							fill="url(#paint1_linear_29_1117)" />
					</g>
					<defs>
						<linearGradient id="paint0_linear_29_1117" x1="622.713" y1="-110.088" x2="67.6437" y2="334.611"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1E8DE1" />
							<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
						</linearGradient>
						<linearGradient id="paint1_linear_29_1117" x1="585.463" y1="54.4364" x2="30.3932" y2="499.136"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1E8DE1" />
							<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
						</linearGradient>
						<clipPath id="clip0_29_1117">
							<rect width="238" height="531" fill="white" />
						</clipPath>
					</defs>
				</svg>

            </div>
        </section>
        {/* <!-- <section class="relative flex flex-col w-full px-8 pt-[120px] pb-[50px] mx-auto md:px-12 lg:px-24 items-left md:items-center">
            <h2 class="relative z-10 pb-[20px] leading-[45px] mb-[-20px] font-sans text-3xl font-extrabold text-center md:text-4xl md:text-center before:content-[''] before:absolute before:left-[50%] before:ml-[-25px] before:bottom-[-2px] before:h-[4px] before:w-[50px] before:rounded-[5px] "
                data-wow-delay=".2s">
				Tell us about your project</h2>
            <hr class="w-16 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10">

            <p class="mt-20 font-sans text-base leading-loose text-center md:text-lg text-els-gray-2 wow fadeIn" data-wow-delay=".15s">Pleas give us a short description of your project with significant features, and our customer care will get back to you shortly .</p>

        </section> --> */}
        {/* <!-- Tech Stacks Section --> */}

        <section class="flex flex-col items-center pb-[120px] md:items-center lg:items-center px-8 md:px-12 lg:px-24 bg-gradient-to-b from-white to-els-light-blue2">
            <div>
            <h2 class="relative z-4 pb-[5px] leading-[45px] mb-[60px] font-sans text-3xl font-semibold text-center md:text-4xl md:text-center before:content-[''] before:absolute before:left-[50%] before:ml-[-25px] before:bottom-[-2px] before:h-[4px] before:w-[50px] before:rounded-[5px] "
                data-wow-delay=".2s">Our Techstack </h2>

            
            {/* <!-- flex flex-wrap justify-between w-full py-20 mx-auto md:flex-nowrap --> */}
            <div class="techstack-wrapper">
                <div class="techstack-logo-carousel flex flex-wrap items-center justify-between wow fadeIn" data-wow-delay=".15s">
                    <div class="techstack-logo" title="React">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M64 26.0057C64 22.285 58.6906 18.7588 50.5503 16.5722C52.4289 9.2909 51.594 3.49795 47.9152 1.64329C47.0673 1.20824 46.0758 1.00217 44.9931 1.00217V3.55519C45.5931 3.55519 46.0758 3.65823 46.4802 3.85285C48.2544 4.74584 49.0241 8.14604 48.424 12.5194C48.2805 13.5955 48.0457 14.7289 47.7587 15.8852C45.2018 15.3357 42.4101 14.9121 39.4749 14.6374C37.7138 12.5194 35.8875 10.596 34.0481 8.91309C38.3009 5.44419 42.2927 3.54374 45.0061 3.54374V0.990723C41.4187 0.990723 36.7224 3.23463 31.9739 7.12713C27.2254 3.25753 22.5291 1.03652 18.9417 1.03652V3.58954C21.6421 3.58954 25.647 5.47854 29.8997 8.92454C28.0734 10.6075 26.247 12.5194 24.512 14.6374C21.5638 14.9121 18.7721 15.3357 16.2152 15.8967C15.9152 14.7518 15.6934 13.6413 15.5369 12.5766C14.9238 8.20329 15.6804 4.80308 17.4415 3.89865C17.8329 3.69257 18.3416 3.60098 18.9417 3.60098V1.04797C17.8459 1.04797 16.8545 1.25404 15.9935 1.68908C12.3278 3.54374 11.5059 9.32524 13.3975 16.5836C5.28333 18.7817 0 22.2964 0 26.0057C0 29.7265 5.30942 33.2526 13.4497 35.4393C11.5711 42.7206 12.406 48.5135 16.0848 50.3682C16.9327 50.8032 17.9242 51.0093 19.02 51.0093C22.6074 51.0093 27.3037 48.7654 32.0522 44.8729C36.8007 48.7425 41.4969 50.9635 45.0844 50.9635C46.1802 50.9635 47.1716 50.7574 48.0326 50.3224C51.6983 48.4677 52.5202 42.6862 50.6286 35.4279C58.7167 33.2412 64 29.715 64 26.0057V26.0057ZM47.0151 18.3696C46.5324 19.8464 45.9323 21.3691 45.254 22.8917C44.7191 21.9758 44.1582 21.06 43.545 20.1441C42.945 19.2282 42.3058 18.3352 41.6665 17.4651C43.519 17.7056 45.3062 18.0032 47.0151 18.3696ZM41.0404 30.5622C40.0228 32.1078 38.9792 33.5732 37.8965 34.9356C35.9527 35.0844 33.9829 35.1645 32 35.1645C30.0302 35.1645 28.0603 35.0844 26.1296 34.947C25.0469 33.5846 23.9902 32.1307 22.9727 30.5966C21.9812 29.0968 21.0811 27.5742 20.2593 26.0401C21.0681 24.506 21.9813 22.9719 22.9596 21.4721C23.9772 19.9266 25.0208 18.4612 26.1035 17.0988C28.0473 16.95 30.0171 16.8698 32 16.8698C33.9698 16.8698 35.9397 16.95 37.8704 17.0873C38.9531 18.4497 40.0098 19.9037 41.0273 21.4378C42.0188 22.9375 42.9189 24.4602 43.7407 25.9943C42.9189 27.5284 42.0188 29.0625 41.0404 30.5622ZM45.254 29.0739C45.9584 30.608 46.5585 32.1421 47.0542 33.6304C45.3453 33.9968 43.545 34.3059 41.6796 34.5463C42.3188 33.6648 42.958 32.7604 43.5581 31.833C44.1582 30.9171 44.7191 29.9898 45.254 29.0739ZM32.0261 41.2895C30.8129 40.1904 29.5997 38.9654 28.3995 37.626C29.5736 37.6718 30.7737 37.7061 31.987 37.7061C33.2132 37.7061 34.4264 37.6832 35.6135 37.626C34.4395 38.9654 33.2263 40.1904 32.0261 41.2895ZM22.3204 34.5463C20.468 34.3059 18.6808 34.0082 16.9719 33.6419C17.4545 32.165 18.0546 30.6424 18.733 29.1197C19.2678 30.0356 19.8288 30.9515 20.4419 31.8674C21.055 32.7833 21.6812 33.6762 22.3204 34.5463ZM31.9609 10.722C33.1741 11.821 34.3873 13.046 35.5874 14.3855C34.4134 14.3397 33.2132 14.3053 32 14.3053C30.7737 14.3053 29.5605 14.3282 28.3734 14.3855C29.5475 13.046 30.7607 11.821 31.9609 10.722ZM22.3074 17.4651C21.6682 18.3467 21.0289 19.2511 20.4289 20.1784C19.8288 21.0943 19.2678 22.0102 18.733 22.9261C18.0285 21.392 17.4285 19.8579 16.9327 18.3696C18.6417 18.0147 20.4419 17.7056 22.3074 17.4651V17.4651ZM10.5014 31.7987C5.88341 30.07 2.89605 27.8031 2.89605 26.0057C2.89605 24.2083 5.88341 21.9301 10.5014 20.2128C11.6233 19.7892 12.8496 19.4114 14.115 19.0565C14.8585 21.3004 15.8369 23.6359 17.0501 26.0286C15.85 28.4099 14.8846 30.734 14.1541 32.9664C12.8626 32.6115 11.6364 32.2223 10.5014 31.7987ZM17.5198 48.1586C15.7456 47.2656 14.9759 43.8654 15.576 39.4921C15.7195 38.4159 15.9543 37.2825 16.2413 36.1262C18.7982 36.6757 21.5899 37.0993 24.5251 37.3741C26.2862 39.4921 28.1125 41.4154 29.9519 43.0984C25.6991 46.5673 21.7073 48.4677 18.9939 48.4677C18.4068 48.4563 17.9111 48.3532 17.5198 48.1586V48.1586ZM48.4631 39.4348C49.0762 43.8082 48.3196 47.2084 46.5585 48.1128C46.1671 48.3189 45.6584 48.4105 45.0583 48.4105C42.3579 48.4105 38.353 46.5215 34.1003 43.0755C35.9266 41.3925 37.753 39.4806 39.488 37.3627C42.4362 37.0879 45.2279 36.6643 47.7848 36.1033C48.0848 37.2596 48.3196 38.3701 48.4631 39.4348V39.4348ZM53.4855 31.7987C52.3636 32.2223 51.1374 32.6001 49.872 32.955C49.1284 30.7111 48.15 28.3756 46.9368 25.9828C48.137 23.6015 49.1023 21.2775 49.8329 19.045C51.1243 19.3999 52.3506 19.7892 53.4986 20.2128C58.1166 21.9415 61.104 24.2083 61.104 26.0057C61.0909 27.8031 58.1035 30.0814 53.4855 31.7987V31.7987Z" fill="url(#paint0_linear_497_8)"/>
								<path d="M31.9869 31.2377C35.2795 31.2377 37.9486 28.8953 37.9486 26.0057C37.9486 23.1162 35.2795 20.7738 31.9869 20.7738C28.6944 20.7738 26.0253 23.1162 26.0253 26.0057C26.0253 28.8953 28.6944 31.2377 31.9869 31.2377Z" fill="url(#paint1_linear_497_8)"/>
								<defs>
								<linearGradient id="paint0_linear_497_8" x1="32" y1="0.990723" x2="30.5" y2="83.5" gradientUnits="userSpaceOnUse">
								<stop stop-color="#1E8DE1"/>
								<stop offset="1" stop-color="#1E8DE1" stop-opacity="0"/>
								</linearGradient>
								<linearGradient id="paint1_linear_497_8" x1="31.9869" y1="20.7738" x2="31.6346" y2="38.0333" gradientUnits="userSpaceOnUse">
								<stop stop-color="#1E8DE1"/>
								<stop offset="1" stop-color="#1E8DE1" stop-opacity="0"/>
								</linearGradient>
								</defs>
								</svg>
								
						</span>
                    </div>
                    <div class="techstack-logo" title="NodeJs">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">

							<svg width="64" height="64" viewBox="0 0 64 64" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M64 32C64 49.6731 49.6731 64 32 64C15.6944 64 2.23737 51.8048 0.253375 36.0373C0.08625 34.7154 0 33.3675 0 32C0 29.4949 0.287375 27.0564 0.832 24.717C4.12862 10.5535 16.832 0 32 0C47.1301 0 59.8086 10.5013 63.1419 24.6126C63.5794 26.4581 63.855 28.3651 63.9556 30.3178C63.9856 30.8754 64 31.4358 64 32Z"
									fill="url(#paint0_linear_29_1000)" />
								<path
									d="M30.3994 34.5699V26.25L23.1941 22.0901L15.989 26.25V34.5699L23.1941 38.7297L30.3994 34.5699Z"
									fill="#4A6CF7" />
								<path
									d="M58.7756 33.3074L63.4711 36.0189L58.7756 38.7304L51.5709 34.5704V26.2504L58.7756 22.0904L63.1419 24.6125C63.5794 26.458 63.855 28.365 63.9557 30.3176L61.2859 31.8589V28.9606L58.7756 27.5121L56.2652 28.9606V31.8589L58.7756 33.3074Z"
									fill="#333333" />
								<path
									d="M60.174 31.2175V29.6025L58.7753 28.795L57.3766 29.6025V31.2175L58.7753 32.0251L60.174 31.2175Z"
									fill="url(#paint1_linear_29_1000)" />
								<path
									d="M12.5857 26.2505V37.2219L7.7805 34.4804V28.8562L5.38125 27.4704L2.98187 28.8561V34.4802L0.253375 36.0372C0.08625 34.7154 0 33.3675 0 32C0 29.4949 0.287375 27.0564 0.832 24.717L5.38125 22.0904L12.5857 26.2505Z"
									fill="#333333" />
								<path
									d="M30.3987 34.5689L23.1936 22.0897L15.9888 26.2495L23.1939 38.7287L30.3987 34.5689Z"
									fill="#2E7FBD" />
								<path d="M15.989 34.5699L18.463 30.5354L15.989 26.25V34.5699Z" fill="#4A6CF7" />
								<path d="M27.9973 30.4096L30.3993 26.25L23.1941 22.0901L27.9973 30.4096Z"
									fill="#2E7FBD" />
								<path
									d="M43.3189 12.4474V23.4854L40.9039 22.0904L33.698 26.2504V34.5704L40.9039 38.7304L48.1085 34.5704V15.0113L43.3189 12.4474ZM43.3057 31.7963L40.9037 33.1834L38.5017 31.7963V29.0234L40.9037 27.6363L43.3057 29.0234V31.7963Z"
									fill="#333333" />
								<path
									d="M35.2686 44.8396C35.2686 44.8396 35.1271 43.6235 33.8262 43.6235C32.5252 43.6235 31.6345 43.7931 31.6345 44.5144C31.6345 45.2356 34.1657 45.2356 35.1273 45.5184C36.089 45.8011 36.9373 46.5365 36.5131 47.8375C36.0888 49.1385 34.7878 49.2799 32.7798 49.2799C30.7718 49.2799 30.3192 47.6111 30.3192 46.9608H31.4505C31.4505 46.9608 31.309 47.9789 32.6382 48.1485C33.9675 48.3181 35.2385 48.4136 35.4098 47.385C35.6361 46.0274 31.111 46.7063 30.715 45.377C30.3805 44.2539 30.5735 42.7751 32.8361 42.5488C35.0987 42.3224 36.3431 43.3214 36.3431 44.8114L35.2686 44.8396Z"
									fill="#1E8DE1" />
								<path
									d="M24.3403 50.1414L26.8413 51.5853C28.098 52.3108 29.6687 51.4039 29.6687 49.9529V47.4226V42.766H28.6493V49.6694C28.6493 50.4618 27.7916 50.9571 27.1052 50.5608L25.3596 49.553V42.1855L31.74 38.5021L38.1203 42.1855V49.553L31.74 53.2364L29.902 52.1753L28.7017 52.6593L31.7398 54.4134L39.1396 50.141V41.5971L31.74 37.325L24.3402 41.5974V50.1414H24.3403Z"
									fill="#1E8DE1" />
								<defs>
									<linearGradient id="paint0_linear_29_1000" x1="32" y1="0" x2="32" y2="64"
										gradientUnits="userSpaceOnUse">
										<stop stop-color="#E3F3FC" />
										<stop offset="1" stop-color="#E3F3FC" stop-opacity="0" />
									</linearGradient>
									<linearGradient id="paint1_linear_29_1000" x1="58.7753" y1="28.795" x2="58.7753"
										y2="32.0251" gradientUnits="userSpaceOnUse">
										<stop stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>

						</span>
                    </div>
                    <div class="techstack-logo" title="Flutter">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="52" height="64" viewBox="0 0 52 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.7691 46.7658L24.609 56.6119L51.6826 29.5321H31.9966L14.7691 46.7658Z" fill="#1E8DE1"/>
								<path d="M31.9966 3.05176e-05H51.6826L9.84603 41.8428L-4.57764e-05 31.9967L31.9966 3.05176e-05Z" fill="#1E8DE1"/>
								<path d="M24.609 56.6119L31.9966 63.9934H51.6826L34.4551 46.7658L24.609 56.6119Z" fill="url(#paint0_linear_497_12)"/>
								<path d="M39.2117 51.5533L34.4551 46.7658L24.609 56.6119L39.2117 51.5533Z" fill="url(#paint1_linear_497_12)"/>
								<path d="M14.768 46.7624L24.6143 36.916L34.4612 46.7624L24.6143 56.6088L14.768 46.7624Z" fill="#1E8DE1"/>
								<path d="M51.6826 29.5321L34.4551 46.7658L51.6826 63.9995H31.9966L14.7629 46.7658L31.9966 29.5321H51.6826ZM31.9966 3.05176e-05L-4.57764e-05 31.9967L9.84603 41.8428L51.6826 3.05176e-05H31.9966V3.05176e-05Z" fill="url(#paint2_radial_497_12)"/>
								<defs>
								<linearGradient id="paint0_linear_497_12" x1="38.1458" y1="46.7658" x2="38" y2="74" gradientUnits="userSpaceOnUse">
								<stop stop-color="#03569B"/>
								<stop offset="1" stop-color="#03569B" stop-opacity="0"/>
								</linearGradient>
								<linearGradient id="paint1_linear_497_12" x1="27.4824" y1="58.512" x2="34.8155" y2="51.1789" gradientUnits="userSpaceOnUse">
								<stop stop-color="#1A237E" stop-opacity="0.4"/>
								<stop offset="1" stop-color="#1A237E" stop-opacity="0"/>
								</linearGradient>
								<radialGradient id="paint2_radial_497_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.4519 4.36205) scale(78.2956)">
								<stop stop-color="white" stop-opacity="0.1"/>
								<stop offset="1" stop-color="white" stop-opacity="0"/>
								</radialGradient>
								</defs>
								</svg>
								
						</span>


                    </div>
                    <div class="techstack-logo" title="Kotlin">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M32.3162 8.60382L8.43799 33.7148V56.1632L32.2819 32.2774L55.9972 8.60382H32.3162Z" fill="#1E8DE1"/>
								<path d="M8.43799 56.1633L32.2819 32.2778L55.9972 56.1633H8.43799Z" fill="url(#paint0_linear_475_24)"/>
								<path d="M8.43799 8.60382H32.3163L8.43799 33.7148V8.60382Z" fill="#00AFFF" fill-opacity="0.58"/>
								<defs>
								<linearGradient id="paint0_linear_475_24" x1="23.6162" y1="64.7437" x2="45.1877" y2="43.1724" gradientUnits="userSpaceOnUse">
								<stop stop-color="#00AFFF"/>
								<stop offset="0.3" stop-color="#00AFFF"/>
								<stop offset="0.69" stop-color="#5282FF"/>
								<stop offset="1" stop-color="#945DFF"/>
								</linearGradient>
								</defs>
								</svg>
								
						</span>
                    </div>
                    <div class="techstack-logo" title="AWS">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="62" viewBox="0 0 64 62" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M31.26 61.776L16.99 56.656V35.746L31.26 40.606V61.776ZM33.86 61.776L48.13 56.656V35.746L33.86 40.61V61.776ZM18.46 34.176L32.86 30.11L46.252 34.43L32.86 38.976L18.46 34.176ZM14.276 32.576L0 27.44V6.5L14.27 11.36L14.276 32.576ZM16.89 32.576L31.16 27.456V6.5L16.886 11.384L16.89 32.576ZM1.49 4.976L15.89 0.89L29.282 5.21L15.89 9.756L1.49 4.976ZM47.594 32.576L33.324 27.456V6.5L47.594 11.36V32.576ZM50.194 32.576L64.464 27.456V6.5L50.194 11.36V32.576ZM34.794 4.976L49.194 0.91L62.586 5.23L49.194 9.776L34.794 4.976Z" fill="url(#paint0_linear_497_22)"/>
								<defs>
								<linearGradient id="paint0_linear_497_22" x1="32.232" y1="0.89" x2="32" y2="119.5" gradientUnits="userSpaceOnUse">
								<stop stop-color="#1E8DE1"/>
								<stop offset="1" stop-color="#1E8DE1" stop-opacity="0"/>
								</linearGradient>
								</defs>
								</svg>
						</span>


                    </div>

                    <div class="techstack-logo" title="JavaSpring">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M58.0901 20.0097C58.0869 19.4795 58.0815 18.9483 58.0666 18.4171C58.0357 17.2609 57.9674 16.0939 57.7616 14.9505C57.5525 13.7878 57.2122 12.7083 56.6746 11.6523C56.1466 10.6155 55.4586 9.66832 54.6352 8.84592C53.8128 8.02245 52.8656 7.33445 51.8287 6.80645C50.7738 6.26992 49.6933 5.92859 48.5327 5.72059C47.3882 5.51472 46.2213 5.44645 45.065 5.41552C44.5338 5.40165 44.0026 5.39419 43.4714 5.39099C42.841 5.38779 42.2106 5.38779 41.5802 5.38779H21.816C21.1845 5.38779 20.5551 5.38779 19.9247 5.39099C19.3935 5.39419 18.8623 5.40165 18.3311 5.41552C18.0421 5.42299 17.7519 5.43365 17.4618 5.44752C16.5925 5.48912 15.721 5.56592 14.8623 5.72059C13.9919 5.87739 13.1674 6.10779 12.3642 6.43952C11.0159 6.99632 9.79142 7.81445 8.75995 8.84592C7.93648 9.66832 7.24848 10.6155 6.72048 11.6523C6.18288 12.7083 5.84262 13.7878 5.63462 14.9494C5.42875 16.0939 5.36048 17.2609 5.32955 18.4171C5.31568 18.9473 5.30822 19.4785 5.30502 20.0097C5.30075 20.6411 5.30182 21.2715 5.30182 21.9019V41.6651C5.30182 42.2966 5.30075 42.927 5.30502 43.5574C5.30822 44.0886 5.31568 44.6187 5.32955 45.1499C5.36048 46.3073 5.42875 47.4742 5.63462 48.6177C5.84262 49.7782 6.18288 50.8598 6.72048 51.9147C7.24848 52.9515 7.93648 53.8987 8.75995 54.7211C9.58235 55.5446 10.5306 56.2337 11.5674 56.7617C12.6223 57.2982 13.7018 57.6385 14.8634 57.8475C16.0069 58.0534 17.1749 58.1217 18.3311 58.1526C18.8623 58.1654 19.3935 58.1739 19.9247 58.1761C20.5551 58.1803 21.1845 58.1793 21.816 58.1793H41.5802C42.2106 58.1793 42.841 58.1803 43.4714 58.1761C44.0026 58.1729 44.5338 58.1654 45.064 58.1526C46.2213 58.1217 47.3882 58.0523 48.5327 57.8475C49.6933 57.6385 50.7738 57.2982 51.8287 56.7617C52.8656 56.2326 53.8128 55.5446 54.6352 54.7211C55.4586 53.8987 56.1466 52.9515 56.6746 51.9147C57.2122 50.8598 57.5525 49.7782 57.7616 48.6177C57.9674 47.4742 58.0357 46.3073 58.0666 45.1499C58.0805 44.6187 58.0869 44.0886 58.0901 43.5574C58.0943 42.927 58.0933 42.2966 58.0933 41.6651V21.9019C58.0933 21.2715 58.0943 20.6411 58.0901 20.0097Z" fill="url(#paint0_linear_496_2)"/>
								<path d="M47.1333 37.9755L47.1301 37.9712C47.1877 37.7718 47.2485 37.5744 47.2997 37.3707C49.4906 28.6411 44.1434 18.32 35.0938 12.8864C39.0597 18.2614 40.8122 24.7734 39.2549 30.4683C39.1162 30.976 38.9487 31.4635 38.7642 31.9371C38.5637 31.8048 38.3109 31.6555 37.9727 31.4688C37.9727 31.4688 28.9711 25.9115 19.2143 16.08C18.9583 15.8219 24.4165 23.8816 30.6117 30.4267C27.6933 28.7894 19.5589 22.8715 14.4101 18.1579C15.0426 19.2128 15.7957 20.2294 16.6223 21.2075C20.9221 26.6603 26.5295 33.3888 33.2485 38.5558C28.5285 41.4443 21.8575 41.6683 15.2175 38.559C13.5749 37.7888 12.0303 36.8598 10.601 35.8048C13.4117 40.3008 17.7413 44.1803 23.0106 46.4448C29.2954 49.1456 35.5439 48.9622 40.1978 46.4896L40.1946 46.495C40.2159 46.4811 40.2426 46.4672 40.265 46.4534C40.4559 46.351 40.6458 46.2464 40.8314 46.1355C43.0671 44.975 47.4842 43.7974 49.8554 48.4096C50.4357 49.5392 51.6698 43.5563 47.1333 37.9755Z" fill="white"/>
								<defs>
								<linearGradient id="paint0_linear_496_2" x1="31.6976" y1="5.38779" x2="31.5" y2="82" gradientUnits="userSpaceOnUse">
								<stop stop-color="#1E8DE1"/>
								<stop offset="1" stop-color="#1E8DE1" stop-opacity="0"/>
								</linearGradient>
								</defs>
								</svg>
								
								
								

						</span>
                    </div>

                    <div class="techstack-logo" title="VueJs">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
								<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M39.3333 5.5L32 18.3333L24.6667 5.5H0L32 61L64 5.5H39.3333Z" fill="url(#paint0_linear_497_23)"/>
									<path d="M39.3333 5.5L32 18.3333L24.6667 5.5H12.8333L32 38.8333L51.1667 5.5H39.3333Z" fill="#35495E"/>
									<defs>
									<linearGradient id="paint0_linear_497_23" x1="32" y1="5.5" x2="32" y2="98" gradientUnits="userSpaceOnUse">
									<stop stop-color="#1E8DE1"/>
									<stop offset="1" stop-color="#1E8DE1" stop-opacity="0"/>
									</linearGradient>
									</defs>
									</svg>
									
	
							</span>
                    </div>
                    {/* <!-- <div class="flex justify-between w-full mb-12 space-x-4 md:mb-0"> --> */}


                    <div class="techstack-logo" title="Python">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M54.625 18.25H45.75V9.375C45.75 4.20557 41.5444 0 36.375 0H27.625C22.4556 0 18.25 4.20557 18.25 9.375V18.25H9.375C4.20557 18.25 0 22.4556 0 27.625V36.375C0 41.5444 4.20557 45.75 9.375 45.75H18.25V54.625C18.25 59.7944 22.4556 64 27.625 64H36.375C41.5444 64 45.75 59.7944 45.75 54.625V45.75H54.625C59.7944 45.75 64 41.5444 64 36.375V27.625C64 22.4556 59.7944 18.25 54.625 18.25ZM9.375 42C6.27344 42 3.75 39.4766 3.75 36.375V27.625C3.75 24.5234 6.27344 22 9.375 22H32C33.0356 22 33.875 21.1606 33.875 20.125C33.875 19.0894 33.0356 18.25 32 18.25H22V9.375C22 6.27344 24.5234 3.75 27.625 3.75H36.375C39.4766 3.75 42 6.27344 42 9.375V30.125H20.125C19.0894 30.125 18.25 30.9644 18.25 32V42H9.375ZM60.25 36.375C60.25 39.4766 57.7266 42 54.625 42H32C30.9644 42 30.125 42.8394 30.125 43.875C30.125 44.9106 30.9644 45.75 32 45.75H42V54.625C42 57.7266 39.4766 60.25 36.375 60.25H27.625C24.5234 60.25 22 57.7266 22 54.625V33.875H43.875C44.9106 33.875 45.75 33.0356 45.75 32V22H54.625C57.7266 22 60.25 24.5234 60.25 27.625V36.375Z"
									fill="url(#paint0_linear_29_851)" />
								<path
									d="M29.5 11.25C29.5 12.2856 28.6606 13.125 27.625 13.125C26.5894 13.125 25.75 12.2856 25.75 11.25C25.75 10.2144 26.5894 9.375 27.625 9.375C28.6606 9.375 29.5 10.2144 29.5 11.25Z"
									fill="url(#paint1_linear_29_851)" />
								<path
									d="M38.25 52.75C38.25 53.7856 37.4106 54.625 36.375 54.625C35.3394 54.625 34.5 53.7856 34.5 52.75C34.5 51.7144 35.3394 50.875 36.375 50.875C37.4106 50.875 38.25 51.7144 38.25 52.75Z"
									fill="url(#paint2_linear_29_851)" />
								<defs>
									<linearGradient id="paint0_linear_29_851" x1="32" y1="0" x2="32" y2="100.48"
										gradientUnits="userSpaceOnUse">
										<stop stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<linearGradient id="paint1_linear_29_851" x1="27.625" y1="9.375" x2="27.625"
										y2="13.125" gradientUnits="userSpaceOnUse">
										<stop stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<linearGradient id="paint2_linear_29_851" x1="36.375" y1="50.875" x2="36.375"
										y2="54.625" gradientUnits="userSpaceOnUse">
										<stop stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>
						</span>
                    </div>

                    <div class="techstack-logo" title="Linux">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_29_800)">
									<path
										d="M58.7376 53.5874C58.4765 53.2898 58.107 52.9983 57.6311 52.7124C57.5591 52.6657 57.363 52.5524 57.0429 52.3747C56.722 52.1958 56.4659 52.0412 56.2745 51.9099C56.0844 51.7788 55.8344 51.5529 55.5245 51.2313C55.2154 50.9103 54.9715 50.5704 54.7925 50.2133C54.614 49.8567 54.4414 49.3748 54.2746 48.7674C54.1076 48.16 54.0134 47.4875 53.989 46.7494C53.6555 47.0341 53.4714 47.5996 53.4355 48.4454C53.3996 49.2905 53.5786 50.1529 53.9715 51.0339C54.364 51.9152 54.9534 52.4857 55.7389 52.7483C56.5004 53.0107 57.1133 53.2897 57.5783 53.5872C58.0418 53.8852 58.3402 54.2238 58.4713 54.6048C58.6022 54.9867 58.3813 55.3971 57.8103 55.8371C57.2384 56.278 56.3221 56.7121 55.0605 57.142C53.3225 57.7365 52.0902 58.243 51.3637 58.659C50.6377 59.0759 49.5729 59.8678 48.1678 61.0339C47.215 61.8197 46.2035 62.2427 45.1316 62.3022C44.061 62.3621 43.1913 61.9693 42.5253 61.1242C41.8583 60.2792 41.6434 59.0833 41.8818 57.5349C42.3343 54.5591 42.3231 52.2377 41.8472 50.5713C41.4662 49.2618 41.3822 48.1069 41.5973 47.107C41.8113 46.1081 42.1443 45.525 42.5972 45.3581C43.0482 45.1907 43.5372 45.5482 44.061 46.4287C44.1077 46.5476 44.2155 46.7798 44.3816 47.1251C44.5481 47.4701 44.6847 47.715 44.7929 47.8571C44.9 48.0001 45.0606 48.1846 45.275 48.4111C45.489 48.6379 45.7583 48.798 46.0789 48.8938C46.4 48.9889 46.7746 49.0483 47.2039 49.0719C48.0133 49.0955 48.7388 48.929 49.3823 48.572C50.0248 48.215 50.5076 47.8161 50.8286 47.3757C51.1496 46.9347 51.4715 46.5127 51.7926 46.1077C52.1136 45.7023 52.3937 45.4763 52.6321 45.4284C52.8936 45.3817 53.132 45.1197 53.3464 44.6428C53.5606 44.1669 53.7034 43.5063 53.775 42.6614C53.8469 41.8159 53.787 40.81 53.5968 39.644C53.2395 37.5718 52.5306 35.2984 51.4715 32.8225C50.4117 30.3462 49.228 28.4059 47.9183 27.0011C45.5614 24.5015 43.9789 21.9065 43.1686 19.2159C42.336 16.383 41.9794 13.8354 42.098 11.5735C42.2173 9.95446 41.8659 8.19852 41.0449 6.30562C40.224 4.41297 39.1341 2.96662 37.7771 1.9667C36.9201 1.32414 35.8603 0.830184 34.5992 0.484701C33.3373 0.139218 32.0751 -0.021015 30.8132 0.00250088C29.2661 0.00250088 28.0276 0.252294 27.0995 0.752506C25.1948 1.77645 23.9334 3.02028 23.3139 4.48452C22.6945 5.94851 22.4093 7.75197 22.4566 9.89479C22.5523 14.6088 22.7423 18.2991 23.0282 20.9654C22.6946 22.2036 21.2189 24.5245 18.5998 27.9291C18.1233 28.4055 17.659 29.0482 17.2066 29.8576C16.7544 30.6673 16.3971 31.3937 16.1353 32.036C15.8732 32.6785 15.5222 33.607 15.0818 34.8215C14.6411 36.0354 14.326 36.8929 14.1354 37.3924C13.9688 37.8217 13.7067 38.3208 13.3498 38.8932C12.9926 39.4641 12.7063 40.0241 12.4925 40.5707C12.2787 41.1182 12.1594 41.7371 12.1357 42.4277C12.1119 42.9516 12.1357 43.4041 12.2072 43.7846C12.3021 44.3569 12.4811 44.535 12.7427 44.321C13.8145 43.5114 15.1597 43.9875 16.7784 45.7498C17.9212 46.9878 19.9332 49.8687 22.8138 54.3924C23.0519 54.7969 23.2898 55.2313 23.5278 55.6968C23.7665 56.1603 23.992 56.7788 24.2065 57.5528C24.4208 58.3276 24.5102 59.0233 24.4743 59.6426C24.4383 60.262 24.1649 60.8335 23.6529 61.3565C23.1409 61.8801 22.3731 62.2132 21.3495 62.356C20.8016 62.4274 20.1415 62.3804 19.3674 62.213C18.5936 62.0464 17.6115 61.7729 16.4213 61.392C15.2309 61.0115 14.3501 60.7491 13.7786 60.6061C12.9458 60.4152 11.7614 60.1724 10.2255 59.8741C8.68971 59.5761 7.68353 59.3561 7.20746 59.2131C6.39804 58.9991 5.95774 58.69 5.88644 58.2848C5.81489 57.9513 5.98151 57.3803 6.3864 56.5712C6.79155 55.7617 6.99356 55.1778 6.99356 54.8213C7.01708 54.5589 7.00532 54.2978 6.95754 54.0355C6.91026 53.7735 6.85672 53.571 6.79705 53.4281C6.73751 53.2855 6.63632 53.0711 6.49335 52.7851C6.35038 52.4996 6.25531 52.2847 6.20766 52.1426C5.77937 51.1422 5.7197 50.4629 6.02916 50.1064C6.24318 49.7968 6.75515 49.6778 7.56457 49.7496C8.77877 49.8687 9.76668 49.6897 10.5287 49.2134C11.7902 48.4279 12.1716 47.166 11.6713 45.4276C11.6713 46.237 11.5284 46.8436 11.2427 47.249C10.957 47.6535 10.4568 48.0704 9.74279 48.4993C9.33827 48.7373 8.62366 48.8799 7.60022 48.9283C6.57666 48.9759 5.89782 49.1427 5.5646 49.4283C5.32669 49.6427 5.20186 49.9642 5.18985 50.3927C5.17809 50.8221 5.232 51.2557 5.35083 51.6966C5.46966 52.137 5.58887 52.6425 5.7077 53.2141C5.8269 53.7859 5.87418 54.2624 5.85067 54.6429C5.8269 54.9045 5.61201 55.5538 5.20748 56.5885C4.80296 57.6245 4.71965 58.4162 4.95769 58.9634C5.0769 59.2258 5.27891 59.4582 5.56472 59.6602C5.85029 59.8626 6.24906 60.0352 6.76091 60.1787C7.27238 60.3216 7.74282 60.4346 8.17161 60.5177C8.5999 60.6002 9.19505 60.708 9.95681 60.8382C10.7187 60.9687 11.3257 61.0827 11.7782 61.1772C13.3019 61.4872 15.0397 61.999 16.9922 62.713C18.9444 63.4275 20.2655 63.796 20.956 63.8196C21.6227 63.8431 22.2594 63.7067 22.8666 63.4087C23.4737 63.1117 23.9914 62.7722 24.4201 62.3912C24.8483 62.0102 25.4853 61.6528 26.3302 61.3198C27.1758 60.9863 28.1221 60.8078 29.1698 60.784C29.6458 60.7604 30.3363 60.7304 31.2409 60.6949C32.1456 60.6589 32.824 60.6414 33.2764 60.6414C35.3238 60.6414 36.8712 60.6529 37.9187 60.6768C38.633 60.7012 39.1925 60.8139 39.5974 61.0164C40.0019 61.2184 40.2644 61.4508 40.3829 61.7122C40.5019 61.9748 40.6993 62.2777 40.9732 62.6232C41.2464 62.9682 41.5974 63.2481 42.0254 63.4621C42.9298 63.8911 43.9897 64.0635 45.2042 63.9801C46.4181 63.8971 47.2281 63.6646 47.6325 63.2838C48.299 62.6412 49.1975 61.8789 50.3284 60.9984C51.4594 60.1179 52.4782 59.4509 53.3822 58.9985C53.5723 58.9026 53.8938 58.7481 54.3462 58.5336C54.7982 58.3192 55.1788 58.135 55.4882 57.9797C55.7978 57.8248 56.1732 57.6282 56.6128 57.3903C57.0535 57.1519 57.4107 56.9319 57.6846 56.7294C57.9584 56.5268 58.2376 56.2953 58.5235 56.0329C58.8091 55.7713 58.9936 55.5094 59.0775 55.2475C59.1597 54.9855 59.1905 54.7176 59.1666 54.4439C59.1422 54.1707 59 53.8857 58.7376 53.5874ZM39.5965 19.0715C39.6676 19.0242 39.7156 19.0062 39.7391 19.0179C39.7631 19.0299 39.8107 19.0777 39.8817 19.1609C39.9536 19.2442 40.0183 19.3219 40.0786 19.3933C40.1378 19.4641 40.2208 19.5598 40.3278 19.6786C40.4347 19.7978 40.5478 19.8929 40.6664 19.9643C40.8101 20.0594 40.9822 20.1253 41.1847 20.1608C41.3872 20.1964 41.5421 20.2559 41.6497 20.3391C41.7572 20.4223 41.8347 20.5591 41.8813 20.7499C41.9284 21.012 41.8886 21.2496 41.7576 21.4638C41.6258 21.6784 41.4537 21.7738 41.2389 21.7498C40.8104 21.6545 40.3459 21.2797 39.8463 20.6249C39.347 19.9702 39.2632 19.4525 39.5965 19.0715ZM35.1679 5.198C35.2865 5.04327 35.3581 4.91831 35.3816 4.82325C35.4291 4.6799 35.4351 4.5313 35.3996 4.37657C35.3641 4.22184 35.3757 4.06711 35.4351 3.91239C35.495 3.75766 35.632 3.66835 35.8464 3.64458C36.0605 3.64458 36.3463 3.82333 36.7035 4.18032C36.7745 4.2281 36.8876 4.29952 37.0416 4.39459C37.1965 4.4899 37.3036 4.57308 37.363 4.64438C37.4226 4.71543 37.4521 4.77559 37.4521 4.82287C37.4046 4.9417 37.2976 5.02576 37.1315 5.07304C36.9655 5.12032 36.786 5.14459 36.596 5.14459C36.406 5.14459 36.2981 5.15635 36.2747 5.18011C36.0842 5.25166 35.9057 5.35861 35.7387 5.50133C35.5722 5.6443 35.4412 5.75137 35.3462 5.8228C35.2502 5.8941 35.1553 5.8941 35.0602 5.8228C34.9652 5.67983 34.9293 5.57863 34.9533 5.51934C34.9774 5.46005 35.049 5.35273 35.1679 5.198ZM17.8835 31.9286C18.0496 31.7384 18.1691 31.5837 18.2404 31.4644C18.3118 31.3452 18.3771 31.1845 18.4368 30.9824C18.4963 30.7797 18.5498 30.6308 18.5975 30.5357C18.6454 30.44 18.717 30.4045 18.812 30.4283C18.8593 30.4165 18.8948 30.44 18.9195 30.4997C18.943 30.5592 18.955 30.5891 18.955 30.5891V30.6963C18.955 30.7323 18.9489 30.7796 18.937 30.8393C18.925 30.8993 18.907 30.9527 18.8835 31C18.8593 31.0479 18.8357 31.1195 18.812 31.2144C18.7883 31.3095 18.7647 31.3929 18.7405 31.4642C18.6454 31.7029 18.4963 31.9166 18.2943 32.1073C18.0918 32.2976 17.9428 32.3811 17.8476 32.3572C17.7048 32.3099 17.717 32.1664 17.8835 31.9286ZM41.2381 53.9627C41.1906 54.7242 41.0298 55.7961 40.7558 57.177C40.4819 58.5575 40.309 59.4743 40.2373 59.9264C39.7374 59.902 39.4519 59.7175 39.3804 59.3724C39.3093 59.0269 39.3804 58.581 39.5948 58.0331C40.1184 56.4373 40.3914 55.3423 40.4158 54.7476C40.4642 53.6523 40.3448 53.0332 40.0596 52.8906C39.7967 52.7003 39.3923 53.0576 38.8448 53.9616C37.7964 55.676 35.6899 56.711 32.5236 57.069C29.6672 57.45 27.6911 57.0214 26.5956 55.7827C26.3576 55.6161 26.1196 55.5866 25.8817 55.694C25.6436 55.8002 25.4889 55.9141 25.4175 56.0321C25.394 56.0802 25.4175 56.1512 25.489 56.2467C25.5605 56.3422 25.6735 56.4846 25.8283 56.6752C25.983 56.8664 26.1079 57.0562 26.203 57.2475C27.1319 58.8659 27.0487 59.9609 25.9532 60.5324C25.9532 59.4379 25.8699 58.5985 25.7034 58.0155C25.5367 57.4321 25.2037 56.7895 24.7035 56.0867C24.2038 55.3846 23.8586 54.8546 23.6683 54.4977C24.3823 54.4267 24.924 54.1526 25.2931 53.6763C25.6621 53.2002 25.8286 52.6884 25.7931 52.1409C25.7573 51.593 25.5492 51.1405 25.1682 50.7835C24.9539 50.5695 23.8465 49.6586 21.8468 48.0515C19.8472 46.4445 18.609 45.3672 18.1331 44.8197C18.0374 44.7243 17.7521 44.4862 17.2757 44.1052C16.7993 43.7243 16.5016 43.3912 16.3828 43.1053C15.2874 40.7018 15.1686 38.7247 16.0255 37.1779L16.1682 36.9994C16.2871 36.9759 16.2991 37.1898 16.2038 37.6425C16.061 38.3093 16.0136 38.9754 16.061 39.6423C16.1561 41.1426 16.5848 42.2612 17.3465 42.9987C17.8468 43.4996 18.1917 43.4637 18.3824 42.892C18.5253 42.7011 18.5906 41.9991 18.5786 40.7842C18.5672 39.5707 18.5849 38.7492 18.6325 38.3203C18.8232 36.9634 19.3887 35.2845 20.3289 33.2856C21.2692 31.2855 22.0136 30.214 22.5611 30.0713C22.1324 29.3808 21.9955 28.6308 22.1504 27.8212C22.3049 27.0117 22.5553 26.3209 22.9003 25.7498C23.2451 25.1786 23.5968 24.5181 23.9535 23.768C24.3107 23.018 24.4892 22.3453 24.4892 21.7502C24.4892 21.5838 24.5015 21.4646 24.5253 21.3932C24.5966 21.1789 24.8943 21.4407 25.418 22.1786C26.4179 23.6549 27.1679 24.5241 27.668 24.7859C28.1917 25.0713 28.7747 25.0595 29.4177 24.7499C30.0604 24.4405 30.8519 23.9285 31.7925 23.2145C32.7325 22.5005 33.5361 21.9766 34.2029 21.6436C34.2748 21.6194 34.3875 21.5659 34.5429 21.4826C34.6969 21.3998 34.8159 21.3399 34.899 21.3039C34.9817 21.2683 35.0891 21.2149 35.2205 21.1434C35.3505 21.0719 35.4516 21.0124 35.5232 20.9646C35.5946 20.9167 35.6661 20.8632 35.7372 20.8036C35.8081 20.7439 35.8556 20.6848 35.8802 20.6251C35.904 20.5656 35.9161 20.5122 35.9161 20.4644C35.8681 20.25 35.7672 20.1189 35.6121 20.0716C35.4572 20.0241 35.2492 20.0536 34.9872 20.1611C34.7253 20.2683 34.4333 20.4113 34.1122 20.5896C33.7912 20.7681 33.4343 20.9705 33.0412 21.1968C32.6486 21.4231 32.2497 21.6311 31.8452 21.8218C31.4407 22.0125 31.0119 22.1791 30.5594 22.322C30.1071 22.4646 29.6786 22.5483 29.274 22.5721C28.274 22.596 27.4767 22.3345 26.8816 21.7866C26.5007 21.4291 26.2986 21.203 26.2744 21.1078C26.2504 21.0129 26.3577 20.9891 26.5956 21.0364C27.8818 21.2032 28.8219 21.2267 29.4172 21.1078C30.0361 21.0129 30.8693 20.7388 31.917 20.2864C32.1315 20.1914 32.6725 19.9589 33.5423 19.5899C34.4108 19.2215 35.0837 18.9654 35.5598 18.8224C35.8461 18.7509 36.0426 18.6379 36.1497 18.4832C36.2563 18.3285 36.2923 18.1855 36.2563 18.0544C36.2209 17.9237 36.1433 17.8226 36.0248 17.7512C35.7622 17.6082 35.5243 17.7037 35.3108 18.0369C35.1913 18.2512 34.9409 18.4598 34.5603 18.6619C34.1798 18.8646 33.828 19.0191 33.5068 19.1261C33.1855 19.2331 32.7748 19.3582 32.2746 19.5009C31.7744 19.6439 31.5011 19.7272 31.4532 19.7509C30.1439 20.1555 28.9297 20.3342 27.8106 20.2864C27.2867 20.2629 26.8643 20.1852 26.5431 20.0543C26.2216 19.9237 26.0011 19.7689 25.8824 19.5901C25.7632 19.4118 25.573 19.1856 25.311 18.9116C25.0489 18.6377 24.7512 18.4056 24.4181 18.2149C24.18 18.0961 24.0906 17.8818 24.1503 17.5723C24.2098 17.2629 24.3943 16.9412 24.7037 16.6079C24.7275 16.5839 24.9717 16.4354 25.4357 16.1615C25.8999 15.8876 26.2274 15.6078 26.4182 15.3221C26.6319 14.9888 27.0012 14.6434 27.5249 14.2861C27.5487 14.1911 27.5667 13.9293 27.5784 13.5007C27.5902 13.0724 27.4772 12.6081 27.2392 12.1082C27.0012 11.6079 26.6795 11.3583 26.2748 11.3583C25.7033 11.3345 25.2987 11.501 25.0606 11.8582C24.8226 12.215 24.7158 12.6557 24.7394 13.1794C24.7635 13.6316 24.8766 14.0301 25.0786 14.3756C25.2811 14.721 25.4658 14.8938 25.6324 14.8938C25.8941 14.8696 25.9774 14.9646 25.8822 15.1791C25.7394 15.4413 25.5487 15.6083 25.3108 15.6793C25.1437 15.7266 24.959 15.5661 24.757 15.1971C24.5545 14.8281 24.3999 14.3819 24.2928 13.858C24.1859 13.3342 24.1439 12.8938 24.168 12.5363C24.2153 11.7983 24.4116 11.09 24.757 10.4114C25.1025 9.73293 25.5965 9.40546 26.239 9.42898C26.9057 9.45312 27.4418 9.85814 27.8464 10.6435C28.2515 11.4291 28.4418 12.5009 28.418 13.8578C28.4895 14.0246 28.6739 14.0841 28.9717 14.0363C29.2688 13.9885 29.662 13.9824 30.1499 14.0183C30.6376 14.0538 30.9887 14.1787 31.2031 14.3931C31.2273 14.3931 31.2392 14.2142 31.2392 13.8573C30.8105 10.8579 31.8698 9.26274 34.4175 9.07211C34.7977 9.14366 35.1191 9.23309 35.3807 9.33992C35.6435 9.44686 35.9222 9.62586 36.2201 9.87565C36.5185 10.1254 36.7675 10.4884 36.97 10.9649C37.1725 11.4416 37.3334 12.0367 37.4523 12.7507V14.0719C37.4523 14.8336 37.297 15.2623 36.9875 15.3576C36.4879 15.5241 36.1313 15.5183 35.9173 15.3396C35.7028 15.1607 35.7261 14.8456 35.9884 14.3932C36.2263 13.798 36.1787 13.1071 35.8453 12.3216C35.5123 11.5361 34.9047 11.1789 34.0243 11.2505C33.4289 11.2743 33.0003 11.5958 32.7384 12.2146C32.4765 12.8336 32.3815 13.4408 32.453 14.0361C32.5244 14.6312 32.655 14.9407 32.846 14.9643C32.9886 14.9885 33.4117 15.1787 34.114 15.536C34.8172 15.8931 35.3467 16.1072 35.7033 16.1787C36.6318 16.3688 37.1608 16.6665 37.2922 17.0714C37.4232 17.4765 37.3697 18.0655 37.1317 18.8392C36.8933 19.6133 36.8222 20.2496 36.9181 20.7499C37.0132 21.2742 37.192 21.7498 37.4541 22.1783C37.716 22.6072 37.9951 22.9997 38.293 23.3571C38.5905 23.7135 38.9411 24.3807 39.3469 25.3566C39.751 26.333 40.12 27.5589 40.453 29.0351C40.4765 29.0588 40.5656 29.1421 40.7207 29.2851C40.8755 29.4278 41.0298 29.6063 41.1851 29.8206C41.3405 30.035 41.5246 30.3266 41.739 30.6956C41.9531 31.0648 42.1859 31.6064 42.4358 32.3209C42.685 33.0349 42.9179 33.8568 43.1318 34.7848C43.3938 35.8807 43.5307 37.1533 43.5427 38.6065C43.5548 40.0585 43.6498 41.0525 43.8286 41.5884C44.0076 42.1248 44.4657 42.3448 45.2036 42.2493C46.1321 42.2018 46.728 41.7018 46.9886 40.7495C47.7745 37.9876 47.1325 34.6779 45.0607 30.8215C44.2748 29.3215 43.5967 28.3333 43.0248 27.8574C43.8579 28.3335 44.7154 29.2259 45.5967 30.5358C46.4777 31.8455 47.0367 33.0719 47.2747 34.2139C47.2978 34.3334 47.3638 34.649 47.4707 35.1603C47.5777 35.6723 47.6376 35.9702 47.6488 36.0533C47.6603 36.1367 47.7088 36.3808 47.7914 36.7854C47.8752 37.1902 47.9164 37.4522 47.9164 37.5712C47.9164 37.6906 47.9279 37.9227 47.9523 38.2677C47.9767 38.6126 47.9703 38.8806 47.9343 39.0711C47.8984 39.262 47.8632 39.518 47.8273 39.8387C47.7914 40.1601 47.7323 40.4696 47.6488 40.7676C47.5667 41.065 47.4771 41.393 47.3817 41.7496C48.6907 42.321 49.3456 42.8206 49.3456 43.2495C48.846 42.8446 48.1312 42.5771 47.2023 42.4474C46.2733 42.3159 45.4113 42.4408 44.6134 42.8219C43.8155 43.2029 43.4046 43.8334 43.3806 44.7139C42.5236 44.7139 41.9162 44.9279 41.5596 45.3573C41.036 45.9759 40.7626 46.8148 40.7387 47.8748C40.7148 48.9337 40.8033 50.089 41.0057 51.3381C41.2091 52.5879 41.2862 53.4624 41.2381 53.9627ZM26.2754 12.5718C26.2039 12.5483 26.1445 12.4764 26.0972 12.3576C26.0972 12.1438 26.204 12.0599 26.4184 12.1078C26.5614 12.1551 26.6986 12.3338 26.8292 12.6433C26.9601 12.9527 26.9899 13.31 26.9186 13.7147C26.9186 13.7862 26.8831 13.8222 26.8112 13.8216C26.549 13.8216 26.4539 13.5837 26.5255 13.1076C26.5966 12.7505 26.5133 12.5718 26.2754 12.5718ZM35.5249 13.1436L35.4539 13.2506C35.2637 13.3694 35.1693 13.3933 35.1693 13.3221C35.0734 12.6789 34.8592 12.3099 34.5262 12.2146L34.3833 12.1433C34.2163 12.0003 34.2993 11.917 34.6323 11.8933C34.7037 11.8694 34.8108 11.9049 34.9538 12.0002C35.0968 12.0956 35.2277 12.2445 35.3468 12.4469C35.4654 12.6495 35.5249 12.8813 35.5249 13.1436Z"
										fill="url(#paint0_linear_29_800)" />
									<path
										d="M27.2038 15.2141C27.2038 15.3571 27.2637 15.4166 27.3828 15.393C27.4779 15.393 27.5785 15.2798 27.686 15.0537C27.7932 14.828 27.9779 14.703 28.2395 14.6789V14.6785H27.8823C27.4301 14.75 27.2038 14.9284 27.2038 15.2141Z"
										fill="url(#paint1_linear_29_800)" />
									<path
										d="M30.3112 14.786C30.5492 14.7144 30.7578 14.7685 30.9363 14.947C31.1146 15.1252 31.2518 15.2029 31.3471 15.1787C31.4895 15.1077 31.5254 15.0002 31.4539 14.8575C31.2636 14.5479 30.8828 14.5242 30.3112 14.786Z"
										fill="url(#paint2_linear_29_800)" />
								</g>
								<defs>
									<linearGradient id="paint0_linear_29_800" x1="32" y1="0.000244141" x2="32"
										y2="117.76" gradientUnits="userSpaceOnUse">
										<stop stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<linearGradient id="paint1_linear_29_800" x1="27.7216" y1="14.6785" x2="27.7216"
										y2="15.398" gradientUnits="userSpaceOnUse">
										<stop stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<linearGradient id="paint2_linear_29_800" x1="30.9004" y1="14.606" x2="30.9004"
										y2="15.183" gradientUnits="userSpaceOnUse">
										<stop stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<clipPath id="clip0_29_800">
										<rect width="64" height="64" fill="white" />
									</clipPath>
								</defs>
							</svg>

						</span>
                    </div>

					<div class="techstack-logo" title="Github">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M31.996 0.666138C14.328 0.666138 0 15.0501 0 32.7941C0 46.9861 9.168 59.0261 21.888 63.2781C23.488 63.5741 24.072 62.5821 24.072 61.7301C24.072 60.9661 24.044 58.9461 24.028 56.2661C15.128 58.2061 13.248 51.9581 13.248 51.9581C11.796 48.2461 9.696 47.2581 9.696 47.2581C6.788 45.2661 9.912 45.3061 9.912 45.3061C13.124 45.5341 14.812 48.6181 14.812 48.6181C17.668 53.5261 22.304 52.1101 24.128 51.2861C24.416 49.2101 25.244 47.7941 26.16 46.9901C19.056 46.1781 11.584 43.4221 11.584 31.1141C11.584 27.6061 12.832 24.7381 14.88 22.4901C14.548 21.6781 13.452 18.4101 15.192 13.9901C15.192 13.9901 17.88 13.1261 23.992 17.2821C26.544 16.5701 29.28 16.2141 32.004 16.2021C34.72 16.2181 37.46 16.5701 40.016 17.2861C46.124 13.1301 48.808 13.9941 48.808 13.9941C50.552 18.4181 49.456 21.6821 49.128 22.4941C51.18 24.7421 52.416 27.6101 52.416 31.1181C52.416 43.4581 44.936 46.1741 37.808 46.9701C38.956 47.9621 39.98 49.9221 39.98 52.9181C39.98 57.2141 39.94 60.6781 39.94 61.7301C39.94 62.5901 40.516 63.5901 42.14 63.2741C54.84 59.0181 64 46.9821 64 32.7941C64 15.0501 49.672 0.666138 31.996 0.666138Z"
									fill="url(#paint0_linear_29_1035)" />
								<defs>
									<linearGradient id="paint0_linear_29_1035" x1="32" y1="0.666138" x2="32" y2="81.6"
										gradientUnits="userSpaceOnUse">
										<stop stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>

						</span>
                    </div>

                    <div class="techstack-logo" title="Java">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1591 33.9486C21.1591 33.9486 18.0408 34.9242 23.3806 35.2538C29.8516 35.6511 33.1569 35.5939 40.2855 34.8688C40.2855 34.8688 42.1623 35.5007 44.7822 36.0473C28.7971 39.73 8.60521 35.8342 21.1591 33.9486ZM19.2051 29.1428C19.2051 29.1428 15.7068 30.535 21.0514 30.8322C27.964 31.216 33.4204 31.2473 42.8681 30.2699C42.8681 30.2699 44.1726 30.9818 46.2255 31.3707C26.9013 34.4096 5.3792 31.61 19.2051 29.1428Z" fill="#1E8DE1"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M35.6703 20.9897C39.6109 23.4284 34.6374 25.6218 34.6374 25.6218C34.6374 25.6218 44.6385 22.8465 40.045 19.3699C35.7563 16.1293 32.4666 14.5193 50.2737 8.96738C50.273 8.96701 22.3213 12.7193 35.6703 20.9897Z" fill="#1E8DE1"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M56.8111 37.5035C56.8111 37.5035 59.1194 38.5268 54.2685 39.3181C45.0443 40.8203 15.8693 41.2733 7.76536 39.3778C4.8543 38.6961 10.3161 37.7512 12.0344 37.5516C13.8266 37.3433 14.8493 37.3812 14.8493 37.3812C11.6097 36.1547 -6.09029 39.7901 5.8601 40.833C38.4466 43.6738 65.2625 39.5541 56.8111 37.5035ZM22.6593 24.163C22.6593 24.163 7.8209 26.0584 17.4055 26.7474C21.4537 27.0384 29.5177 26.9714 37.0351 26.6323C43.177 26.3552 49.3418 25.7624 49.3418 25.7624C49.3418 25.7624 47.1778 26.2616 45.6098 26.8363C30.5391 28.9677 1.42984 27.975 9.81082 25.7962C16.8968 23.9532 22.6593 24.163 22.6593 24.163V24.163ZM49.2802 32.1624C64.5988 27.8836 57.5162 23.7708 52.5712 24.325C51.3622 24.4609 50.8197 24.5781 50.8197 24.5781C50.8197 24.5781 51.2708 24.1987 52.1282 24.0355C61.9092 22.1874 69.43 29.4877 48.9747 32.3787C48.974 32.3787 49.2097 32.2644 49.2802 32.1624V32.1624Z" fill="#1E8DE1"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M40.0451 0C40.0451 0 48.527 4.56326 31.998 11.578C18.7424 17.2072 28.9758 20.4158 31.9939 24.0832C24.255 20.3298 18.5785 17.0251 22.3863 13.9502C27.9768 9.43642 43.4675 7.24747 40.0451 0V0Z" fill="#1E8DE1"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1663 43.7608C38.8679 44.2663 61.4486 43.4801 61.9843 39.7391C61.9843 39.7391 60.9562 41.1571 49.8328 42.282C37.283 43.5522 21.8018 43.4043 12.6229 42.5897C12.6229 42.5897 14.5038 43.4265 24.1663 43.7608V43.7608Z" fill="#1E8DE1"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M61.305 50.4693H60.858V50.3346H62.0643V50.4693H61.6172V51.1423H61.305V50.4693ZM63.7122 50.5028H63.7067L63.2624 51.1419H63.0585L62.6169 50.5028H62.6115V51.1419H62.3149V50.3342H62.7504L63.1595 50.9056L63.5686 50.3342H64V51.1419H63.7128V50.5028H63.7122V50.5028ZM21.7571 58.0529C20.3707 58.6989 18.905 59.0624 17.589 59.0624C15.7142 59.0624 14.6969 58.4568 14.6969 57.4878C14.6969 56.4386 15.786 55.671 20.1451 55.671H21.7564V58.0529H21.7571V58.0529ZM25.5839 60.3741V53.1885C25.5839 51.3521 23.636 50.1401 18.9402 50.1401C16.2005 50.1401 13.7988 50.5039 11.8461 50.9675L12.4083 52.2402C13.9464 51.9365 15.935 51.655 17.887 51.655C20.5921 51.655 21.7564 52.2402 21.7564 53.4518V54.3604H20.4045C13.8333 54.3604 10.8681 55.7311 10.8681 57.7918C10.8681 59.5675 12.8221 60.5769 16.5005 60.5769C18.865 60.5769 20.6314 60.0522 22.2807 59.2841L22.5807 60.3741H25.5839V60.3741ZM38.3558 60.3741H33.5842L27.8386 50.323H32.0068L35.5728 56.4994L36.3666 58.3552C38.1655 55.671 39.4422 52.946 40.0809 50.323H44.1339C43.0489 53.6324 41.0942 57.266 38.3558 60.3741V60.3741ZM56.6682 58.0529C55.2777 58.6989 53.812 59.0624 52.4987 59.0624C50.6239 59.0624 49.6079 58.4568 49.6079 57.4878C49.6079 56.4386 50.6977 55.671 55.0541 55.671H56.6682V58.0529V58.0529ZM60.4963 60.3741V53.1885C60.4963 51.3521 58.5423 50.1401 53.8513 50.1401C51.1088 50.1401 48.7078 50.5039 46.7551 50.9675L47.3173 52.2402C48.8554 51.9365 50.8481 51.655 52.8008 51.655C55.5019 51.655 56.6675 52.2402 56.6675 53.4518V54.3604H55.3156C48.7437 54.3604 45.7805 55.7311 45.7805 57.7918C45.7805 59.5675 47.7304 60.5769 51.4096 60.5769C53.7761 60.5769 55.5398 60.0522 57.1931 59.2841L57.4945 60.3741H60.4963V60.3741ZM6.67214 62.082C5.58168 62.9388 3.81798 63.6173 1.88968 64L0 62.8034C1.46908 62.3981 2.72751 61.7437 3.31338 61.1348C3.81797 60.5922 4.02862 59.8945 4.02862 58.2244V46.748H8.09584V58.066C8.09584 60.2998 7.76396 61.2025 6.67214 62.082V62.082Z" fill="#1E8DE1"/>
								</svg>
								
								

						</span>
                    </div>

                    <div class="techstack-logo " title="MongoDB">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">

							<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_497_26)">
								<path d="M31.8 0.173996L33.508 3.382C33.892 3.974 34.308 4.498 34.798 4.986C36.228 6.416 37.586 7.914 38.806 9.518C41.7 13.318 43.652 17.538 45.046 22.102C45.882 24.89 46.336 27.75 46.37 30.642C46.51 39.288 43.546 46.712 37.57 52.882C36.594 53.858 35.55 54.762 34.43 55.566C33.838 55.566 33.558 55.112 33.314 54.694C32.86 53.928 32.582 53.054 32.442 52.184C32.232 51.138 32.094 50.092 32.162 49.012V48.524C32.114 48.42 31.592 0.419996 31.8 0.173996Z" fill="url(#paint0_linear_497_26)"/>
								<path d="M31.8 0.0679973C31.73 -0.0720027 31.66 0.0339973 31.59 0.101997C31.624 0.801997 31.38 1.426 30.998 2.022C30.578 2.614 30.022 3.068 29.464 3.556C26.364 6.24 23.924 9.482 21.97 13.108C19.37 17.988 18.03 23.218 17.65 28.724C17.476 30.71 18.278 37.718 18.904 39.74C20.612 45.108 23.68 49.606 27.654 53.51C28.63 54.45 29.674 55.322 30.754 56.16C31.068 56.16 31.102 55.88 31.174 55.672C31.3117 55.2269 31.4166 54.7724 31.488 54.312L32.188 49.084L31.8 0.0679973Z" fill="url(#paint1_linear_497_26)"/>
								<path d="M33.508 57.69C33.578 56.89 33.962 56.226 34.38 55.564C33.96 55.39 33.648 55.044 33.404 54.658C33.194 54.31 33.02 53.892 32.884 53.508C32.396 52.044 32.292 50.508 32.152 49.012V48.106C31.978 48.246 31.942 49.43 31.942 49.606C31.8402 51.1872 31.6304 52.7595 31.314 54.312C31.21 54.94 31.14 55.566 30.754 56.124C30.754 56.194 30.754 56.264 30.788 56.368C31.416 58.216 31.588 60.098 31.694 62.016V62.716C31.694 63.552 31.66 63.376 32.354 63.656C32.634 63.76 32.946 63.796 33.226 64.004C33.436 64.004 33.47 63.83 33.47 63.69L33.366 62.54V59.332C33.332 58.772 33.436 58.216 33.506 57.692L33.508 57.69Z" fill="#C2BFBF"/>
								</g>
								<defs>
								<linearGradient id="paint0_linear_497_26" x1="39.063" y1="0.173996" x2="39" y2="104" gradientUnits="userSpaceOnUse">
								<stop stop-color="#1E8DE1"/>
								<stop offset="1" stop-color="#1E8DE1" stop-opacity="0"/>
								</linearGradient>
								<linearGradient id="paint1_linear_497_26" x1="24.9069" y1="-0.00080863" x2="18" y2="128" gradientUnits="userSpaceOnUse">
								<stop stop-color="#4BACF4"/>
								<stop offset="1" stop-color="#4BACF4" stop-opacity="0"/>
								</linearGradient>
								<clipPath id="clip0_497_26">
								<rect width="64" height="64" fill="white"/>
								</clipPath>
								</defs>
								</svg>
								

						</span>
                    </div>

                    <div class="techstack-logo" title="MySql">
                        <span class="flex justify-center items-center opacity-70 hover:cursor-pointer hover:opacity-100">
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_29_856)">
									<path
										d="M40 49.3333C40 45.6587 37.0107 42.6667 33.3333 42.6667H30.6667C26.9893 42.6667 24 45.6587 24 49.3333V57.3333C24 61.008 26.9893 64 30.6667 64H33.3333C34.2293 64 35.0827 63.816 35.864 63.496C36.312 63.8 36.8107 64 37.3333 64C38.016 64 38.6987 63.7387 39.2187 63.2187C40.1387 62.2987 40.1973 60.9013 39.496 59.864C39.816 59.0827 40 58.2293 40 57.3333V49.3333ZM29.3333 57.3333V49.3333C29.3333 48.5973 29.9333 48 30.6667 48H33.3333C34.0667 48 34.6667 48.5973 34.6667 49.3333V55.08C33.6453 54.4773 32.3253 54.568 31.448 55.448C30.5707 56.328 30.4773 57.6453 31.08 58.6667H30.6667C29.9333 58.6667 29.3333 58.0693 29.3333 57.3333V57.3333Z"
										fill="url(#paint0_linear_29_856)" />
									<path
										d="M56 64H48C46.5253 64 45.3333 62.8053 45.3333 61.3333V45.3333C45.3333 43.8613 46.5253 42.6667 48 42.6667C49.4746 42.6667 50.6667 43.8613 50.6667 45.3333V58.6667H56C57.4747 58.6667 58.6667 59.8613 58.6667 61.3333C58.6667 62.8053 57.4747 64 56 64Z"
										fill="url(#paint1_linear_29_856)" />
									<path
										d="M12 64H8.00001C6.52534 64 5.33334 62.8053 5.33334 61.3333C5.33334 59.8613 6.52534 58.6667 8.00001 58.6667H12C12.7333 58.6667 13.3333 58.0693 13.3333 57.3333C13.3333 56.5973 12.7333 56 12 56C8.32268 56 5.33334 53.008 5.33334 49.3333C5.33334 45.6587 8.32268 42.6667 12 42.6667H16C17.4747 42.6667 18.6667 43.8613 18.6667 45.3333C18.6667 46.8053 17.4747 48 16 48H12C11.2667 48 10.6667 48.5973 10.6667 49.3333C10.6667 50.0693 11.2667 50.6667 12 50.6667C15.6773 50.6667 18.6667 53.6587 18.6667 57.3333C18.6667 61.008 15.6773 64 12 64Z"
										fill="url(#paint2_linear_29_856)" />
									<path
										d="M50.6667 28V37.8133C49.84 37.4933 48.9334 37.3333 48 37.3333C45.36 37.3333 43.0133 38.64 41.5467 40.64C39.4133 38.6133 36.5333 37.3333 33.3333 37.3333H30.6667C27.4667 37.3333 24.5867 38.6133 22.4533 40.64C20.9867 38.64 18.64 37.3333 16 37.3333H13.3333V28C13.3333 34.48 30.08 34.6667 32 34.6667C33.92 34.6667 50.6667 34.48 50.6667 28Z"
										fill="url(#paint3_linear_29_856)" />
									<path
										d="M50.6667 22.6667C50.6667 29.1467 33.9093 29.3333 32 29.3333C30.0907 29.3333 13.3333 29.1467 13.3333 22.6667V12C13.3333 18.48 30.0907 18.6667 32 18.6667C33.9093 18.6667 50.6667 18.48 50.6667 12V22.6667Z"
										fill="#1E8DE1" fill-opacity="0.75" />
									<path
										d="M32 0C30.08 0 13.3333 0.186666 13.3333 6.66667C13.3333 13.1467 30.08 13.3333 32 13.3333C33.92 13.3333 50.6667 13.1467 50.6667 6.66667C50.6667 0.186666 33.92 0 32 0Z"
										fill="#1E8DE1" />
								</g>
								<defs>
									<linearGradient id="paint0_linear_29_856" x1="32" y1="42.6667" x2="32" y2="64"
										gradientUnits="userSpaceOnUse">
										<stop offset="0.494792" stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<linearGradient id="paint1_linear_29_856" x1="52" y1="42.6667" x2="52" y2="64"
										gradientUnits="userSpaceOnUse">
										<stop offset="0.494792" stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<linearGradient id="paint2_linear_29_856" x1="12" y1="42.6667" x2="12.16" y2="64"
										gradientUnits="userSpaceOnUse">
										<stop offset="0.234375" stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<linearGradient id="paint3_linear_29_856" x1="32" y1="28" x2="32" y2="40.64"
										gradientUnits="userSpaceOnUse">
										<stop offset="0.494792" stop-color="#1E8DE1" />
										<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
									</linearGradient>
									<clipPath id="clip0_29_856">
										<rect width="64" height="64" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</span>

                    </div>
                     </div>
				{/* <div class="flex justify-around w-auto space-x-4"> --> */}

                   
                    {/* <!-- </div> --> */}
                </div>
            </div>
        </section>

        {/* <!-- Process Section --> */}

        <section class="relative md:h-screen flex flex-col w-full px-8 pb-[120px] mx-auto md:items-center md:px-12 lg:px-24 bg-els-light-blue2">
            <h2 class="relative z-10 pb-[20px] leading-[45px] mb-[60px] font-sans text-3xl font-extrabold text-center md:text-4xl md:text-center before:content-[''] before:absolute before:left-[50%] before:ml-[-25px] before:bottom-[-2px] before:h-[4px] before:w-[50px] before:rounded-[5px] before:bg-els-blue before:els-gradient-reverse wow fadeInUp"
                data-wow-delay=".2s">Our Process</h2>
            <div class="flex flex-col items-center justify-between md:flex-row">
                <svg class="w-full md:w-1/2 h-80" data-wow-delay=".2s" width="602" height="630" viewBox="0 0 602 630" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_76_47)">
						<path d="M419.633 76.8521L418.48 78.0627L497.566 153.357L498.719 152.147L419.633 76.8521Z"
							fill="#E6E6E6" />
						<path
							d="M498.845 143.982L497.175 144.083L497.679 152.309L489.437 152.21L489.419 153.882L499.457 154.001L498.845 143.982Z"
							fill="#E6E6E6" />
						<path
							d="M427.781 76.326L427.763 77.998L419.522 77.899L420.026 86.125L418.355 86.226L417.745 76.206L427.781 76.326Z"
							fill="#E6E6E6" />
						<path
							d="M458.6 124.297C463.677 124.297 467.792 120.182 467.792 115.105C467.792 110.028 463.677 105.912 458.6 105.912C453.523 105.912 449.407 110.028 449.407 115.105C449.407 120.182 453.523 124.297 458.6 124.297Z"
							fill="#E6E6E6" />
						<path d="M183.638 76.8522L104.553 152.147L105.705 153.357L184.791 78.0628L183.638 76.8522Z"
							fill="#E6E6E6" />
						<path
							d="M103.815 154.001L113.853 153.882L113.834 152.21L105.593 152.309L106.097 144.083L104.427 143.982L103.815 154.001Z"
							fill="#E6E6E6" />
						<path
							d="M185.527 76.206L184.916 86.226L183.246 86.125L183.749 77.899L175.508 77.998L175.49 76.326L185.527 76.206Z"
							fill="#E6E6E6" />
						<path
							d="M144.672 124.297C149.749 124.297 153.865 120.182 153.865 115.105C153.865 110.028 149.749 105.912 144.672 105.912C139.595 105.912 135.479 110.028 135.479 115.105C135.479 120.182 139.595 124.297 144.672 124.297Z"
							fill="#E6E6E6" />
						<path
							d="M370.164 190.543H231.436C229.442 190.541 227.53 189.747 226.12 188.337C224.71 186.927 223.917 185.016 223.914 183.021V7.52142C223.917 5.52731 224.71 3.61554 226.12 2.20549C227.53 0.79544 229.442 0.00227088 231.436 0H370.164C372.158 0.00227088 374.07 0.79544 375.48 2.20549C376.89 3.61554 377.683 5.52731 377.686 7.52142V183.021C377.683 185.016 376.89 186.927 375.48 188.337C374.07 189.747 372.158 190.541 370.164 190.543ZM231.436 1.67143C229.885 1.67317 228.398 2.29007 227.301 3.38678C226.204 4.48349 225.587 5.97044 225.586 7.52142V183.021C225.587 184.572 226.204 186.059 227.301 187.156C228.398 188.253 229.885 188.87 231.436 188.871H370.164C371.715 188.87 373.202 188.253 374.299 187.156C375.396 186.059 376.013 184.572 376.014 183.021V7.52142C376.013 5.97044 375.396 4.48349 374.299 3.38678C373.202 2.29007 371.715 1.67317 370.164 1.67143H231.436Z"
							fill="#3F3D56" />
						<path
							d="M289.26 84.3584H258.723C257.726 84.3573 256.77 83.9607 256.065 83.2557C255.36 82.5507 254.963 81.5948 254.962 80.5977V44.562C254.963 43.5649 255.36 42.609 256.065 41.904C256.77 41.1989 257.726 40.8024 258.723 40.8013H289.26C290.257 40.8024 291.213 41.1989 291.918 41.904C292.623 42.609 293.019 43.5649 293.021 44.562V80.5977C293.019 81.5947 292.623 82.5507 291.918 83.2557C291.213 83.9607 290.257 84.3573 289.26 84.3584Z"
							fill="#1E8DE1" />
						<path
							d="M348.596 101.073H318.059C317.061 101.072 316.106 100.675 315.401 99.97C314.696 99.265 314.299 98.3091 314.298 97.312V61.2763C314.299 60.2793 314.696 59.3234 315.401 58.6183C316.106 57.9133 317.061 57.5167 318.059 57.5156H348.596C349.593 57.5167 350.549 57.9133 351.254 58.6183C351.959 59.3234 352.355 60.2793 352.356 61.2763V97.312C352.355 98.3091 351.959 99.265 351.254 99.97C350.549 100.675 349.593 101.072 348.596 101.073Z"
							fill="#CCCCCC" />
						<path
							d="M300.96 152.051H270.423C269.426 152.05 268.47 151.654 267.765 150.949C267.06 150.244 266.663 149.288 266.662 148.291V112.255C266.663 111.258 267.06 110.302 267.765 109.597C268.47 108.892 269.426 108.495 270.423 108.494H300.96C301.957 108.495 302.913 108.892 303.618 109.597C304.323 110.302 304.719 111.258 304.721 112.255V148.291C304.719 149.288 304.323 150.244 303.618 150.949C302.913 151.654 301.957 152.05 300.96 152.051Z"
							fill="#FF6584" />
						<path
							d="M594.079 371H455.35C453.356 370.998 451.444 370.205 450.034 368.794C448.624 367.384 447.831 365.473 447.829 363.479V187.979C447.831 185.984 448.624 184.073 450.034 182.663C451.444 181.253 453.356 180.459 455.35 180.457H594.079C596.073 180.459 597.984 181.253 599.395 182.663C600.805 184.073 601.598 185.984 601.6 187.979V363.479C601.598 365.473 600.805 367.384 599.395 368.795C597.984 370.205 596.073 370.998 594.079 371ZM455.35 182.129C453.799 182.13 452.312 182.747 451.215 183.844C450.119 184.941 449.502 186.428 449.5 187.979V363.479C449.502 365.03 450.119 366.517 451.215 367.613C452.312 368.71 453.799 369.327 455.35 369.329H594.079C595.63 369.327 597.116 368.71 598.213 367.613C599.31 366.517 599.927 365.03 599.929 363.479V187.979C599.927 186.428 599.31 184.941 598.213 183.844C597.116 182.747 595.63 182.13 594.079 182.129H455.35Z"
							fill="#3F3D56" />
						<path
							d="M548.532 219.318H500.896C500.01 219.318 499.16 218.966 498.533 218.339C497.906 217.712 497.554 216.862 497.554 215.975C497.554 215.088 497.906 214.238 498.533 213.611C499.16 212.984 500.01 212.632 500.896 212.632H548.532C549.419 212.632 550.269 212.984 550.896 213.611C551.523 214.238 551.875 215.088 551.875 215.975C551.875 216.862 551.523 217.712 550.896 218.339C550.269 218.966 549.419 219.318 548.532 219.318Z"
							fill="#1E8DE1" />
						<path
							d="M571.932 251.075H477.496C477.057 251.076 476.622 250.99 476.215 250.822C475.809 250.655 475.44 250.408 475.129 250.098C474.818 249.787 474.571 249.419 474.403 249.013C474.234 248.607 474.148 248.172 474.148 247.732C474.148 247.293 474.234 246.857 474.403 246.452C474.571 246.046 474.818 245.677 475.129 245.366C475.44 245.056 475.809 244.81 476.215 244.642C476.622 244.474 477.057 244.389 477.496 244.389H571.932C572.372 244.389 572.807 244.474 573.213 244.642C573.619 244.81 573.989 245.056 574.3 245.366C574.611 245.677 574.857 246.046 575.026 246.452C575.194 246.857 575.281 247.293 575.281 247.732C575.281 248.172 575.194 248.607 575.026 249.013C574.857 249.419 574.611 249.787 574.3 250.098C573.989 250.408 573.619 250.655 573.213 250.822C572.807 250.99 572.372 251.076 571.932 251.075Z"
							fill="#CCCCCC" />
						<path
							d="M571.932 268.625H477.496C477.057 268.626 476.622 268.54 476.215 268.372C475.809 268.205 475.44 267.958 475.129 267.648C474.818 267.337 474.571 266.969 474.403 266.563C474.234 266.157 474.148 265.722 474.148 265.282C474.148 264.843 474.234 264.408 474.403 264.002C474.571 263.596 474.818 263.227 475.129 262.916C475.44 262.606 475.809 262.36 476.215 262.192C476.622 262.024 477.057 261.939 477.496 261.939H571.932C572.372 261.939 572.807 262.024 573.213 262.192C573.619 262.36 573.989 262.606 574.3 262.916C574.611 263.227 574.857 263.596 575.026 264.002C575.194 264.408 575.281 264.843 575.281 265.282C575.281 265.722 575.194 266.157 575.026 266.563C574.857 266.969 574.611 267.337 574.3 267.648C573.989 267.958 573.619 268.205 573.213 268.372C572.807 268.54 572.372 268.626 571.932 268.625Z"
							fill="#CCCCCC" />
						<path
							d="M571.932 286.175H477.496C477.057 286.176 476.622 286.09 476.215 285.922C475.809 285.755 475.44 285.508 475.129 285.198C474.818 284.887 474.571 284.519 474.403 284.113C474.234 283.707 474.148 283.272 474.148 282.832C474.148 282.393 474.234 281.957 474.403 281.552C474.571 281.146 474.818 280.777 475.129 280.466C475.44 280.156 475.809 279.91 476.215 279.742C476.622 279.574 477.057 279.489 477.496 279.489H571.932C572.372 279.489 572.807 279.574 573.213 279.742C573.619 279.91 573.989 280.156 574.3 280.466C574.611 280.777 574.857 281.146 575.026 281.552C575.194 281.957 575.281 282.393 575.281 282.832C575.281 283.272 575.194 283.707 575.026 284.113C574.857 284.519 574.611 284.887 574.3 285.198C573.989 285.508 573.619 285.755 573.213 285.922C572.807 286.09 572.372 286.176 571.932 286.175Z"
							fill="#CCCCCC" />
						<path
							d="M571.932 303.725H477.496C477.057 303.726 476.622 303.64 476.215 303.472C475.809 303.305 475.44 303.058 475.129 302.748C474.818 302.438 474.571 302.069 474.403 301.663C474.234 301.257 474.148 300.822 474.148 300.382C474.148 299.943 474.234 299.508 474.403 299.102C474.571 298.696 474.818 298.327 475.129 298.016C475.44 297.706 475.809 297.46 476.215 297.292C476.622 297.124 477.057 297.039 477.496 297.039H571.932C572.372 297.039 572.807 297.124 573.213 297.292C573.619 297.46 573.989 297.706 574.3 298.016C574.611 298.327 574.857 298.696 575.026 299.102C575.194 299.508 575.281 299.943 575.281 300.382C575.281 300.822 575.194 301.257 575.026 301.663C574.857 302.069 574.611 302.438 574.3 302.748C573.989 303.058 573.619 303.305 573.213 303.472C572.807 303.64 572.372 303.726 571.932 303.725Z"
							fill="#CCCCCC" />
						<path
							d="M571.932 321.275H477.496C477.057 321.276 476.622 321.19 476.215 321.022C475.809 320.855 475.44 320.608 475.129 320.298C474.818 319.988 474.571 319.619 474.403 319.213C474.234 318.807 474.148 318.372 474.148 317.932C474.148 317.493 474.234 317.058 474.403 316.652C474.571 316.246 474.818 315.877 475.129 315.566C475.44 315.256 475.809 315.01 476.215 314.842C476.622 314.675 477.057 314.589 477.496 314.589H571.932C572.372 314.589 572.807 314.675 573.213 314.842C573.619 315.01 573.989 315.256 574.3 315.566C574.611 315.877 574.857 316.246 575.026 316.652C575.194 317.058 575.281 317.493 575.281 317.932C575.281 318.372 575.194 318.807 575.026 319.213C574.857 319.619 574.611 319.988 574.3 320.298C573.989 320.608 573.619 320.855 573.213 321.022C572.807 321.19 572.372 321.276 571.932 321.275Z"
							fill="#CCCCCC" />
						<path
							d="M571.932 338.825H477.496C477.057 338.826 476.622 338.74 476.215 338.572C475.809 338.405 475.44 338.158 475.129 337.848C474.818 337.537 474.571 337.169 474.403 336.763C474.234 336.357 474.148 335.922 474.148 335.482C474.148 335.043 474.234 334.607 474.403 334.202C474.571 333.796 474.818 333.427 475.129 333.116C475.44 332.806 475.809 332.56 476.215 332.392C476.622 332.224 477.057 332.139 477.496 332.139H571.932C572.372 332.139 572.807 332.224 573.213 332.392C573.619 332.56 573.989 332.806 574.3 333.116C574.611 333.427 574.857 333.796 575.026 334.202C575.194 334.607 575.281 335.043 575.281 335.482C575.281 335.922 575.194 336.357 575.026 336.763C574.857 337.169 574.611 337.537 574.3 337.848C573.989 338.158 573.619 338.405 573.213 338.572C572.807 338.74 572.372 338.826 571.932 338.825Z"
							fill="#CCCCCC" />
						<path
							d="M146.25 371H7.52142C5.52731 370.998 3.61553 370.205 2.20547 368.795C0.795424 367.384 0.00226824 365.473 0 363.479V187.979C0.00226824 185.984 0.795424 184.073 2.20547 182.663C3.61553 181.253 5.52731 180.459 7.52142 180.457H146.25C148.244 180.459 150.156 181.253 151.566 182.663C152.976 184.073 153.769 185.984 153.771 187.979V363.479C153.769 365.473 152.976 367.384 151.566 368.794C150.156 370.205 148.244 370.998 146.25 371ZM7.52142 182.129C5.97044 182.13 4.48349 182.747 3.38678 183.844C2.29007 184.941 1.67316 186.428 1.67142 187.979V363.479C1.67316 365.03 2.29007 366.517 3.38678 367.613C4.48349 368.71 5.97044 369.327 7.52142 369.329H146.25C147.801 369.327 149.288 368.71 150.385 367.613C151.481 366.517 152.098 365.03 152.1 363.479V187.979C152.098 186.428 151.481 184.941 150.385 183.844C149.288 182.747 147.801 182.13 146.25 182.129H7.52142Z"
							fill="#3F3D56" />
						<path
							d="M124.248 221.893H82.4626C81.576 221.893 80.7258 221.541 80.0988 220.914C79.4719 220.287 79.1198 219.436 79.1198 218.55C79.1198 217.663 79.4719 216.813 80.0988 216.186C80.7258 215.559 81.576 215.207 82.4626 215.207H124.248C125.135 215.207 125.985 215.559 126.612 216.186C127.239 216.813 127.591 217.663 127.591 218.55C127.591 219.436 127.239 220.287 126.612 220.914C125.985 221.541 125.135 221.893 124.248 221.893Z"
							fill="#3F3D56" />
						<path
							d="M124.248 239.443H82.4626C81.576 239.443 80.7258 239.091 80.0988 238.464C79.4719 237.837 79.1198 236.987 79.1198 236.1C79.1198 235.213 79.4719 234.363 80.0988 233.736C80.7258 233.109 81.576 232.757 82.4626 232.757H124.248C125.135 232.757 125.985 233.109 126.612 233.736C127.239 234.363 127.591 235.213 127.591 236.1C127.591 236.987 127.239 237.837 126.612 238.464C125.985 239.091 125.135 239.443 124.248 239.443Z"
							fill="#3F3D56" />
						<path
							d="M61.0222 249.436H30.4852C29.4882 249.435 28.5322 249.038 27.8272 248.333C27.1222 247.628 26.7256 246.672 26.7245 245.675V209.639C26.7256 208.642 27.1222 207.686 27.8272 206.981C28.5322 206.276 29.4882 205.88 30.4852 205.879H61.0222C62.0193 205.88 62.9752 206.276 63.6802 206.981C64.3853 207.686 64.7818 208.642 64.7829 209.639V245.675C64.7818 246.672 64.3853 247.628 63.6802 248.333C62.9752 249.038 62.0193 249.435 61.0222 249.436Z"
							fill="#1E8DE1" />
						<path
							d="M123.959 275.378H29.5231C29.0836 275.379 28.6483 275.293 28.242 275.126C27.8358 274.958 27.4666 274.712 27.1556 274.401C26.8446 274.091 26.5978 273.722 26.4294 273.316C26.2611 272.91 26.1744 272.475 26.1744 272.036C26.1744 271.596 26.2611 271.161 26.4294 270.755C26.5978 270.349 26.8446 269.98 27.1556 269.67C27.4666 269.359 27.8358 269.113 28.242 268.946C28.6483 268.778 29.0836 268.692 29.5231 268.693H123.959C124.398 268.692 124.834 268.778 125.24 268.946C125.646 269.113 126.015 269.359 126.326 269.67C126.637 269.98 126.884 270.349 127.052 270.755C127.221 271.161 127.307 271.596 127.307 272.036C127.307 272.475 127.221 272.91 127.052 273.316C126.884 273.722 126.637 274.091 126.326 274.401C126.015 274.712 125.646 274.958 125.24 275.126C124.834 275.293 124.398 275.379 123.959 275.378Z"
							fill="#CCCCCC" />
						<path
							d="M123.959 292.929H29.5231C29.0836 292.929 28.6483 292.843 28.242 292.676C27.8358 292.508 27.4666 292.262 27.1556 291.951C26.8446 291.641 26.5978 291.272 26.4294 290.866C26.2611 290.46 26.1744 290.025 26.1744 289.586C26.1744 289.146 26.2611 288.711 26.4294 288.305C26.5978 287.899 26.8446 287.53 27.1556 287.22C27.4666 286.909 27.8358 286.663 28.242 286.496C28.6483 286.328 29.0836 286.242 29.5231 286.243H123.959C124.398 286.242 124.834 286.328 125.24 286.496C125.646 286.663 126.015 286.909 126.326 287.22C126.637 287.53 126.884 287.899 127.052 288.305C127.221 288.711 127.307 289.146 127.307 289.586C127.307 290.025 127.221 290.46 127.052 290.866C126.884 291.272 126.637 291.641 126.326 291.951C126.015 292.262 125.646 292.508 125.24 292.676C124.834 292.843 124.398 292.929 123.959 292.929Z"
							fill="#CCCCCC" />
						<path
							d="M123.959 310.478H29.5231C29.0836 310.479 28.6483 310.393 28.242 310.226C27.8358 310.058 27.4666 309.812 27.1556 309.501C26.8446 309.191 26.5978 308.822 26.4294 308.416C26.2611 308.01 26.1744 307.575 26.1744 307.136C26.1744 306.696 26.2611 306.261 26.4294 305.855C26.5978 305.449 26.8446 305.08 27.1556 304.77C27.4666 304.459 27.8358 304.213 28.242 304.046C28.6483 303.878 29.0836 303.792 29.5231 303.793H123.959C124.398 303.792 124.834 303.878 125.24 304.046C125.646 304.213 126.015 304.459 126.326 304.77C126.637 305.08 126.884 305.449 127.052 305.855C127.221 306.261 127.307 306.696 127.307 307.136C127.307 307.575 127.221 308.01 127.052 308.416C126.884 308.822 126.637 309.191 126.326 309.501C126.015 309.812 125.646 310.058 125.24 310.226C124.834 310.393 124.398 310.479 123.959 310.478Z"
							fill="#CCCCCC" />
						<path
							d="M123.959 328.028H29.5231C29.0836 328.029 28.6483 327.943 28.242 327.776C27.8358 327.608 27.4666 327.362 27.1556 327.051C26.8446 326.741 26.5978 326.372 26.4294 325.966C26.2611 325.56 26.1744 325.125 26.1744 324.686C26.1744 324.246 26.2611 323.811 26.4294 323.405C26.5978 322.999 26.8446 322.63 27.1556 322.32C27.4666 322.009 27.8358 321.763 28.242 321.596C28.6483 321.428 29.0836 321.342 29.5231 321.343H123.959C124.398 321.342 124.834 321.428 125.24 321.596C125.646 321.763 126.015 322.009 126.326 322.32C126.637 322.63 126.884 322.999 127.052 323.405C127.221 323.811 127.307 324.246 127.307 324.686C127.307 325.125 127.221 325.56 127.052 325.966C126.884 326.372 126.637 326.741 126.326 327.051C126.015 327.362 125.646 327.608 125.24 327.776C124.834 327.943 124.398 328.029 123.959 328.028Z"
							fill="#CCCCCC" />
						<path
							d="M123.959 345.579H29.5231C29.0836 345.579 28.6483 345.493 28.242 345.326C27.8358 345.158 27.4666 344.912 27.1556 344.602C26.8446 344.291 26.5978 343.922 26.4294 343.516C26.2611 343.11 26.1744 342.675 26.1744 342.236C26.1744 341.796 26.2611 341.361 26.4294 340.955C26.5978 340.549 26.8446 340.18 27.1556 339.87C27.4666 339.559 27.8358 339.313 28.242 339.146C28.6483 338.978 29.0836 338.892 29.5231 338.893H123.959C124.398 338.892 124.834 338.978 125.24 339.146C125.646 339.313 126.015 339.559 126.326 339.87C126.637 340.18 126.884 340.549 127.052 340.955C127.221 341.361 127.307 341.796 127.307 342.236C127.307 342.675 127.221 343.11 127.052 343.516C126.884 343.922 126.637 344.291 126.326 344.602C126.015 344.912 125.646 345.158 125.24 345.326C124.834 345.493 124.398 345.579 123.959 345.579Z"
							fill="#CCCCCC" />
						<path
							d="M198.695 472.719V436.683C198.696 435.686 199.093 434.73 199.798 434.025C200.503 433.32 201.459 432.923 202.456 432.922H232.993C233.99 432.923 234.946 433.32 235.651 434.025C236.356 434.73 236.753 435.686 236.754 436.683V472.719C236.753 473.716 236.356 474.672 235.651 475.377C234.946 476.082 233.99 476.478 232.993 476.479H202.456C201.459 476.478 200.503 476.082 199.798 475.377C199.093 474.672 198.696 473.716 198.695 472.719Z"
							fill="#E6E6E6" />
						<path
							d="M209.695 460.719V424.683C209.696 423.686 210.093 422.73 210.798 422.025C211.503 421.32 212.459 420.923 213.456 420.922H243.993C244.99 420.923 245.946 421.32 246.651 422.025C247.356 422.73 247.753 423.686 247.754 424.683V460.719C247.753 461.716 247.356 462.672 246.651 463.377C245.946 464.082 244.99 464.478 243.993 464.479H213.456C212.459 464.478 211.503 464.082 210.798 463.377C210.093 462.672 209.696 461.716 209.695 460.719Z"
							fill="#1E8DE1" />
						<path
							d="M346.584 449.188C345.435 448.524 344.446 447.617 343.685 446.529C342.925 445.441 342.413 444.2 342.184 442.893C341.955 441.585 342.016 440.244 342.362 438.963C342.708 437.681 343.331 436.492 344.186 435.477L334.72 366.289L354.438 367.257L357.534 434.742C359.143 436.293 360.128 438.379 360.301 440.607C360.475 442.834 359.825 445.048 358.476 446.829C357.126 448.61 355.17 449.833 352.978 450.268C350.787 450.703 348.512 450.319 346.584 449.188V449.188Z"
							fill="#A0616A" />
						<path
							d="M357.144 368.179C356.74 368.655 356.222 369.021 355.639 369.243L337.919 376.006C337.029 376.346 336.043 376.331 335.163 375.966C334.284 375.601 333.578 374.912 333.19 374.041L317.494 338.766C315.987 335.494 315.73 331.783 316.773 328.335C317.544 325.874 318.964 323.666 320.884 321.944C322.805 320.223 325.154 319.051 327.684 318.553C329.631 318.152 331.641 318.181 333.574 318.636C335.892 319.152 338.044 320.239 339.836 321.796C341.628 323.354 343.003 325.334 343.838 327.557L357.794 364.447C358.028 365.071 358.092 365.745 357.978 366.402C357.863 367.058 357.576 367.671 357.144 368.179Z"
							fill="#CCCCCC" />
						<path d="M264.807 618.06H252.547L248.102 570.549L264.809 570.773L264.807 618.06Z"
							fill="#A0616A" />
						<path
							d="M243.79 614.557H267.434V629.444H228.903C228.903 627.489 229.288 625.553 230.037 623.747C230.785 621.94 231.881 620.299 233.264 618.917C234.646 617.535 236.287 616.438 238.093 615.69C239.899 614.942 241.835 614.557 243.79 614.557Z"
							fill="#2F2E41" />
						<path d="M321.807 618.06H309.547L303.715 570.772L321.809 570.773L321.807 618.06Z"
							fill="#A0616A" />
						<path
							d="M300.79 614.557H324.434V629.444H285.903C285.903 627.489 286.288 625.553 287.037 623.747C287.785 621.94 288.881 620.299 290.264 618.917C291.646 617.535 293.287 616.438 295.093 615.69C296.899 614.942 298.835 614.557 300.79 614.557Z"
							fill="#2F2E41" />
						<path
							d="M323.349 601.236L304.094 599.81C302.999 599.727 301.972 599.248 301.205 598.462C300.439 597.675 299.986 596.636 299.931 595.539L295.638 506.809C295.597 505.957 295.246 505.15 294.652 504.539C294.058 503.927 293.261 503.554 292.411 503.488C291.561 503.423 290.716 503.67 290.035 504.183C289.354 504.696 288.884 505.44 288.713 506.276L270.802 593.683C270.58 594.758 269.974 595.716 269.096 596.375C268.218 597.035 267.13 597.351 266.035 597.265L248.629 595.872C248.033 595.825 247.452 595.658 246.92 595.383C246.389 595.108 245.917 594.73 245.534 594.271C245.15 593.812 244.862 593.28 244.686 592.708C244.511 592.136 244.451 591.535 244.51 590.94L260.658 429.463C260.721 428.832 260.917 428.221 261.233 427.671C261.548 427.121 261.977 426.644 262.49 426.271C263.003 425.898 263.589 425.638 264.21 425.507C264.831 425.377 265.472 425.379 266.092 425.514L327.498 438.862C328.515 439.086 329.423 439.654 330.069 440.471C330.715 441.288 331.058 442.303 331.041 443.344L328.181 596.832C328.158 598.009 327.676 599.13 326.837 599.956C325.998 600.781 324.869 601.245 323.692 601.248C323.578 601.248 323.464 601.243 323.349 601.236Z"
							fill="#2F2E41" />
						<path
							d="M306.503 294.449C320.068 294.449 331.064 283.452 331.064 269.888C331.064 256.323 320.068 245.327 306.503 245.327C292.939 245.327 281.942 256.323 281.942 269.888C281.942 283.452 292.939 294.449 306.503 294.449Z"
							fill="#A0616A" />
						<path
							d="M268.396 441.915C266.034 439.797 264.159 437.193 262.9 434.282C261.641 431.37 261.027 428.22 261.102 425.049C261.102 389.748 291.657 310.881 292.615 308.42C292.709 307.827 293.515 307.571 297.745 304.714C301.977 301.855 308.08 301.415 315.884 303.408C316.678 303.611 317.4 304.028 317.973 304.613C318.546 305.198 318.948 305.929 319.134 306.727L320.586 308.824C320.712 309.356 320.962 309.851 321.314 310.269C321.666 310.687 322.112 311.016 322.615 311.231C328.908 313.882 348.913 326.109 342.096 372.122C335.764 414.865 333.195 440.003 332.384 448.827C332.288 449.874 331.829 450.855 331.085 451.598C330.341 452.34 329.359 452.799 328.312 452.893C325.227 453.169 319.93 453.536 313.623 453.536C299.002 453.536 278.947 451.564 268.396 441.915Z"
							fill="#CCCCCC" />
						<path
							d="M239.047 428.837C238.463 427.646 238.147 426.34 238.122 425.014C238.097 423.687 238.363 422.37 238.902 421.158C239.44 419.945 240.238 418.865 241.239 417.993C242.241 417.122 243.421 416.481 244.696 416.115L275.389 353.39L291.223 365.181L256.189 422.943C256.661 425.127 256.316 427.408 255.219 429.355C254.122 431.301 252.349 432.777 250.236 433.504C248.123 434.231 245.817 434.157 243.755 433.297C241.693 432.437 240.018 430.85 239.047 428.837L239.047 428.837Z"
							fill="#A0616A" />
						<path
							d="M292.956 367.454C292.356 367.624 291.722 367.64 291.113 367.499L272.631 363.241C271.703 363.027 270.892 362.466 270.365 361.672C269.838 360.879 269.636 359.913 269.799 358.975L276.422 320.937C276.994 317.38 278.848 314.156 281.635 311.873C283.647 310.259 286.057 309.217 288.611 308.858C291.164 308.498 293.768 308.835 296.147 309.831C297.986 310.583 299.639 311.726 300.991 313.182C302.628 314.902 303.81 317.004 304.43 319.296C305.05 321.588 305.088 323.998 304.542 326.309L295.575 364.717C295.422 365.366 295.099 365.962 294.639 366.443C294.178 366.924 293.597 367.273 292.956 367.454Z"
							fill="#CCCCCC" />
						<path
							d="M300.753 292.079C299.558 290.859 298.675 289.369 298.181 287.734C297.686 286.1 297.595 284.37 297.914 282.692C298.77 278.213 299.273 275.282 299.368 274.216C299.695 270.568 296.007 267.615 292.358 267.145C292.217 267.127 292.099 267.114 292 267.107C292.093 267.198 292.193 267.291 292.28 267.374C292.973 268.024 293.836 268.835 293.631 269.671C293.507 270.175 293.047 270.532 292.224 270.762C286.518 272.359 282.123 270.893 278.394 266.146C277.345 264.797 276.624 263.223 276.288 261.548C274.952 254.993 278.512 249.405 281.734 245.872C284.391 242.959 288.698 239.423 294.128 239.12C298.352 238.884 303.374 241.315 304.877 245.694C305.586 244.644 306.53 243.772 307.634 243.15C308.738 242.528 309.973 242.171 311.239 242.108C314.122 242.046 316.96 242.835 319.397 244.377C331.306 251.199 336.424 267.45 330.574 279.865C326.893 287.674 318.919 293.488 309.764 295.037C309.191 295.134 308.61 295.184 308.029 295.184C306.67 295.182 305.325 294.906 304.075 294.372C302.825 293.839 301.695 293.059 300.753 292.079Z"
							fill="#2F2E41" />
						<path
							d="M185.579 630H380.579C380.844 630 381.098 629.895 381.286 629.707C381.473 629.52 381.579 629.265 381.579 629C381.579 628.735 381.473 628.48 381.286 628.293C381.098 628.105 380.844 628 380.579 628H185.579C185.314 628 185.059 628.105 184.872 628.293C184.684 628.48 184.579 628.735 184.579 629C184.579 629.265 184.684 629.52 184.872 629.707C185.059 629.895 185.314 630 185.579 630Z"
							fill="#3F3D56" />
					</g>
					<defs>
						<clipPath id="clip0_76_47">
							<rect width="601.6" height="630" fill="white" />
						</clipPath>
					</defs>
				</svg>
                <div class="flex flex-col w-full mt-8 md:flex-row md:w-1/2">
                    <svg class="hidden h-96 md:block" width="39" height="741" viewBox="0 0 39 741" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="19.2162" y1="8.96564" x2="19.2162" y2="726.724" stroke="#288cd8" stroke-width="8"
							stroke-linecap="round" />
						<ellipse cx="19.2739" cy="17.3566" rx="19.2739" ry="16.8164" fill="#288cd8" />
						<ellipse cx="18.7667" cy="16.9141" rx="9.63696" ry="8.40818" fill="#e3f3fc" />
						<ellipse cx="19.2739" cy="103.45" rx="19.2739" ry="16.8164" fill="#288cd8" />
						<ellipse cx="18.7667" cy="103.008" rx="9.63696" ry="8.40818" fill="#e3f3fc" />
						<ellipse cx="19.2739" cy="221.429" rx="19.2739" ry="16.8164" fill="#288cd8" />
						<ellipse cx="18.7667" cy="220.986" rx="9.63696" ry="8.40818" fill="#e3f3fc" />
						<ellipse cx="19.2739" cy="346.603" rx="19.2739" ry="16.8164" fill="#288cd8" />
						<ellipse cx="18.7667" cy="346.161" rx="9.63696" ry="8.40818" fill="#e3f3fc" />
						<ellipse cx="19.2739" cy="446.812" rx="19.2739" ry="16.8164" fill="#288cd8" />
						<ellipse cx="18.7667" cy="446.369" rx="9.63696" ry="8.40818" fill="#e3f3fc" />
						<ellipse cx="19.2739" cy="542.48" rx="19.2739" ry="16.8164" fill="#288cd8" />
						<ellipse cx="18.7667" cy="542.037" rx="9.63696" ry="8.40818" fill="#e3f3fc" />
						<ellipse cx="19.2739" cy="723.643" rx="19.2739" ry="16.8164" fill="#288cd8" />
						<ellipse cx="18.7667" cy="723.201" rx="9.63696" ry="8.40818" fill="#e3f3fc" />
						<ellipse cx="19.2739" cy="634.102" rx="19.2739" ry="16.8164" fill="#288cd8" />
						<ellipse cx="18.7667" cy="633.659" rx="9.63696" ry="8.40818" fill="#e3f3fc" />
					</svg>
                    <ul class="px-6 md:px-6">
                        <li class="mb-4 font-sans text-base font-normal list-disc list-outside text-els-gray-2 md:list-none wow fadeIn" data-wow-delay=".15s">We discuss your software idea</li>
                        <li class="mb-4 font-sans text-base font-normal list-disc list-outside text-els-gray-2 md:list-none wow fadeIn" data-wow-delay=".25s">Our software designers create a design of the software should look like
                        </li>
                        <li class="mb-4 font-sans text-base font-normal list-disc list-outside text-els-gray-2 md:list-none wow fadeIn" data-wow-delay=".35s">You review and decide on changes to the software design based on your vision for your app</li>
                        <li class="font-sans text-base font-normal list-disc list-outside text-els-gray-2 md:list-none mb-7 wow fadeIn" data-wow-delay=".45s">Software designers makes the changes</li>
                        <li class="mb-6 font-sans text-base font-normal list-disc list-outside text-els-gray-2 md:list-none wow fadeIn" data-wow-delay=".55s">Our Software Developers build the product</li>
                        <li class="mb-6 font-sans text-base font-normal list-disc list-outside text-els-gray-2 md:list-none wow fadeIn" data-wow-delay=".65s">Dev-Ops team tests the software</li>
                        <li class="mb-6 font-sans text-base font-normal list-disc list-outside text-els-gray-2 md:list-none wow fadeIn" data-wow-delay=".75s">You launch</li>
                        <li class="mb-6 font-sans text-base font-normal list-disc list-outside text-els-gray-2 md:list-none wow fadeIn" data-wow-delay=".85s">We stick around for your maintenance phase</li>
                    </ul>
                </div>

            </div>
        </section>

        {/* <!-- Projects Section --> */}

        <section class="relative md:h-screen flex flex-col md:flex-row items-center w-full px-8 py-[120px] mx-auto md:px-12 lg:px-24 ">
            <div class="flex flex-col justify-start w-full mb-8">
                <div class="flex flex-col items-start w-full pl-0 md:w-3/5">
                    <h2 class="relative z-10 pb-[20px] leading-[45px] mb-[30px] font-sans text-3xl font-extrabold text-left md:text-4xl md:text-left before:content-[''] before:absolute before:left-[15%] before:ml-[-25px] before:bottom-[-2px] before:h-[4px] before:w-[50px] before:rounded-[5px] before:bg-els-blue before:els-gradient-reverse wow fadeInLeft"
                        data-wow-delay=".15s">Our Projects</h2>
                    <p class="my-4 text-els-gray-2 text-base md:text-lg wow fadeIn" data-wow-delay=".2s">These are the awesome softwares we have done so far</p>
                </div>
                <div class="flex justify-start w-full mt-8 projects-controls md:w-2/5 wow fadeInUp" data-wow-delay=".35s">
                    <span class="hover:cursor-pointer wow animate__animated animate__pulse animate__delay-3s animate__repeat-2" data-wow-delay=".15s">
						<svg class="mr-4 w-9 h-9 md:w-12 md:h-12" width="90" height="90" viewBox="0 0 90 90" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="45" cy="45" r="45" fill="url(#paint0_linear_76_212)" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M53.9331 26.6293C54.064 26.76 54.1679 26.9151 54.2388 27.086C54.3097 27.2568 54.3462 27.44 54.3462 27.625C54.3462 27.8099 54.3097 27.9931 54.2388 28.1639C54.1679 28.3348 54.064 28.4899 53.9331 28.6206L38.0509 44.5L53.9331 60.3793C54.1971 60.6434 54.3455 61.0015 54.3455 61.375C54.3455 61.7484 54.1971 62.1065 53.9331 62.3706C53.669 62.6346 53.3109 62.783 52.9375 62.783C52.564 62.783 52.2059 62.6346 51.9418 62.3706L35.0668 45.4956C34.9359 45.3649 34.832 45.2098 34.7611 45.0389C34.6902 44.8681 34.6537 44.6849 34.6537 44.5C34.6537 44.315 34.6902 44.1318 34.7611 43.961C34.832 43.7901 34.9359 43.635 35.0668 43.5043L51.9418 26.6293C52.0725 26.4984 52.2276 26.3945 52.3985 26.3236C52.5693 26.2527 52.7525 26.2162 52.9375 26.2162C53.1224 26.2162 53.3056 26.2527 53.4764 26.3236C53.6473 26.3945 53.8024 26.4984 53.9331 26.6293Z"
								fill="white" />
							<defs>
								<linearGradient id="paint0_linear_76_212" x1="90" y1="193.5" x2="-79.5" y2="-3.7726e-06"
									gradientUnits="userSpaceOnUse">
									<stop offset="0.395833" stop-color="#1E8DE1" />
									<stop offset="0.729167" stop-color="#67B8F2" />
									<stop offset="1" stop-color="#1E8DE1" stop-opacity="0.38" />
								</linearGradient>
							</defs>
						</svg>
					</span>

                    <span class="hover:cursor-pointer wow animate__animated animate__pulse animate__delay-3s animate__repeat-2" data-wow-delay=".15s">
						<svg class="w-9 h-9 md:w-12 md:h-12" width="90" height="90" viewBox="0 0 90 90" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="45" cy="45" r="45" fill="url(#paint0_linear_76_211)" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M35.4131 25.4298C35.5438 25.2936 35.6989 25.1855 35.8698 25.1117C36.0406 25.038 36.2238 25 36.4088 25C36.5937 25 36.7769 25.038 36.9477 25.1117C37.1186 25.1855 37.2738 25.2936 37.4044 25.4298L54.2794 42.9867C54.4103 43.1227 54.5142 43.2841 54.5851 43.4619C54.656 43.6396 54.6925 43.8302 54.6925 44.0226C54.6925 44.215 54.656 44.4056 54.5851 44.5833C54.5142 44.7611 54.4103 44.9226 54.2794 45.0585L37.4044 62.6154C37.1403 62.8901 36.7822 63.0444 36.4088 63.0444C36.0353 63.0444 35.6772 62.8901 35.4131 62.6154C35.1491 62.3406 35.0007 61.968 35.0007 61.5795C35.0007 61.191 35.1491 60.8184 35.4131 60.5437L51.2953 44.0226L35.4131 27.5015C35.2822 27.3656 35.1783 27.2042 35.1074 27.0264C35.0365 26.8487 35 26.6581 35 26.4657C35 26.2732 35.0365 26.0827 35.1074 25.9049C35.1783 25.7272 35.2822 25.5657 35.4131 25.4298Z"
								fill="white" />
							<defs>
								<linearGradient id="paint0_linear_76_211" x1="6.54351e-06" y1="225.5" x2="207" y2="-95"
									gradientUnits="userSpaceOnUse">
									<stop offset="0.364583" stop-color="#1E8DE1" />
									<stop offset="0.723958" stop-color="#67B8F2" />
									<stop offset="1" stop-color="#1E8DE1" stop-opacity="0.38" />
								</linearGradient>
							</defs>
						</svg>
					</span>


                </div>
            </div>
            <div class="flex flex-col justify-center text-center md:flex-row h-fit md:h-64">
                <div class="z-10 flex flex-wrap justify-between mb-12 bg-transparent projects-slider">
                    <div class="md:w-1/2 lg:w-1/2">
                        <h4 class="mb-2 text-base md:text-lg text-left text-els-gray-2">Web Platform</h4>
                        <img src={Project1} alt="dashboard photo" style={{height:280, width:380}} class="hover:cursor-pointer rounded-md hover:shadow-lg w-[380px] h-[300px] shadow-sm"/>
                    </div>
                    <div class="md:w-1/2 lg:w-1/2">
                        <h4 class="mb-2 text-base md:text-lg text-left text-els-gray-2">Mobile App</h4>
                        <img src={Project2} alt="dashboard photo" style={{height:280, width:380}} class="hover:cursor-pointer rounded-md hover:shadow-lg w-[380px] h-[300px] shadow-sm"/>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3">
                        <h4 class="mb-2 text-base md:text-lg text-left text-els-gray-2">Cloud Application</h4>
                        <img src={Project3} alt="dashboard photo" style={{height:280, width:380}} class="hover:cursor-pointer rounded-md hover:shadow-lg w-[380px] h-[300px] shadow-sm"/>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3">
                        <h4 class="mb-2 text-base md:text-lg text-left text-els-gray-2">Ecommerce Web App</h4>
                        <img src={Project4} alt="dashboard photo" style={{height:280, width:380}} class="hover:cursor-pointer rounded-md hover:shadow-lg w-[380px] h-[300px] shadow-sm"/>
                    </div>

                </div>
                {/* <!-- <div class="z-10 flex flex-col w-full text-xs md:w-5/12">
					<h4 class="mb-2 font-bold text-els-gray-2">Dashboard LMS</h4>
					<img src="public/images/home/dashboard2.jfif" alt="dashboard photo" class="shadow-xl">
				</div>
                <div class="z-10 flex flex-col w-full mb-12 md:w-5/12">
					<h4 class="mb-2 text-xs font-bold text-els-gray-2">Web Platform</h4>
					<img src="public/images/home/dashboard.webp" alt="dashboard photo" class="shadow-xl">
				</div>
                <div class="z-10 flex flex-col w-full text-xs md:w-5/12">
					<h4 class="mb-2 font-bold text-els-gray-2">Dashboard LMS</h4>
					<img src="public/images/home/dashboard2.jfif" alt="dashboard photo" class="shadow-xl">
				</div> --> */}


            </div>
        </section>

        {/* <!-- About Section -->

        <!-- FORM ALTERNATIVE FOR HOMEPAGE START(Easier to integrate error handling) --> */}

        <section id="client-form" class="relative flex flex-col w-full py-[120px] mx-auto md:items-center md:px-12 lg:px-24">
            <div class="container">
                <div>
                <div class="flex flex-wrap mx-[-16px]">
                    <div class="w-full px-4 lg:w-full">
                        <div class="
						  bg-els-light-blue2
							relative
							rounded-md p-11 mb-12
							lg:mb-5
							md:mx-20
							sm:p-[55px]
							lg:p-11
							xl:p-[55px]
						  ">
                            <div class="absolute top-0 right-0 z-[4]">
                                <svg width="51" height="180" viewBox="0 0 51 180" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_76_189)">
										<path opacity="0.1"
											d="M44.4099 108.346L28.0529 94.4754C25.8998 92.6496 22.4088 92.6496 20.2557 94.4754L3.89871 108.346C1.74555 110.172 1.74555 113.132 3.89871 114.958L20.2557 128.828C22.4088 130.654 25.8998 130.654 28.0529 128.828L44.4099 114.958C46.563 113.132 46.5631 110.172 44.4099 108.346Z"
											fill="#1E8DE1" />
										<path opacity="0.3"
											d="M100.831 138.513L70.4634 112.763C67.7719 110.48 63.4082 110.48 60.7168 112.763L26.4606 141.811C23.7691 144.093 23.7691 147.794 26.4606 150.076L56.8278 175.827C59.5192 178.109 63.8829 178.109 66.5744 175.827L100.831 146.778C103.522 144.496 103.522 140.796 100.831 138.513Z"
											fill="#1E8DE1" />
										<path opacity="0.8"
											d="M146.681 53.3837L89.3385 4.75903C83.9556 0.194459 75.2282 0.194455 69.8453 4.75903L12.5033 53.3837C7.12039 57.9482 7.1204 65.3489 12.5033 69.9134L69.8453 118.538C75.2282 123.103 83.9556 123.103 89.3385 118.538L146.681 69.9134C152.063 65.3489 152.063 57.9482 146.681 53.3837Z"
											fill="#67B8F2" />
									</g>
									<defs>
										<clipPath id="clip0_76_189">
											<rect width="51" height="180" fill="white" />
										</clipPath>
									</defs>
								</svg>
                            </div>
                            <h2 class="mb-3 text-2xl font-bold sm:text-3xl lg:text-2xl xl:text-3xl wow fadeIn" data-wow-delay=".15s">
                                {/* <!-- <section></section> --> */}
                                <center>
                                    Tell us about your software project
                                    <hr class="w-16 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>
                                </center>
                            </h2>
                            <p class="mb-12 text-base text-els-description wow fadeInLeft" data-wow-delay=".2s">
                                Please give us a short description of your software application with significant application features, and our customer care will get back to you shortly.

                            </p>
                            <form action="mailer.php" method="post" enctype="multipart/form-data" name="ideaContact">
                                <div class="flex flex-wrap mx-[-16px]">

                                    <div class="w-full px-4 md:w-1/2">

                                        <div class="mb-8">
                                            <label for="name" class="block mb-3 text-sm ">
												Name *
											</label>
                                            <input type="text" name="fullname" placeholder="Full name" class="
									  w-full border border-transparent
									  2B51]
									  rounded-md shadow-form
									  py-3
									  px-6
									  text-base
									  text-els-gray-2
									  outline-none
									  focus-visible:shadow-none
									  focus:border-els-blue
									" />
                                        </div>
                                    </div>
                                    <div class="w-full px-4 md:w-1/2">
                                        <div class="mb-8">
                                            <label for="email" name="email" class="block mb-3 text-sm ">
												Email *
											</label>
                                            <input type="email" placeholder="example@gmail.com" class="
									  w-full border border-transparent
									  2B51]
									  rounded-md shadow-form
									
									  py-3
									  px-6
									  text-base
									  text-els-gray-2
									  outline-none
									  focus-visible:shadow-none
									  focus:border-els-blue
									" />
                                        </div>
                                    </div>
                                    <div class="w-full px-4 md:w-1/2">
                                        <div class="mb-8">
                                            <label for="mobile" name="mobile" class="block mb-3 text-sm ">
												Mobile No. (optional)
											</label>
                                            <input type="tel" placeholder="Use format +2547..." class="
										w-full border border-transparent
										2B51]
										rounded-md shadow-form
										py-3
										px-6
										text-base
										text-els-gray-2
										outline-none
										focus-visible:shadow-none
										focus:border-els-blue
									  " />
                                        </div>
                                    </div>
                                    <div class="w-full px-4 md:w-1/2">
                                        <div class="mb-8">
                                            <label for="subject" name="subject" class="block mb-3 text-sm ">
												Subject *
											</label>
                                            <div class="relative">
                                                <select name = "service" class="block w-full px-6 py-3 m-0 text-base transition ease-in-out bg-white bg-no-repeat border-none rounded shadow-form appearance-none form-select text-els-gray-2 bg-clip-padding focus:text-els-gray-2 focus:bg-white focus:border-els-blue focus:outline-none"
                                                    aria-label="Default select example">
													<option selected>Website/ Mobile Application</option>
													<option value="1">App Launch and Maintenance Operations</option>
													<option value="2">Cloud Applications</option>
													<option value="3">UI/UX Design</option>
												</select>
                                                <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
														<path
															d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
													</svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full px-4">
                                        <div class="mb-8">
                                            <label for="summary" class="block mb-3 text-sm ">
												Summary *
											</label>
                                            <textarea  name="summary" rows="5" placeholder="Describe your project" class="
									  w-full border border-transparent
									  2B51]
									  rounded-md shadow-form
									  joinUs
									  py-3
									  px-6
									  text-base
									  text-els-gray-2
									  outline-none
									  focus-visible:shadow-none
									  focus:border-els-blue
									  resize-none
									"></textarea>
                                        </div>
                                    </div>
                                    <div class="w-full px-4" name="mailme">
                                        <a href="mailto:contact@elssoftwaresolutions.com" class="py-4 text-base font-medium text-white transition duration-300 ease-in-out rounded-md bg-els-blue px-9 hover:bg-opacity-80 hover:shadow-joinUs">
											Message
										</a>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* <!-- <div class="float_buttons">
                <div class="fab-container">
                    <div class="fab fab-icon-holder">
                        <i><img src="https://img.icons8.com/fluency-systems-regular/48/000000/home.png"/>
							
								<span class=" hidden text-white  hover:visible ">Add to Home Screen</span>
							</div>
						</i>
                    </div>

                </div>
                <style>
                    .fab-container {
                        position: fixed;
                        bottom: 50px;
                        right: 50px;
                        z-index: 999;
                        cursor: pointer;
                    }
                    
                    .fab-icon-holder {
                        width: 50px;
                        height: 50px;
                        border-radius: 100%;
                        background: #016fb9;
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
                    }
                    
                    .fab-icon-holder:hover {
                        opacity: 0.8;
                    }
                    
                    .fab-icon-holder i {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        font-size: 25px;
                        color: #ffffff;
                    }
                    
                    .fab {
                        width: 60px;
                        height: 60px;
                        background: #d23f31;
                    }
                </style> --> */}
            {/* </div>
            <!-- FORM ALTERNATIVE FOR HOMEPAGE END(Easier to integrate error handling) --> */}



            {/* <!-- FORM ALTERNATIVE 2(ADRIAN) - Responsiveness issues -->
            <!-- <h2 class="  px-8 relative z-10 pb-[20px] leading-[45px] mb-[30px] font-sans text-3xl font-extrabold text-center md:text-4xl md:text-center before:content-[''] before:absolute before:left-[50%] before:ml-[-25px] before:bottom-[-2px] before:h-[4px] before:w-[50px] before:rounded-[5px] before:bg-els-blue before:els-gradient-reverse">Tell Us About Your Project</h2>
			<p class="z-10 w-full px-8 pt-8 mb-10 font-sans leading-relaxed md:w-3/4 text-els-gray-2 text-md md:text-lg md:text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos eveniet, natus accusantium iste	pariatur labore tenetur, sapiente doloribus earum ipsam nobis quae consequatur vel distinctio maxime quam et
				incidunt.</p> 
				<div class="container mx-auto">
					<div class="flex items-center justify-center">
				<form autocomplete="off" class="flex flex-wrap w-full rounded-md md:w-[80%] h-[60vh] bg-els-light-blue2 mb-[60px]  md:mx-20">
					<div class="contact-left w-full md:w-2/5 flex pt-[20px] flex-col items-center">
						<div class="f-name flex flex-col pt-[20px]">
							<label class="">Name</label>
							<input class="placeholder-shown:opacity-50 h-[30px] w-[250px] outline-none rounded-none bg-transparent border-b-[1.5px] border-b-els-blue border-opacity-50 my-[10px]" type="text" placeholder="Full Name" required />
						</div>
		
						<div class="f-email flex flex-col pt-[20px]">
							<label>Email</label>
							<input class="placeholder-shown:opacity-50 h-[30px] w-[250px] outline-none rounded-none bg-transparent border-b-[1.5px] border-b-els-blue border-opacity-50  my-[10px]" type="email" placeholder="example@gmail.com" required />
						</div>
						<div class="relative w-60">
							<select class="px-4 appearance-none py-2 pr-8 text-gray-700 bg-els-bg w-[250px] outline-none rounded-md my-[10px]" id="grid-state">
							<option>Sales</option>
							<option>HR</option>
							<option>Developers</option>
						  </select>
						  <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
							<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						  </div>
						</div>
						<div class="f-email flex flex-col pt-[20px]">
							<label>Mobile No. (optional)</label>
							<input class="placeholder-shown:opacity-50 h-[30px] w-[250px] border-opacity-50 outline-none rounded-none bg-transparent border-b-[1.5px] border-b-els-blue  my-[10px]" type="tel" placeholder="Use format +2547..." />
						</div>
						
					</div>
					<div class="flex flex-col justify-between w-full border-none contact-right md:w-3/5 md:h-full md:border-l-2 md:border-l-els-blue border-opacity-10">
						<div class="message md:m-[20px] ml-5 items-center pt-[20px]">
							<label class="">Summary</label>
							<br />
							<br />
							<textarea class="placeholder-shown:opacity-50 pb-10 w-full h-[20px] md:h-full border-none outline-none rounded-[4px] bg-transparent box-border" name="message" rows="3" cols="20" placeholder="Tell us about your project" required></textarea>
						</div>
						<button value="Send Email" onclick="sendEmail()" class="flex items-center justify-center bg-els-gradient-blue text-els-bg cursor-pointer w-full h-[50px] font-bold rounded-br-[3px] outline-none border-none m-0 hover:bg-els-blue active:scale-[1.04] ease-in">Message
							<span class="ml-[15px]"><svg class="" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3281 0.195413C12.0829 -0.0651376 11.6767 -0.0651376 11.423 0.195413C11.1786  0.44789 11.1786 0.866239 11.423 1.11872L16.0109 5.84312H0.873235C0.51977 5.84312  0.238281 6.13303 0.238281 6.49706C0.238281 6.85816 0.51977 7.15908 0.873235  7.15908H16.0109L11.423 11.8725C11.1786 12.1338 11.1786 12.555 11.423 12.8046C11.6767  13.0651 12.0829 13.0651 12.3281 12.8046L18.0013 6.96165C18.2543 6.70917 18.2543  6.29083 18.0013 6.04128L12.3281 0.195413Z" fill="currentColor"></path></svg></span>
						</button>
					</div>
				</form>
			</div>
		</div> --> */}
            {/* <!-- END FORM ALTERNATIVE 2 --> */}




            {/* <!-- ORIGINAL HOMEPAGE FORM (KELVIN) -->
            <!-- <form action="#" method="post" class="relative z-10 flex flex-wrap w-full py-4 pl-5 pr-5 mt-20 rounded md:pr-0 md:pl-10 md:flex-nowrap md:w-4/5 justify-evenly sm:justify-center bg-els-light-blue2">
				<div class="w-full pr-0 md:w-2/4 sm:pr-8">

					Check /src/styles.css for the custom utility classes,
						landing-form-label & landing-form-input 

					<label for="name" class="landing-form-label">Name</label>
					<input type="text" id="name" placeholder="Full Name" class="landing-form-input focus:outline-none focus:border-b-2">

					<label for="email" class="landing-form-label">Email</label>
					<input type="text" id="email" placeholder="example@gmail.com" class="landing-form-input focus:outline-none focus:border-b-2">

					<label for="name" class="landing-form-label">Mobile No. (optional)</label>
					<input type="text" id="name" placeholder="Use format +2547..." class="landing-form-input focus:outline-none focus:border-b-2">
				</div>
				<div class="w-full md:w-2/4">
					<label for="textarea" class="w-full pl-0 landing-form-label md:pl-2">Summary</label>
					<textarea class="w-full p-0 overflow-y-auto border-none resize-none landing-form-input md:p-2 focus:outline-none focus:border-b-2 focus:border-els-gradient-blue h-4/6" spellcheck="false" name="project-desc" form="usrform" id="textarea" placeholder="Describe your project"></textarea>
					<button class="relative w-full h-10 text-sm font-extrabold text-white rounded cursor-pointer els-gradient bottom-2">
						Get Price Quote
						<svg class="inline-block h-8" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3281 0.195413C12.0829 -0.0651376 11.6767 -0.0651376 11.423 0.195413C11.1786  0.44789 11.1786 0.866239 11.423 1.11872L16.0109 5.84312H0.873235C0.51977 5.84312  0.238281 6.13303 0.238281 6.49706C0.238281 6.85816 0.51977 7.15908 0.873235  7.15908H16.0109L11.423 11.8725C11.1786 12.1338 11.1786 12.555 11.423 12.8046C11.6767  13.0651 12.0829 13.0651 12.3281 12.8046L18.0013 6.96165C18.2543 6.70917 18.2543  6.29083 18.0013 6.04128L12.3281 0.195413Z" fill="currentColor"></path></svg>
					</button>
				</div>
				<svg class="absolute top-0 hidden h-20 md:block -right-4" width="51" height="180" viewBox="0 0 51 180" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_76_189)">
					<path opacity="0.1" d="M44.4099 108.346L28.0529 94.4754C25.8998 92.6496 22.4088 92.6496 20.2557 94.4754L3.89871 108.346C1.74555 110.172 1.74555 113.132 3.89871 114.958L20.2557 128.828C22.4088 130.654 25.8998 130.654 28.0529 128.828L44.4099 114.958C46.563 113.132 46.5631 110.172 44.4099 108.346Z" fill="#1E8DE1"/>
					<path opacity="0.3" d="M100.831 138.513L70.4634 112.763C67.7719 110.48 63.4082 110.48 60.7168 112.763L26.4606 141.811C23.7691 144.093 23.7691 147.794 26.4606 150.076L56.8278 175.827C59.5192 178.109 63.8829 178.109 66.5744 175.827L100.831 146.778C103.522 144.496 103.522 140.796 100.831 138.513Z" fill="#1E8DE1"/>
					<path opacity="0.8" d="M146.681 53.3837L89.3385 4.75903C83.9556 0.194459 75.2282 0.194455 69.8453 4.75903L12.5033 53.3837C7.12039 57.9482 7.1204 65.3489 12.5033 69.9134L69.8453 118.538C75.2282 123.103 83.9556 123.103 89.3385 118.538L146.681 69.9134C152.063 65.3489 152.063 57.9482 146.681 53.3837Z" fill="#67B8F2"/>
					</g>
					<defs>
					<clipPath id="clip0_76_189">
					<rect width="51" height="180" fill="white"/>
					</clipPath>
					</defs>
					</svg>
						
			</form> -->
            <!-- ORIGINAL HOEMPAGE FORM (KELVIN) --> */}

            <div class="absolute left-0 bottom-0 z-[-1]">
                <svg width="239" height="601" viewBox="0 0 239 601" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect opacity="0.3" x="-184.451" y="600.973" width="196" height="541.607" rx="2"
						transform="rotate(-128.7 -184.451 600.973)" fill="url(#paint0_linear_93:235)" />
					<rect opacity="0.3" x="-188.201" y="385.272" width="59.7544" height="541.607" rx="2"
						transform="rotate(-128.7 -188.201 385.272)" fill="url(#paint1_linear_93:235)" />
					<defs>
						<linearGradient id="paint0_linear_93:235" x1="-90.1184" y1="420.414" x2="-90.1184" y2="1131.65"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1E8DE1" />
							<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
						</linearGradient>
						<linearGradient id="paint1_linear_93:235" x1="-159.441" y1="204.714" x2="-159.441" y2="915.952"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1E8DE1" />
							<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
            </div>
        </section>

        {/* <!-- Footer --> */}

        <footer class="relative z-10 bg-els-light-blue2 pt-[100px]">
            <div class="px-8 md:px-12 lg:px-24">
                <div class="flex flex-wrap mx-[-16px]">
                    <div class="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
                        <div class="mb-16 max-w-[360px]">
                            <a href="index.html" class="inline-block mb-8">
                                <img src={Logo} alt="ELS logo"/>
                            </a>
                            <p class="text-base font-medium leading-relaxed text-els-description mb-9">
                                Creating Innovative Technologies
                            </p>

                        </div>
                    </div>
                    <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                        <div class="mb-16">
                            <h2 class="mb-10 text-xl font-bold text-black ite">
                                Socials
                                <hr class="w-16 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>
                            </h2>
                            <ul>
                                <li>
                                    <a href="https://twitter.com/ElsSoftwareSol" class="flex items-center mb-4 text-base font-medium text-els-description hover:text-els-blue">
                                        <span class="mr-3">
											<svg width="18" height="14" viewBox="0 0 19 14" class="fill-current">
												<path
													d="M16.3024 2.26027L17.375 1.0274C17.6855 0.693493 17.7702 0.436644 17.7984 0.308219C16.9516 0.770548 16.1613 0.924658 15.6532 0.924658H15.4556L15.3427 0.821918C14.6653 0.282534 13.8185 0 12.9153 0C10.9395 0 9.3871 1.48973 9.3871 3.21062C9.3871 3.31336 9.3871 3.46747 9.41532 3.57021L9.5 4.0839L8.90726 4.05822C5.29435 3.95548 2.33065 1.13014 1.85081 0.642123C1.06048 1.92637 1.5121 3.15925 1.99194 3.92979L2.95161 5.36815L1.42742 4.5976C1.45565 5.67637 1.90726 6.52397 2.78226 7.14041L3.54435 7.65411L2.78226 7.93665C3.2621 9.24658 4.33468 9.78596 5.125 9.99144L6.16935 10.2483L5.18145 10.8647C3.60081 11.8921 1.625 11.8151 0.75 11.738C2.52823 12.8682 4.64516 13.125 6.1129 13.125C7.21371 13.125 8.03226 13.0223 8.22984 12.9452C16.1331 11.25 16.5 4.82877 16.5 3.54452V3.36473L16.6694 3.26199C17.629 2.44007 18.0242 2.00342 18.25 1.74658C18.1653 1.77226 18.0524 1.82363 17.9395 1.84932L16.3024 2.26027Z" />
											</svg>
										</span>

                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center mb-4 text-base font-medium text-els-description hover:text-els-blue">
                                        <span class="mr-3">
											<svg width="18" height="14" viewBox="0 0 18 14" class="fill-current">
												<path
													d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
											</svg>
										</span> Youtube
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/elssoftwaresolutions/" class="flex items-center mb-4 text-base font-medium text-els-description hover:text-els-blue">
                                        <span class="mr-3">
											<svg width="18" height="18" viewBox="0 0 9 18" class="fill-current">
												<path
													d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
											</svg>
										</span> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="http://linkedin.com/in/els-software-solutions-63b94622b" class="flex items-center mb-4 text-base font-medium text-els-description hover:text-els-blue">
                                        <span class="mr-3">
											<svg width="18" height="16" viewBox="0 0 17 16" class="fill-current">
												<path
													d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
											</svg>
										</span> LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                        <div class="mb-16">
                            <h2 class="mb-10 text-xl font-bold text-black ">
                                Sitemap
                                <hr class="w-16 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>
                            </h2>
                            <ul>
                                <li>
                                    <a href="index.html" class="inline-block mb-4 text-base font-medium text-els-description hover:text-els-blue">
										Home

									</a>
                                </li>
                                <li>
                                    <a href="about.html" class="inline-block mb-4 text-base font-medium text-els-description hover:text-els-blue">
										About Us
									</a>
                                </li>
                                {/* <!-- <li>
                                    <a href="public/pages/contact.html" class="inline-block mb-4 text-base font-medium text-els-description hover:text-els-blue">
										Contact Us
									</a>
                                </li> --> */}
                            </ul>
                        </div>
                    </div>

                    <div class="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
                        <div class="mb-16">
                            <h2 class="mb-10 text-xl font-bold text-black text-opacity-90">
                                Reach Us
                                <hr class="w-16 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>
                            </h2>
                            <ul>
                                <li>
                                    <a href="https://goo.gl/maps/xNtCa7DL9pcSVAoe6" class="flex items-center mb-4 text-base font-medium text-els-description hover:text-els-blue">
                                        <span class="mr-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
												<path
													d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
											</svg>
										</span>

                                        <span>Centurion, Juja, Kiambu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contact@elssoftwaresolutions.com" class="flex items-center mb-4 text-base font-medium text-els-description hover:text-els-blue">
                                        <span class="mr-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
												<path
													d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
											</svg>
										</span>contact@elssoftwaresolutions.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+254 768 384 224" class="flex items-center mb-4 text-base font-medium text-els-description hover:text-els-blue">
                                        <span class="mr-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
												<path fill-rule="evenodd"
													d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
											</svg>
										</span>+254 768 384 224
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4 els-gradient">
                <div class="container">
                    <p class="text-base text-center text-els-bg">
                        &copy; Copyright 2022 ELS
                    </p>
                </div>
            </div>

            <div class="wow animate__animated animate__fadeInTopRight absolute right-0 top-14 z-[-1]" data-wow-delay=".15s">
                <svg width="55" height="99" viewBox="0 0 55 99" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_76_28)">
						<path opacity="0.8"
							d="M49.5 99C76.8381 99 99 76.8381 99 49.5C99 22.1619 76.8381 0 49.5 0C22.1619 0 0 22.1619 0 49.5C0 76.8381 22.1619 99 49.5 99Z"
							fill="#1E8DE1" fill-opacity="0.36" />
						<mask id="mask0_76_28"  maskUnits="userSpaceOnUse" x="0" y="0" width="99"
							height="99">
							<path opacity="0.8"
								d="M49.5 99C76.8381 99 99 76.8381 99 49.5C99 22.1619 76.8381 0 49.5 0C22.1619 0 0 22.1619 0 49.5C0 76.8381 22.1619 99 49.5 99Z"
								fill="#1E8DE1" />
						</mask>
						<g mask="url(#mask0_76_28)">
							<path opacity="0.8"
								d="M49.5 99C76.8381 99 99 76.8381 99 49.5C99 22.1619 76.8381 0 49.5 0C22.1619 0 0 22.1619 0 49.5C0 76.8381 22.1619 99 49.5 99Z"
								fill="url(#paint0_radial_76_28)" />
							<g opacity="0.8" filter="url(#filter0_f_76_28)">
								<path opacity="0.8"
									d="M53.8676 46.5885C65.1245 46.5885 74.25 37.463 74.25 26.2061C74.25 14.9492 65.1245 5.82373 53.8676 5.82373C42.6107 5.82373 33.4852 14.9492 33.4852 26.2061C33.4852 37.463 42.6107 46.5885 53.8676 46.5885Z"
									fill="white" />
							</g>
						</g>
					</g>
					<defs>
						<filter id="filter0_f_76_28" x="12.4852" y="-15.1763" width="82.7648" height="82.7646"
							filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_76_28" />
						</filter>
						<radialGradient id="paint0_radial_76_28" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
							gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)">
							<stop stop-color="#1E8DE1" stop-opacity="0.47" />
							<stop offset="1" stop-color="#1E8DE1" stop-opacity="0" />
						</radialGradient>
						<clipPath id="clip0_76_28">
							<rect width="55" height="99" fill="white" />
						</clipPath>
					</defs>
				</svg>


            </div>
            <div class="wow animate__animated animate__fadeInBottomLeft absolute left-0 bottom-24 z-[-1]" data-wow-delay=".15s">
                <svg width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect opacity="0.3" x="-41" y="26.9426" width="66.6675" height="66.6675"
						transform="rotate(-22.9007 -41 26.9426)" fill="url(#paint0_linear_94:889)" />
					<rect x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)"
						stroke="url(#paint1_linear_94:889)" stroke-width="0.7" />
					<path opacity="0.3"
						d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
						fill="url(#paint2_linear_94:889)" />
					<path d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
						stroke="url(#paint3_linear_94:889)" stroke-width="0.7" />
					<path opacity="0.3"
						d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
						fill="url(#paint4_linear_94:889)" />
					<path d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
						stroke="url(#paint5_linear_94:889)" stroke-width="0.7" />
					<defs>
						<linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1e8de1" stop-opacity="0.62" />
							<stop offset="1" stop-color="#1e8de1" stop-opacity="0" />
						</linearGradient>
						<linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1e8de1" stop-opacity="0" />
							<stop offset="1" stop-color="#1e8de1" stop-opacity="0.51" />
						</linearGradient>
						<linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1e8de1" stop-opacity="0.62" />
							<stop offset="1" stop-color="#1e8de1" stop-opacity="0" />
						</linearGradient>
						<linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1e8de1" stop-opacity="0" />
							<stop offset="1" stop-color="#1e8de1" stop-opacity="0.51" />
						</linearGradient>
						<linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1e8de1" stop-opacity="0.62" />
							<stop offset="1" stop-color="#1e8de1" stop-opacity="0" />
						</linearGradient>
						<linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#1e8de1" stop-opacity="0" />
							<stop offset="1" stop-color="#1e8de1" stop-opacity="0.51" />
						</linearGradient>
					</defs>
				</svg>
            </div>

        </footer>
    </main>


    {/* <!-- ====== Back To Top Start --> */}
    <a href="javascript:void(0)" class="
        hidden
        items-center
        justify-center
        bg-els-complementary
        text-white
        w-10
        h-10
        rounded-md
        fixed
        bottom-8
        right-8
        left-auto
        z-[999]
        hover:shadow-joinUs hover:bg-opacity-80
        transition duration-300 ease-in-out
        back-to-top
        shadow-md
      ">
        <span class="
          w-3
          h-3
          border-t-2
          border-l-2
          border-white
          rotate-45
          mt-[6px]
        "></span>
    </a>
    {/* <!-- ====== Back To Top End --> */}
    <script async src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

    {/* <!-- The following JavaScript controls the smooth/momentum scroll behaviour --> */}
    <script async src="public/js/butter.js"></script>
    {/* <script>
        butter.init({
            cancelOnTouch: true
        });
    </script> */}

    <script async src="public/js/index.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js" integrity="sha512-j+F4W//4Pu39at5I8HC8q2l1BNz4OF3ju39HyWeqKQagW6ww3ZF9gFcu8rzUbyTDY7gEo/vqqzGte0UPpo65QQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    {/* <script type="text/javascript">
        //====== Our Tech Stack Slider
        tns({
            container: ".techstack-logo-carousel",
            slideBy: 1,
            autoplay: true,
            gutter: 15,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: false,
            controls: false,
            responsive: {
                0: {
                    items: 3,
                },
                540: {
                    items: 3,
                },
                720: {
                    items: 4,
                },
                960: {
                    items: 4,
                },
                1140: {
                    items: 6,
                },
            },
        });

        //====== Our Projects Slider
        tns({
            container: ".projects-slider",
            controlscontainer: ".projects-controls",
            mouseDrag: true,
            autoplay: false,
            autoplayButtonOutput: false,
            responsive: {
                0: {
                    items: 1,
                },
                540: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 2,
                },
                1170: {
                    items: 2,
                },
            },
        });
    </script> */}

</body>
        </>
    )
}

export default Home;