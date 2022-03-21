import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native';

import * as Permissions from "expo-permissions";

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

// importing filters
import Filter1 from '../components/Filter1';
import Filter2 from '../components/Filter2';
import Filter3 from '../components/Filter3';
import Filter4 from '../components/Filter4';
import Filter5 from '../components/Filter5';
import Filter6 from '../components/Filter6';
import Filter7 from '../components/Filter7';
import Filter8 from '../components/Filter8';
import Filter9 from '../components/Filter9';
import Filter10 from '../components/Filter10';
import Filter11 from '../components/Filter11';
import Filter12 from '../components/Filter12';




export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cameraPermission: null,
            faces: [],
        }
        this.onCameraPermission = this.onCameraPermission.bind(this)
        this.onFacesDetected = this.onFacesDetected.bind(this)
        this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
    }


    componentDidMount() {
        Permissions
            .askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission({ status }) {
        this.setState({ cameraPermission: status === 'granted' })
    }

    onFacesDetected({ faces }) {
        this.setState({ faces: faces })
    }

    onFaceDetectionError(error) {
        console.log(error)
    }

    render() {
        const { cameraPermission } = this.state;

        if (cameraPermission === null) {
            return <View />
        }

        if (cameraPermission === false && !font) {
            return (
                <View style={styles.container}>
                    <Text>No access to camera</Text>
                </View>
            )
        }
        // console.log(this.state.faces)
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea} />

                <View style={styles.headingContainer}>

                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text style={[styles.titleText1, { fontStyle: "normal" }]}>😊 </Text>
                        <Text style={styles.titleText1}>Look </Text>
                        <Text style={styles.titleText2}>Me</Text>
                        <Text style={[styles.titleText1, { fontStyle: "normal" }]}> 😊 </Text>
                    </View>
                </View>

                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                    {
                        this.state.faces.map(face => {
                            return <Filter12 key={face.faceID} face={face} />
                        })
                    }

                </View>

                <View style={styles.framesContainer}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000"
    },
    titleText: {
        fontSize: 30
    },
    cameraStyle: {
        flex: 0.9,
        padding: 10,
        backgroundColor: "green"
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: "italic",
    },

    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: "italic",

    },
    framesContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(30),
        backgroundColor: "#000"
    },

});