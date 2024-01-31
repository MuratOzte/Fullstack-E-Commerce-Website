'use client';
import React, { useState, useEffect } from 'react';
import classes from './image-slider.module.css';
import {
    Computer,
    coffeeMaker,
    phone,
    tv,
} from '@/assets/homepage-slider-images';
import Image, { StaticImageData } from 'next/image';

const images: { image: StaticImageData; alt: string }[] = [
    { image: Computer, alt: 'Computer' },
    { image: coffeeMaker, alt: 'Coffee Maker' },
    { image: phone, alt: 'Phone' },
    { image: tv, alt: 'TV' },
];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.slideshow}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    fill
                    className={
                        index === currentImageIndex ? classes.active : ''
                    }
                    alt={image.alt}
                />
            ))}
        </div>
    );
};
export default ImageSlider;
