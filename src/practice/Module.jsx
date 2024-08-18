import React from 'react';
import styles from './practice.module.css';
import styled from 'styled-components'; // styled component

const BTN = styled.button`
    background: rgb(195, 83, 108);
    color: white;
    width: 10rem;
    position: relative;
    left: 20%;
    border: none;
    text-align: center;
    border-radius: 5px;
`;

const Module = () => {
    return (
        <div className={styles['card-Body']}> 
            {/* when there is a special character present */}
            <div className={styles.cardN}>
                <div className={styles.cardImg}> 
                    <img src="https://media.gettyimages.com/id/1435854325/photo/melbourne-australia-virat-kohli-of-india-celebrates-winning-the-icc-mens-t20-world-cup-match.jpg?s=612x612&w=0&k=20&c=4OXRTAZJkEa6MPkiXGjBPP_dGh-93mmxVMe_bFmZMqg=" alt="Profile" />   {/* Replace with actual path */}
                </div>
                <div className='cardTitle'>
                    <strong>Virat the King</strong>
                </div>
                <div className={styles.cardPara}>
                    <p>
                        Virat Kohli is an Indian cricketer and one of the most prominent and successful players in the history of the sport. Born on November 5, 1988, in Delhi, India, Kohli is known for his aggressive batting style, exceptional consistency, and leadership skills. He has served as the captain of the Indian national cricket team in all formats and has been a key figure in many of India's victories over the years.
                    </p>
                </div>
                <BTN>Watch Videos</BTN>
            </div>
        </div>
    );
}

export default Module;
