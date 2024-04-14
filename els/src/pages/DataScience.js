import React,{useState} from "react";
import Header from "../components/header/Header"
import Illustrattion from "../images/home/landing-page-illustration.svg"
import Head from "../components/header/Head"
import Logo from '../images/Els-logo-sample/pngs/els_alt.png'
import DSlottie from '../packages/DSlottie1.json';
import Requirement from '../packages/requirement.json';
import { Player } from '@lottiefiles/react-lottie-player';
function DataScience(){

    const [expandedItem, setExpandedItem] = useState({});
    const handleToggleClick = (itemIndex) => {
        setExpandedItem({
          index: itemIndex, // Update the expanded item index
        });
      };

      const prerequisites = [
        'A basic understanding of arithmetic and algebra will set you up for success as you dive into data science concepts.',
        'Familiarity with computers and basic file operations will ensure smooth navigation through our online course.',
        'Have a desktop or laptop with the following specs (core i5 upwards, 8GB RAM, 500GB upwards of storage).',
        'Have access to a stable internet connection'
      ];
    return(
        <>
    {<Head/>}
        <body class="overflow-x-hidden bg-white mx-auto" >
    {<Header/>}
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

<section class="bg-gradient-to-b from-els-light-blue2 to-white">
<div class="grid sm:grid-cols-2 my-20 w-full bg-transparent p-10 ">
         <div class=" my-auto">
            <p class="font-serif text-black text-6xl mb-3">
                Data Science Online Course
            </p>
            <hr class="w-20 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>
            <p class="font-sans text-gray-500 text-2xl">
            Our data science course equips you with the necessary skills to tackle real-world challenges. You'll learn data wrangling and analysis techniques, delve into the fundamentals of machine learning, and gain proficiency in Python programming.</p>
            <div class="z-10 flex items-center w-full mt-10 space-x-8 md:w-4/12">
                        <a href="#client-form" class="animate__animated animate__pulse animate__delay-1s flex items-center justify-center w-full font-extrabold text-white transition duration-300 rounded h-14 els-gradient hover:shadow-joinUs hover:bg-opacity-90 ease-in-up">
                            <h3>Enroll Now
                            </h3>
                        </a>
                    </div>
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


    <div class="grid sm:grid-cols-2 w-full h-auto p-10 bg-white ">
    <div class="my-auto ">
    <Player
            src={Requirement}
            className="w-1/2"
            loop
            autoplay
            />
    </div>
    <div class="">
    <p class="font-serif text-black text-4xl mb-3">
        Course Prerequisites
    </p>
    <hr class="w-20 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>
    <p class="font-sans text-gray-500 text-xl">
    Our program is designed to provide you with the foundational knowledge needed to thrive in this dynamic field. To ensure your success, we've outlined the prerequisites to help you prepare for the learning adventure ahead:
    </p>
    <div className="mt-5">
      <ul className="list-decimal pl-5 font-sans text-gray-500 text-xl">
        {prerequisites.map((prerequisite, index) => (
          <li key={index} className="mb-2">
            {prerequisite}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
<div class="h-auto my-auto bg-blue-50">
    <div class="w-3/4 mx-auto rounded border">
    <div class="bg-transparent p-10 shadow-sm">
        <h3 class="text-4xl font-serif font-medium text-gray-800 mb-4">Overview of Data Science modules
        <hr class="w-20 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/></h3>
        

        <div class="m-2 space-y-2">
  <div
    class="group flex flex-col gap-2 rounded-lg bg-blue-400 p-5 text-white"
    tabindex="1"
  >
    <div class="flex cursor-pointer items-center justify-between text-xl">
      <span> Introduction to Python  </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible text-lg mt-2 font-mono h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Students will learn the fundamentals of Python programming, including data types, control flow, functions, and object-oriented programming concepts. They will also explore libraries and frameworks commonly used in data science projects
    </div>
  </div>

  <div
    class="group flex flex-col gap-2 rounded-lg bg-blue-400 p-5 text-white"
    tabindex="2"
  >
    <div class="flex cursor-pointer items-center justify-between text-xl">
      <span> Data Visualization and wrangling </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible text-lg mt-2 font-mono h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      In this module, students will learn how to manipulate and analyze data effectively using the pandas library, which provides powerful data structures and functions for data wrangling. They will also explore Matplotlib, a popular plotting library in Python, to create visualizations that communicate insights from data effectively.
    </div>
  </div>

  <div
    class="group flex flex-col gap-2 rounded-lg bg-blue-400 p-5 text-white"
    tabindex="3"
  >
    <div class="flex cursor-pointer items-center justify-between text-xl">
      <span> Mathematics for Data science </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible text-lg mt-2 font-mono h-auto text-xl max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      This module covers essential mathematical concepts required for data science, with a focus on statistics and probability theory. Students will learn how to summarize and analyze data using descriptive and inferential statistics, as well as understand the principles of probability and its application in data analysis.
    </div>
  </div>


  <div
    class="group flex flex-col gap-2 rounded-lg bg-blue-400 p-5 text-white"
    tabindex="3"
  >
    <div class="flex cursor-pointer items-center justify-between text-xl">
      <span> Introduction to Machine Learning </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible text-lg mt-2 font-mono h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      In this module, students will delve into the field of machine learning, which focuses on algorithms that enable computers to learn from data and make predictions or decisions. They will explore various machine learning techniques, including supervised and unsupervised learning, and learn how to apply them to real-world data science problems.
    </div>
  </div>
  <div
    class="group flex flex-col gap-2 rounded-lg bg-blue-400 p-5 text-white"
    tabindex="3"
  >
    <div class="flex cursor-pointer items-center justify-between text-xl">
      <span> Relational Database </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible text-lg mt-2 font-mono h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      This module introduces students to SQL (Structured Query Language), the standard language for managing and querying relational databases. 
    </div>
  </div>
  <div
    class="group flex flex-col gap-2 rounded-lg bg-blue-400 p-5 text-white"
    tabindex="3"
  >
    <div class="flex cursor-pointer items-center justify-between text-xl">
      <span>Data Visualization Software</span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible text-lg mt-2 font-mono h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      In this module, students will learn how to use Power BI, a powerful business analytics tool by Microsoft, for data visualization and interactive reporting. They will learn how to connect to various data sources, create compelling visualizations, and share insights with stakeholders effectively.
    </div>
  </div>
  <div
    class="group flex flex-col gap-2 rounded-lg bg-blue-400 p-5 text-white"
    tabindex="3"
  >
    <div class="flex cursor-pointer items-center justify-between text-xl">
      <span> Advanced Topics </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      class="invisible text-lg mt-2 font-mono h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      This module is designed for students who want to deepen their understanding of specific topics in data science or explore advanced techniques and methodologies. It covers advanced machine learning algorithms, big data analytics, natural language processing, computer vision and any other emerging trends and technologies in the field of data science.
    </div>
  </div>
</div>
    </div>
    </div>

</div>

</section>
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
                            <h2 class="mb-3 text-2xl font-serif font-bold sm:text-3xl lg:text-2xl xl:text-3xl wow fadeIn" data-wow-delay=".15s">
                                {/* <!-- <section></section> --> */}
                                    Enroll Now!
                                    <hr class="w-16 h-1.5 bg-els-blue els-gradient-reverse mb-6 z-10"/>
                               
                            </h2>
                            <p class="mb-12 text-base text-els-description wow fadeInLeft" data-wow-delay=".2s">
                                Enter the details below

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
                                    
                                    <div class="w-full px-4" name="mailme">
                                        <a href="mailto:contact@elssoftwaresolutions.com" class="py-4 text-base font-medium text-white transition duration-300 ease-in-out rounded-md bg-els-blue px-9 hover:bg-opacity-80 hover:shadow-joinUs">
											Enroll
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

<style>
    {/* .accordion-content {
    transition: max-height 0.3s ease-out, padding 0.3s ease;
    } */}
</style>

<script>
    {/* const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((header) => {
    header.addEventListener("click", function () {
        const accordionContent = header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
        accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
        header.querySelector(".fas").classList.remove("fa-plus");
        header.querySelector(".fas").classList.add("fa-minus");
        header.parentElement.classList.add("bg-indigo-50");
        } else {
        accordionContent.style.maxHeight = `0px`;
        header.querySelector(".fas").classList.add("fa-plus");
        header.querySelector(".fas").classList.remove("fa-minus");
        header.parentElement.classList.remove("bg-indigo-50");
        }
    });
    }); */}
</script>
</body>
        </>
    )
}

export default DataScience;