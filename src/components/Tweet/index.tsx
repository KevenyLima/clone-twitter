import {
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Header,
    Avatar,
    Status,
    Dot,
    Description,
    Content,
    ImageContent,
    Icons,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from "./styles"
const Tweet:React.FC  = ()=>{
    return (
        <Container>
            <Retweeted>
            <RocketseatIcon/> Voce retweetou
            </Retweeted>
            <Body>
                <Avatar/>
                <Content>
                    
                <Header>
                    <strong>Rocketseat</strong>
                    <span >@rocketseat</span> 
                    <Dot/> 
                    <time>
                    27 de jun
                    </time>
            </Header>
            <Description>Foguete nao tem re</Description>
            
            <ImageContent/>
                
                <Icons>
                    <Status>
                        <CommentIcon/>17
                    </Status>
                    <Status>
                        <RetweetIcon/>76
                    </Status>
                    <Status>
                        <LikeIcon/>999
                    </Status>
                </Icons>

                </Content>
            </Body>
        </Container>
    )
}

export default Tweet