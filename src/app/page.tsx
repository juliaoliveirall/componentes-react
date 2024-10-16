import { Button } from "./components/button";
import { Header } from "./components/header";
import { Image } from "./components/image";
import { ListaItens } from "./components/list";
import { Paragraph } from "./components/paragraph";
import { Quadrado } from "./components/square";
import { Title } from "./components/title";



export default function Home() {

  const click = () => {
    alert("botão clicado")
  }

  const itemsList = ['aula 1', 'aula 2', 'aula 3', 'aula 4']
  return (
    <div>
      <Quadrado></Quadrado>
      <Title text="atividade!"></Title>
      <Button texto="Clique aqui" onClick={click}></Button>
      <ListaItens itens={itemsList}></ListaItens>
      <Paragraph texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu mi quis odio cursus pulvinar. Maecenas nisl mi, malesuada vitae maximus et, molestie a orci. Fusce viverra elit non leo imperdiet vestibulum."></Paragraph>
      <Image url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xXz6KI1ON27i1dttTu8xa34qL0r5v-6LeA&s" alt="zayn malik"></Image>
      <Header title="atividade" description="componentes-react"></Header>
    </div>
  )
}