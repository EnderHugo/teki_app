import { 
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonToast,
  IonText,
  IonPage,
  IonContent,
  IonNavLink,
  IonRow,
  IonFooter,
  IonIcon,
  useIonViewWillEnter, } from '@ionic/react';


import ExploreContainer from '../../components/ExploreContainer';
import './tablessPages.css';
import React, { useEffect, useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { logoFacebook, logoGoogle } from 'ionicons/icons';
import { hideTabs } from '../../App';

const HideTab = () => {
  useIonViewWillEnter(() => hideTabs())
}

const Login = () => {
  /*const { store } = React.useContext(MobXProviderContext);
  let { isAuth, initializationError } = store;
  const history = useHistory();*/
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("");
  const [errorInfo, setErrorInfo] = useState({});
  
  /*const _doLogin = async () => {
    try {
      let r = await store.doLogin(email, password);
      if (r.code) {
        throw r;
      }
      setErrorInfo({});
      return history.push("/tabs/home");
    } catch (e) {
      setErrorInfo({ showErrorToast: true, errMsg: e.message });
      return false;
    }
  };*/

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start" />
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText color="danger" style={{ fontWeight: "500" }}>
          {/*initializationError && initializationError.message*/}
        </IonText> 

        <div style={{"height":"100px"}}>
        </div>
        <br/>
        
        <div className="ion-text-center">
        <IonText>Logo Here</IonText>
        </div>

        <br/>

        <div style={{"height":"50px"}}>
        </div>

        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            onIonChange={(e) => {
              setEmail(e.detail.value + "");
            }}
            name="email"  
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Senha</IonLabel>
          <IonInput
            type="password"
            onIonChange={(e) => {
              setPassword(e.detail.value + "");
            }}
            name="password"
          />
        </IonItem>
        <div style={{ padding: 10, paddingTop: 20 }}>
          <IonButton
            expand="full"
            style={{ margin: 14 }}
            onClick={(e) => {
              if (!e.currentTarget) {
                return;
              }
              e.preventDefault();
              /*_doLogin(history);*/
            }}
          >
            Login {/*isAuth ? "Logged In" : "Login"*/}
          </IonButton>
          
          <div className="ion-text-center">

          <br/>
          ou
          <br/>
          <br/>
          <IonButton shape='round' color={"tertiary"} style={{"width":"260px"}}>
            <IonIcon icon={logoGoogle} /> &nbsp; Entre com google
          </IonButton>
          <br/>
          <IonButton shape='round' color={"tertiary"} style={{"width":"260px"}}>
            <IonIcon icon={logoFacebook} /> &nbsp; Entre com facebook
          </IonButton>
          </div>

        </div>
        <IonToast
          color="danger"
          /*isOpen={errorInfo.showErrorToast}
          onDidDismiss={() => setErrorInfo({ showErrorToast: false })}
          message={errorInfo.errMsg}*/
          isOpen={false}
          duration={2000}
        />
      </IonContent>

      <IonFooter>
              <div className="ion-text-right">
          <IonItem href='/Register' style={{"padding-left":"30px","padding-right":"30px","text-align":"center"}}>
                Não tem uma conta? &nbsp; <b>Cadastre-se</b>
          </IonItem> 
              </div>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
