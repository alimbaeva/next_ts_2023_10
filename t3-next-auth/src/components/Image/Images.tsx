import { default as NextImage } from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
}

const Images = ({ src, alt='', width, height, className='' }: Props) => {
  return (
    <NextImage
      className={className}
      src={`/images/${src}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Images;