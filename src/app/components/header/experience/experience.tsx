import Image from "next/image"
import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
        <p>Exploradora incansável do Front-end desde 2022, trilhando meu caminho com dedicação em desenvolvimento web. Motivada pela aprendizagem contínua, 
          estou pronta para abraçar desafios e agregar minha paixão por interfaces envolventes a projetos inovadores. Em busca de oportunidades para crescer e 
          contribuir de forma impactante.</p>
         <div>
         <Image
              src="/js.png"
              alt="Javascript Logo"
              width={90}
              height={90}
              priority
            />
         </div>
         <div>
         <Image
              src="/html.png"
              alt="HTML Logo"
              width={90}
              height={90}
              priority
            />
         </div>
         <div>
         <Image
              src="/css.png"
              alt="CSS Logo"
              width={90}
              height={90}
              priority
            />
         </div>
         <div>
         <Image
              src="/sass.png"
              alt="SASS Logo"
              width={90}
              height={90}
              priority
            />
         </div>
         <div>
         <Image
              src="/react.png"
              alt="React Logo"
              width={90}
              height={90}
              priority
            />
         </div>
         <div>
         <Image
              src="/figma.png"
              alt="Figma Logo"
              width={90}
              height={90}
              priority
            />
         </div>
        </div>
    )
}