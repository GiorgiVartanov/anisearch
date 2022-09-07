import "./footer.scss";

import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="footer-body">
                <a
                    aria-label="authors' github"
                    href="https://github.com/GeorgeVRT/anisearch"
                >
                    <AiFillGithub />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
