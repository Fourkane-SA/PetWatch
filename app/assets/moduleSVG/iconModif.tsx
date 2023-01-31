import Svg, { Circle, Path } from 'react-native-svg';
import { View } from 'react-native'

export default function iconModif() {
    return (
        <View>
            <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <Circle cx="15" cy="15" r="15" fill="#FAD4D4" />
                <Path d="M7.5 19.471V22.6207H10.6497L19.9393 13.3312L16.7895 10.1815L7.5 19.471ZM22.375 10.8954C22.7026 10.5678 22.7026 10.0387 22.375 9.7111L20.4096 7.74568C20.082 7.41811 19.5529 7.41811 19.2253 7.74568L17.6883 9.28274L20.838 12.4324L22.375 10.8954Z" fill="black" />
            </Svg>
        </View>
    );
}
