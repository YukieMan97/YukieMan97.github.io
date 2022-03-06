let hackathons = [
    {
        id: 0,
        title: "nwHacks - GitHubbers",
        role: "Frontend",
        date: "Jan 15th - 16th",
        year: "2022",
        tools: "React • GitHub OAuth Google • Cloud MySQL",
        theme: "",
        place: "",
        projectLink: "",
        github: "https://github.com/YukieMan97/nwhacks2022-1",
        hackhub: "",
        youtube: "https://youtube.com/embed/FfpN9xZlvuw",
        devpost: "",
        projDescrip: "",
        taskDescrip: "",
        images: [],
        display: true,
    },
    {
        id: 1,
        title: "PrideMakers Hackathon 2021 - PrideMatch",
        role: "Frontend",
        date: "Jun 7th - 18th",
        year: "2021",
        tools: "React • Google OAuth",
        theme: "",
        place: "first",
        projectLink: "https://pmdev.d3rc56y4cyqu4r.amplifyapp.com/",
        github: "https://github.com/PrideMatch",
        hackhub: "",
        youtube: "https://youtube.com/embed/gUniBd78xmk",
        devpost: "https://devpost.com/software/tbd-c0k73m",
        projDescrip: "https://clips.twitch.tv/SincereFunnyHamburgerPunchTrees-qYm2ez4cJrPR8-xg",
        taskDescrip: "",
        images: [
            {
                loc: require("../assets/pridematch/01-landing.png"),
                title: "Landing Page"
            },
            {
                loc: require("../assets/pridematch/04-find-teammates.png"),
                title: "Find Teammates",
            },
            {
                loc: require("../assets/pridematch/06-forum.png"),
                title: "Forum",
            },
        ],
        display: true,
    },
    {
        id: 2,
        title: "ElleHacks 2021 - RBC Footprint",
        role: "Frontend",
        date: "Jan 15th - 17th",
        year: "2021",
        tools: "Android Studio • Kotlin ",
        theme: "",
        place: "first",
        projectLink: "",
        github: "https://github.com/YukieMan97/rbcFootprint",
        hackhub: "",
        youtube: "https://youtube.com/embed/ZtD4160sKSk",
        devpost: "",
        projDescrip: "",
        taskDescrip: "",
        images: [
            {
                loc: require("../assets/rbc-footprint/00-footprint.jpeg"),
                title: ""
            },
            {
                loc: require("../assets/rbc-footprint/07-activity-tab.png"),
                title: "Activity Tab",
            },
            {
                loc: require("../assets/rbc-footprint/09-quiz-incorrect.png"),
                title: "Quiz Incorrect Answer",
            },
        ],
        display: true,
    },
    {
        id: 3,
        title: "BC Game Jam - Prometheus",
        role: "Frontend",
        date: "Jan 14th - 16th",
        year: "2020",
        tools: "Unity • C#",
        theme: "Prevail",
        place: "",
        projectLink: "",
        github: "https://github.com/YukieMan97/GameJam2020Repo",
        hackhub: "https://event.hackhub.com/event/BCGJ2020/submissions/3097?fbclid=IwAR0RL6hLUX7LATp8qP-1b_gDJEwuxzqUgrM8l5keQrUSywS-1pohRRopaeE",
        youtube: "",
        devpost: "",
        projDescrip: "",
        taskDescrip: "",
        images: [
            {
                loc: require("../assets/prometheus.png"),
                title: "prometheus"
            }
        ],
        display: true,
    },
    {
        id: 4,
        title: "BC Hacks - Foody Family",
        role: "Fullstack",
        date: "Jan 18th - 19th",
        year: "2020",
        tools: "Android Studio • Kotlin",
        theme: "",
        place: "",
        projectLink: "",
        github: "https://github.com/YukieMan97/foody_family",
        hackhub: "",
        youtube: "",
        devpost: "https://devpost.com/software/foody-family-fh2lnr",
        projDescrip: "",
        taskDescrip: "",
        images: [
            {
                loc: require("../assets/foody-family/01-home-page.jpeg"),
                title: "Home"
            },
            {
                loc: require("../assets/foody-family/02-login-page.jpeg"),
                title: "Login",
            },
            {
                loc: require("../assets/foody-family/04-registration-p2.jpeg"),
                title: "Register as Host",
            }
        ],
        display: true,
    },
    {
        id: 5,
        title: "Local Hack Day",
        role: "Fullstack",
        date: "Nov 30th",
        year: "2019",
        tools: "Python • Flask • GitHub",
        theme: "",
        place: "",
        projectLink: "",
        github: "",
        hackhub: "",
        youtube: "",
        devpost: "",
        projDescrip: "",
        taskDescrip: "",
        images: [],
        display: false,
    }
]

export function getHackathons() {
    return hackathons;
  }

export function getHackathon(id) {
    return hackathons.find(
        hackathon => hackathon.id === id
    );
}