import HeroHome from "../../assets/HeroHome.jpg";
import { FaTable, FaCode, FaCss3Alt, FaClock } from "react-icons/fa";

const vscodes = [

    {
        id: 1,
        name: "HTML Table Creator",
        desc: "Generate and manage HTML tables instantly with structured layout support, live preview, and optimized table markup generation for faster UI development.",
        icon: FaTable,
        image: HeroHome,
        datapoint: [
            { name: "Live table preview rendering" },
            { name: "Auto column alignment detection" },
            { name: "One-click HTML export" }
        ],
        link: "https://marketplace.visualstudio.com/items?itemName=JehanKandy.html-table-creator",
        version: "1.1.0",
        donwloads: "1100",
        stats: "public",
        tags: [
            { name: "HTML" },
            { name: "snippet" },
            { name: "FrontEnd" },
            { name: "Fullstack" }
        ]
    },

    {
        id: 2,
        name: "MERN Development",
        desc: "Accelerate MERN stack development with ready-to-use MVC snippets, API structures, and boilerplate code for building scalable Node.js applications.",
        icon: FaCode,
        image: HeroHome,
        datapoint: [
            { name: "Smart API route scaffolding" },
            { name: "Prebuilt MVC structure snippets" },
            { name: "Rapid CRUD boilerplate generation" }
        ],
        link: "https://marketplace.visualstudio.com/items?itemName=JehanKandy.mern-development",
        version: "2.0.0",
        donwloads: "300",
        stats: "public",
        tags: [
            { name: "Backend" },
            { name: "ExpressJS" },
            { name: "snippet" },
            { name: "Fullstack" }
        ]
    },

    {
        id: 3,
        name: "JKCSS A CSS framework",
        desc: "Enhance your workflow with intelligent CSS utilities, autocomplete suggestions, and instant documentation support tailored for the JKCSS framework.",
        icon: FaCss3Alt,
        image: HeroHome,
        datapoint: [
            { name: "Utility class autocomplete" },
            { name: "Responsive class suggestions" },
            { name: "Instant class documentation hints" }
        ],
        link: "https://marketplace.visualstudio.com/items?itemName=JehanKandy.jkcss",
        version: "3.0.0",
        donwloads: "150",
        stats: "public",
        tags: [
            { name: "HTML" },
            { name: "snippet" },
            { name: "FrontEnd" },
            { name: "Fullstack" }
        ]
    },

    {
        id: 4,
        name: "Code Time Tracker",
        desc: "Track and analyze your coding sessions with detailed time tracking, idle detection, and productivity insights directly inside VS Code.",
        icon: FaClock,
        image: HeroHome,
        datapoint: [
            { name: "Session-based time tracking" },
            { name: "Idle detection monitoring" },
            { name: "Daily productivity analytics" }
        ],
        link: "https://marketplace.visualstudio.com/items?itemName=JehanKandy.codetimetracker",
        version: "1.0.0",
        donwloads: "150",
        stats: "public-alpha",
        tags: [
            { name: "HTML" },
            { name: "snippet" },
            { name: "FrontEnd" },
            { name: "Fullstack" }
        ]
    },
]

export default vscodes