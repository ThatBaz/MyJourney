import { Text, Html } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export const TextSection = ({ title, subtitle, button, ...props }) => {

  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={3}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      {!!subtitle && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="top"
          fontSize={0.2}
          maxWidth={3}
          font={"./fonts/Inter-Regular.ttf"}
        >
          {subtitle}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}
    </group>
  );
};
