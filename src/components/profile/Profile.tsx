import React from 'react'
import Header from "./Header"
import Avatar from "./Avatar"
import UserInfo from "./UserInfo"
import Menu from "./Menu"
import "./Profile.css"
import { activePage, LoginData, CustomState } from '../utils';


interface ProfileProps {
    avatarName: string,
    usersname: string
}



const Profile = (props: ProfileProps) => {
    return (
        <div>
            <div className="profileMainRest">
                <UserInfo avatarName={props.avatarName} bgColour={{}} usersname={props.usersname} />

                {/* <UserInfo avatarName={props.avatarName} bgColour={{ "background-color": "rgba(17, 33, 39, 1)" }} usersname={props.usersname} /> */}
                <Menu />
            </div>

        </div>
    )
}

export default Profile
