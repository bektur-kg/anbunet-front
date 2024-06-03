import {NavLink} from "react-router-dom";
import {sidebarLinks} from "../../utils/sidebarLinks.js";
import cn from 'classnames';
import {Logo} from "../../components";

const Sidebar = () => {
    return (
        <div className={"w-1/6 h-screen bg-green-300 flex flex-col justify-around items-center fixed"}>
            <Logo/>
            <div className={"w-full"}>
                <nav className={"w-full"}>
                    <ul className={"flex flex-col w-full"}>
                        {
                            sidebarLinks.map(({id, Icon, path, text}) => (
                                <NavLink
                                    key={id}
                                    to={path}
                                    className={({isActive}) => cn("text-lg font-medium w-full h-10 py-6 px-10 rounded flex items-center justify-between ",
                                        {
                                            ["bg-blue-500"]: isActive,
                                            ["text-white"]: isActive
                                        })}
                                >
                                    <Icon
                                        className={"text-2xl"}
                                    />
                                    {text}
                                </NavLink>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Sidebar;