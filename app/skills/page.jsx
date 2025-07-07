'use client'
import Image from "next/image"

import "./skill.css" // optional: custom styling

export default function Skill() {
  return (
    <div className="skills-container">
      {/* Skills Title */}
      <div className="skills-heading">
        <span>🔧</span> Skills
      </div>

      {/* Skills Grid */}
      <div className="skill-list">
        <a className="item"><span><Image src="/java.svg" alt="Java" width={50} height={50} /></span>Java</a>
        <a className="item"><span><Image src="/react-new.svg" alt="React" width={50} height={50} /></span>React</a>
        <a className="item"><span><Image src="/node.svg" alt="Node.js" width={50} height={50} /></span>Node.js</a>
        <a className="item"><span><Image src="html.svg" alt="HTML" width={50} height={50} /></span>HTML</a>
        <a className="item"><span><Image src="/css.svg" alt="CSS" width={50} height={50} /></span>CSS</a>
        <a className="item"><span><Image src="/js-2.svg" alt="JavaScript" width={50} height={50} /></span>JavaScript</a>
        <a className="item"><span><Image src="mongo.svg" alt="MongoDB" width={50} height={50} /></span>MongoDB</a>
        <a className="item"><span><Image src="mysql.svg" alt="MySQL" width={50} height={50} /></span>MySQL</a>
      </div>
    </div>
  )
}
