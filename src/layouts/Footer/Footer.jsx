import "./Footer.css"
const Footer = () => {

    const textMain = "Главная"
    const textAboutMe = "О нас"


    return (
        <nav className="footer">
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:'center'}}>
                <div>
                    <h2 style={{color:"white"}}>Reserve<span style={{color:"white"}}>Easy</span></h2>
                </div>
                {/*<div>*/}
                {/*    <ul style={{display: "flex", gap:"20px", listStyle:"none", cursor:"pointer"}}>*/}
                {/*        <StyledLink to="/">*/}
                {/*            <StyledA>{textMain}</StyledA>*/}
                {/*        </StyledLink>*/}
                {/*        <StyledLink to="/">*/}
                {/*            <StyledA>{textAboutMe}</StyledA>*/}
                {/*        </StyledLink>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", gap: "20px"}}>
                    <div>
                        <img/>
                    </div>
                    <div>
                        <img/>
                    </div>
                    <div>
                        <img/>
                    </div>

                </div>
            </div>
        </nav>
    );

}
export default Footer
