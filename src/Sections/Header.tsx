import { motion } from 'framer-motion';
import styled from 'styled-components';

interface HeaderInterface {
    open: boolean;
    click: () => void;
}

const HeaderStyle = styled(motion.header)`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 5vh;
        font-weight: bold;
    }

    button {
        background: none;
        border: 2px solid black;
        border-radius: 8px;
        padding: 1vh;
        font-weight: bold;
    }
`;

const Header: React.FC<HeaderInterface> = ({ open, click }) => {
    return (
        <HeaderStyle>
            <span>Store X</span>
            <motion.button onTap={click}>
                {`${open ? 'close menu' : 'open menu'}`.toUpperCase()}
            </motion.button>
        </HeaderStyle>
    );
};

export default Header;
