import { DefaultTheme } from 'styled-components';

export default (prop: string, theme: DefaultTheme) => prop.split('.').reduce((a: any, b: any) => a[b], theme);
