
import "./Arquivos-css/app.css"
import meowed from "./img/meowed.svg"
import barked from "./img/barked.svg"
import respondeai from "./img/respondeai.svg"
import ad_animals from './img/adorable_animals.svg'
import cat from "./img/gato-telefone.svg"
import dog from "./img/dog.svg"
import React from "react"
import kakashi from "./img/img614da6ac1c2bc2.45012985.jpg"
import post_kakashi from "./img/original.jpg"
function RecebendoPosts(props){



const [curtida, setCurdida]=React.useState(false)
const [numeroCurtida, setNumeroCurtida]=React.useState(props.curtidas)
function curtir(){
    if (curtida===true){
        return
    }else{
        setCurdida(true)
    setNumeroCurtida(numeroCurtida+1)
    }
    
}
function descurtir(){
    setCurdida(false)
    setNumeroCurtida(numeroCurtida-1)
}

const [salvar, setSalvar]=React.useState(false)

function salvei(){
    setSalvar(true)
}
function Nsalvei(){
    setSalvar(false)
}

return(
    <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.usuario} alt="post" />
                        {props.usuarioName}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.conteudo} alt="post"  onClick={curtir} />

                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                         {curtida ? <ion-icon name="heart" onClick={descurtir} style={{color: 'red'}} ></ion-icon> :<ion-icon name="heart-outline" onClick={curtir}  ></ion-icon> }   
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            {salvar ? <ion-icon name="bookmark" onClick={Nsalvei} ></ion-icon> : <ion-icon name="bookmark-outline" onClick={salvei}></ion-icon >}
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.curtidoPic} alt="post" />
                        <div class="texto">
                            Curtido por <strong>{props.curtidoName}</strong> e <strong>outras {numeroCurtida} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
)
} 

export default function Posts() {
    // LISTA QUE SIMULA API
    const listaDePosts=[{usuario:meowed, usuarioName:'meowed', conteudo:cat,curtidoPic:respondeai ,curtidoName:'respondeai', curtidas:101222 },
    {usuario:ad_animals, usuarioName:'adorable_animals', conteudo:dog,curtidoPic:barked ,curtidoName:'barked', curtidas:684},
    {usuario:kakashi, usuarioName:'kakashi', conteudo:post_kakashi,curtidoPic:barked ,curtidoName:'barked', curtidas:202674}]
    
    const RenderizaPost=listaDePosts.map((n) => RecebendoPosts(n))
    return (
        <div class="posts">
            {RenderizaPost}
        </div>
    )
}