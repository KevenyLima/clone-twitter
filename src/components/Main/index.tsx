import React from 'react';


import { Container, Header,BackIcon,ProfileInfo,ButtonMenu,HomeIcon,BellIcon,EmailIcon,SearchIcon} from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
          <button>
              <BackIcon/>
          </button>

              <ProfileInfo>
                  <strong>Guilherme Rodz</strong>
                  <span>612 tweets</span>
              </ProfileInfo>
          </Header>
    {/* <ProfilePage/> */}

    <ButtonMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
    </ButtonMenu>
      </Container>
  )
}

export default Main;