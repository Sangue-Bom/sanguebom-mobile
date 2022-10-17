import { Container, Header, ProfileView, Body, ProfilePicture, UserName, Bio, RankingPosition, RankingText, ScrollBody } from "./style";
import { ScrollView, Text } from "react-native";
import Gradient from "../../components/Grandient/Gradient";
import { CardText } from "../../components/Card/TextCard/style";
import TextCard from "../../components/Card/TextCard";

export default function ProfileScreen({ navigation, route }) {
    console.log(route.params.user);
    return (
        <ScrollBody>
            <Container>
                <Header>
                    <Gradient />
                </Header>
                <ProfileView>
                    <ProfilePicture source={require("../../assets/user.png")} />
                    <UserName>{route.params.user.name}</UserName>
                    <Bio>{route.params.user.bio}</Bio>
                    <RankingPosition>
                        <Gradient styleCustom={{ borderRadius: 8 }}>
                            <RankingText>
                                Ranking {route.params.user.position}º
                            </RankingText>
                        </Gradient>
                    </RankingPosition>
                </ProfileView>
                <Body>
                    <TextCard title={route.params.user.name} onPress={() => { }} logo={require("../../assets/user.png")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </TextCard>


                </Body>
            </Container>
        </ScrollBody>
    );
}
