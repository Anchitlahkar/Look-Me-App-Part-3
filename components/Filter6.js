import React from "react";
import { View, Image } from "react-native"

const Filter6 = ({
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
    const crownHeight = faceHeight

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (
        <View style={{
            position: "absolute",
            left: leftEyePosition.x - crownWidth * 0.56,
            top: leftEyePosition.y - crownHeight * 1,
        }} >
            <Image
                style={{
                    width: crownWidth,
                    height: crownHeight/2+40,
                    resizeMode: "contain",
                    transform: [
                        {
                            rotate: `${transformAngle()}deg`
                        }
                    ]
                }}
                source={require("../assets/filter/flower-pic3.png")} />
        </View>
    )
}
export default Filter6