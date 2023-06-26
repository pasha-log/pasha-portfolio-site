import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({selectedPage, setSelectedPage}) => {
    const selectedStyles = `relative bg-white before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-white before:left-[-50%] before:top-[-50%]`;

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink 
                className={`${selectedPage === '00 home' ? selectedStyles : "bg-white"} w-3 h-3 rounded-full`} 
                href="#home" 
                onClick={() => setSelectedPage('00 home')} 
            />
            <AnchorLink 
                className={`${selectedPage === '01 about' ? selectedStyles : "bg-white"} w-3 h-3 rounded-full`} 
                href="#about" 
                onClick={() => setSelectedPage('01 about')} 
            />
            <AnchorLink 
                className={`${selectedPage === '02 projects' ? selectedStyles : "bg-white"} w-3 h-3 rounded-full`} 
                href="#projects" 
                onClick={() => setSelectedPage('02 projects')} 
            />
            <AnchorLink 
                className={`${selectedPage === '03 contact' ? selectedStyles : "bg-white"} w-3 h-3 rounded-full`} 
                href="#contact" 
                onClick={() => setSelectedPage('03 contact')} 
            />        
        </div>
    )
}

export default DotGroup;