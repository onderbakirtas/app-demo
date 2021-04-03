import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgEdit(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#Edit_svg__clip0)">
        <Path d="M18.25 4.5H19a.5.5 0 01.5.5v.75a.75.75 0 101.5 0V5a.5.5 0 01.5-.5h.75a.75.75 0 100-1.5h-.75a.5.5 0 01-.5-.5v-.75a.75.75 0 10-1.5 0v.75a.5.5 0 01-.5.5h-.75a.75.75 0 100 1.5zM4.75 16.5h-.5a.25.25 0 01-.25-.25v-.5a.75.75 0 10-1.5 0v.5a.25.25 0 01-.25.25h-.5a.75.75 0 100 1.5h.5a.25.25 0 01.25.25v.5a.75.75 0 101.5 0v-.5a.25.25 0 01.25-.25h.5a.75.75 0 100-1.5zM15.808 10.142a1.127 1.127 0 00-.721-1.122L12.9 8.159a.5.5 0 01-.317-.454l-.054-2.453a1.134 1.134 0 00-.686-1.066 1.112 1.112 0 00-1.228.259L9.3 5.765a.5.5 0 01-.517.119L6.6 5.128h-.01A1.162 1.162 0 005.13 6.6l.755 2.185a.5.5 0 01-.12.517L4.444 10.62a1.109 1.109 0 00-.258 1.228 1.164 1.164 0 001.053.684l2.467.055a.5.5 0 01.455.316l.859 2.183a1.128 1.128 0 001.06.723h.063a1.146 1.146 0 001.06-.85l.745-2.663a.501.501 0 01.347-.347l2.664-.745a1.146 1.146 0 00.85-1.062zM2.72 3.78a.75.75 0 001.061-1.06l-1.5-1.5a.75.75 0 00-1.06 1.06l1.5 1.5zM8.75 3.5a.75.75 0 00.75-.75v-2a.75.75 0 00-1.5 0v2a.75.75 0 00.75.75zM3.5 9.25a.75.75 0 00-.75-.75h-2a.75.75 0 000 1.5h2a.75.75 0 00.75-.75zM23.358 20.654l-8.865-7.884a.5.5 0 00-.686.02l-1.017 1.017a.5.5 0 00-.02.685l7.885 8.866a1.916 1.916 0 102.7-2.7l.003-.004z" />
      </G>
      <Defs>
        <ClipPath id="Edit_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgEdit;