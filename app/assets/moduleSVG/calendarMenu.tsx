import Svg, { Circle, Path } from 'react-native-svg';
import { View } from 'react-native'

export default function CalendarMenuSVG() {
    return (
        <View>
            <Svg width="26" height="28" viewBox="0 0 26 28" fill="none">
                <Path d="M22.5474 2.54545H21.2947V0H18.7895V2.54545H6.26316V0H3.75789V2.54545H2.50526C1.12737 2.54545 0 3.69091 0 5.09091V25.4545C0 26.8545 1.12737 28 2.50526 28H22.5474C23.9253 28 25.0526 26.8545 25.0526 25.4545V5.09091C25.0526 3.69091 23.9253 2.54545 22.5474 2.54545ZM22.5474 25.4545H2.50526V8.90909H22.5474V25.4545Z" fill="black" />
            </Svg>
        </View>
    );
}
