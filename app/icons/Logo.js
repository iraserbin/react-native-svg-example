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
  <View>
    <Text>Import Svg</Text>
    <Svg height="50%" width="50%" viewBox="0 0 100 100">
      <Circle />
      <Rect />
    </Svg>
  </View>
)

export default Component
