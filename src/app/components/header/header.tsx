import Image from 'next/image'

import "./header.scss"

export function Header(){
    return (
        <div className="header">
            <div>
              <h1>Hi, I'm Fernanda! &#x1F44B;</h1>
              <h2>future software engineer</h2>
            </div>
            <Image
              src="/me2.jpeg"
              alt="Vercel Logo"
              width={325}
              height={300}
              priority
            />
        </div>
    )
      
    
}