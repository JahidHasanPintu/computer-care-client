import React from 'react';
import socail from '../../../assets/images/icon.png';
import icon from '../../../assets/images/img4.png';

const Portfolio = () => {
    return (
        <div>
            {/* <h1 className='mt-5 text-2xl text-center font-bold text-primary'>My Top 3 Projects</h1>
            <div className='grid mt-5 sm:grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2 xl:grid-cols-4 '>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center mb-10">
                        <h2 class="card-title">Md. Jahid Hasan Pintu</h2>
                        <h2 class="card-title">jahidhasanpintu82@gmail.com</h2>
                        <p>Keraniganj,Bangladesh</p>
                        <p>Bsc in CSE</p>
                        <h1>
                            My  Skills:
                            <li>Frontend:HTML5,CSS3,Javascript,
                                ReactJs,Bootstrap,Tailwind,DaisyUi
                                ,React Bootstrap.</li>
                            <li>Backend:NodeJs,MongoDb,
                                ExpressJs.</li>
                            <li>Familiar:Context Api,java,C, Rest
                                Api,React Hook Forms</li>
                            <li>Tools:Git, Github, VS Code,
                                Chrome Dev Tool,Firebase, Heroku,
                                Figma, Netlify,React Router</li>
                        </h1>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/7kHS98C/Screenshot-136.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://gym-trainer-7746e.web.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/XjbXydM/Screenshot-137.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://bike-manager-4766c.web.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/kHwGN7L/Screenshot-139.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://product-review-site.netlify.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
            </div> */}


<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
        <div class="flex justify-between items-center">
                <div class="pl-20 w-2/5 animate__animated animate__jackInTheBox">
            <h1 class="text-4xl">Hello I am 
                <span class="text-green-600 font-bold"> Jahid Hasan </span>Pintu</h1>
                    <p>
                    Tech Enthusiast and loves to learn new technologies. Skilled in C, C++, Java, Java Script,ES-6, Bash, HTML, CSS, Bootstrap, Tailwind, word press and learning other web programming stacks. I also familiar with algorithm data structure and OOP. I am very much interested in Linux. Software Engineering and Cyber Security is my favorite field. 
        </p>
        <button class="bg-green-600 px-2 py-2 text-white rounded">Linkedin</button>
        <button class="bg-gray-300 px-2 py-2 mt-4 ml-4 rounded">Hire Me</button>
        <br/>
        <img src={socail} width="100" class="mt-4" alt=''/>
                </div>
                <div class="w-3/5 animate__animated animate__fadeIn  animate__delay-1s">
                    <img src={icon} alt=''/>
                </div>
            </div> 
            <h1 className='mt-5 text-2xl text-center text-green-600 font-bold'>My Top 3 Projects</h1>
            <div className='mb-10 grid mt-5 sm:grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2 xl:grid-cols-4 '>
            <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/7kHS98C/Screenshot-136.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://gym-trainer-7746e.web.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/XjbXydM/Screenshot-137.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://bike-manager-4766c.web.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/kHwGN7L/Screenshot-139.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://product-review-site.netlify.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;