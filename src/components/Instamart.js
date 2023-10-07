import React, { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">

            <h3 className="font-bold text-xl">{title}</h3>

            {isVisible ? <button onClick={() => setIsVisible(false)} className="cursor-pointer underline">Hide</button> : <button onClick={() => setIsVisible(true)} className="cursor-pointer underline">Show</button>}

            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");
    return (
        <div>
            <h1 className="text-3xl font-bold p-2 m-2">InstaMart</h1>

            <Section title={"About Instamart"}
            description={"A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who's on your team and what their roles are. About pages are personal to you and your company, so the structure of your about page will vary based on what you want to highlight. However, you'll start with the same writing process."}
            isVisible = {visibleSection === "about"}
            setIsVisible={() => setVisibleSection("about")}
            />

            <Section title={"Team Instamart"}
            description={"A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who's on your team and what their roles are. About pages are personal to you and your company, so the structure of your about page will vary based on what you want to highlight. However, you'll start with the same writing process."}
            isVisible = {visibleSection === "team"}
            setIsVisible={() => setVisibleSection("team")}
            />

            <Section title={"Career"}
            description={"A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who's on your team and what their roles are. About pages are personal to you and your company, so the structure of your about page will vary based on what you want to highlight. However, you'll start with the same writing process."}
            isVisible = {visibleSection === "career"}
            setIsVisible={() => setVisibleSection("career")}
            />


        </div>
    );
};
export default Instamart;