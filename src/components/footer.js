import * as React from 'react';
import { Container, Content, Socials, DimText, Updated } from '../sc/footer';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return(
        <Container>
            <Content>
                <Socials>
                    <SocialIcon 
                        bgColor='transparent'
                        fgColor='#d1b40f'
                        url='https://www.linkedin.com/in/shivansh-bakshi/'/>
                    <SocialIcon 
                        bgColor='transparent'
                        fgColor='#d1b40f'
                        url='https://github.com/Shivansh-Bakshi'/>
                    <SocialIcon 
                        bgColor='transparent'
                        fgColor='#d1b40f'
                        url='mailto:shivansh.bakshi@gmail.com'
                    />
                </Socials>
                <Updated>
                    <p><DimText>Last Updated </DimText>Oct 2022</p>
                </Updated>
                <p>Copyright © 2022 <DimText>Shivansh Bakshi</DimText></p>
            </Content>
        </Container>
    )
}

export default Footer