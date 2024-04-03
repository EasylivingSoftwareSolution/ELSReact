

import Logo from "../../images/Els-logo-sample/pngs/els_alt_big.png"
import '../../css/styles.css';
import '../../css/animate.css';

export default function Header(){
    return (
        <>
    <header class="absolute top-0 left-0 z-40 flex items-center w-full px-4 bg-transparent header md:px-0 lg:px-0">
        <div class="w-full ml-auto mr-auto pr-0 pl-0 ">
            <div class="container">
				<div class="
		   flex mx-[-16px] items-center justify-between relative
		 ">
                <div class="w-40 max-w-full pr-4">
                    <a href="index.html" class="block w-full py-4">
                        <img class="h-10" src={Logo} alt="ELS company Logo"/>
                        {/* <!-- <p class="h-10 text-3xl font-bold text-els-blue font-jost">ELS</p> --> */}
                    </a>

                </div>
                <div class="flex items-center justify-between w-full">
                    <div>
                        <button id="navbarToggler" aria-label="Mobile Menu" class="
				 block
				 absolute
				 right-0
				 top-1/2
				 translate-y-[-50%]
				 lg:hidden
				 focus:ring-2
				 bg-transparent px-3 py-[6px] rounded-lg
			   ">
							<span class="
				   relative
				   w-[30px]
				   h-[2px]
				   my-[6px]
				   bg-els-blue
				   block
				 "></span>
							<span class="
				   relative
				   w-[30px]
				   h-[2px]
				   bg-els-blue
				   my-[6px]
				   block
				 "></span>
							<span class="
				   relative
				   w-[30px]
				   h-[2px]
				   bg-els-blue
				   my-[6px]
				   block
				 "></span>
						</button>
                        <nav id="navbarCollapse" class="
				 absolute py-5
				 lg:py-0 lg:px-4
				 xl:px-6
				 bg-white
				 lg:bg-transparent
				 shadow-lg rounded-lg max-w-[250px] w-full
				 lg:max-w-full lg:w-full
				 right-4 top-full hidden
				 lg:block lg:static lg:shadow-none
			   ">
                            <ul class="block space-x-8 lg:flex">
                                <li class="relative group">
                                    <a href="index.html" class="flex py-2 mx-8 text-base font-bold menu-scroll hover:text-els-blue lg:py-6 lg:inline-flex lg:px-0 lg:mr-0">
                                        <h1>Home </h1>
                                    </a>
                                </li>
                                <li class="relative group">
                                    <a href="about.html" class="flex py-2 text-base font-bold menu-scroll hover:text-els-blue lg:py-6 lg:inline-flex lg:px-0 lg:mr-0 lg:ml-8 xl:ml-12">
                                        <h1>About Us </h1>
                                    </a>
                                </li>
                                 <li class="relative group">
                                    <a href="#client-form" class="flex py-2 text-base font-bold menu-scroll hover:text-els-blue lg:py-6 lg:inline-flex lg:px-0 lg:mr-0 lg:ml-8 xl:ml-12">
                                        <h1>Contact </h1>
                                    </a>
                                </li> 

                            </ul>
                        </nav>
                    </div>
                    <div class="flex items-center justify-end pr-16 lg:pr-0">
                        <a href="contact.html" class="hidden px-8 py-3 text-base font-bold text-white transition duration-300 rounded-md md:block bg-els-blue els-gradient md:px-9 lg:px-6 xl:px-9 hover:shadow-joinUs hover:bg-opacity-90 ease-in-up">
							<h1>Join Us</h1>
						</a>


                    </div> 
                </div>
            </div>
			</div>
        </div>
    </header>
        </>
    )
}
