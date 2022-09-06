import { AccordionGroupCustomEvent, IonAccordion, IonAccordionGroup, IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToast, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './tablessPages.css';
import React, { useEffect, useRef, useState } from 'react';
import { hideTabs } from '../../App';
import { business, person, terminal } from 'ionicons/icons';
import { useHistory } from 'react-router';

const HideTab = () => {
  useIonViewWillEnter(() => hideTabs())
}

const Register: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const listenerOut = useRef<null | HTMLParagraphElement>(null);
  
  const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
    const nativeEl = listenerOut.current;
    if (!nativeEl) {
      return;
    }

    const selectedValue = ev.detail.value;

    nativeEl.innerText = `${selectedValue === undefined ? null : ev.detail.value}`;

  };
  
  const history = useHistory();

  useEffect(() => {
    const el2 = listenerOut.current;
    console.log(el2); // 👈️ element here
  }, []);
  
  const nextRegisterPage = () => {
    console.log(listenerOut.current?.innerHTML)
    if(listenerOut.current?.innerText === "user")
    {
      history.push("/registerUser");
    }
    else if(listenerOut.current?.innerText === "company")
    {
      history.push("/registerCompany");
    }
    else if(listenerOut.current?.innerText === "work")
    {
      history.push("/registerWork");
    }
    else
    {
      setShowToast(true);
    }
  }


  HideTab();

  return (
    <IonPage>

      <IonHeader>
       
      </IonHeader>

      <IonContent fullscreen>
          <IonAccordionGroup expand="inset" onIonChange={accordionGroupChange }>
            <IonAccordion value="user" toggleIcon=''>  
              <IonItem slot="header" color="primary">
                <IonIcon icon={person}></IonIcon>
                <IonLabel>&nbsp; Usuário</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                First Content
              </div>
            </IonAccordion>
            <IonAccordion value="company" toggleIcon=''>
              <IonItem slot="header" color="secondary">
                <IonIcon icon={business}></IonIcon>
                <IonLabel>&nbsp; Empresarial</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Second Content
              </div>
            </IonAccordion>
            <IonAccordion value="work" toggleIcon=''>
              <IonItem slot="header" color="tertiary">
                <IonIcon icon={terminal}></IonIcon>
                <IonLabel>&nbsp; Prestador de serviço</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Third Content
              </div>
            </IonAccordion>
          </IonAccordionGroup>
      </IonContent>

      <div ref={listenerOut}>
        <h2>Hello</h2>
      </div>

      <IonFooter>
        <IonToast isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Selecione um tipo de conta."
          duration={500}
          color="warning"
        />
        <IonButton expand='block' onClick={nextRegisterPage}>Próximo</IonButton>
      </IonFooter>

    </IonPage>
  );
};

export default Register;
