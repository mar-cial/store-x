import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationStyle = styled(motion.nav)`
    display: grid;

    li {
        list-style-type: none;
        a {
            color: black;
            font-weight: bold;
            text-decoration: none;
        }
    }
`;

interface NavigationInterface {
    open: boolean;
}

const navigationvariants = {
    menuOut: {
        height: 0,
        transition: {
            when: 'afterChildren',
            ease: 'anticipate',
            delayChildren: 0,
            staggerChildren: 0.15,
            staggerDirection: -1,
        },
    },
    menuIn: {
        height: '20vh',
        transition: {
            when: 'beforeChildren',
            delayChildren: 0,
            staggerChildren: 0.15,
        },
    },
};

const menuitemvariants = {
    menuOut: {
        opacity: 0,
        x: '-5px',
    },
    menuIn: {
        opacity: 1,
        x: 0,
    },
};

const Navigation: React.FC<NavigationInterface> = ({ open }) => {
    let routes = [
        { route: '/', linkText: 'home' },
        { route: '/products', linkText: 'products' },
        { route: '/', linkText: 'services' },
        { route: '/', linkText: 'about' },
    ];
    return (
        <AnimatePresence>
            {open && (
                <NavigationStyle
                    variants={navigationvariants}
                    initial="menuOut"
                    animate="menuIn"
                    exit="menuOut"
                >
                    {routes.map((v, i) => (
                        <motion.li key={i} variants={menuitemvariants}>
                            <NavLink to={v.route} exact>
                                {v.linkText}
                            </NavLink>
                        </motion.li>
                    ))}
                </NavigationStyle>
            )}
        </AnimatePresence>
    );
};

export default Navigation;
