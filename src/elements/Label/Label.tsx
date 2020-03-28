import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import { applyStyleModifiers } from "styled-components-modifiers";
import colors from "../../theme/colors";

export const fontSizeExtraSmall = ({ theme }: any) => `
  font-size: ${theme.font.sizes.extraSmall};
`;

export const fontSizeSmall = ({ theme }: any) => `
  font-size: ${theme.font.sizes.small};
`;

export const fontSizeMedium = ({ theme }: any) => `
  font-size: ${theme.font.sizes.medium};
`;

export const fontSizeLarge = ({ theme }: any) => `
  font-size: ${theme.font.sizes.large};
`;

const typographyModifiers = {
    fontSizeExtraSmall,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge
};

const Label = styled.label<{ disabled?: boolean }>`
    text-decoration: none;
    font-weight: 300;
    cursor: pointer;
    vertical-align: middle;
    color: ${colors.fontDarkGray};
    transition: all ease 300ms;
    line-height: 20px;
    position: relative;
    display: inline-flex;

    &:not(:disabled):hover {
        color: ${colors.fontGray};
    }

    ${ifProp(
        "disabled",
        css`
            color: ${colors.fontLightGray};
            pointer-events: none;
        `
    )};
    ${applyStyleModifiers(typographyModifiers)};
`;

export default Label;
