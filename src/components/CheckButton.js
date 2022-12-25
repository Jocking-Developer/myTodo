import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from '../styles/modules/todoItem.module.scss';

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: {
    pathLength: 1,
  },
  unChecked: {
    pathLength: 0,
  },
};

const boxVariant = {
  checked: {
    background: 'var(--primaryPurple)',
    transition: { duration: 0.1 },
  },
  unChecked: {
    background: 'var(--gray-2)',
    transition: { duration: 0.1 },
  },
};

function CheckButton({ checked, handleCheck }) {
  const pathLength = useMotionValue(1);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0.05, 0.15]);
  return (
    <motion.div
      className={styles.svgBox}
      variants={boxVariant}
      animate={checked ? 'checked' : 'unChecked'}
      onClick={handleCheck}
    >
      <motion.svg
        className={styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? 'checked' : 'unChecked'}
          style={{ pathLength, opacity }}
          strokeMiterlimit="10"
          strokeWidth="13"
          d="M1.5 22L16 36.5L51.5 5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

export default CheckButton;
