import styled,{css}from "styled-components";
import {LocationOn,Cake} from '../../styles/Icons'
import Button from "../Button"

export const Container = styled.div`

display:flex;
flex-direction:column;

max-height:100%;

//quando o conteudo for maior que a view 
//cria um scroll
overflow-y:auto;
//configuracao para tirar o scroll no firefox
scrollbar-width:none;
//configuracao para tirar o scroll no google chrome
::-webkit-scrollbar{
    display:none;
}

`
export const ProfileInfo = styled.div`
    >h1{
        font-size:20px;
    }
    padding:min(calc(10vw + 7px),67px) 16px 0;
    //padding: 0 16px 0;
`
export const ProfileTag = styled.p`color:var(--gray);`
export const ProfileDescription = styled.p`
    >span{
        color:var(--twitter);
    }

`

export const ProfileDatas = styled.div`

    display:flex;
    flex-direction: column;
    padding:10px 0;
    >div{
        color:var(--gray);
        >svg{
            //muda a cor de um svg
            fill:var(--gray);
        }
    }
`
export const ProfileFollows = styled.div`
    display:flex;
    direction:row;
    >div{
        color:var(--gray);
        padding:16px;
    }

`
export const Tweets = styled.div`
    display:flex;
    justify-content:center;
    border-bottom: 2px solid var(--twitter);
    padding: 11px 0 15px;
    &:hover{
        background:var(--twitter-dark-hover);
    }
    >div{
        color:var(--twitter);
        font-weight:bold;
    }

`
export const ProfileAvatar = styled.div`
    display:flex;
    position:relative;
    //pesquisar mais sobre
    flex-shrink:0;
    width:100%;
    height:min(33vw,199px);

    background:var(--twitter);

    >div{
        width:max(45px,min(135px,22vw));
        height:max(45px,min(135px,22vw));

        border-radius:50%;
        background-color:var(--gray);
        border: solid 3px  var(--primary);
        
        position:absolute;
        bottom:max(-60px,-10vw);
        left:15px;
    }


`

const iconCSS = css`

    width:24px;
    height:24px;

`

export const LocationIcon = styled(LocationOn)`${iconCSS}`
export const CakeIcon = styled(Cake)`${iconCSS}`
export const ProfileButton = styled.div`
    position:relative;
`
export const EditButton = styled(Button)`
    position:absolute;
    top:2vw;
    right: 7px;

    padding:4px 16px;
    font-size:13px;
    @media(min-width:320px){
        top: 10px;
        font-size:15px;
        padding:10px 19px;
    }


`