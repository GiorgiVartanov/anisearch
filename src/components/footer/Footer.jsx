import "./footer.scss";

import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="footer-body" aria-label="authors' github">
                <a href="https://github.com/GeorgeVRT/anisearch">
                    <AiFillGithub />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
