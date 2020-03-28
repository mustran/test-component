import React, { ChangeEvent, SyntheticEvent, ReactNode } from "react";
import styled, { css } from "styled-components";
import colors from "../../theme/colors";
import { ifProp, switchProp } from "styled-tools";
import { MdSearch } from "react-icons/md";
import { rem } from "polished";

type Size = "xs" | "sm" | "md" | "lg";

type StyledInputProps = {
    sizeProp?: Size;
    icon?: ReactNode | null;
};

const StyledInput = styled.input<StyledInputProps>`
    width: 100%;
    vertical-align: middle;
    box-sizing: border-box;
    overflow: hidden;
    outline: none;
    color: ${colors.fontDarkGray};
    transition: all ease 300ms;
    background: ${colors.white};
    font-weight: 300;
    padding: 0.375em 0.75em;
    border: 1px solid ${colors.gray};
    border-radius: 0.188em;
    font-size: rem(16);
    line-height: 1;

    &:focus {
        border-bottom: 1px solid ${colors.skyBlue};
    }

    padding-left: ${({ icon }) => (icon ? "2rem !important" : null)};
    ${ifProp(
        { type: "search" },
        css`
            padding-left: 2rem !important;
            ::placeholder {
                position: relative !important;
                left: 0.1rem !important;
            }

            ::-webkit-search-decoration,
            ::-webkit-search-cancel-button,
            ::-webkit-search-results-button,
            ::-webkit-search-results-decoration {
                cursor: pointer;
            }
        `
    )};
    ${switchProp("sizeProp", {
        xs: css`
            font-size: rem(12)
            padding: 0.1875rem 0.25rem;
        `,
        sm: css`
            font-size: rem(14)
            padding: 0.375rem 0.5rem;
        `,
        md: css`
            font-size: rem(16);
            padding: 0.5625rem 0.75rem;
        `,
        lg: css`
            font-size: rem(18);
            padding: 0.75rem 1rem;
        `
    })};
`;

const IconContainer = styled.div`
    position: absolute;
    color: ${colors.darkGray};
    left: 0.5rem;
    top: 33%;
`;

const InputWrapper = styled.div`
    width: 100%;
    position: relative;
`;

type Props = {
    type: string;
    placeholder: string;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => any;
    value: string | Array<string> | number;
    sizeProp?: Size;
    style?: Record<string, any>;
    className?: string;
    icon?: ReactNode;
};

type RefType =
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

const Input = React.forwardRef(
    (
        {
            type,
            placeholder,
            onChange,
            sizeProp,
            style,
            className,
            icon,
            ...rest
        }: Props,
        ref: RefType
    ) => {
        const onInputChange = (e: ChangeEvent<HTMLInputElement>): any => {
            e.persist();
            if (onChange) {
                onChange(e);
            }
        };

        if (type === "search") {
            return (
                <InputWrapper style={style} className={className}>
                    <IconContainer>
                        <MdSearch />
                    </IconContainer>
                    <StyledInput
                        sizeProp={sizeProp}
                        ref={ref}
                        type={type}
                        placeholder={placeholder}
                        {...rest}
                        onChange={onInputChange}
                    />
                </InputWrapper>
            );
        }
        return (
            <InputWrapper style={style} className={className}>
                <IconContainer>{icon}</IconContainer>
                <StyledInput
                    sizeProp={sizeProp}
                    ref={ref}
                    type={type || "text"}
                    placeholder={placeholder}
                    onChange={onInputChange}
                    icon={icon}
                    {...rest}
                />
            </InputWrapper>
        );
    }
);

Input.displayName = "Input";

Input.defaultProps = {
    sizeProp: "md",
    style: {},
    className: "",
    icon: null
};

export default Input;
