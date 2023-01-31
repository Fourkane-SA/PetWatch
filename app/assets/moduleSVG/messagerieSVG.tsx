import Svg, { Circle, Path } from 'react-native-svg';
import { View } from 'react-native'

export default function CalendarSVG() {
    return (
        <View>
            <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <Path d="M25.2 0H2.8C1.26 0 0 1.26 0 2.8V28L5.6 22.4H25.2C26.74 22.4 28 21.14 28 19.6V2.8C28 1.26 26.74 0 25.2 0Z" fill="black" />
            </Svg>
        </View>
    );
}