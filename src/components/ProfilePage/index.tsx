import React from 'react';
import { 
  Container,
  ProfileInfo,
  ProfileTag,
  ProfileDescription,
  ProfileFollows,
  Tweets,
  ProfileAvatar,
  CakeIcon,
  LocationIcon,
  ProfileDatas,
  EditButton,
  ProfileButton
} from './styles';
import Button from "../Button"


const ProfilePage: React.FC = () => {
  return (
    <Container>
        <ProfileAvatar>
          <div></div>
        </ProfileAvatar>
        <ProfileButton>
            <EditButton outlined>Editar Perfil</EditButton>
        </ProfileButton>
        <ProfileInfo>
            <h1>Guilherme Rodz</h1>
            <ProfileTag>@guilherme_rodz</ProfileTag>
            <ProfileDescription>developer at <span>@rocketseat</span></ProfileDescription>
            <ProfileDatas>
            <div> <LocationIcon/>são paulo, Brasil</div>
            <div><CakeIcon/> Nascido(a) em 21 de junho de 2001</div>
            </ProfileDatas>
        </ProfileInfo>
        <ProfileFollows>
            <div>seguindo <strong>94</strong></div>
            <div> <strong>672</strong> seguidores</div>
        </ProfileFollows>
        <Tweets><div>tweets</div></Tweets>
    </Container>
  )
}

export default ProfilePage;