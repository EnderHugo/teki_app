import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToast, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './tablessPages.css';
import React, { useEffect, useRef, useState } from 'react';
import { hideTabs } from '../../App';
import { useHistory } from 'react-router';

const HideTab = () => {
  useIonViewWillEnter(() => hideTabs())
}

const Register: React.FC = () => {
  const [CampoInvalido, setShowToast] = useState(false);
  const [ConfInvalida, setShowToast2] = useState(false);
  const [EmailInvalido, setShowToast3] = useState(false);
  const [SenhaInvalida, setShowToast4] = useState(false);
  const [NumeroInvalido, setShowToast5] = useState(false);

  const listenerOut = useRef<null | HTMLParagraphElement>(null);
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [cellphone, setCellphone] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [enablePass2, setEnablePass2] = useState(true);
  
  const history = useHistory();

  useEffect(() => {
    const el2 = listenerOut.current;
    console.log(el2); // 👈️ element here
  }, []);
  
  const registerUser = () => {
    if (email === "" || username === "" || cellphone === ""){
      setShowToast(true);
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email + "")){
      setShowToast3(true);
      return;
    }
    else if(!/^([0-9]+-+[0-9]{4,})$/i.test(cellphone + "")&&!/^([0-9]{8,})$/i.test(cellphone + "")){
      setShowToast5(true);
      return;
    }
    else if (password1 !== password2 && password1 !== "" && password2 !== "")
    {
      setShowToast2(true);
      return;
    }
    else if (password1 === password2  && password1 !== "" && password2 !== "")
    {
      setPassword(password1)
    }
    else if (password === "")
    {
      setShowToast2(true);
      return;
    }
    console.log("register user")
  }


  HideTab();

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start" />
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
         
        <IonItem>
            <IonLabel position="floating">Nome de usuario</IonLabel>
            <IonInput
              type="text"
              onIonChange={(e) => {
                setUsername(e.detail.value + "");
              }}
              name="username"  
            />
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              pattern='email'
              onIonChange={(e) => {
                setEmail(e.detail.value + "");
              }}
              name="email"  
            />
            
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Telefone</IonLabel>
            <IonInput
              type="tel"
              pattern='tel'
              onIonChange={(e) => {
                setCellphone(e.detail.value + "");
              }}
              name="cellphone"  
            />
            
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Senha</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e) => {
                setPassword1(e.detail.value + "");
                if (password1 != "")
                {
                  setEnablePass2(false);
                }
              }}
              name="password"
            />
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Confirmar senha</IonLabel>
            <IonInput
              type="password"
              disabled={enablePass2}
              onIonChange={(e) => {
                setPassword2(e.detail.value + "");
              }}
              name="password"
            />
            
        </IonItem>

      </IonContent>

      <IonFooter>
        <IonToast isOpen={CampoInvalido}
          onDidDismiss={() => setShowToast(false)}
          message="Preencha todos os campos."
          duration={500}
          color="warning"
        />
        <IonToast isOpen={ConfInvalida}
          onDidDismiss={() => setShowToast2(false)}
          message="Senha não bate com a confirmação."
          duration={500}
          color="warning"
        />
        <IonToast isOpen={EmailInvalido}
          onDidDismiss={() => setShowToast3(false)}
          message="Email invalido."
          duration={500}
          color="warning"
        />
        <IonToast isOpen={SenhaInvalida}
          onDidDismiss={() => setShowToast4(false)}
          message="Senha inválida."
          duration={500}
          color="warning"
        />
        <IonToast isOpen={NumeroInvalido}
          onDidDismiss={() => setShowToast5(false)}
          message="Numero inválido."
          duration={500}
          color="warning"
        />
        <IonButton expand='block' onClick={registerUser}>Próximo</IonButton>
      </IonFooter>

    </IonPage>
  );
};

export default Register;
