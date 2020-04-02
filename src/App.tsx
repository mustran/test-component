import React, { useState } from "react";
import Tabs from "./components/Tabs/Tabs";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";

function App() {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {
            name: "Account",
            icon: <FaUserCircle />,
            iconModifiers: "statusColorWarning"
        },
        { name: "User", icon: <FaUserAlt />, iconPosition: "right" },
        { name: "Contact" }
    ];

    const tabs1 = [{ name: "Account" }, { name: "User" }, { name: "Contact" }];

    return (
        <>
            <Tabs
                tabs={tabs}
                selectedTabIndex={selectedTab}
                onTabClick={index => setSelectedTab(index)}
            />
            <br />
            <br />
            <br />
            <Tabs
                tabs={tabs1}
                selectedTabIndex={0}
                onTabClick={index => console.log(index)}
            />
        </>
    );
}

export default App;
