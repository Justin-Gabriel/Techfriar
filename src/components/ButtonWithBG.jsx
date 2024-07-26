const ButtonWithBG = ({width, height, backgroundColor, titleColor, title, isGradient=false}) => {
    return (
        <button className={`w-[${width}px] h-[${height}px] ${isGradient ? backgroundColor : `bg-[${backgroundColor}]`} text-[${titleColor}] rounded-lg`}>
            {title}
        </button>
    )
}

export default ButtonWithBG