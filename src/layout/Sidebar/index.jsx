import {NavLink} from "react-router-dom"
import {sidebarLinks} from "../../utils/sidebarLinks.js"
import cn from 'classnames'
import {Logo} from "../../components"
import styles from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={`${styles.root} w-1/6 h-screen bg-purple-extra-dark flex flex-col justify-around items-center fixed`}>
            <Logo/>
            <div className={"w-full"}>
                <nav className={"w-full"}>
                    <ul className={"flex flex-col w-full"}>
                        {
                            sidebarLinks.map(({id, Icon, path, text}) => (
                                <NavLink
                                    key={id}
                                    to={path}
                                    className={({isActive}) => cn("text-lg text-purple-extra-light font-medium w-full h-10 py-6 px-10 rounded flex items-center justify-between",
                                        {
                                            ["bg-purple-light"]: isActive,
                                            ["text-white"]: isActive
                                        })}
                                >
                                    <Icon
                                        className={"text-2xl"}
                                    />
                                    <span>{text}</span>
                                </NavLink>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Sidebar