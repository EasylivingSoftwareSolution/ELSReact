import React,{useEffect} from "react";
import Header from "../components/header/Header";
import Head from "../components/header/Head";
import DataSciencePic from '../images/ds1.jpg'
import DataAnallyicsPic from '../images/da.png'
import WOW from 'wowjs';
import { initializeSlider } from "../js/slider";
import '../css/styles.css';
import '../css/animate.css';
import Illustrattion from "../images/home/landing-page-illustration.svg"
import { Player } from '@lottiefiles/react-lottie-player';
import DSlottie from '../packages/DSLottie.json';
import { Link } from 'react-router-dom';
import Logo from '../images/Els-logo-sample/pngs/els_alt.png'
function DataCourses(){

    useEffect(() => {
		new WOW.WOW({
			live: false
		  }).init();
	  }, []);

    const Card = ({ title, content, pic,onButtonClick }) => (
        <div className="bg-transparent rounded-lg shadow-md p-4">
            <img src={pic} class="w-full object-cover self-center mb-4"/>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{content}</p>
          <Link to={onButtonClick}>
          <button
            className="text-white mt-3 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 shadow-sm mr-auto mt-auto"
            >Explore Course</button>
            </Link>
        </div>
      );

    return(<>

    {<Head/>}
        <body class="overflow-x-hidden bg-white mx-auto" >
    {<Header/>}
    {/* <section class="relative md:h-screen flex items-center w-full px-8 mx-auto md:px-12 lg:px-24 pt-[120px] pb-[110px]
        md:pt-[150px] md:pb-[120px]
        xl:pt-[180px] xl:pb-[160px]
        2xl:pt-[210px] 2xl:pb-[200px] bg-gradient-to-b from-els-light-blue2 to-white"> */}
    
    <section class="bg-gradient-to-b from-els-light-blue2 to-white">
    <div class="grid sm:grid-cols-2 my-20 w-full bg-transparent p-10 ">
         <div class=" my-auto">
            <p class="font-serif text-black text-6xl mb-3">
                Data Courses
            </p>
            <hr class="w-20 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>
            <p class="font-sans text-gray-500 text-2xl">
                Unlock the door to boundless opportunities with our comprehensive data science and data analytics courses. <br></br>
            Delve into the fundamentals of statistics, machine learning, and data visualization</p>
         </div>
         <div class="my-auto">
         <Player
            src={DSlottie}
            className="w-3/4"
            loop
            autoplay
            />
         </div>
    </div>
    <div className="grid sm:grid-cols-2 my-5 gap-4 lg:mx-20 xl:mx-20">
      <Card 
      title="Data Science" 
      content="Our data science course equips you with the necessary skills to tackle real-world challenges. You'll learn data wrangling and analysis techniques, delve into the fundamentals of machine learning, and gain proficiency in Python programming, the language of data science." 
      pic={DataSciencePic}
      onButtonClick='/datascience'/>

      <Card 
      title="Data Analytics" 
      content="Our data analytics course equips you with the tools to transform raw data into actionable insights.  Learn essential skills like data cleaning, analysis, and visualization to make data-driven decisions.  We'll cover in-demand platforms such Excel, PowerBI and SQL.." 
      pic={DataAnallyicsPic}
      onButtonClick='/dataanalytics'/>
    </div>

    </section>
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
                                    <a href="contact.html" class="inline-block mb-4 text-base font-medium text-els-description hover:text-els-blue">
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
                                {/* <li>
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
                                </li> */}
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
                                {/* <li>
                                    <a href="tel:+254 768 384 224 " class="flex items-center mb-4 text-base font-medium text-els-description hover:text-els-blue">
                                        <span class="mr-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
												<path fill-rule="evenodd"
													d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
											</svg>
										</span> +254 768 384 224
                                    </a>
                                </li> */}
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
						<mask id="mask0_76_28" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="99"
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
    
    
    
    
 
</body>
    </>)
}

export default DataCourses;