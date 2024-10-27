import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import './extracurricular.css';


import OratoryEnglish from '../../assets/extra/english.jpeg';
import OratoryArabic from '../../assets/extra/arabic.jpeg';
import SinhalaDay from '../../assets/extra/sinhala.jpeg';
import SinhalaDay2 from '../../assets/extra/sinhala2.jpeg';
import Debatemora from '../../assets/extra/debate2.jpeg';
import Debatebil from '../../assets/extra/debate 1.jpeg';
import LiteraryFestival from '../../assets/extra/lit.jpeg';
import OutstandingStudent from '../../assets/extra/mostout.jpeg';
import TamilLiteraryDay from '../../assets/extra/poem.jpeg';
import SpeechSinhala from '../../assets/extra/sinhala3.jpeg';
import CodeGladiators from '../../assets/extra/Code gladiators.png';
import Hackmoral from '../../assets/extra/hackmoral.png';
import WebX from '../../assets/extra/webX.png';

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Extracurricular = () => {
    const [expandedImage, setExpandedImage] = useState(null);

    const achievements = [
        
        {
            title: 'Code Gladiators-2024 Semi Finalist',
            image: CodeGladiators,
        },
        {
            title: 'WebX FestX 5.0 - IEE WIE UoM',
       
            image: WebX,
        },
        {
            title: 'Hackmoral 6.0 -2024 INTECS',
            image: Hackmoral,
        },
        {
            title: 'All Island 1st - Oratory (English)',
            image: OratoryEnglish,
        },
        {
            title: 'All Island 2nd - Oratory (Arabic)',
            image: OratoryArabic,
        },
        {
            title: 'All Island 2nd - Second Language (Sinhala) Day',
            images: [SinhalaDay, SinhalaDay2],
        },
        {
            title: 'Outstanding Student Award - 2018',
            image: OutstandingStudent,
        },
        {
            title: 'Oratory Sinhala Provincial 2nd - Second Language Day',
            image: SpeechSinhala,
        },
        {
            title: 'Bilingual day debate- English - First',
            image: Debatebil,
        },
        {
            title: 'University of Moratuwa Sotkanai - Interschool Debate',
            image: Debatemora,
        },
        {
            title: 'National Literary Festival',
            image: LiteraryFestival,
        },
        {
            title: 'Tamil Literary Day Poem Writing - Provincial 1st',
            image: TamilLiteraryDay,
        },
      
    ];

    return (
        <div className="extracurricular-container">
            <h2 className="projects-title">Extracurricular Achievements</h2>
            <ul className="achievement-list">
                {achievements.map((achievement, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.1
                    });

                    return (
                        <motion.li
                            key={index}
                            ref={ref}
                            className="achievement-item"
                            variants={variants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="certificate-content">
                                {achievement.images ? (
                                    <div className="certificate-images">
                                        {achievement.images.map((img, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="certificate-image-container"
                                                onClick={() => setExpandedImage(img)}
                                            >
                                                <motion.img
                                                    src={img}
                                                    alt={`${achievement.title} ${imgIndex + 1}`}
                                                    className="certificate-image"
                                                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                                />
                                                <FontAwesomeIcon icon={faExpand} className="expand-icon" />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div
                                        className="certificate-image-container"
                                        onClick={() => setExpandedImage(achievement.image)}
                                    >
                                        <motion.img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            className="certificate-image"
                                            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                        />
                                        <FontAwesomeIcon icon={faExpand} className="expand-icon" />
                                    </div>
                                )}
                                <span className="certificate-title">{achievement.title}</span>
                            </div>
                        </motion.li>
                    );
                })}
            </ul>

            {expandedImage && (
                <div className="expanded-image-overlay" onClick={() => setExpandedImage(null)}>
                    <motion.img
                        src={expandedImage}
                        alt="Expanded"
                        className="expanded-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                </div>
            )}
        </div>
    );
};

export default Extracurricular;
