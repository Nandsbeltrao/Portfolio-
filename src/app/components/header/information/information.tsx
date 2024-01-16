import "./information.scss"
import { SectionTitle } from "../sectionTitle/sectionTitle"
export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languagens"/>
        <div className="languagens-info">
          <span> &#x1F4CD; EN- basic </span>
          <span> &#x1F4CD; PT-BR - Native Speaker</span>
         </div>
         <SectionTitle text="Education"/>
         <div className="education-info">
          <span>🎓</span>
          <span> Ciências Matemáticas - Universidade Federal do Rio de Janeiro </span>    
         </div>
       </div>
    )
}