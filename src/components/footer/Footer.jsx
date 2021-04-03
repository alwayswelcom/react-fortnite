const Footer = () => {
    return (
        <footer className="page-footer  grey lighten-1">
            <div className="container">
                <div className="row">
                    <div className="col 18 s12">
                        <h5 className="black-text">Footer</h5>
                        <p className="black-text text-lighten-4">
                            this is a trial app on this api
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright black-text">
                <div className="container ">
                    © {new Date().getFullYear()} Copyright Text
                </div>
            </div>
        </footer>

    )
}
export default Footer