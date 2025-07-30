import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TiltedCard({
  imageSrc,
  containerWidth,
  imageWidth,
  rotateAmplitude = 8,
  scaleOnHover = 1.03,
  showMobileWarning = true,
  children,
}: {
  imageSrc: string;
  containerWidth: string;
  imageWidth: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <motion.figure
      className="tilted-card-figure"
      whileHover={{ rotate: rotateAmplitude, scale: scaleOnHover }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image
        src={imageSrc}
        alt=""
        width={500}
        height={300}
        style={{ width: imageWidth, height: 'auto' }}
      />
      {children}
    </motion.figure>
  );
}