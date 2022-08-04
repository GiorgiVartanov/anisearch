import "./footer.scss";

import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="footer-body">
                <a href="https://github.com/PhYell/anisearch">
                    <AiFillGithub />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
