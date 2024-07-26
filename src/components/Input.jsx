const Input = ({type,placeholder,height,width}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} className={`h-[${height}px] w-[${width}px] rounded-lg pl-[30px] placeholder-[#6A6A6D]`} />
        </div>
    
    )
}

export default Input
