import { motion } from 'framer-motion';

const ToggleButton = ({ setopen }) => {
  return (
    <button className='btn' onClick={() => setopen((prev) => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 2 2.5 L 20 16.5" }
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 16.5 L 20 16.5"
          variants={{
            closed: { d: "M 2 16.5 L 20 16.5" },
            open: { d: "M 2 16.5 L 20 2.5" }
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
