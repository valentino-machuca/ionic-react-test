import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonNav, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { home, qrCode, settings } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.scss';

import Home from './pages/Home/Home';
import { useTranslation } from 'react-i18next';

import { useContext } from 'react';

//Temas
import { ThemeContext } from './theme/ThemeContext';

setupIonicReact();

const App: React.FC = () => {

  const { t } = useTranslation();

  const theme: {theme: string, toggleTheme: Function} = useContext(ThemeContext);
  
  return(
    <IonApp>
      <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <IonNav root={() => <Home />}></IonNav>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color={theme.theme}>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} style={{fontSize: '2em'}}/>
            <IonLabel><p style={{fontSize: '.8em', marginTop: '5px'}}>{t('toolbar.home')}</p></IonLabel>
          </IonTabButton>

          <IonTabButton tab="qr" href="/qr">
            <IonIcon icon={qrCode} style={{fontSize: '2em'}}/>
          </IonTabButton>

          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settings} style={{fontSize: '2em'}}/>
            <IonLabel><p style={{fontSize: '.8em', marginTop: '5px'}}>{t('toolbar.settings')}</p></IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
