import React from "react";
import { View, Image } from "react-native"

const Filter9 = ({
    face: {
        bounds: {
            size: {
                width: faceWidth,
                height: faceHeight
            }
        },
        LEFT_EYE: leftEyePosition,
        RIGHT_EYE: rightEyePosition
    }
}) => {
    const crownWidth = faceWidth
    const crownHeight = faceHeight / 2

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (
        <View style={{
            position: "absolute",
            left: leftEyePosition.x - crownWidth * 0.8,
            top: leftEyePosition.y - crownHeight * 1.8,
        }} >
            <Image
                style={{
                    width: crownWidth+2,
                    height: crownHeight+40,
                    resizeMode: "contain",
                    transform: [
                        {
                            rotate: `${transformAngle()}deg`
                        }
                    ]
                }}
                source={require("../assets/filter/hat-pic2.png")} />
        </View>
    )
}
export default Filter9