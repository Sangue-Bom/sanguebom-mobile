import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import icon from "../../assets/icone-edit.png";
import userFoto from "../../assets/user.png";
import Button from "../../components/Button";
import Gradient from "../../components/Grandient/Gradient";
import InputField from "../../components/InputField";
import api from "../../services/api";
import * as ImagePicker from "expo-image-picker";

export default function SignUp({ navigation }) {
  const options = {
    mediaType: "photo",
    cameraType: "front",
    includeBase64: true,
  };
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_rua: "",
    user_cep: "",
    user_cidade: "",
    user_bairro: "Parque dez",
    user_num_predial: "",
    user_unidade_federal: "",
    user_tipo_sanguineo: "",
    user_profile_pic: "",
    user_nascimento: "",
    user_points: 0,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleSingUp() {
    if (confirmPassword == user.user_password) {
      api
        .post("/create-user", user)
        .then((response) => {
          navigation.navigate("Login");
        })
        .catch((error) => {
            console.log(user);
          console.log("erro ao criar usuário!", error);
        });
    }
  }

  // Image picker

  async function pickImage() {
    const options = {
      mediaType: "photo",
      base64: true,
    };

    let result = await ImagePicker.launchImageLibraryAsync(options);
    if (!result.cancelled) {
      let base64Img = result.base64;
      setUser({
        ...user,
        user_profile_pic: base64Img,
      });
    }
  }
  // console.log(user)
  return (
    <ScrollView>
      <Gradient>
        <View style={styles.container}>
          <Text style={styles.title}>Cadastrar</Text>
          <View style={styles.imgSelector}>
            <Image
              source={
                user.user_profile_pic
                  ? { uri: "data:image/jpeg;base64, " + user.user_profile_pic }
                  : userFoto
              }
              style={styles.logo}
            />
            <TouchableOpacity
              onPress={pickImage}
              style={styles.elementInsideFoto}
            >
              <Image source={icon} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.formGroup}>
            {/* Form Group Title */}
            <Text style={styles.formGroupTitle}>Dados Pessoais</Text>
            <View style={styles.flexRow}>
              <InputField
                placeholder={"Nome"}
                required={true}
                style={styles.input}
                onChangeText={(text) => setUser({ ...user, user_name: text })}
                autoCompleteType={"email"}
              />
              {/* <InputField placeholder={'Sobrenome'} required={true} style={styles.input2} onChangeText={(text) => setUser({...name, name: text})}/> */}
            </View>
            <InputField
              placeholder={"E-mail"}
              required={true}
              style={styles.input}
              onChangeText={(text) => setUser({ ...user, user_email: text })}
              autoCompleteType={"email"}
              keyboardType={"email-address"}
            />
            <InputField
              placeholder={"Senha"}
              required={true}
              style={styles.input}
              onChangeText={(text) => setUser({ ...user, user_password: text })}
              secureTextEntry={true}
            />
            <InputField
              placeholder={"Confirmar Senha"}
              required={true}
              style={styles.input}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
            />
            <View style={styles.flexRow}>
              <InputField
                placeholder={"Tipo Sanguíneo"}
                required={true}
                style={styles.input2}
                onChangeText={(text) =>
                  setUser({ ...user, user_tipo_sanguineo: text })
                }
              />
              <InputField
                placeholder={"Data de Nascimento"}
                required={true}
                style={styles.input2}
                onChangeText={(text) =>
                  setUser({ ...user, user_nascimento: text })
                }
              />
            </View>

            {/* Form Group Title */}
            <Text style={styles.formGroupTitle}>Endereço</Text>
            <View style={styles.flexRow}>
              <InputField
                placeholder={"Endereço"}
                required={true}
                style={styles.input2}
                onChangeText={(text) => setUser({ ...user, user_rua: text })}
              />
              <InputField
                placeholder={"Nº"}
                required={true}
                style={styles.input3}
                onChangeText={(text) =>
                  setUser({ ...user, user_num_predial: text })
                }
                keyboardType={"number-pad"}
              />
              <InputField
                placeholder={"Bairro"}
                required={true}
                style={styles.input4}
              />
            </View>
            <View style={styles.flexRow}>
              <InputField
                placeholder={"CEP"}
                required={true}
                style={styles.input4}
                onChangeText={(text) => setUser({ ...user, user_cep: text })}
                keyboardType={"number-pad"}
              />
              <InputField
                placeholder={"Cidade"}
                required={true}
                style={styles.input2}
                onChangeText={(text) => setUser({ ...user, user_cidade: text })}
              />
              <InputField
                placeholder={"UF"}
                required={true}
                style={styles.input3}
                onChangeText={(text) =>
                  setUser({ ...user, user_unidade_federal: text })
                }
              />
            </View>

            <Button onPress={handleSingUp}>cadastrar</Button>
            <TouchableOpacity
              onPress={() => {
                // Volta para a tela de login
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.forgotPasswordText}>
                Já possui uma conta? Faça login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Gradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  elementInsideFoto: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginRight: -10,
    marginTop: -20,
  },
  formGroup: {
    width: "88%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 5,
  },

  input2: {
    marginBottom: 5,
    marginEnd: "1%",
    width: "49.5%",
  },
  input3: {
    marginBottom: 5,
    marginEnd: "1%",
    width: "18.5%",
  },
  input4: {
    marginBottom: 5,
    marginEnd: "1%",
    width: "30%",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  middle: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
    marginTop: "15%",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  formGroupTitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    width: "100%",
    marginTop: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 40,
    textDecorationLine: "underline",
  },
});
