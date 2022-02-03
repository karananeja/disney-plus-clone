import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container className='detail'>
      <Background>
        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3034/1103034-v-afeac4412b5d' />
      </Background>
      <ImageTitle>
        <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3034/1103034-v-afeac4412b5d' />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        earum inventore accusamus culpa officiis excepturi aliquid quod
        molestiae quasi natus.
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  cursor: pointer;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  cursor: pointer;
  margin-right: 16px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  span {
    font-size: 30px;
  }

  &:hover {
    background: rgb(198, 198, 198);
    color: var(--black-color);
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
`;
