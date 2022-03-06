export function gitHubbersDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p>A <span className='highlight-hackathon'> React App </span> where developers can form
                a team based on their project interest and are guided on how to start that project.
                <span className='highlight-hackathon'> GitHub login </span> is available and teammates
                can connect through GitHub and other socials.
                <span className='highlight-hackathon'> Google Cloud MySQL database </span> was
                used as our backend.
            </p>
            {isFeatured
                ? ""
                : 
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        This was a pretty short hackathon and I was the main frontend developer. I was able to 
                        create two tabs: Available Projects and My Projects (if a user is logged in). 
                    </p>
                    <p>
                        The "Available Projects" tab will show the project idea, whether or not it is ongoing or completed,
                        and the current number of participants out of the maximum participants. If a project is ongoing and 
                        the maximum number of participants is not reached, then a user can request to join the project.
                        users can request to join. We kept the projects with maximum participants reached because
                        we wanted to create a waitlist button. For those who are very interested in the project but are unable
                        to join, they can waitlist themselves in case a member leaves. 
                    </p>
                    <p>
                        Completed projects are only displayed in "My Projects" tab because we only wanted users to 
                        focus on viewing available projects. Users who have completed the projects using GitHubbers
                        will have their own record.
                    </p>
                </div>
            }
        </div>
    )
}
export function footprintDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <blockquote className='italics'>
                <span className='highlight-hackathon'>Sponsor Challenge: </span> How can RBC rewards
                programs better help consumers make environmental decisions?
            </blockquote>
            <p>Using<span className='highlight-hackathon'> Android Studio </span>and
                <span className='highlight-hackathon'> Kotlin</span>, my team created an extension called
                <span className='highlight-hackathon'> Footprint </span>to the existing
                <span className='highlight-hackathon'> Royal Bank of Canada (RBC) </span> Rewards app.
                RBC users can gain points with credit card purchases, but with our extension, they can gain extra
                points by completing daily quizzes and lessons in environmental and sustainability  topics.</p>

            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p> This was my second time making an Android app, so I was pretty excited to try again. 
                        This was my first online hackathon due to the pandemic. We were all working remotely within 
                        Canada, so it was pretty interesting.  I enjoyed working with my team because we effectively 
                        communicated to each other and stayed on the same page. There were a few times we weren't, 
                        but that was quickly fixed by reminding each other and discussing issues as soon as possible.
                    </p>
                    <p>
                        The panels/layout I made:
                    </p>
                    <ul>
                        <li>Onboarding Prompt</li>
                        <ul>
                            <li>
                                Explains the goal of this extension: gain rewards by learning about sustainability
                            </li>
                        </ul>
                        <li>Tips and Tricks Page</li>
                        <ul>
                            <li>
                                Content changes daily
                            </li>
                        </ul>
                        <li>Activity Page</li>
                        <ul>
                            <li>
                                Provides variety of topics to learn about
                            </li>
                        </ul>
                        <li>A Quiz for Fast Fashion Topic</li>
                        <li>Display Correct Answers</li>
                        <li>Display Incorrect Answers</li>
                    </ul>
                    <p>
                        Overall, this experience reinforced the fact that a team requires a variety of talents.
                        This allowed us to brainstorm a well-rounded idea which led us to our win for 
                        the RBC sponsored theme! I'm proud of my contributions to this team as well, as I
                        was able to learn the importance of a user-friendly design and more about Android Studio.
                    </p>
                </div>
            }
        </div>
    )
}

export function prideMatchDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <blockquote className='italics'>
                <span className='highlight-hackathon'>Theme: </span> How do we make LGBTQIA+ people
                and other minority groups feel valid?
            </blockquote>
            <p>A <span className='highlight-hackathon'> React </span> app called
                <span className='highlight-hackathon'> Pride Match</span>,
                where the LGBTQIA+ community and allies can find teammates/friends to game and
                connect with!
                Users can browse through a selection of games and add teammates who play the same games
                and share similar interests shown on their profiles. Their profile can also
                display their gender, pronouns, and orientation.
            </p>

            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        My second online hackathon was great! I was able to work with
                        friends that I met online throughout the pandemic. I liked how it was a week long 
                        instead of a day or two because I was also taking a course during this time. Also, 
                        this time frame made it easier to work with others in different time zones. 
                        A member was from Toronto, Canada, and another was from Dolnośląskie, Poland.
                    </p>

                    <p>
                        I worked on the frontend, and the tasks I've accomplished were...
                        <ul>
                            <li>Designing all pages, which includes the home page, teammate recommendations page and modal, 
                                user profile, forums page, login page, and registration page
                            </li>
                            <li>Created "Find Teammates" button for each game, so that a teammate recommendations modal
                                will pop up and users can add teammates from there
                            </li>
                            <li>Implemented the user profile to display social information such as games they play, gender, 
                                pronouns, sexual orientation, social media in order for teammates to find the best match</li>
                        </ul>
                    </p>
                </div>
            }
        </div>
    )
}

export function prometheusDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <blockquote className='italics'>
                <span className='highlight-hackathon'>Theme: </span> Prevail
            </blockquote>
            <p>A game application called <span className='highlight-hackathon'> Prometheus </span> was developed
                using<span className='highlight-hackathon'> Unity</span>. The goal of this 2D game is for
                Prometheus to deliver a fire to the village through a storm. The catch--it is very difficult to control
                Prometheus, as this game is based off <a href="http://www.foddy.net/Athletics.html">QWOP</a>,
                where an athlete is controlled at 4 joints using the keys "Q", "W", "O", "P" to finish the race.
                When Prometheus reaches the endpoint, he achieves his goal, thus prevails.
            </p>
            <p>
                This game can be played by a single player or two players. The keys are "Q" and "W" for player one,
                "O", and "P" for player two. For one player, all keys would be controlled at once.
            </p>

            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        This is the first time working in a group with 6-7 people. This is when I
                        realized a complete team has a variety of talent. We needed graphic designers,
                        backend developers, frontend developers, etc.

                        I worked on the frontend since I was not familiar with C#. I created the
                        pause menu panel and try-again panel, and I watched YouTube tutorials as a guide.
                    </p>
                    <p>
                        <span className='highlight-hackathon'>Major Conflict: </span>
                        Merge conflict between Windows and Mac users. We solved this by using gitignore.
                        This problem took many hours to debug because we were all inexperienced working in a
                        group with different devices. Thankfully, we had some help from the mentors there.
                    </p>
                </div>
            }
        </div>
    )
}

export function foodyFamilyDescription(isFeatured) {
    return (
        <div className='info-top-padding'>
            <p><span className='highlight-hackathon'>Food Family</span>, an android application that
                finds local chefs that host their home for consumers to dine in or pick up. Since it
                is local, it could be closer than going to a restaurant for some people.
                Food Family opens up opportunities for those who are unable to work outside
                their homes, such as mothers and the elderly!
            </p>

            {isFeatured
                ? ""
                :
                <div>
                    <br />
                    <h6 className='text-underline'>My Experience</h6>
                    <p>
                        <span className='highlight-hackathon'>My Experience: </span>
                        This is my first time creating a mobile app, and it was pretty tough. I had no experience
                        with Android Studio. Thankfully, Kotlin is similar to Java, so I was not completely lost
                        there. I worked on all the panels--home panel, login panel, and registration panels.

                        Our ultimate goal was to use Google Maps in our app, but we were unable to reach that
                        checkpoint.
                    </p>
                </div>
            }
        </div>
    )
}

export function localHackDayDescription() {
    return (
        <div className='info-top-padding'>
            <p>This was my <span className='highlight-hackathon'> first </span> ever hackathon. Since it was only a 12-hour event, I didn't feel overwhelmed at all.
                Instead, I felt very excited to see what goes on during a hackathon.
                I attended the workshops and learned about the usage of
                <span className='highlight-hackathon'> Python </span>
                and <span className='highlight-hackathon'> Flask</span>. They also went over the basic usages of
                <span className='highlight-hackathon'> GitHub</span>. I conversed with the students next to me
                while we worked on examples together. After this hackathon, I tried to make
                my very first website, "Sakura Media Website" using Flask.
            </p>
        </div>
    )
}