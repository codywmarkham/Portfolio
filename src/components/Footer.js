import React from "react";

export default function Footer() {
    return (

        <footer>
            <section id="footer" className="container mx-auto ">
            <div className="flex flex-col w-full mb-1">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white text-center">
                Links
                </h1>
            </div>
                    <div className="text-center ">
                    <a href="https://github.com/codywmarkham" target="_blank" rel="noopenner noreferrer">GitHub</a>
                    </div>
                    <div className="text-center ">
                    <a href="https://www.linkedin.com/in/codywmarkham/" target="_blank" rel="noopenner noreferrer">Linkedin</a>
                    </div>
                    <div className="text-center ">
                    <a href="https://docs.google.com/document/d/1cF34QzEL1ImgH4MkC0fnPZBj46QmaytpnAqq3PuTQSs/edit?usp=sharing" target="_blank" rel="noopenner noreferrer">Resume</a>
                    </div>
                    <div className="text-center ">
                    <a href="https://www.youtube.com/channel/UC3qFej-7o3aizmLKwxjiHlg" target="_blank" rel="noopenner noreferrer">Tech Channel</a>
                    </div>
                </section>
        </footer>
    )
}