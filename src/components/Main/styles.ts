import styled from "styled-components"
import { ArrowLeft,Home,Search,Notifications,Email } from "../../styles/Icons"


export const Container = styled.div`
    display:flex;
    flex-direction: column;
    //pega o menor valor entre as duas opções
    width: min(601px,100%);
    background:red;
    //quando a condição é 
    @media(min-width:500px){
        border-left:1px solid var(--outline);
        border-right:1px solid var(--outline);
    }
`
export const Header = styled.div`
    //determina que o elemento vai ficar acima dos outros
    z-index:2;
    //fixa o elemento na tela
    position:sticky;
    //fixa no top
    top:1;
    background: var(--primary);

    display:flex;
    align-items: center;
    text-align: left;
    
    padding:8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);
    
    //usando herança 
    >button{
        padding:8px;
        border-radius:50%;

        outline: 0 ;
        cursor: pointer;
        // & altera no proprio elemento
        &:hover{
            background: var(--twitter-dark-hover);
        }
    }
`
//puxando estilos de outro arquivo e 
//passando para a função styled()
export const BackIcon = styled(ArrowLeft)`
    width:24px;
    height:24px;
    //muda a cor de um svg preenchendo-o
    fill:var(--twitter);
`
export const ProfileInfo = styled.div`
    margin-left:17px;

    display:flex;
    flex-direction:column;
    
    >strong{
        font-size:19px;
    }
    >span{
        font-size:15px;
        color: var(--gray);
    }
` 
export const ButtonMenu = styled.div``;
export const HomeIcon = styled(Home)``;
export const BellIcon = styled(Notifications)``;
export const EmailIcon = styled(Email)``;
export const SearchIcon = styled(Search)``;