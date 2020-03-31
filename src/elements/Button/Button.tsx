import React, {
    CSSProperties,
    DetailedHTMLProps,
    SelectHTMLAttributes
} from "react";
import styled from "styled-components";
import ButtonWrapper from "./ButtonWrapper";

export type Size = "xs" | "sm" | "md" | "lg";

type ContentProps = {
    icon?: Node | null;
    iconPosition?: string;
    children: any;
};

// Omit<
//   DetailedHTMLProps<SelectHTMLAttributes<ContentProps>, ContentProps>,
//   'ref'
// >

export type Props = ContentProps & {
    buttonModifiers?: Array<string>;
    size?: Size;
    style?: CSSProperties;
    className?: string;
    fullWidth?: boolean;
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
    size = "md",
    buttonModifiers = [],
    className = "",
    style,
    icon,
    iconPosition,
    children,
    fullWidth
}: Props) => {
    return (
        <ButtonWrapper
            className={className}
            style={style}
            size={size}
            modifiers={buttonModifiers}
            fullWidth={fullWidth}
        >
            <Content icon={icon} iconPosition={iconPosition}>
                {" "}
                {children}{" "}
            </Content>
        </ButtonWrapper>
    );
};

export default Button;
