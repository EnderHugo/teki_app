import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarOutline, homeOutline, personOutline, chatboxOutline } from 'ionicons/icons';

import Login from './Pages/tablessPages/Login';
import Register from './Pages/tablessPages/Register'
import RegisterUser from './Pages/tablessPages/registerUser';


/* Change /user/ to a variable depending on current login */
import Home from './Pages/tabPages/User/Home'; 
import Schedule from './Pages/tabPages/User/Schedule';
import Profile from './Pages/tabPages/User/Profile';
import Chat from './Pages/tabPages/User/Chat';
import Settings from './Pages/tabPages/User/Settings';
import Terms from './Pages/tabPages/User/Terms';

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

/* Theme variables */
import './theme/variables.css';

setupIonicReact();
const PrivateRoutes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/****** AUTH CREATE ACCOUNT */}
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/registerUser" component={RegisterUser} exact={true} />
        <Route path="/" render={() => <Redirect to="/login" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
const PublicRoutes = () => {
  return (
    <IonReactRouter>
      <Route path="/tabs" component={Home} />
      <Route path="/" render={() => <Redirect to="/tabs/home" />} />
    </IonReactRouter>
  );
};

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonTabs>

        <IonRouterOutlet>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/registerUser">
            <RegisterUser />
          </Route>


          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Schedule">
            <Schedule />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Chat">
            <Chat />
          </Route>

          <Route path="/Settings">
            <Settings />
          </Route>

          <Route path="/Terms">
            <Terms />
          </Route>

          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/Home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="schedule" href="/Schedule">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/Profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="chat" href="/Chat">
            <IonIcon icon={chatboxOutline} />
            <IonLabel>Chat</IonLabel>
          </IonTabButton>
        </IonTabBar>
        
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export function hideTabs() {
  const tabsEl = document.querySelector('ion-tab-bar');
  if (tabsEl) {
    tabsEl.hidden = true;
  }
}

export function showTabs() {
  const tabsEl = document.querySelector('ion-tab-bar');
  if (tabsEl) {
    tabsEl.hidden = false;
  }
}

export default App;
