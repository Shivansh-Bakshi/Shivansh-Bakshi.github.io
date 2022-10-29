import * as React from 'react';
import Layout from '../components/layout';
import Typewriter from "typewriter-effect";
import { Container, Body, Footer, Header, Message } from '../sc/intro';
import Card from '../components/card';
import { useVisibility } from '../utils/hooks';

const IntroComponent = ({ visibleRef }) => {
    return(
        <Container ref={visibleRef}>
            <Message>
                <Header>Hi! I am</Header>
                <Body>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString(" Shivansh Bakshi")
                        .start()
                    }}
                    />
                </Body>
                <Footer>Undergrad | CS | Developer | Pianist</Footer>
            </Message>
        </Container>
    )
}

const IndexPage = () => {
    const [isIntroVisible, introElementRef] = useVisibility();

    return(
        <div>
            <IntroComponent visibleRef={introElementRef}/>
            <Layout navbarFixedToTop={!isIntroVisible}>
                <Card>
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                    Lorem ipsum dolor sit amet. Ut optio alias et ducimus sint est quae iure rem consequatur enim qui officiis quaerat. Qui tenetur libero est dolores dolor est optio amet eum ipsam impedit? Et quia temporibus est reprehenderit porro sit corporis doloremque qui pariatur commodi! In explicabo architecto ad dolores provident ea vero placeat.
                </Card>
            </Layout>
        </div>

    )
}

export const Head = () => {
    return(
        <title>Shivansh Bakshi | CS</title>
    )
}

export default IndexPage