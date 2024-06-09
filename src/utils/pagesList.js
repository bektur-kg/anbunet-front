import {Login, Main, Interesting, NotFound, Register, Profile, Search, Chat, CreatePost, EditProfile, CreateAiPost} from '../pages'

export const publicPagesList = [
    {
        id: 0,
        path: "/register",
        Component: Register
    },
    {
        id: 1,
        path: "/login",
        Component: Login
    },
    {
        id: 2,
        path: '*',
        Component: NotFound
    }
]

export const privatePagesList = [
    {
        id: 0,
        path: '/',
        Component: Main
    },
    {
        id: 1,
        path: '/profile/:id?',
        Component: Profile
    },
    {
        id: 2,
        path: '/interesting',
        Component: Interesting
    },
    {
        id: 3,
        path: '/search',
        Component: Search
    },
    {
        id: 4,
        path: '/chats',
        Component: Chat
    },
    {
        id: 5,
        path: '/createPost',
        Component: CreatePost
    },
    {
        id: 6,
        path: '/profile/edit',
        Component: EditProfile
    },
    {
        id: 7,
        path: '/createai',
        Component: CreateAiPost
    },
]