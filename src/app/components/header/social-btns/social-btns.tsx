import { GitIcon } from "../icons/git-icon";
import { LinkIcon } from "../icons/link-icon";


import "./social-btns.scss"
export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/fernandabeltrao-a52814293/">
                <LinkIcon/>
            </a>
            <a href="https://gitlab.com/NandaB">
                <GitIcon/>
            </a>

        </div>
    )
}