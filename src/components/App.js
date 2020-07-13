import React from 'react'

// Custom components
import Title from './Title/Title'
import StudentCard from './Student/Student-card'
import SkillCard from './Skills/Skill-card'

// NPM components
import ReactPlayer from 'react-player'



const App = () => {

  return (

    <main>

      <section>

        <Title titleText="Bienvenid@s a React, la leche aw :3" subtitleText="Estos son los alumnos" />

        <StudentCard age="30" />
        <StudentCard name="Escarlata" age="30" />
        <StudentCard name="Frasncisco" age="30" />
        <StudentCard name="Dayan" age="30" />
        <StudentCard name="Tirso" age="30" areas="POO, Backend" />

      </section>

      <section>

        <Title titleText="Estas son nuestras materias" subtitleText="Seremos todoterrenos!" />

        <SkillCard name="HTML5 Canvas" weight="10%" />
        <SkillCard name="NodeJS" weight="20%" essential />
        <SkillCard name="MongoDB" weight="20%" />
        <SkillCard name="ExpressJS" weight="20%" />
        <SkillCard name="HBS" weight="10%" essential />
        <SkillCard name="React" weight="17%" />

      </section>

      <section>

        <Title titleText="Y ahora un vídeo" subtitleText="Que sea terrible" />
        <ReactPlayer url="https://www.youtube.com/watch?v=kJQP7kiw5Fk" playing />

      </section>

    </main>
  )
}

export default App