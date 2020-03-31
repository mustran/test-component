import React, { CSSProperties, ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import ButtonWrapper from "./ButtonWrapper";

export type Size = "xs" | "sm" | "md" | "lg";

type ContentProps = {
    icon?: ReactNode| null;
    iconPosition?: string;
    children?: any;
};

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    ContentProps & {
        buttonModifiers?: Array<string>;
        sizeType?: Size;
        style?: CSSProperties;
        className?: string;
        fullWidth?: boolean;
        fullHeight?: boolean;
    };

const ContentHolder = styled.span`
    padding: 0.2rem;
`;

const Content = ({
    icon = null,
    iconPosition = "left",
    children
}: ContentProps) => {
    if (iconPosition === "right") {
        return (
            <>
                {children && <ContentHolder>{children}</ContentHolder>}
                {icon}
            </>
        );
    }

    return (
        <>
            {icon}
            {children && <ContentHolder>{children}</ContentHolder>}
        </>
    );
};

const Button = ({
    sizeType = "md",
    buttonModifiers,
    className = "",
    style,
    icon,
    iconPosition,
    children,
    fullWidth,
    fullHeight,
    ...rest
}: Props) => (
    <ButtonWrapper
        className={className}
        style={style}
        sizeType={sizeType}
        modifiers={buttonModifiers}
        fullWidth={fullWidth}
        fullHeight={fullHeight}
        {...rest}
    >
        <Content icon={icon} iconPosition={iconPosition}>
            {" "}
            {children}{" "}
        </Content>
    </ButtonWrapper>
);

export default Button;
