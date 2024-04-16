import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

function Sobre() {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa atque
        tenetur nobis porro temporibus ab, voluptatem vitae perferendis et
        distinctio ea itaque quo earum, repellendus aliquam veritatis! Ab,
        nesciunt. Molestiae!
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=Thiago-Almeida23&show_icons=true&theme=dracula&include_all_commits=true&count_private=false" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Thiago-Almeida23&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
