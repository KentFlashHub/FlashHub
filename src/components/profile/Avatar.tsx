import React, { CSSProperties } from 'react'
import "./Avatar.css"

interface Props {
    avatarName: string
    bgColour: CSSProperties
}


const Avatar = ({ avatarName, bgColour }: Props) => {
    return (
        <div className='avatarMain' style={bgColour}>
            {/* <span>{avatarName} </span> */}
            <img className="cactus" src="cactusninja.png" alt="" />

        </div>
    )
}

export default Avatar
