function LandingImage(props) {
    return(
        <div className="top-image">
            <div className="top-icons">
                <img id="ih-logo" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="IronHack Logo"/> 
                <img id="dd-menu" src="https://cdn-icons-png.flaticon.com/512/8166/8166618.png" alt="DropDown Menu"/> 
            </div>
            <div className="top-text">
            <h1>Say Hello to ReactJS</h1>
            <h6>You will learn how to use the most popular frontend library, and become a super Ninja developer</h6>
            <button> Awesome!</button>
            </div>
        </div>
    )
}

export default LandingImage