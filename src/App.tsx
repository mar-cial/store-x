// Imports
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import Services from './Pages/Services';

// Components

// Sections
import Navigation from './Sections/Navigation';
import Header from './Sections/Header';

// Assets
import palette from './Assets/colorPalette';

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
                            <Home colors={palette} />
                        </Route>
                        <Route path="/products" exact>
                            <Products />
                        </Route>
                        <Route path="/services" exact>
                            <Services />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </>
        </>
    );
};

export default App;
