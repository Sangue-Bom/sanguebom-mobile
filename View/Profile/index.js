import {
  Container,
  Header,
  ProfileView,
  Body,
  ProfilePicture,
  UserName,
  Bio,
  RankingPosition,
  RankingText,
  ScrollBody,
} from "./style";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import Gradient from "../../components/Grandient/Gradient";
import { CardText } from "../../components/Card/TextCard/style";
import TextCard from "../../components/Card/TextCard";
import api from "../../services/api";

export default function ProfileScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPostsByUser() {
      await api
        .get(`/posts/user/${route.params.user.user_id}`)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getPostsByUser();
  }, [route]);
  console.log(posts)
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
              <RankingText>Ranking {route.params.user.position}º</RankingText>
            </Gradient>
          </RankingPosition>
        </ProfileView>
        <Body>
          {posts.map((post, index) => {
            return (
              <TextCard title={route.params.user.name} key={index}>
                {post.post_text}
              </TextCard>
            );
          })}
          {/* <TextCard title={route.params.user.name} onPress={() => { }} logo={require("../../assets/user.png")}>
                        
                    </TextCard> */}
        </Body>
      </Container>
    </ScrollBody>
  );
}
