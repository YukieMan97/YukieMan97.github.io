export function portfolioDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>
                This portfolio website was made by me using
                <span className='highlight-project'> React</span>! 
                It took a lot of time to gather all my projects and recollect my 
                experiences with them, but at last, it's finally done! I still have some more projects to upload, but these projects 
                        are the main ones where I learned a lot. I hope you enjoy browsing through
                        my projects and hackathons.
            </p>
            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        Even with lots of practice with <span className='highlight-project'> CSS</span>, 
                        it is still kind of difficult to get things
                        how I exactly want them. I made it as close as I imagined it to be, 
                        so I am proud of the result!
                    </p>
                </div>
            }

        </div>
    )
}

export function freshFurnitureDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>A <span className='highlight-project'> React </span>web application
                called <span className='highlight-project'> Fresh Furniture </span> that helps
                consumers find the best second-hand or handcrafted furniture at the best
                value and quality! This app not only helps reduce waste for the
                environment but also supports local carpenters. Users can even sell their own furniture,
                and if they do well, their ratings and reviews will reflect that!</p>
            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>Worked on this web app in a team of five. I was on the frontend again due to my
                        experience with React. My contributions were...
                        <ul>
                            <li>Designing all page layouts, navigation bar, and all modals for a user-friendly
                                experience
                            </li>
                            <li>Commenting and Rating features of the seller for buyers after
                                a purchase</li>
                            <li>Checkout button where buyers must enter their shipping address
                                and proceed to payment with PayPal. After the order is complete,
                                the cart is cleared and the furniture listings are removed. The buyer's
                                order history will be updated as well</li>
                            <li>Displayed users' order history in "My Account". This is where users can
                                rate and/or comment on a seller they've purchased from
                            </li>
                            <li>Implemented the price range filter for the furniture listings page</li>
                            <li>Used MongoDB to store all data: furniture listings, seller's ratings/comments,
                                cart, order history, etc.
                            </li>
                            <li>Used <span className='highlight-project'> React Redux </span> to display
                                the change in state of the cart (adding/removing furniture listings)</li>
                            <li>Arranged <span className='highlight-project'> Scrum meetings </span>
                                for the team to review tasks we've completed and discuss the next steps</li>
                        </ul>
                    </p>
                    <br />
                    <p className='italics'><span className='highlight-project'>Disclaimer: </span> The DEMO link works but due to issues with S3 Bucket and MongoDB, 
                        there is no data to display. However, feel free to browse through the design and try
                        the Google Login. It may take a while to load.
                    </p>
                </div>
            }

        </div>
    )
}

export function tradingCardDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>A <span className='highlight-project'> Trading Card </span>web application that allows
                users to view, add, remove cards.</p>

            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>For this project, I've already used
                        <span className='highlight-project'> HTML</span>,
                        <span className='highlight-project'> CSS</span>, and
                        <span className='highlight-project'> React </span> before. The new technologies I practiced with are
                        <span className='highlight-project'> NodeJS</span>,
                        <span className='highlight-project'> ExpressJS</span>,
                        <span className='highlight-project'> NoSQL with MongoDB</span>,
                        <span className='highlight-project'> Heroku</span>, and
                        <span className='highlight-project'> Netlify</span>. </p>
                    <p>
                        There were many technologies used for this project because every two weeks, a new technology was
                        learned in the class CPSC 455.
                        I started with strictly frontend and backend. After the React workshop, I learned to keep component files
                        concise and to reuse them to reduce the <span className='highlight-project'> code smell</span>,
                        <span className='highlight-project'> code duplication</span>.
                        <span className='highlight-project'> NodeJS </span> and
                        <span className='highlight-project'> ExpressJS </span> were used as the backend first, then I transitioned
                        into using <span className='highlight-project'> NoSQL </span> with
                        <span className='highlight-project'> MongoDB</span>.
                    </p>
                    <p>
                        Having learned <span className='highlight-project'> MySQL</span>, I found
                        <span className='highlight-project'> NoSQL </span> very interesting.
                        It was my first time using <span className='highlight-project'> MongoDB </span> and I found
                        it very easy to use. I liked the interface of <span className='highlight-project'> MongoDB Compass</span>.
                        Although I'm aware of its limitations, I prefer
                        <span className='highlight-project'> NoSQL </span> with
                        <span className='highlight-project'> MongoDB</span>. However, I do not mind working with
                        <span className='highlight-project'> MySQL</span>. In fact, I would like to get better with it too.
                    </p>
                    <p>
                        I have deployed this website using <span className='highlight-project'> Heroku </span> and
                        <span className='highlight-project'> Netlify</span>.
                        At first, I thought both  <span className='highlight-project'> Heroku </span> and
                        <span className='highlight-project'> Netlify </span> were required to deploy the website.
                        I'm not sure why I did both, but maybe it's because I wanted to try both of them.
                    </p>
                </div>
            }
        </div>
    )
}

export function beeWareDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>A <span className='highlight-project'> React </span>web application for
                <span className='highlight-project'> Insurance Corporation of British Columbia (ICBC) </span>
                employees to schedule work days, access internal social media, and manage
                mail online during the pandemic. </p>
            <p>With an online scheduler, employees can reserve
                work desks to ensure social distancing in the office. Employees can also connect
                with others through the internal social media page. Lastly, staff within the building
                can assist employees and their physical mail.</p>

            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        This is my favourite project of all time. Why? This is my first time using React, and
                        I'm confident to say that I've completed all my tasks without causing the group trouble.
                        I do not like bringing the group down, and I thought that I would because it was my first
                        time participating in such a big project while using new technology. However, I stayed calm
                        and prepared myself by looking over many tutorials and documents.
                    </p>
                    <p>
                        I also have my teammates to thank for this experience. When I was stuck, they were a great guide.
                        I also returned the favour when I could. Even though I was mainly frontend, I learned the
                        integration between frontend and backend. I had to populate the database using MySQL on my
                        machine before there was a script available.
                    </p>
                    <p>
                        Some of the tasks I've completed were...
                        <ul>
                            <li>
                                Developed the booking form for reserving a work desk on a single or range of days.
                                Users need to select a building, floor, and desk. A floor plan image will appear
                                after selecting a building.
                            </li>
                            <li>
                                For the internal social media page, I created the sidebar navigation to
                                navigate between posts, topics, and notifications. Users also had the option
                                to make a post and update their posts. Employee and Admin views were accounted for,
                                where Admins could delete any post.
                            </li>
                            <li>
                                Implemented the mail page for employees to view mail/parcels online. Users can
                                see who and when they received it from. They can request on-site assistance
                                such as opening the mail or discarding the mail.
                            </li>
                            <li>
                                Made <span className='highlight-project'> REST API </span> calls to
                                <span className='highlight-project'> GET/DELETE </span> data from the backend,
                                <span className='highlight-project'> POST/PUT </span> to the backend
                            </li>
                        </ul>
                    </p>
                    <p className='italics'><span className='highlight-project'>Disclaimer: </span> 
                        The original GitHub repository is private.
                    </p>
                </div>
            }
        </div>
    )
}

export function visualizerDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>A <span className='highlight-project'> Java </span> program that generates a graph,
                representing a class diagram, of a given Java project. The nodes are classes and edges are
                the relationships between classes. Shapes within the nodes are fields while the shorter edges
                that fan out from a node are methods in that class. A circle is public whereas a square is private.</p>
            <p>This program is useful for beginners learning Java as classes and relationships can be seen. It
                can also be useful for intermediate developers to grasp the bigger picture of the Java program
                or to focus on specific relationships.
            </p>
            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        On the frontend side,
                        I displayed the classes, relationships between classes, and each class' fields. I made the
                        relationships different colours so that it could show the depths of the Java project network.
                        Since there were so many relationships, I made sure to highlight and bold the relationship that
                        was hovered over. The relationship type will also appear. This design would make
                        it easier for the user to distinguish between the focused relationship and the rest.
                    </p>
                    <p>
                        My other main task was to connect the backend to the frontend so that the corresponding
                        classes, relationships, methods, etc. are displayed together. One of my teammates had
                        trouble displaying the methods from the classes, so I helped him.
                    </p>
                </div>
            }

        </div>
    )
}

export function videoGameDatabaseDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>
                This video game database models and stores data for managing an online multiplayer
                video game. 
                <span className='highlight-project'> Java</span>, 
                <span className='highlight-project'> Oracle</span>, 
                <span className='highlight-project'> Java Database Connectivity</span>, and 
                <span className='highlight-project'> MySQL </span> were used
                for this project. Queries such as insertion, projection, aggregation, etc.
                can be made with the user-friendly 
                <span className='highlight-project'> graphical user interface (GUI) </span> implemented using 
                <span className='highlight-project'> Java Swing</span>.
            </p>

            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        My main responsibility
                        was creating the <span className='highlight-project'> GUI </span> and buttons with queries for users. Using my <span className='highlight-project'> MySQL </span> knowledge, 
                        I ensured that the correct data was returned.
                    </p>
                </div>
            }
        </div>
    )
}

export function trafficSimDescription(isFeatured) {
    return (
        <div className="info-top-padding">
            <p>
                A <span className='highlight-project'> domain-specific language (DSL) </span>
                used to simulate vehicle traffic at simple road
                intersections. The user would be a city planner or someone who designs
                traffic systems. The <span className='highlight-project'> DSL </span> 
                will help the user design an efficient
                system for managing incoming traffic at different intersections by
                simulating various input combinations of roads, directions, vehicle
                flow rates and traffic light configurations. Given the required inputs,
                the <span className='highlight-project'> DSL </span> will output a 
                simulation of the intersection and allow the user
                to see how well their system performs in real time.
            </p>

            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        I worked in a group of four for this project. Coming up with our own DSL idea was 
                        pretty difficult but we ended up choosing a road intersection simulator. We all
                        worked on creating the 
                        <span className='highlight-project'> extended Backus–Naur form (EBNF) </span> together.
                    </p>
                    <p>
                        I was in charge of the validation aspect,
                        where the user input is checked before the simulation runs. For example, based on 
                        our implementation, a road must have a direction. This road could be coming from 
                        the west and going towards the east. This road can also go along north, which represents
                        a left turn by a vehicle.
                    </p>
                    <p>
                        I was also responsible for vehicle behaviour, meaning that the vehicles must carry out
                        the requirements of the input by the user. For example, if one lane only had one direction
                        --to go straight, then the vehicles on this lane must only go straight. Or, if another
                        lane only allows right turns, then vehicles can only turn right at the intersection.
                    </p>
                </div>
            }
        </div>
    )
}

export function minecraftTileDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>
                A <span className='highlight-project'> tile-based game </span> 
                based on Minecraft using 
                <span className='highlight-project'> Java Processing</span>.
                The goal of this game is to reach the end of the map without dying.
                Steve, the main player, goes through the map avoiding mob enemies
                and the obstacles, such as bedrock and lava.
            </p>
            <p>
                Steve must collect a number of diamonds to pass through the blocked
                passages. As Steve passes each passage, the number of diamonds required increases.
                There are tokens such as steak, carrot, and horses that help Steve with
                his journey. Steaks and carrots increase his health while horses speed him up for a bit.
                There are sound effects to make the game even more engaging!
            </p>
            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p> 
                        I had fun making this project. I was actually tutoring my friend with Java Processing
                        since I already knew Java. This was different for me because I never worked with a 
                        user interface like this before. 
                    </p>
                    <p>
                        The only problem I had was implementing the enemies.
                        Whenever an enemy hit Steve, his health would continuously deplete until it reached 0, 
                        even if the enemy was not hitting him anymore.
                        This is certainly a bug that I did not know how to fix at the time. His health just kept decrementing. 
                        If I were to fix this
                        bug, I would need some indicator to stop the health from depleting, or to have a cooldown
                        before Steve can get injured again.
                    </p>
                    <p>
                        This problem did not occur with health regenerating items such as the carrots and steak. 
                        These items would increase his health a fixed amount, which was what I wanted. The 
                        behaviour of the horses, which increased Steve's speed, and the number of
                        diamonds acquired were expected as well. 
                    </p>
                    <p>
                        Overall, I found game development pretty difficult, but it was certainly rewarding though!
                    </p>
                </div>
            }
        </div>
    )
}

export function queryDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>
                The <span className='highlight-project'> UBC Query Engine </span> reads a
                <span className='highlight-project'> JSON </span> input of course and campus details
                and outputs a readable list of the requested information. This was a project for
                UBC CPSC 310: Introduction to Software Engineering.
            </p>
            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        I mainly worked on the implementation of syntactic and semantic checking
                        for validity of queries against the
                        <span className='highlight-project'> extended Backus–Naur form (EBNF) </span> grammar.
                        <span className='highlight-project'> JUnit Testing </span> was also used for testing the queries.
                    </p>
                </div>
            }

        </div>
    )
}

export function storeInventDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>
            A simple application that keeps track of information of items, such as its name, price, quantity, etc. within the store.
            It will handle the inventory in cases of new arrival, purchases, and reservations of items.
            </p>
            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        I have classes of specific items and other categories a store would include. For example,
                        I have a class of manga and art books which both extend Book class which extends Item class.
                        Although there are multiple classes, <span className='highlight-project'> cohesion </span> and 
                        <span className='highlight-project'> coupling </span> are under control.
                    </p>

                    <p>
                        I first worked on building the <span className='highlight-project'> text-based user interface 
                        (TUI) </span> where customers can search for an item and purchase it. 
                        For an admin, the name and price of an item can be changed. 
                        I then implemented a simple 
                        <span className='highlight-project'> graphical user interface (GUI)</span>. 
                        <span className='highlight-project'> JUnit Testing </span> was used for testing methods.
                    </p>

                    <p>
                        In the future, I would like to recreate an improved version of this application.
                        It was very fun learning how to create a useful application. For now, I would like
                        to use my knowledge and create different applications.
                    </p>
                </div>
            }
        </div>
    )
}
