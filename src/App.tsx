// Imports
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';

// Pages
import Home from './Pages/Home';

// Components

// Sections
import Navigation from './Sections/Navigation';
import Header from './Sections/Header';
import Products from './Pages/Products';

// Assets

// App start
const App: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu((v) => !v);
        console.log(openMenu);
    };

    let location = useLocation();
    console.log(location.key);
    return (
        <>
            <Navigation open={openMenu} />
            <Header open={openMenu} click={handleOpenMenu} />
            <>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.key}>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </>
        </>
    );
};

export default App;
