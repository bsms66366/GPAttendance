import React from "react";
import {
  Dimensions,
  Image,
  Slider,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import { Asset } from "expo-asset";
import Constants from 'expo-constants';
import { Audio, Video } from "expo-av";
import * as Font from "expo-font";
import List from "../components/List";


import { MaterialIcons } from "@expo/vector-icons";
//import {FontAwesomeIcon} from 'expo-fontawesome';

class Icon {
  constructor(module, width, height) {
    this.module = module;
    this.width = width;
    this.height = height;
    Asset.fromModule(this.module).downloadAsync();
  }
}

class PlaylistItem {
  constructor(name, uri, isVideo) {
    this.name = name;
    this.uri = uri;
    this.isVideo = isVideo;
  }
}
const PLAYLIST = [
new PlaylistItem(
    "Welcome to the BSMS Anatomy Department",
    "https://firebasestorage.googleapis.com/v0/b/anatomyinterface.appspot.com/o/2_Anatomy%20at%20BSMS%20with%20Dr%20Claire%20Smith.mp4?alt=media&token=ae88c394-b068-4ca0-a104-433712c41563",
    true
  ),
  new PlaylistItem(
    "Anatomy Dissection at BSMS",
    "https://firebasestorage.googleapis.com/v0/b/anatomyinterface.appspot.com/o/Dissection%20BSMS.mp4?alt=media&token=3ef1f6f4-20ea-4254-a662-eb4d82865156",
    true
  ),
  new PlaylistItem(
    "102 Vodcast",
    "https://firebasestorage.googleapis.com/v0/b/anatomyinterface.appspot.com/o/102-Vodcast%201.mp4?alt=media&token=2c8c8357-b815-48d5-81e4-4378642a3b23",
    true
  )

];


const ICON_THROUGH_EARPIECE = "speaker-phone";
const ICON_THROUGH_SPEAKER = "speaker";

const ICON_PLAY_BUTTON = new Icon(
  require("../assets/videoIcons/play-outline.png"),
  34,
  51
);
const ICON_PAUSE_BUTTON = new Icon(
  require("../assets/videoIcons/pause.png"),
  34,
  51
);
const ICON_STOP_BUTTON = new Icon(
  require("../assets/videoIcons/stop-outline.png"),
  22,
  22
);
const ICON_FORWARD_BUTTON = new Icon(
  require("../assets/videoIcons/play-forward-outline.png"),
  33,
  25
);
const ICON_BACK_BUTTON = new Icon(
  require("../assets/videoIcons/play-back-outline.png"),
  33,
  25
);

const ICON_LOOP_ALL_BUTTON = new Icon(
  require("../assets/videoIcons/loop_all_button.png"),
  77,
  35
);
const ICON_LOOP_ONE_BUTTON = new Icon(
  require("../assets/videoIcons/loop_one_button.png"),
  77,
  35
);

const ICON_MUTED_BUTTON = new Icon(
  require("../assets/videoIcons/volume-mute-outline.png"),
  67,
  58
);
const ICON_UNMUTED_BUTTON = new Icon(
  require("../assets/videoIcons/volume-high-outline.png"),
  67,
  58
);

const ICON_TRACK_1 = new Icon(require("../assets/videoIcons/track.png"), 166, 5);
const ICON_THUMB_1 = new Icon(require("../assets/videoIcons/ellipse-sharp.png"), 18, 19);
const ICON_THUMB_2 = new Icon(require("../assets/videoIcons/ellipse-sharp.png"), 15, 19);

const LOOPING_TYPE_ALL = 0;
const LOOPING_TYPE_ONE = 1;
const LOOPING_TYPE_ICONS = { 0: ICON_LOOP_ALL_BUTTON, 1: ICON_LOOP_ONE_BUTTON };

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const BACKGROUND_COLOR = "#282828";
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = "... loading ...";
const BUFFERING_STRING = "...buffering...";
const RATE_SCALE = 3.0;
const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.playbackInstance = null;
    this.state = {
      showVideo: false,
      playbackInstanceName: LOADING_STRING,
      loopingType: LOOPING_TYPE_ALL,
      muted: false,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: true,
      fontLoaded: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0,
      videoWidth: DEVICE_WIDTH,
      videoHeight: VIDEO_CONTAINER_HEIGHT,
      poster: false,
      useNativeControls: true,
      fullscreen: false,
      throughEarpiece: false
    };
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
        "cutive-mono-regular": require("../assets/fonts/CutiveMono-Regular.ttf")
      });
      this.setState({ fontLoaded: true });
    })();
  }

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      // this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const source = { uri: PLAYLIST[this.index].uri };
    const initialStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      shouldCorrectPitch: this.state.shouldCorrectPitch,
      volume: this.state.volume,
      isMuted: this.state.muted,
      isLooping: this.state.loopingType === LOOPING_TYPE_ONE
      // // UNCOMMENT THIS TO TEST THE OLD androidImplementation:
      // androidImplementation: 'MediaPlayer',
    };

    if (PLAYLIST[this.index].isVideo) {
      console.log(this._onPlaybackStatusUpdate);
      await this._video.loadAsync(source, initialStatus);
      // this._video.onPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
      this.playbackInstance = this._video;
      const status = await this._video.getStatusAsync();
    } else {
      const { sound, status } = await Audio.Sound.createAsync(
        source,
        initialStatus,
        this._onPlaybackStatusUpdate
      );
      this.playbackInstance = sound;
    }

    this._updateScreenForLoading(false);
  }

  _mountVideo = component => {
    this._video = component;
    this._loadNewPlaybackInstance(false);
  };

  _updateScreenForLoading(isLoading) {
    if (isLoading) {
      this.setState({
        showVideo: false,
        isPlaying: false,
        playbackInstanceName: LOADING_STRING,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        isLoading: true
      });
    } else {
      this.setState({
        playbackInstanceName: PLAYLIST[this.index].name,
        showVideo: PLAYLIST[this.index].isVideo,
        isLoading: false
      });
    }
  }

  _onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        loopingType: status.isLooping ? LOOPING_TYPE_ONE : LOOPING_TYPE_ALL,
        shouldCorrectPitch: status.shouldCorrectPitch
      });
      if (status.didJustFinish && !status.isLooping) {
        this._advanceIndex(true);
        this._updatePlaybackInstanceForIndex(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _onLoadStart = () => {
    console.log(`ON LOAD START`);
  };

  _onLoad = status => {
    console.log(`ON LOAD : ${JSON.stringify(status)}`);
  };

  _onError = error => {
    console.log(`ON ERROR : ${error}`);
  };

  _onReadyForDisplay = event => {
    const widestHeight =
      (DEVICE_WIDTH * event.naturalSize.height) / event.naturalSize.width;
    if (widestHeight > VIDEO_CONTAINER_HEIGHT) {
      this.setState({
        videoWidth:
          (VIDEO_CONTAINER_HEIGHT * event.naturalSize.width) /
          event.naturalSize.height,
        videoHeight: VIDEO_CONTAINER_HEIGHT
      });
    } else {
      this.setState({
        videoWidth: DEVICE_WIDTH,
        videoHeight:
          (DEVICE_WIDTH * event.naturalSize.height) / event.naturalSize.width
      });
    }
  };

  _onFullscreenUpdate = event => {
    console.log(
      `FULLSCREEN UPDATE : ${JSON.stringify(event.fullscreenUpdate)}`
    );
  };

 _setIndex(index) {
    this.index = index
      
  }

  _advanceIndex(forward) {
    this.index =
      (this.index + (forward ? 1 : PLAYLIST.length - 1)) % PLAYLIST.length;
  }

  async _updatePlaybackInstanceForIndex(playing) {
    this._updateScreenForLoading(true);

    this.setState({
      videoWidth: DEVICE_WIDTH,
      videoHeight: VIDEO_CONTAINER_HEIGHT
    });

    this._loadNewPlaybackInstance(playing);
  }

  _onPlayPausePressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync();
      } else {
        this.playbackInstance.playAsync();
      }
    }
  };

  _onStopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.stopAsync();
    }
  };

_onPlaylistPressed = (uri) => {
    if (this.playbackInstance != null) {
      this._setIndex(PLAYLIST.findIndex((item)=> item.uri === uri));
      this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    }
  };

  _onForwardPressed = () => {
    if (this.playbackInstance != null) {
      this._advanceIndex(true);
      this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    }
  };

  _onBackPressed = () => {
    if (this.playbackInstance != null) {
      this._advanceIndex(false);
      this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    }
  };

  _onMutePressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.setIsMutedAsync(!this.state.muted);
    }
  };

  _onLoopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.setIsLoopingAsync(
        this.state.loopingType !== LOOPING_TYPE_ONE
      );
    }
  };

  _onVolumeSliderValueChange = value => {
    if (this.playbackInstance != null) {
      this.playbackInstance.setVolumeAsync(value);
    }
  };

  _trySetRate = async (rate, shouldCorrectPitch) => {
    if (this.playbackInstance != null) {
      try {
        await this.playbackInstance.setRateAsync(rate, shouldCorrectPitch);
      } catch (error) {
        // Rate changing could not be performed, possibly because the client's Android API is too old.
      }
    }
  };

  _onRateSliderSlidingComplete = async value => {
    this._trySetRate(value * RATE_SCALE, this.state.shouldCorrectPitch);
  };

  _onPitchCorrectionPressed = async value => {
    this._trySetRate(this.state.rate, !this.state.shouldCorrectPitch);
  };

  _onSeekSliderValueChange = value => {
    if (this.playbackInstance != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.playbackInstance.pauseAsync();
    }
  };

  _onSeekSliderSlidingComplete = async value => {
    if (this.playbackInstance != null) {
      this.isSeeking = false;
      const seekPosition = value * this.state.playbackInstanceDuration;
      if (this.shouldPlayAtEndOfSeek) {
        this.playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        this.playbackInstance.setPositionAsync(seekPosition);
      }
    }
  };

  _getSeekSliderPosition() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return (
        this.state.playbackInstancePosition /
        this.state.playbackInstanceDuration
      );
    }
    return 0;
  }

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  _getTimestamp() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(
        this.state.playbackInstancePosition
      )} / ${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
    }
    return "";
  }

  _onPosterPressed = () => {
    this.setState({ poster: !this.state.poster });
  };
  _onUseNativeControlsPressed = () => {
    this.setState({ useNativeControls: !this.state.useNativeControls });
  };

  _onFullscreenPressed = () => {
    try {
      this._video.presentFullscreenPlayer();
    } catch (error) {
      console.log(error.toString());
    }
  };

  _onSpeakerPressed = () => {
    this.setState(
      state => {
        return { throughEarpiece: !state.throughEarpiece };
      },
      ({ throughEarpiece }) =>
        Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          playThroughEarpieceAndroid: throughEarpiece
        })
    );
  };

  render() {
    return !this.state.fontLoaded ? (
      <View style={styles.emptyContainer} />
    ) : (
      <View style={styles.container}>
        <View />
        <View style={styles.nameContainer}>
          <Text style={[styles.text, { color: '#bcba40',fontFamily: "cutive-mono-regular" }]}>
            {this.state.playbackInstanceName}
          </Text>
        </View>
        <View style={styles.space} />
        <View style={styles.videoContainer}>
          <Video
            ref={this._mountVideo}
            style={[
              styles.video,
              {
                opacity: this.state.showVideo ? 1.0 : 0.0,
                width: this.state.videoWidth,
                height: this.state.videoHeight
              }
            ]}
            resizeMode={Video.RESIZE_MODE_CONTAIN}
            onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
            onLoadStart={this._onLoadStart}
            onLoad={this._onLoad}
            onError={this._onError}
            onFullscreenUpdate={this._onFullscreenUpdate}
            onReadyForDisplay={this._onReadyForDisplay}
            useNativeControls={this.state.useNativeControls}
          />
        </View>
        <View
          style={[
            styles.playbackContainer,
            {
              opacity: this.state.isLoading ? DISABLED_OPACITY : 1.0
            }
          ]}
        >
          <Slider
            style={styles.playbackSlider}
            trackImage={ICON_TRACK_1.module}
            thumbImage={ICON_THUMB_1.module}
            value={this._getSeekSliderPosition()}
            onValueChange={this._onSeekSliderValueChange}
            onSlidingComplete={this._onSeekSliderSlidingComplete}
            disabled={this.state.isLoading}
          />
          <View style={styles.timestampRow}>
            <Text
              style={[
                styles.text,
                styles.buffering,
                { color: '#bcba40', fontFamily: "cutive-mono-regular" }
                
              ]}
            >
              {this.state.isBuffering ? BUFFERING_STRING : ""}
            </Text>
            <Text
              style={[
                styles.text,
                styles.timestamp,
                { color: '#bcba40',fontFamily: "cutive-mono-regular" }
              ]}
            >
              {this._getTimestamp()}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.buttonsContainerBase,
            styles.buttonsContainerTopRow,
            {
              opacity: this.state.isLoading ? DISABLED_OPACITY : 1.0
            }
          ]}
        >
          <TouchableHighlight
            underlayColor={BACKGROUND_COLOR}
            style={styles.wrapper}
            onPress={this._onBackPressed}
            disabled={this.state.isLoading}
          >
            <Image style={styles.button} source={ICON_BACK_BUTTON.module} />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={BACKGROUND_COLOR}
            style={styles.wrapper}
            onPress={this._onPlayPausePressed}
            disabled={this.state.isLoading}
          >
            <Image
              style={styles.button}
              source={
                this.state.isPlaying
                  ? ICON_PAUSE_BUTTON.module
                  : ICON_PLAY_BUTTON.module
              }
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={BACKGROUND_COLOR}
            style={styles.wrapper}
            onPress={this._onStopPressed}
            disabled={this.state.isLoading}
          >
            <Image style={styles.button} source={ICON_STOP_BUTTON.module} />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={BACKGROUND_COLOR}
            style={styles.wrapper}
            onPress={this._onForwardPressed}
            disabled={this.state.isLoading}
          >
            <Image style={styles.button} source={ICON_FORWARD_BUTTON.module} />
          </TouchableHighlight>
        </View>
        <View
          style={[
            styles.buttonsContainerBase,
            styles.buttonsContainerMiddleRow
          ]}
        >
          <View style={styles.volumeContainer}>
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onMutePressed}
            >
              <Image
                style={styles.button}
                source={
                  this.state.muted
                    ? ICON_MUTED_BUTTON.module
                    : ICON_UNMUTED_BUTTON.module
                }
              />
            </TouchableHighlight>
            <Slider
              style={styles.volumeSlider}
              trackImage={ICON_TRACK_1.module}
              thumbImage={ICON_THUMB_2.module}
              value={1}
              onValueChange={this._onVolumeSliderValueChange}
            />
          </View>
          {/*<TouchableHighlight
            underlayColor={BACKGROUND_COLOR}
            style={styles.wrapper}
            onPress={this._onLoopPressed}
          >
            <Image
              style={styles.button}
              source={LOOPING_TYPE_ICONS[this.state.loopingType].module}
            />
          </TouchableHighlight>*/}
           
        </View>
        <List playlist={PLAYLIST} onPress={(uri)=>this._onPlaylistPressed(uri)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    alignSelf: "stretch",
    backgroundColor: BACKGROUND_COLOR
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: BACKGROUND_COLOR
  },
  wrapper: {},
  nameContainer: {
    height: FONT_SIZE
  },
  space: {
    height: FONT_SIZE
  },
  videoContainer: {
    height: VIDEO_CONTAINER_HEIGHT
  },
  video: {
    maxWidth: DEVICE_WIDTH
  },
  playbackContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    minHeight: ICON_THUMB_1.height * 2.0,
    maxHeight: ICON_THUMB_1.height * 2.0
    
  },
  playbackSlider: {
    alignSelf: "stretch"
  },
  timestampRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    minHeight: FONT_SIZE
  },
  text: {
    fontSize: FONT_SIZE,
    minHeight: FONT_SIZE
    
  },
  buffering: {
    textAlign: "left",
    paddingLeft: 20
  },
  timestamp: {
    textAlign: "right",
    paddingRight: 20
  },
  button: {
    backgroundColor: BACKGROUND_COLOR
  },
  buttonsContainerBase: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttonsContainerTopRow: {
    maxHeight: ICON_PLAY_BUTTON.height,
    minWidth: DEVICE_WIDTH / 2.0,
    maxWidth: DEVICE_WIDTH / 2.0
  },
  buttonsContainerMiddleRow: {
    maxHeight: ICON_MUTED_BUTTON.height,
    alignSelf: "stretch",
    paddingRight: 20
  },
  volumeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: DEVICE_WIDTH / 2.0,
    maxWidth: DEVICE_WIDTH / 2.0
  },
  volumeSlider: {
    width: DEVICE_WIDTH / 2.0 - ICON_MUTED_BUTTON.width
  },
  buttonsContainerBottomRow: {
    maxHeight: ICON_THUMB_1.height,
    alignSelf: "stretch",
    paddingRight: 20,
    paddingLeft: 20
  },
  rateSlider: {
    width: DEVICE_WIDTH / 2.0
  },
  buttonsContainerTextRow: {
    maxHeight: FONT_SIZE,
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    minWidth: DEVICE_WIDTH,
    maxWidth: DEVICE_WIDTH
  },
  
  List:{
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 20,
    minWidth: DEVICE_WIDTH / 2.0,
    maxWidth: DEVICE_WIDTH / 2.0
  },
});