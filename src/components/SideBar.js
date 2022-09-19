import React from "react"
import badVibes from "./img/bad.vibes.memes.svg"
import Catana from "./img/catanacomics.svg"
import chib from './img/chibirdart.svg'
import razoes from './img/razoesparaacreditar.svg'
import adorable from './img/adorable_animals.svg'
import small from './img/smallcutecats.svg'


function RecebendoSugestoes(props){
  console.log(props)
  return(
  <div class="sugestao">
  <div class="usuario">
    <img src={props.usuarioImg} alt="sidebar" />
    <div class="texto">
      <div class="nome">{props.usuarioName} </div>
      <div class="razao">Segue você</div>
    </div>
  </div>

  <div class="seguir">Seguir</div>
</div>
)}

export default function SideBar(){
  //lista que simula API
  const listaDeSugestoes=[{usuarioImg:badVibes,usuarioName:'bad.vibes.memes', status:'Segue você'},{usuarioImg:chib,usuarioName:'chibirdart', status:'Segue você'},
  {usuarioImg:razoes,usuarioName:'razoesparaacreditar', status:'Segue você'},{usuarioImg:adorable,usuarioName:'adorable_animals', status:'Segue você'},
  {usuarioImg:small,usuarioName:'smallcutecats', status:'Segue você'}]

  const rederizaSugestoes=listaDeSugestoes.map((n)=>RecebendoSugestoes(n))

  const [userName, SetName]=React.useState('Catana')

 const [photo,setPhoto]=React.useState(Catana)

  function chooseName(){
    const name=prompt('Qual é seu nome?')
    SetName(name)
  }

  function choosePhoto(){
    const newPic=prompt('Qual o link da sua nova foto?')
    setPhoto(newPic)
  }

 return(
    <div className="sidebar">
        <div class="usuario">
          <img src={photo} alt="sidebar" onClick={()=>choosePhoto()} />
          <div class="texto">
            <strong>catanacomics</strong>
            <span>
              {userName}
              <ion-icon name="pencil" onClick={()=> chooseName()} ></ion-icon>
            </span>
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {rederizaSugestoes}
          </div>
          <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
 )
}