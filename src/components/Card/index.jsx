import { FiThumbsUp } from 'react-icons/fi';
import profilePic from '../../assets/profile.png';
import articleBanner from '../../assets/article-banner.png';
import React from 'react'
import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={articleBanner}/>
      <Content>
        <UserInfo>
          <UserPicture src={profilePic}/>
         <div>
          <h4>Tennison Capra</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de HTML e CSS no bootcamp da DIO...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }