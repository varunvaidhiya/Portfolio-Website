import React from 'react';
import { BsTwitter , BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';

import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://twitter.com/varunvaidhiya">
                    <BsTwitter />
                </a>
            </div>

            <div>
                <a href="https://www.instagram.com/___v_a__r_u_n___/?next=%2F">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/varunvaidhiya/">
                    <FaLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/varunvaidhiya">
                    <FaGithub />
                </a>
            </div>
       <div>
                <a href="https://huggingface.co/varunvaidhiya">
              <  FaSmile />
                </a>
            </div>
            <div>
                <a href="https://leetcode.com/varunvaidhiya/">
                <FaCode/>
                </a>
            </div>
            <div>
                <a href="https://www.kaggle.com/varunvaidhiya">
                    < FaChartBar />
                </a>
            </div>
            </div>

    );
}



export default SocialMedia