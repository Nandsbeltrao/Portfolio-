import { Experience } from './components/header/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/header/information/information'
import "./styles/home.scss"
import { EmailIcons } from './components/header/icons/email-icon'
import { SocialBtns } from './components/header/social-btns/social-btns'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
      <Info/>
          <div className="buttons">
           <SocialBtns/>
            <a className="btn-primary" href="mailto:nandabeltraoleite@gmail.com">Contact me
            <EmailIcons/>
            </a>
          </div>
      </main>
  )
}
