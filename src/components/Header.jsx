import ButtonWithBG from './ButtonWithBG.jsx';
import oneView from '../assets/oneView.svg'
import arrowDown from '../assets/arrowDown.svg'

const Header = () => {
    return (
        <div className="flex items-center justify-between h-[45px] px-[100px] py-[50px] p-2">
            <div className="flex items-center gap-2">
                <img src={oneView} alt="One View Logo" className="w-[28px] h-[28px]" />
                <p className="text-[#333333] text-[21.33px] font-semibold leading-[32px]">One View</p>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-1">
                    <p>Services</p>
                    <img src={arrowDown} alt="down arrow" className="w-4 h-4" />
                </div>
                <p>About</p>
                <p>Resources</p>
                <button className="w-[84px] h-[45px] border border-black rounded-lg">Login</button>
                <ButtonWithBG 
                    width="174"
                    height="45"
                    backgroundColor="#0F1738"
                    titleColor="#ffffff"
                    title="Start your business"
                />
            </div>
        </div>
    )
}

export default Header