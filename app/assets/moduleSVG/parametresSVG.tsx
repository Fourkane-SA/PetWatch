import Svg, { Circle, Path } from 'react-native-svg';
import { View } from 'react-native'

export default function CalendarSVG() {
    return (
        <View>
            <Svg width="6" height="25" viewBox="0 0 6 25" fill="none">
                <Circle cx="3" cy="3" r="3" transform="rotate(-90 3 3)" fill="black" />
                <Circle cx="3" cy="12.5" r="3" transform="rotate(-90 3 12.5)" fill="black" />
                <Circle cx="3" cy="22" r="3" transform="rotate(-90 3 22)" fill="black" />
            </Svg>
        </View>
    );
}
