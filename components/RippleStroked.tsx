import { motion } from "framer-motion";

export default function RippleStroked({ size, speed, delay, stroke, color }) {
  // const strokeSize = size / 16
  const ripple = {
    width: size,
    height: size,
    backgroundColor: "transparent",
    borderRadius: "50%",
    position: "absolute",
    boxShadow: `0 0 0 ${stroke}px ${color}`,
  };
  const transition = {
    ease: "linear",
    duration: speed,
    loop: Infinity,
    delay: 0,
  };
  const animation = {
    scale: [0, 3],
    opacity: [0.5, 0],
    boxShadow: [`0 0 0 ${stroke * 2}px ${color}`, `0 0 0 ${stroke}px ${color}`],
  };
  return (
    <div style={parent}>
      <motion.div
        style={{
          ...ripple,
          backgroundColor: color,
          opacity: 1,
        }}
      />
      <motion.div
        style={ripple}
        animate={animation}
        transition={{ ...transition }}
      />
      <motion.div
        style={ripple}
        animate={animation}
        transition={{ ...transition, delay: delay }}
      />
      <motion.div
        style={ripple}
        animate={animation}
        transition={{ ...transition, delay: delay * 2 }}
      />
      <motion.div
        style={ripple}
        animate={animation}
        transition={{ ...transition, delay: delay * 3 }}
      />
    </div>
  );
}

RippleStroked.defaultProps = {
  size: "50%",
  speed: 4,
  stroke: 2,
  delay: 1,
  color: "#3aafa9",
};

const parent = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: "1",
};
