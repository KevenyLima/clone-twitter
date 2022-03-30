import styled,{css} from 'styled-components'
import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
    Rocketseat,
  } from '../../styles/Icons';
export const Container = styled.div`

    display:none;
    //regra para aparecer o elemento so se tiver mais que 500px largura na tela
    @media(min-width: 500px) {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        //prende o conteudo na posicao top 0 left 0 do elemento pai
        //funciona parecido com o position:absolute;
        position:sticky;
        top:0;
        left:0;

        padding:9px 19px 20px;
        //deixa a elemnto com o tamanho maximo de view para nao scrollbar
        max-height:100vh;
    }

`

export const MenuBar = styled.div`

`


export const Topside = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    //um o linhamento para start quando a tela e muito grande
    @media(min-width: 1280px){
        align-items:flex-start;
    }
`
export const Logo = styled(Rocketseat)`
    width:41px;
    height:41px;
    >path{
        fill:var(--twitter)
    }
    margin-bottom:20px;
`
export const MenuButton = styled.button`
    display:flex;
    align-items:center;
    flex-shrink:0;
    padding: 8px 0;
    //pesuisar sobre esta propriedade
    //nao vi efeito nenhum
    outline:0;
    cursor:pointer;
    border-radius:25px;
    &:hover{
        background:var(--twitter-dark-hover);
    }
    &:hover,&.active{
        span,svg{
            color:var(--twitter);
            fill:var(--twitter);
        };
    }
    >span{
        display:none;
    }
    @media (min-width:1280px) {
        >span{
            display:inline;
            margin-left:19px;

            font-weight:bold;
            font-size:19px;
        }
        padding-right:15px;
    }
    //pula um butao e pega o proximo
    & + button{
        margin-top:16px;
    }
    //da origem pega o ultimo butao
    & + button:last-child{
        margin-top:33px;
        width:40px;
        height:40px;
        //none no buttao tweetar
        >span {
            display:none;
        }
        @media (min-width:1280px) {
            width:100%;
            height:unset;
            >span{
                display:inline;
            }
        }

    }
`
const iconCSS = css`
    flex-shrink:0;
    width:30px;
    height:30px;
    color:var(--white)
`
export const HomeIcon = styled(Home)`${iconCSS}`
export const BellIcon = styled(Notifications)`${iconCSS}`
export const EmailIcon = styled(Email)`${iconCSS}`
export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`
export const ProfileIcon = styled(Person)`${iconCSS}`

export const Botside = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:20px;
    align-items:center;

`
export const Avatar = styled.div`
    width:39px;
    height:39px;
    flex-shrink:0;

    background:var(--gray);
    border-radius:50%;
`
export const ProfileData = styled.div`
    display:none;

    //
    @media(min-width:1280px){
        display:flex;
        flex-direction:column;

        margin-left:10px;
        font-size:14px;

        >span{
            color:var(--gray)
        }
    }
`
export const ExitIcon = styled(ExitToApp)`

    display:none;

    @media (min-width: 1280px) {
        display:inline-block;
        width:25px;
        height:25px;
        color:var(--white);
        margin-left:30px;
        cursor:pointer;

        &:hover{
            >path{
                color:var(--like);
            }
        }
    }

`
