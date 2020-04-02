import React, { HTMLAttributes, ReactNode } from "react";
import Tab from "./Tab";
import TabsWrapper from "./TabsWrapper";
import { CSSProperties } from "styled-components";

type TabInfo = {
    name: string;
};

type ContentProps = {
    icon?: ReactNode | null;
    iconPosition?: string;
};

type Props = HTMLAttributes<HTMLDivElement> &
    ContentProps & {
        tabs: Array<TabInfo>;
        selectedTabIndex: number;
        onTabClick: (index: number) => void;
        className?: string;
        style?: CSSProperties;
    };

const Content = ({ icon = null, iconPosition = "left", name }: any) =>
    iconPosition === "right" ? (
        <>
            <span>{name}</span>
            {icon}
        </>
    ) : (
        <>
            {icon}
            <span>{name}</span>
        </>
    );

const renderTabs = (
    tabs: Array<TabInfo>,
    selectedTabIndex: number,
    onTabClick: (index: number) => void
) =>
    tabs.map(({ name, ...rest }, index) => (
        <Tab
            selected={selectedTabIndex === index}
            key={name}
            onClick={() => {
                if (onTabClick) {
                    onTabClick(index);
                }
            }}
        >
            <Content name={name} {...rest} />
        </Tab>
    ));

const Tabs = ({
    tabs,
    selectedTabIndex,
    onTabClick,
    className = "",
    style = {},
    ...rest
}: Props) =>
    tabs ? (
        <TabsWrapper className={className} style={style} {...rest}>
            {renderTabs(tabs, selectedTabIndex, onTabClick)}
        </TabsWrapper>
    ) : null;

export default Tabs;
