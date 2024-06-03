import {TiHome} from "react-icons/ti";
import {BsFillChatSquareTextFill, BsStars} from "react-icons/bs";
import {IoSearch} from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import {useIsLoggedIn} from "../hooks";
import { BiSolidLogInCircle } from "react-icons/bi";
import {CiSquarePlus} from "react-icons/ci";
import {FaSquarePlus} from "react-icons/fa6";

const isLoggedIn = useIsLoggedIn()

export const sidebarLinks = [
    {
        id: 0,
        path: "/",
        Icon: TiHome,
        text: "Home"
    },
    {
        id: 1,
        path: "/interesting",
        Icon: BsStars,
        text: "Interesting"
    },
    {
        id: 2,
        path: "/search",
        Icon: IoSearch,
        text: "Search"
    },
    {
        id: 3,
        path: "/chats",
        Icon: BsFillChatSquareTextFill,
        text: "Chats"
    },
    {
        id: 4,
        path: "/createPost",
        Icon: FaSquarePlus,
        text: "Create"
    },
    {
        id: 5,
        path: isLoggedIn ? "/profile" : "/login",
        Icon: isLoggedIn ? MdPerson : BiSolidLogInCircle,
        text: isLoggedIn ? "Profile" : "Login"
    },
]