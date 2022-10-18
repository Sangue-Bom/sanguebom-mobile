import {
  View,
  RefreshControl,
  Text,
  Image,
  Divider,
  StyleSheet,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import logo from "../../assets/user.png";
import TextCard from "../../components/Card/TextCard";
import { TextArea } from "../../components/InputArea/style";
import UserCombo from "../../components/UserCombo";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import api from "../../services/api";
import insertionSortUserByPoints from "../../utils/insertionSortByPoints.js";
import InputField from "../../components/InputArea";

export default function Ranking({ navigation, route }) {
  // Map Users
  const [allUsers, setAllUsers] = useState([
    {
      user_name: "",
      user_email: "",
      user_blood_type: "",
      user_id: "",
      user_pic: "",
      user_points: 0,
    },
  ]);

  const [usersInList, setUsersInList] = useState([
    {
      user_name: "",
      user_email: "",
      user_blood_type: "",
      user_id: "",
      user_pic: "",
      user_points: 0,
    },
  ]);

  const user = {
    user_name: route.params.user.user_name,
    user_email: route.params.user.user_email,
    user_blood_type: route.params.user.user_tipo_sanguineo,
    user_id: route.params.user.user_id_pk,
    user_pic: route.params.user.user_profile_pic,
    user_points: route.params.user.user_points,
  };

  useEffect(() => {
    function loadUsers() {
      api
        .get("/users")
        .then((response) => {
          setAllUsers(insertionSortUserByPoints(response.data));
          setUsersInList(insertionSortUserByPoints(response.data));
        })
        .catch((error) => {
          console.log("erro ao carregar usuários!", error);
        });
    }
    loadUsers();
  }, []);

  
  function SeachUserByName(name) {
    if (name == "") {
      setUsersInList(allUsers);
    } else {
      let users = allUsers.filter((user) => {
        return user.user_name.toLowerCase().includes(name.toLowerCase());
      });
      setUsersInList(users);
    }

    console.log(usersInList);
  }
  const positionUser = allUsers.map((userObject, index) => {
    if(userObject.user_email == user.user_email){
        return index+1;
    }
  })
  const [nameFilter, setNameFilter] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ranking</Text>
        <InputField
          placeholder="Buscar perfil..."
          style={styles.inputBuscar}
          onChangeText={(text) => {
            setNameFilter(text);
            SeachUserByName(text);
          }}
        />
      </View>

      <View style={styles.profileList}>
        {/* Perfil do usuário */}
        {
          // Remover bloco abaixo caso filtro não esteja vazio

          nameFilter == "" ? (
            <>
              <View style={styles.profile1}>
                <Image source={logo} style={styles.profilePic} />
                <View style={styles.profileRankingPos} variant="primary">
                  <Text style={styles.profileRankingPosText}>{positionUser}°</Text>
                </View>

                <View style={styles.profileInfo}>
                  <Text style={styles.profileName}>{user.user_name}</Text>
                  <Text style={styles.profilePoints}>
                    {user.user_points} pontos
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />
            </>
          ) : (
            <View></View>
          )
        }

        {/* Lista de perfis */}
        <FlatList
          style={styles.profileListView}
          data={usersInList}
          keyExtractor={(user) => user.user_id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: user, index}) => (
            <View style={styles.profile1} key={index}>
              <Image source={logo} style={styles.profilePic} />
              <View style={styles.profileRankingPos} variant="primary">
                <Text style={styles.profileRankingPosText}>
                  {usersInList.indexOf(user) + 1}º
                </Text>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{user.user_name}</Text>
                <Text style={styles.profilePoints}>
                  {user.user_points} pontos
                </Text>
              </View>
            </View>
          )}
        />

        {/* <FlatList
                    data={allUsers}
                    keyExtractor={item => item.user_id}
                    renderItem={({ item }) => (
                        <View key={item.user_id + "list_item"} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={{ uri: item.user_pic }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>{item.user_name}</Text>
                            </View>
                            <Text style={{ fontSize: 20, marginRight: 10 }}>{item.user_points}</Text>

                        </View>
                    )}
                /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    width: "100%",
    height: 80,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  profileInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    color: "#FE5D97",
    fontWeight: "bold",
  },
  profilePoints: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  profileRankingPos: {
    width: 30,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#FE5D97",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    left: -20,
  },
  profileRankingPosText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 60,
    color: "#FE5D97",
  },
  inputBuscar: {
    height: 50,
    width: "100%",
  },
  profileList: {
    flex: 1,
    width: "80%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#FE5D97",
    borderRadius: 10,
  },
  profileListView: {
    width: "100%",
    height: "100%",
  },
  divider: {
    width: "70%",
    height: 1,
    backgroundColor: "#FE5D97",
    margin: 10,
  },
});
