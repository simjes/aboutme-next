import cn from 'classnames'
import { motion, MotionProps } from 'framer-motion'

interface Props extends MotionProps {
  path: string
  alt: string
  classNameContainer?: string
  classNameImage?: string
  classNameShared: string
}

const Image = ({
  path,
  alt,
  classNameContainer,
  classNameImage,
  classNameShared,
  ...rest
}: Props) => (
  <motion.div
    className={cn('relative', classNameShared, classNameContainer)}
    {...rest}
  >
    <img
      className={cn(
        'absolute top-0 left-0 blur-image',
        classNameShared,
        classNameImage,
      )}
      src={require(`Images/${path}?lqip`)}
      alt={alt}
    />

    <img
      className={cn('absolute top-0 left-0', classNameShared, classNameImage)}
      src={require(`Images/${path}?webp`)}
      alt={alt}
    />

    {/* https://github.com/zouhir/lqip-loader/issues/5 - chrome bug */}
    <style jsx>{`
        .blur-image img {
          blur(25px);
        }
    `}</style>
  </motion.div>
)

export default Image
