
import React, { useState } from 'react'
import "./Menu.css"
import Questions from "./Questions-amico (1).png";
import { CustomState, useCustomState } from '../utils';

interface MenuOption {
    state: CustomState<Boolean>,
    index: number,
    text: string
}


const Menu = () => {
    const btnMenuOptions: string[] = ["Flashcards", "Files", "Posts", "Saved"]


    const btnClicked: MenuOption[] = [
        { state: useCustomState<Boolean>(false), index: 0, text: "Flashcards" },
        { state: useCustomState<Boolean>(false), index: 1, text: "Files" },
        { state: useCustomState<Boolean>(true), index: 2, text: "Posts" },
        { state: useCustomState<Boolean>(false), index: 3, text: "Saved" }
    ]

    const activeMenuOption = useCustomState<number>(2)


    const btnActiveStyling = {
        // backgroundColor: "rgba(23, 68, 83, 1)",
        // color: "white",
        opacity: "1"
    }


    const handleClick = (menuOption: MenuOption) => {
        btnClicked[activeMenuOption.get()].state.set(false)
        activeMenuOption.set(menuOption.index)
        menuOption.state.set(true)


    };
    return (
        <>
            <div className="mainContent">

                <div className="menuMain">

                    {btnClicked.map((menuOption) =>
                        <button className="menuButton" onClick={() => { handleClick(menuOption) }} style={menuOption.state.get() ? btnActiveStyling : {}} > {menuOption.text} </button>
                    )}
                    {/* <button className='menuCreatedBtn'>Created <i className="bi bi-chevron-down"></i></button> */}
                </div>

                <div className="rightLayout">
                    <img src={Questions} width="40%" />
                    <div className="new-card">
                        <img src="/plus-circle.svg" alt="" />Create Flashcards
                    </div>
                    {/* FLASH CARD */}
                    <div className="container">
                        <div className="input-field">
                            <label htmlFor="question" className="question">Question</label>
                            <textarea className="card-input" placeholder="Your question" name="question" id="input-question"></textarea>
                        </div>

                        <div className="input-field">
                            <label htmlFor="answer" className="answer">Answer</label>
                            <textarea className="card-input" placeholder="Your answer" name="answer" id="input-answer"></textarea>
                        </div>
                        <button className="submit">Create a new card</button>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Menu