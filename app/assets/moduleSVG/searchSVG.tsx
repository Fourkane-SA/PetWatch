import Svg, { Circle, Path } from 'react-native-svg';
import { View } from 'react-native'

export default function SearchSVG() {
    return (
        <View>
            <Svg width="33" height="29" viewBox="0 0 33 29" fill="none">
                <Path d="M13.2 12.8889C16.8451 12.8889 19.8 10.0036 19.8 6.44444C19.8 2.88528 16.8451 0 13.2 0C9.55492 0 6.6 2.88528 6.6 6.44444C6.6 10.0036 9.55492 12.8889 13.2 12.8889Z" fill="black" />
                <Path d="M13.7775 16.1272C9.273 15.9661 0 18.1572 0 22.5555V25.7777H15.741C11.6655 21.3311 13.7115 16.2883 13.7775 16.1272Z" fill="black" />
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M29.7 19.3333C29.7 20.5256 29.3535 21.6372 28.7595 22.5878L33 26.7283L30.6735 29L26.433 24.8594C25.4595 25.4233 24.321 25.7778 23.1 25.7778C19.4535 25.7778 16.5 22.8939 16.5 19.3333C16.5 15.7728 19.4535 12.8889 23.1 12.8889C26.7465 12.8889 29.7 15.7728 29.7 19.3333ZM19.8 19.3333C19.8 21.1056 21.285 22.5556 23.1 22.5556C24.915 22.5556 26.4 21.1056 26.4 19.3333C26.4 17.5611 24.915 16.1111 23.1 16.1111C21.285 16.1111 19.8 17.5611 19.8 19.3333Z" fill="black" />
            </Svg>
        </View>
    );
}