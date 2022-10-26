import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
     font-family: 'S-CoreDream';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
    }
    @font-face {
        font-family: 'MalgunGothic'; 
        src: url('../font/MalgunGothic.eot');
    }
    @font-face {
        font-family: 'Gill-Sans', sans-serif;
        src: url('http://fonts.cdnfonts.com/css/gill-sans');
    }
    @font-face {
        font-family: "Sci-Fied-Bitmap"; 
        src:url("//db.onlinewebfonts.com/t/535dff488baa782f6dc1ac117691d250.eot"); src: url("//db.onlinewebfonts.com/t/535dff488baa782f6dc1ac117691d250.eot?#iefix") format("embedded-opentype"), 
            url("//db.onlinewebfonts.com/t/535dff488baa782f6dc1ac117691d250.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/535dff488baa782f6dc1ac117691d250.woff") format("woff"), 
            url("//db.onlinewebfonts.com/t/535dff488baa782f6dc1ac117691d250.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/535dff488baa782f6dc1ac117691d250.svg#Sci Fied Bitmap") format("svg"); }
    @font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'S-CoreDream';
        font-weight: 200;
    }
    body,html{
        font-size: 10px;
        margin: 0 auto;
    }
    a{
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
    p,span,h1,h2,h3,h4,h5 {
        cursor: default;
    }
    
`;

export default GlobalStyle;
