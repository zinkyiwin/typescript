type StylesProps = {
    styles:React.CSSProperties
}

export const Styles =(props:StylesProps) => {
    return(
        <div style={props.styles}>
            Text Content in React Typescript
        </div>
    )
}