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

const App = () => (
  <View>
    <Text>Simple App with SVG</Text>
    <Svg height="50%" width="50%" viewBox="0 0 100 100">
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
  </View>
)

export default App
