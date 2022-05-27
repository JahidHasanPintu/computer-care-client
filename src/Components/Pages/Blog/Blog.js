import React from 'react';
import './Blog.css';


const Blog = () => {
    return (
        <div className='unit-testy'>


            <div class="m-5 card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://dejanvasic.files.wordpress.com/2020/06/react-img.jpg?w=400&h=400" alt="Album"/></figure>
            <div class="card-body md:w-5">
                <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                        <p>React.PureComponents: 
                        For components using primitive data, you can use the React.PureComponents base class, which internally uses the implementation of the shouldComponentUpdate() function to reduce rendering time. This small but clever practice can greatly improve parent component load times.

                        Immutable Data Structures: 
                        Avoid directly modifying objects by making copies of the objects with the desired data changes. Use immutable data structures that will automatically apply this process when the object's state changes. This will make it easy to detect state changes, which improves your React app's overall performance.
                        <br />
                        Production Assembly: 
                        To give code warnings and other useful information about the code, React has host environment checks scattered throughout the files. While this helps developers, there is no point in going through this when deploying an application to production. To remove these unnecessary lines of code, do a production build with npm run build as best practice and improve the performance of your React app.

                        Compression: 
                        To load the client-side JavaScript load faster, compress the JavaScript code using Gzip or Brotli on the application server. This will allow faster fetching and serving, resulting in faster component loading and rendering times.
                        <br />
                        React Developer Tools: 
                        It is available as an extension for Chrome, Firefox and will help you identify unnecessary renders of your react components by highlighting them with different colors. You can install it and open it while working on react app. In the "Highlight Updates" field, you should see the react components marked green, blue, yellow, or red. With red being the highest frequent updater, these colors indicate the possibility of unwanted and frequent rendering. This way, you can click on any element/component and check if it needs optimization based on the indicative color for the render loop.</p>
                <div class="card-actions justify-end">
                
                </div>
            </div>
            </div>

            <div class="m-5 card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://scriptverse.academy/img/tutorials/reactjs-components-props.png?w=400&h=400" alt="Album"/></figure>
            <div class="card-body md:w-5">
                <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>
                        There are four main types of state you need to properly manage in your React apps:

                        Local state
                        Global state
                        Server state
                        URL state
                        Let's cover each of these in detail:

                        Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.

                        Server state – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                        URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                <div class="card-actions justify-end">
                
                </div>
            </div>
            </div>
            <div class="m-5 card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://www.codeproject.com/KB/scripting/887551/PrototypalInheritance__1_.jpg?w=400&h=400" alt="Album"/></figure>
            <div class="card-body md:w-5">
                <h2 class="card-title">How does prototypical inheritance work?</h2>
                        <p>
                        Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

                        All JavaScript objects inherit properties and methods from a prototype:

                        Date objects inherit from Date.prototype.
                        Array objects inherit from Array.prototype.
                        Player objects inherit from Player.prototype.
                        The Object.prototype is on top of the prototype inheritance chain. Date objects, Array objects, and Player objects all inherit from Object.prototype.
                        </p>
                <div class="card-actions justify-end">
                
                </div>
            </div>
            </div>
            <div class="m-5 card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://miro.medium.com/max/1200/1*hYSKyofnqThnPIsYRfnUUQ.png?w=400&h=400" alt="Album"/></figure>
            <div class="card-body md:w-5">
                <h2 class="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>
                        Because usestate retrun 2 values.one is current state value and other one is function,we pass the initial state into this function.usestate returns where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counter's state. We can use the setCounter method to update the state of count anywhere That’s why wedo not set the state directly.
                        </p>
                <div class="card-actions justify-end">
                
                </div>
            </div>
            </div>
            <div class="m-5 card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://blog.autify.com/static/84ac8b56a04924ac3a0f6a5dd94b3df3/3b2f8/unit-testing-life-cycle.png?w=400&h=400" alt="Album"/></figure>
            <div class="card-body md:w-5">
                <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>
                        Unite test is check all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested.there are many advantages of unit test Unit testing significantly improves code quality. It helps developers to identify the smallest defects that might be present in the units before they go for integration testing. When you add more features to any software, you might need to make changes to the old design and code, and this can be expensive as well as risky. If you use the unit testing methodology, then this can save a lot of time and can make the whole process much faster and easier. For the best practice, all projects must be under unit testing, but normally it is used for larger projects.
                        </p>
                <div class="card-actions justify-end">
                
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Blog;