import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ProductX from '../Components/productX';

interface homeinterface {
    colors: string[][];
}

const HomeStyle = styled(motion.main)`
    background: #f45f42;
    display: grid;
    grid-template-columns: repeat(1);
    grid-template-rows: repeat(3, 1fr);
    overflow: hidden;

    p {
        padding-top: 1rem;
    }
    @media (min-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`;

const homevariants = {
    homeOut: {
        height: '0vh',
        ease: 'anticipate',
        transition: {
            when: 'afterChildren',
            duration: 0.2,
            staggerChildren: 0.2,
            staggerDirection: -1,
        },
    },
    homeIn: {
        height: '90vh',
        ease: 'anticipate',
        transition: {
            when: 'beforeChildren',
            duration: 0.2,
            staggerChildren: 0.4,
        },
    },
};

const homesectionvariants = {
    homeOut: {
        height: '0%',
        paddingRight: '0vh',
        paddingLeft: '0vh',
        paddingTop: '0vh',
        paddingBottom: '0vh',
        transition: {
            ease: 'anticipate',
        },
    },
    homeIn: {
        height: '100%',
        paddingRight: '2vh',
        paddingLeft: '2vh',
        paddingTop: '2vh',
        paddingBottom: '2vh',
    },
};

const homeleftvariants = {
    homeOut: { opacity: 0 },
    homeIn: { opacity: 1 },
};

const homerightvariants = {
    homeOut: { opacity: 0 },
    homeIn: { opacity: 1 },
};

const homebottomvariants = {
    homeOut: { opacity: 0 },
    homeIn: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const homeservicevariants = {
    homeOut: { height: '0%' },
    homeIn: { height: '100%' },
};

const HomeLeft = styled(motion.section)`
    display: grid;
    background: white;
    h1 {
        font-size: 2.2rem;
    }
    p {
        padding-top: 1rem;
    }

    div {
        li {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            list-style-type: none;
            place-items: center;
            gap: 1rem;

            a {
                text-decoration: none;
                background: #f45f42;
                color: white;
                font-weight: bold;
                padding: 1rem;
                border-radius: 9px;
                width: 100%;
                display: grid;
                place-items: center;
            }
        }

        @media (min-width: 800px) {
            grid-row: -2 / -1;
        }
    }

    @media (min-width: 800px) {
        grid-template-rows: 1fr 1fr 3fr 1fr 1fr;
    }
`;

const HomeRight = styled(motion.section)`
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    svg {
        max-width: 50%;
    }

    article {
        padding-left: 1rem;
        color: white;
        font-weight: bold;
    }
`;

const HomeBottom = styled(motion.section)`
    background: #3d484a;
    color: white;
    font-weight: bold;
    display: grid;
    grid-template-rows: 1fr 1fr 3fr;
    @media (min-width: 800px) {
        grid-column: span 2;
    }

    p {
        padding: 0;
    }
`;

const ServicesRibbon = styled(motion.section)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    height: 95%;
`;

const ServiceArticle = styled(motion.article)`
    background: white;
    color: black;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 1fr 3fr 1fr;
    padding: 1vh;
    place-items: center;
    border-radius: 8px;
    svg {
        max-width: 40pt;
    }

    a {
        width: 100%;
        height: 100%;
        background: #f45f42;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        color: white;
        text-decoration: none;
        padding: 0.1rem;
    }

    @media (min-width: 800px) {
        svg {
            max-width: 80pt;
        }
    }
`;

const Home: React.FC<homeinterface> = ({ colors }) => {
    const randomArray = colors[Math.floor(Math.random() * colors.length - 1)];
    const serviceOne = colors[Math.floor(Math.random() * colors.length - 1)];
    const serviceTwo = colors[Math.floor(Math.random() * colors.length - 1)];
    const serviceThree = colors[Math.floor(Math.random() * colors.length - 1)];

    return (
        <HomeStyle
            variants={homevariants}
            initial="homeOut"
            animate="homeIn"
            exit="homeOut"
            key="main"
        >
            <HomeLeft variants={homesectionvariants}>
                <motion.h1 variants={homeleftvariants}>
                    Welcome to Store X.
                </motion.h1>
                <motion.p variants={homeleftvariants}>
                    We specialize in providing the best products and services
                    for all your needs.
                    <br />
                    Check out our products below.
                </motion.p>
                <motion.div>
                    <motion.li variants={homeleftvariants}>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/services">Services</NavLink>
                    </motion.li>
                </motion.div>
            </HomeLeft>
            <HomeRight variants={homesectionvariants}>
                <ProductX
                    color1={randomArray[0]}
                    color2={randomArray[1]}
                    color3={randomArray[2]}
                    color4={randomArray[3]}
                />
                <motion.article variants={homerightvariants}>
                    <h2>Model One</h2>
                    <p>
                        Made with the prescision and craftmanship aquired
                        throughout the years.
                    </p>
                </motion.article>
            </HomeRight>
            <HomeBottom variants={homesectionvariants}>
                <motion.h2 variants={homebottomvariants}>Services</motion.h2>
                <motion.p variants={homebottomvariants}>
                    We also provide the best services for all your needs.
                </motion.p>
                <ServicesRibbon variants={homebottomvariants}>
                    <ServiceArticle variants={homeservicevariants}>
                        <h3>Service 1</h3>
                        <ProductX
                            color1={serviceOne[0]}
                            color2={serviceOne[1]}
                            color3={serviceOne[2]}
                            color4={serviceOne[3]}
                        />
                        <NavLink to="/services">Select</NavLink>
                    </ServiceArticle>
                    <ServiceArticle variants={homeservicevariants}>
                        <h3>Service 2</h3>
                        <ProductX
                            color1={serviceTwo[0]}
                            color2={serviceTwo[1]}
                            color3={serviceTwo[2]}
                            color4={serviceTwo[3]}
                        />
                        <NavLink to="/services">Select</NavLink>
                    </ServiceArticle>
                    <ServiceArticle variants={homeservicevariants}>
                        <h3>Service 3</h3>
                        <ProductX
                            color1={serviceThree[0]}
                            color2={serviceThree[1]}
                            color3={serviceThree[2]}
                            color4={serviceThree[3]}
                        />
                        <NavLink to="/services">Select</NavLink>
                    </ServiceArticle>
                </ServicesRibbon>
            </HomeBottom>
        </HomeStyle>
    );
};

export default Home;
