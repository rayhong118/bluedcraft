import "./footer.scss";

function FooterComponent() {
    function getYear() {
        var time = new Date();
        return time.getFullYear();
    }

    return (
        <footer>
            <div className="container">© Bluedcraft 2012-{getYear()}</div>
        </footer>
    )
}

export default FooterComponent