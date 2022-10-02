# MUI Emotion Styled Components

# Emotion Installation

### `yarn add @emotion/react @emotion/styled`

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Notes

## 1. Styled Component Syntax

> 1. For normal HTML elements, use dot format <br />
>    Examples - styled.div, styled.h1, styled.button
>    <br />
>
> 2. For MUI Components - use brackets <br />
>    Examples - styled(Paper), styled(Button)
>    <br />
>
> 3. Write all css properties in CSS format<br />
>    Examples - background-color, font-size, etc
>    <br />
>
> 4. Dont use ""/'' [Double or Single quote] for writting the property value
>    <br />

## 2. Styled Component with Props

> In typescript Strict mode - We have to add prop types <br />
>
> 1. Create a PropType which has type for all props <br />
> 2. Assign PropType to styled component <br />
>    Example - `styled(Button)<PropType>` <br />
>
> 3. While accessign props -
>
>    1. Passing prop value in component
>       1. Pass `fontSize="30px"` to the component and
>       2. Use `font-size: ${(props) => props.fontSize};` to assign prop value to css property
>    2. Only passing prop to the component
>       1. Pass `largetext` to the component and
>       2. Use `font-size: ${(props) => props.largetext && "45px"};` to assign prop value to css property

## 3. Styled Component with Conditional Props

> We can conditionally assign value to CSS property based on props passed to component <br />
> In this, pass the prop name only to the component <br />
>
> 1. Pass `largetext` to the component and <br />
> 2. Use [&& Operator] - `font-size: ${(props) => props.largetext && "45px"};` to assign prop value to css property [Only for true condition]
> 3. Use [Ternary operator] - `font-size: ${(props) => props.largetext ? "45px" : "20px"};` to assign prop value to css property [For both true and false]
> 4. For multiple props in single CSS Property - <br />
>    Use - `background-color: ${(props) => (props.redbg && "red") || (props.greenbg && "green") || "skyblue"};` format

## 4. Styled Component with Theme

> We can access theme properties in styled component using useTheme hook <br />
>
> 1. Import useTheme - `import { useTheme } from '@mui/material/styles` <br />
> 2. Access the theme via
>    1. Directly - `margin: useTheme().spacing(value)` <br />
>    2. Create a variable using hook <br /> `const theme = useTheme()` <br />
>       Then access - `margin: ${theme.spacing(2)}`, `background-color: ${theme.palette.primary.main}`

## 5. Styled Component with Theme and Props

> We can use both Theme and Props at same time <br />
>
> 1. Add PropType while defining styled component and access prop using - `font-size: ${(props) => props.fontSize};` <br />
> 2. Access theme using custom hook - `margin: ${theme.spacing(2)}` <br />

## 6. Exporting Styled Component from other file

> Steps to import styled component from other file <br />
>
> 1. export the component from file where it is define - `export default StyledComponent` <br />
> 2. import the component using - `import StyledComponent from './path`
> 3. Use StyledComponent like normal component - `<StyledComponent>...</StyledComponent>`

## 7. Styled Component with Pseudo-Classes

> For pseudo classes in component <br />
> Use `:pseudo-class: {style}` format.

## 8. Styled Component with Nested Components
