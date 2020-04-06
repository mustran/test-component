import React, { useState } from "react";
import { Tooltip } from "./components/Tooltip";
import { Button } from "./elements/Button";
import { Accordion } from "./elements/Accordion";
import { MdInfo } from "react-icons/md";

const App = () => {
    const panels = [
        {
            label: "Accordion1",
            icon: <MdInfo color="orange" />,
            renderContent: () => {
                return (
                    <div>
                        <h1>Long Content for the accordion1</h1>
                        <h1>Long Content for the accordion1</h1>
                        <h1>Long Content for the accordion1</h1>
                        <h1>Long Content for the accordion1</h1>
                        <h1>Long Content for the accordion1</h1>
                        <h1>Long Content for the accordion1</h1>
                    </div>
                );
            },
        },
        {
            label: "Disabled Accordion",
            icon: null,
            renderContent: () => {
                return (
                    <div>
                        <h1>Long Content for the accordion</h1>
                        <h1>Long Content for the accordion</h1>
                        <h1>Long Content for the accordion</h1>
                        <h1>Long Content for the accordion</h1>
                        <h1>Long Content for the accordion</h1>
                        <h1>Long Content for the accordion</h1>
                    </div>
                );
            },
            disabled: true
        },
        {
            label: "Accordion3",
            icon: null,
            renderContent: () => {
                return (
                    <div>
                        <h1>Long Content for the accordion3</h1>
                        <h1>Long Content for the accordion3</h1>
                        <h1>Long Content for the accordion3</h1>
                        <h1>Long Content for the accordion3</h1>
                        <h1>Long Content for the accordion3</h1>
                        <h1>Long Content for the accordion3</h1>
                    </div>
                );
            },
        }
    ];

    return (
        <Accordion
            onActivePanelChange={index => console.log(index)}
            panels={panels}
            contentHeight="46vh"
            isExtendable
            width="80%"
            extendWidth="20%"
        />
    );
};

export default App;
