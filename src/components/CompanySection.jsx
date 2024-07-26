import Input from '../components/Input.jsx';
import ButtonWithBG from '../components/ButtonWithBG.jsx';
import side from '../assets/side.svg'

const CompanySection = () => {
    return (
        <div className="flex mt-[100px] ml-[100px] p-2">
            <div className="w-[725px] h-auto">
                <p className="font-bold text-[70px] mb-4">
                    Build your business here and now.
                </p>
                <p className="font-normal text-base">
                    We help you start, grow, and build your dream business in the UAE.
                </p>
                <p className="mb-[50px]">
                    Just a few steps, and you’ll be right on track!
                </p>
                <div className="relative">
                        <Input 
                            type="text"
                            placeholder="Enter your company name"
                            height="57"
                            width="474"
                        />
                        <div className="absolute w-[155px] top-2 left-[310px] bottom-0 h-full">
                            <ButtonWithBG 
                                width="155" 
                                height="45"
                                backgroundColor="bg-gradient-to-r from-blue-400 to-pink-30"
                                isGradient="true"
                                titleColor="#ffffff"
                                title="Get Started" 
                            />
                        </div>
                </div>
                <div className="flex mt-5 gap-4">
                    <p>New company</p>
                    <p>Existing company </p>
                </div>
            </div>
            <div className="ml-auto">
                <img src={side} alt="side" />
            </div>
        </div>
    )
}

export default CompanySection