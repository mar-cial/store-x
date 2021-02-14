import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const HomeStyle = styled(motion.main)`
    background: rgba(240, 255, 150, 0.8);
`;

const homevariants = {
    homeOut: {
        height: '0vh',
        ease: 'anticipate',
        transition: {
            when: 'afterChildren',
            duration: 0.2,
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
    },
    homeIn: {
        height: '90vh',
        ease: 'anticipate',
        transition: {
            when: 'beforeChildren',
            duration: 0.3,
            staggerChildren: 0.1,
        },
    },
};

const homeitemvariants = {
    homeOut: {
        opacity: 0,
    },
    homeIn: {
        opacity: 1,
    },
};
const Home: React.FC = () => {
    return (
        <HomeStyle
            variants={homevariants}
            initial="homeOut"
            animate="homeIn"
            exit="homeOut"
            key="main"
        >
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
            <motion.h1 variants={homeitemvariants}>Hello</motion.h1>
        </HomeStyle>
    );
};

export default Home;
