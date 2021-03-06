import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgColor(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M18 6.372c0-.05-.015-.1-.044-.141a45.632 45.632 0 00-1.509-2.057.25.25 0 00-.447.154v18.408a.254.254 0 00.115.211.25.25 0 00.24.016 9.23 9.23 0 001.542-.905.25.25 0 00.1-.2L18 6.372zM14.5 1.927a.249.249 0 00-.063-.166 50.437 50.437 0 00-1.22-1.333 1.475 1.475 0 00-.345-.266.25.25 0 00-.372.219v23.238a.25.25 0 00.267.25c.517-.035 1.03-.108 1.537-.218a.25.25 0 00.2-.244L14.5 1.927zM11 .515a.126.126 0 00-.217-.087C8.839 2.468 2.5 9.539 2.5 14.906a8.946 8.946 0 008.221 8.927.252.252 0 00.279-.249V.515zM19.5 19.806a.25.25 0 00.456.142 8.8 8.8 0 001.544-5.042A12.273 12.273 0 0019.973 9.6a.25.25 0 00-.473.112v10.094z" />
    </Svg>
  );
}

export default SvgColor;
