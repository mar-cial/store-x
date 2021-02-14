import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProductStyle = styled(motion.section)`
    background: red;
`;

const productvariants = {
    productsOut: {
        height: '0vh',
        transition: {
            when: 'afterChildren',
            delayChildren: 0,
            ease: 'anticipate',
        },
    },
    productsIn: {
        height: '90vh',
        transition: {
            when: 'beforeChildren',
            delayChildren: 0,
            ease: 'anticipate',
        },
    },
};

const productitemvariants = {
    productsOut: {
        opacity: 0,
    },
    productsIn: {
        opacity: 1,
    },
};

const Products: React.FC = () => {
    return (
        <ProductStyle
            variants={productvariants}
            initial="productsOut"
            animate="productsIn"
            exit="productsOut"
            key="products"
        >
            <motion.span variants={productitemvariants}>hello</motion.span>
        </ProductStyle>
    );
};

export default Products;
