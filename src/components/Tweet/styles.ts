import styled,{css} from 'styled-components'
import {Favorite,Chat} from '../../styles/Icons'
import {RocketseatIcon as Rocketseat} from '../RocketseatIcon'
export const Container = styled.div`

    display:flex;
    flex-direction: column;

    padding:14px 16px;

    border-bottom: 1px solid var(--outline);
    max-width:100%;
`
export const Retweeted = styled.div`
    
    display:flex;
    align-items:center;

    font-size:13px;
    color:var(--gray);

`
export const RocketseatIcon = styled(Rocketseat)`

    width: 16px;
    height:16px;


    margin-left:35px;
    margin-right:9px;
    //svg modificando a tag path
    >path{
        fill:var(--gray);
    }
`
export const Body = styled.div`

    display:flex;
    margin-top:3px;

    //utilizando realtive aqui para usar absolute no avatar
    position:relative;

`
export const Header = styled.div`

    display:flex;
    align-items:center;

    font-size:15px;
    //nao quebra no espaco em branco
    white-space:nowrap;

    >strong{
        margin-right:5px;
    }
    >span,time{
        color:var(--gray);
    }
    >strong,span{
            white-space:nowrap;
            //quando o texto nao caber na caixa ele e escondido
            text-overflow:ellipsis;
            overflow:hidden;
        }

`
export const Avatar = styled.div`

width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;


`
export const Status = styled.div`

        display:flex;
        align-items:center;

        font-size:14px;

        >svg{
            margin-right:5px;
        }
        //utiliza index para pegar um elemento filho
        &:nth-child(1){
            &,>svg path{
                color:var(--gray);
            }
        }
        &:nth-child(2){
            color:var(--retweet);
            svg path{
                fill:var(--retweet)
            }
        }
        &:nth-child(3){ 
            color:var(--like);
            svg{
                fill:var(--like)
            }
        }

`
export const Dot = styled.div`

    background:var(--gray);
    width:2px;
    height:2px;
    margin:0 10px;

`
export const Description = styled.div`

    font-size:14px;
    margin-top:4px;

`
export const Content = styled.div`

    display:flex;
    flex-direction:column;

    width:100%;
    margin-top:2px;
    padding-left:59px;

`
export const ImageContent = styled.div`

    margin-top:12px;    
    width:100%;
    height:min(235px,max(175px,41vw));

    background:var(--outline);
    border-radius: 14px;

    cursor:pointer;
    &:hover{
        //lembrar dessa propriedade
        opacity:0.7;
    }

`
export const Icons = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    // 11px top , auto right e left , 0 bottom
    margin:11px auto 0;
    width:100%; //mobile

    @media(min-width:330px){
        width:63%;
    }
    >div{
        cursor:pointer;
        &:hover{
            opacity:0.7;
        }
    }
`

const iconCSS = css`
    width:19px;
    height:19px;

`
export const CommentIcon = styled(Chat)`${iconCSS}`
export const RetweetIcon = styled(Rocketseat)`${iconCSS}`
export const LikeIcon = styled(Favorite)`${iconCSS}`