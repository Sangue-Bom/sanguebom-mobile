import { View, RefreshControl, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/user.png';
import TextCard from '../../components/Card/TextCard';
import { TextArea } from '../../components/InputArea/style';
import UserCombo from '../../components/UserCombo';
import Button from '../../components/Button';
import { Container, Divider, Body, Header, HeaderRight } from './style';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import insertionSortUserByPoints from '../../utils/insertionSortByPoints.js';



export default function Menu({ navigation, route }) {

    // Map Users
    const [allUsers, setAllUsers] = useState([
        {
            user_name: '',
            user_email: '',
            user_blood_type: '',
            user_id: '',
            user_pic: '',
        }
    ]);

    const user = {
        user_name: route.params.user.user_name,
        user_email: route.params.user.user_email,
        user_blood_type: route.params.user.user_tipo_sanguineo,
        user_id: route.params.user.user_id_pk,
        user_pic: route.params.user.user_profile_pic,
    }

    const [owner, setOwner] = useState(user);



    useEffect(() => {
        function loadUsers() {
            api.get("/users").then(response => {
                setAllUsers(insertionSortUserByPoints(response.data));
            }).catch(error => {
                console.log("erro ao carregar usuários!", error);
            });
        }
        loadUsers();
    }, []);



    // Message
    const [message, setMessage] = useState(
        {
            post_type: 1,
            post_text: '',
            post_points_to_share: 0,
            post_owner_id: user.user_id,
        }
    );


    function sendPost() {

        api.post("/create-post", message).then(response => {
            loadPosts();
        }).catch(error => {
            console.log("erro ao enviar post!", error);
        });
    }

    const [allPosts, setAllPosts] = useState();

    function loadPosts() {
        api.get("/posts").then(response => {
            const shortedPostsById = response.data.sort((a, b) => {
                return b.post_id_pk - a.post_id_pk;
            });

            setAllPosts(shortedPostsById);

            setRefreshing(false);
        }).catch(error => {
            console.log("erro ao carregar posts!", error);
        });
    }

    useEffect(() => {
        loadPosts();
    }, []);
    const [refreshing, setRefreshing] = useState(true);

    function checkMessage() {
        if (message.post_text.length > 0) {
            return true;
        }
        return false;
    }
    return (
        <Container>
            <Header>
                <HeaderRight>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <UserCombo sourceImg={user.user_pic ? { uri: 'data:image/jpeg;base64, ' + user.user_pic } : logo} onpress={() => {
                            navigation.navigate('Perfil', {
                                user: {
                                    name: user.user_name,
                                    email: user.user_email,
                                    bio: 'Stay humble. Be kind. Work hard.',
                                    position: '3'
                                }
                            });
                        }} position="3" />
                        <Divider />

                        {
                            allUsers.map((user, index) => {
                                return (
                                    <UserCombo key={index} sourceImg={user.user_profile_pic ? { uri: 'data:image/jpeg;base64, ' + user.user_profile_pic } : logo} onpress={() => {
                                        navigation.navigate('Perfil', {
                                            user: {
                                                name: user.user_name,
                                                email: user.user_email,
                                                bio: 'Stay humble. Be kind. Work hard.',
                                                position: index + 1
                                            }
                                        });
                                    }} position={index + 1} />
                                );
                            })
                        }



                    </ScrollView>
                </HeaderRight>

            </Header>

            <Body>
                {/* TextArea Send Message */}
                <View style={
                    {
                        width: '80%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: 80,
                        marginBottom: 30,
                    }
                }>

                    <TextArea
                        placeholder="Send Message"
                        placeholderTextColor="#FE5D97"
                        multiline={true}
                        value={message.post_text}
                        onChangeText={(text) => {
                            setMessage({
                                ...message,
                                post_text: text,
                            });


                        }}

                    />
                    <Button onPress={() => {

                        if (checkMessage()) {
                            sendPost();
                            setMessage({
                                ...message,
                                post_text: '',
                            });
                        } else {
                            console.log("mensagem vazia");
                        }
                    }} variant="send">send</Button>

                </View>


                

                <FlatList
                    nestedScrollEnabled={true}
                    style={
                        {
                            width: '100%',
                            height: 500,
                            padding: 0,
                            margin: 0,
                            marginBottom: 100,
                        }
                    }
                    alignItems="center"
                    data={allPosts}
                    keyExtractor={(post) => post.post_id_pk}
                    renderItem={(post) => {

                        const postOwner = allUsers.find((user) => {
                            return user.user_id_pk === post.item.post_owner_id;
                        });

                        return (

                                <TextCard
                                    title={
                                        postOwner ? postOwner.user_name : 'Loading...'
                                    }
                                     
                                    logo={{ uri: 'data:image/jpeg;base64, ' + logo }}
                                    key={post.item.post_id_pk}
                                    style={
                                        {
                                            flex: 1
                                        }
                                    }
                                    commentCount="0"
                                >
                                    {post.item.post_text}
                                </TextCard>

                                // <TextCard
                                //     title={postOwner.user_name}
                                //     logo={{ uri: 'data:image/jpeg;base64, ' + logo }}
                                //     key={post.item.post_id_pk}
                                //     style={
                                //         {
                                //             flex: 1
                                //         }
                                //     }
                                //     variant="liked"
                                //     commentCount={post.item.post_id_pk}
                                // >
                                //     {post.item.post_text}
                                // </TextCard>

                        )
                    }}
                    contentContainerStyle={
                        {
                            alignItems: 'center',
                            justifyContent: 'center',
                        }
                    }
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={loadPosts}
                            progressBackgroundColor="#FE5D97"
                            colors={["#FFF"]}
                            progressViewOffset={10}
                        />
                    }

                />



            </Body>
        </Container>
    );
}
