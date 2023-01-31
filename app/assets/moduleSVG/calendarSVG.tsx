import Svg, { Circle, Path } from 'react-native-svg';
import { View } from 'react-native'

export default function ChatSVG() {
    return (
        <View>
            <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                <Path d="M16 18H2V7H16M13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 2.89 17.1 2 16 2H15V0M14 11H9V16H14V11Z" fill="black" />
            </Svg>
        </View>
    );
}