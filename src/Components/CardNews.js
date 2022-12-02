class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "./assets/img/default-photo.jpg"
        newsImage.alt = "Foto da Notícia";

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            border: 1px solid #000;
            display: flex;
            flex-direction: row;
            box-shadow: -3px 6px 26px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: -3px 6px 26px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: -3px 6px 26px 0px rgba(0,0,0,0.75);
        }
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card_left span{
            font-weight: 500;
        }
        .card_left a{
            margin-top: 15px;
            font-size: 25px;
            color: #000;
            text-decoration: none;
            font-weight: bold;
        }
        .card_left p{
            color: #888;
        }
        .card_right{
            align-items: right;
            align-self: right;
            margin-left: auto;
        }
        .card_right img{
            max-height: 200px;
        }
        `
        return style;
    }
}

customElements.define('card-news', CardNews);
