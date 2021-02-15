import { motion } from 'framer-motion';

interface productinterface {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
}

const homeproductvariants = {
    homeOut: { opacity: 0 },
    homeIn: { opacity: 1 },
};

const ProductX: React.FC<productinterface> = ({
    color1,
    color2,
    color3,
    color4,
}) => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380.98 330.35"
            variants={homeproductvariants}
        >
            <g
                style={{
                    isolation: 'isolate',
                }}
            >
                <path
                    fill={color1}
                    d="M180.49 330.35l-113.97-62L0 152.94l113.97 62 66.52 115.41z"
                />
                <path
                    fill={color2}
                    d="M314.46 62l66.52 115.41L314 311.59l-133.51 18.76-66.52-115.41 66.98-134.18L314.46 62z"
                />
                <path
                    fill={color3}
                    d="M113.97 214.94L0 152.94 66.98 18.76l113.97 62-66.98 134.18z"
                />
                <path
                    fill={color4}
                    d="M180.95 80.76l-113.97-62L200.49 0l113.97 62-133.51 18.76z"
                />
            </g>
        </motion.svg>
    );
};
export default ProductX;
