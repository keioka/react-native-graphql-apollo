import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  StatusBar,
  Dimensions,
  ScrollView
} from "react-native";
import { Video } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { Camera, Permissions } from "expo";
import * as Animatable from "react-native-animatable";

import { withRouter } from "react-router-native";
import Button from "../../components/Button";

import styles from "./NewAnswer.style";

class NewAnswer extends Component {
  state = {
    hasCameraPermission: null,
    isRecording: false,
    video: null,
    type: Camera.Constants.Type.back
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  handleBack = () => {
    const { history } = this.props;
    history.push("/main/selectQuestion");
  };

  handleRecordVideo = async () => {
    let video;
    if (this.camera && !this.state.isRecording) {
      console.log("start recording");
      this.setState(
        {
          isRecording: true
        },
        async () => {
          video = await this.camera.recordAsync({
            maxDuration: 60,
            maxFileSize: 1000000
          });
          console.log("video start --->", video);
          this.setState({
            video
          });
        }
      );
    } else if (this.state.isRecording) {
      console.log("stop recording");
      await this.camera.stopRecording();
      console.log("video -->", video);
      await this.setState({
        isRecording: false
      });
    }
  };

  renderCamera() {
    return (
      <Camera
        style={{ flex: 1 }}
        type={this.state.type}
        ref={ref => {
          this.camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "space-between",
            padding: 20,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center"
            }}
            onPress={() => {
              this.setState({
                type:
                  this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
              });
            }}
          >
            <Ionicons
              name="ios-reverse-camera-outline"
              size={36}
              style={{ marginBottom: 10, color: "white" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: 64,
              width: 64,
              height: 64
            }}
            onPress={this.handleRecordVideo}
          >
            <Ionicons
              name="ios-videocam-outline"
              color={this.state.isRecording ? "red" : "white"}
              size={36}
              style={{ marginBottom: 10, color: "white" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center"
            }}
            onPress={this.handleBack}
          >
            <Ionicons
              name="ios-close-circle-outline"
              size={36}
              style={{ marginBottom: 10, color: "white" }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }

  renderForm() {
    return (
      <View>
        <Video
          ref={ref => (this.video = ref)}
          source={{ uri: this.state.video.uri }} // Can be a URL or a local file.
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{
            width: 400,
            height: 400
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({ video: null });
          }}
        >
          <Button title="Back" />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { history } = this.props;
    const { width, height } = Dimensions.get("window");
    return (
      <View style={styles.background}>
        {this.state.video && !this.state.isRecording
          ? this.renderForm()
          : this.renderCamera()}
      </View>
    );
  }
}

NewAnswerWithAnimatable = Animatable.createAnimatableComponent(NewAnswer);
export default withRouter(NewAnswerWithAnimatable);
