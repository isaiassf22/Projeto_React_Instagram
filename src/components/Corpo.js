import "./Arquivos-css/app.css"
import SideBar from "./SideBar"
import BoxStories from "./Stories"
import Posts from "./Post"

export default function Structure() {
    return (
        <main>
            <div className="conteudo_principal">
                <BoxStories />
                <Posts />
            </div>
            <div className="side_bar">
                <SideBar />
            </div>
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </main>
    )
}   