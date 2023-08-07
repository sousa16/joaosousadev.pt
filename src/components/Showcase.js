import React from 'react'

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    GreyText,
    IconContainer,
} from '../styles/Global.styled';

// import showcase styles
import {
    ShowcaseImageCard,
} from '../styles/Showcase.styled'

// import react icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

// import asset
import ShowcaseImg from '../assets/showcase-img.png'


const Showcase = () => {
  return (
    <PaddingContainer 
        id='home'
        left='3%'
        right='10%'
        top='15%'
        bottom='10%'
        responsiveLeft='1rem'
        responsiveRight='1rem'
        responsiveTop='8rem'
    >
        <FlexContainer align='left' fullWidthChild>

            {/* --left-content-- */}
            <div>
                <Heading as='h4' size='h4'>Hello!</Heading>

                <Heading
                    as='h2'
                    size='h2'
                    top='0.5rem'
                    bottom='1rem'
                >
                    I'm <GreyText>João Sousa</GreyText>
                </Heading>

                <Heading as='h3' size='h3'>
                    I'm a <GreyText>Computer Science Student</GreyText>
                </Heading>

                <ParaText as='p' top='2rem' bottom='4rem'>
                    Hello, my name is João Sousa and I'm a Computer Science student on my third year
                    at Instituto Superior Técnico. 
                    I am mainly interested in creating websites and web applications, as well as
                    mobile apps. I also have a genuine interest in cybersecurity.
                </ParaText>

                {/* --social-icons-- */}
                <FlexContainer gap='20px' responsiveFlex>
                    <a href='https://www.linkedin.com/in/joao-p-c-sousa/' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <FaLinkedin />
                        </IconContainer>
                    </a>
                    <a href='https://github.com/sousa16' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <FaGithub />
                        </IconContainer>
                    </a>

                    <a href='https://www.instagram.com/joaosousa16_/' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <FaInstagram />
                        </IconContainer>
                    </a>

                    <a href='mailto:jpcsousa@outlook.pt' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <AiOutlineMail />
                        </IconContainer>
                    </a>
                </FlexContainer>
            </div>

            {/* --right-content-- */}
            <FlexContainer 
                
                justify='flex-end'
            >
                <ShowcaseImageCard>
                    <img src={ShowcaseImg}
                    alt='showcase' />
                </ShowcaseImageCard>
            </FlexContainer>

        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase