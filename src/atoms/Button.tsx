import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type MotionButtonProps = Omit<HTMLMotionProps<'button'>, 'onDrag'> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: MotionButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="px-6 py-2 rounded bg-primary text-white dark:bg-primary dark:text-bg transition-colors"
    {...props}
  >
    {children}
  </motion.button>
);

export default Button; 