import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import ReactPlayer from 'react-player';

const Detail = () => {
  const [movie, setMovie] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        }
      });
  }, [id]);

  return (
    <Container className='detail'>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt={movie.title} />
          </Background>
          <Title>
            <h1>{movie.title}</h1>
          </Title>
          <Controls>
            <PlayButton>
              <img src='/images/play-icon-black.png' />
              <span>Play</span>
            </PlayButton>
            <TrailerButton onClick={() => setShowTrailer(!showTrailer)}>
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
          <SubTitle>{movie.subtitle}</SubTitle>
          <Description>{movie.description}</Description>
          {showTrailer && (
            <VideoTrailer>
              <ReactPlayer url={movie.trailerLink} controls={true} />
            </VideoTrailer>
          )}
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(90vh - 70px);
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
    object-fit: fill;
  }
`;

const Title = styled.div`
  width: 35vw;
  margin: 60px 0 30px;
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

const SubTitle = styled.h3`
  color: rgb(249, 249, 249);
  min-height: 20px;
  margin-top: 26px;
  opacity: 0.8;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
`;

const VideoTrailer = styled.div`
  margin: 20px 0;
`;
