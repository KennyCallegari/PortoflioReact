import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Lottie from 'react-lottie';
import * as animationData from '../../images/about.json'
import { Button } from '../core';
import styles from './InfoSection.module.css';

interface IInfoSectionProps {
  id: string,
  lightBg?: boolean,
  lightText?: boolean,
  lightTextDesc?: boolean,
  topLine: string,
  headLine: string,
  description: string,
  buttonLabel?: string,
  imgStart?: boolean,
  img: any,
  alt: string,
  primary?: boolean,
  lottie?: boolean,
}

const InfoSection = ({id, lightBg, lightText, lightTextDesc, topLine, headLine, description, buttonLabel,
  imgStart, img, alt, primary, lottie=false }: IInfoSectionProps) => {
  return (
    <>
      <div id={id} className={`${styles.container} ${lightBg ? styles.containerLight : ''}`}>
        <div className={styles.listContainer}>
          <div className={`${styles.row} ${imgStart ? styles.rowImgStart : ''}`}>
            <div className={styles.column1}>
              <div className={styles.textContainer}>
                <p className={styles.topLine}>{topLine}</p>
                <h1 className={`${styles.heading}  ${lightText ? styles.headingLightText : ''}`}>{headLine}</h1>
                <p className={`${styles.subtitle} ${lightTextDesc ? styles.subtitleLightText : ''}`}>{description}</p>
                <div className={`${styles.buttonContainer}`}>
                  <Button to="Home" secondary={!primary} smooth duration={500} spy offset={-80}>{buttonLabel}</Button>
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.imgContainer}>
                {lottie
                  ? <Lottie options={{
                    loop: true,
                    autoplay: true, 
                    animationData: animationData,
                    rendererSettings: {preserveAspectRatio: 'xMidYMid slice'}}} />
                  : <img className={styles.img} src={img.default} alt={alt} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default InfoSection;