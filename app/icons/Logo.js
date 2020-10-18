import React from 'react'
import { View, Text } from 'react-native'

import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

const Component = () => (
  <View width="400" height="400">
    <Text>Cleaned</Text>
    <Svg height="100" width="100" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="blue"
        strokeWidth="2.5"
        fill="green"
      />
      <Rect
        x="15"
        y="15"
        width="70"
        height="70"
        stroke="red"
        strokeWidth="2"
        fill="yellow"
      />
    </Svg>

    <Svg height="100" width="100" viewBox="0 0 115 68">
      <Path
        d="M88.001 24.192V0h24.853L88.001 24.192zM63.148 25.5H86.04V1.308L63.15 25.5zM50.068 7.192V25.5h11.118l5.232-5.23L55.3 7.191h-5.232zm60.824-2.615l-7.849 7.846 11.119-6.538-3.27-1.308zM76.229 53.615l9.81-26.807H50.722l25.507 26.807zm9.81-22.884L75.575 61.46 86.039 68V30.73zm-37.28-17h-6.787l6.788-6.786v6.786z"
        fill="#519DFF"
      />
      <Path
        d="M87.982 0v25.185L113.323 0H87.982zM2.347 63.108l5.157-6.125c-.57.396-1.239.594-2.004.594-.746 0-1.45-.14-2.115-.423a5.549 5.549 0 01-1.753-1.189 5.852 5.852 0 01-1.199-1.823A5.954 5.954 0 010 51.845c0-1.068.242-2.028.725-2.881a5.323 5.323 0 012.065-2.035c.887-.504 1.924-.756 3.113-.756 1.202 0 2.26.255 3.173.766a5.493 5.493 0 012.135 2.065c.517.867.776 1.844.776 2.932 0 .517-.044.997-.131 1.44a6.19 6.19 0 01-.393 1.27c-.174.396-.39.785-.645 1.168-.248.376-.534.756-.856 1.139l-5.127 6.155H2.347zm3.646-7.334c.538 0 1.038-.1 1.501-.302.47-.209.88-.494 1.23-.857a4.13 4.13 0 00.835-1.269c.202-.477.302-.987.302-1.531 0-.752-.167-1.42-.503-2.005a3.535 3.535 0 00-1.37-1.37c-.578-.336-1.242-.504-1.995-.504-.752 0-1.427.168-2.024.504a3.733 3.733 0 00-1.4 1.38c-.343.584-.514 1.25-.514 1.995 0 .745.171 1.417.514 2.015.349.597.819 1.07 1.41 1.42.598.35 1.269.524 2.014.524zM16.212 63.107V48.499h-1.843v-2.015h3.888v16.623h-2.045zM23.668 63.107V48.499h-1.843v-2.015h3.888v16.623h-2.045z"
        fill="#FFB641"
      />
      <Path
        d="M34.698 46.29h2.418v16.817h-2.418v-7.388h-3.572v7.388h-2.418V46.29h2.418v7.468h3.572V46.29zM42.354 61.146h4.861v1.961H39.91V46.29h7.118v1.961h-4.673v5.185h3.868v1.961h-3.868v5.749zM51.534 61.146h4.164v1.961h-6.581V46.29h2.417v14.856zM57.196 46.29h5.506c1.666 0 2.499.788 2.499 2.364v5.588c0 1.576-.833 2.364-2.499 2.364h-3.089v6.501h-2.417V46.29zm5.587 7.576V49.03c0-.322-.054-.528-.161-.618-.108-.107-.323-.16-.645-.16h-2.364v6.42h2.364c.322 0 .537-.054.645-.161.107-.108.16-.323.16-.645z"
        fill="#518CFF"
      /> 
    </Svg>




  </View>
)

export default Component
