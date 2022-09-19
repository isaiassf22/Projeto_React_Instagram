import pic9gag from "./img/9gag.svg"
import meowed from "./img/meowed.svg"
import barked from "./img/barked.svg"
import wawawicomics from "./img/wawawicomics.svg"
import nathanwpylestrangeplanet from "./img/nathanwpylestrangeplanet.svg"
import respondeai from "./img/respondeai.svg"
import filomoderna from "./img/filomoderna.svg"
import memeriagourmet from "./img/memeriagourmet.svg"

function RecebendoProps(props) {
  console.log(props)
  return (
    <div>
      <div class="story">
        <div class="imagem">
          <img src={props.imagem} alt="story" />
        </div>
        <div class="usuario">
          {props.nome}
        </div>
      </div>
    </div>
  )
}

export default function BoxStories() {
  //
  const conteinerDeStories = [{ imagem: pic9gag, nome: '9gag' }, { imagem: meowed, nome: 'meowed' }, { imagem: barked, nome: 'barked' }, { imagem: wawawicomics, nome: 'wawawicomics' },
  { imagem: nathanwpylestrangeplanet, nome: ' nathanwpylestrangeplanet' }, { imagem: respondeai, nome: 'respondeai' }, { imagem: filomoderna, nome: 'filomoderna' }, { imagem: memeriagourmet, nome: 'memeriagourmet' }]
  const renderizarStories = conteinerDeStories.map((n) => RecebendoProps(n))

  return (
    <div className="stories">
      {renderizarStories}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )

}


/* <div>
         <div class="stories">
          <div class="story">
            <div class="imagem">
              <img src={pic9gag} alt="story" />
            </div>
            <div class="usuario">
              9gag
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src={meowed} alt="story" />
            </div>
            <div class="usuario">
              meowed
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src={barked} alt="story" />
            </div>
            <div class="usuario">
              barked
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src={nathanwpylestrangeplanet} alt="story" />
            </div>
            <div class="usuario">
              nathanwpylestrangeplanet
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src={wawawicomics} alt="story" />
            </div>
            <div class="usuario">
              wawawicomics
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src={respondeai} alt="story" />
            </div>
            <div class="usuario">
              respondeai
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src={filomoderna} alt="story" />
            </div>
            <div class="usuario">
              filomoderna
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src={memeriagourmet} alt="story" />
            </div>
            <div class="usuario">
              memeriagourmet
            </div>
          </div>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
        </div>*/