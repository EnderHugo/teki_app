import { IonAvatar, IonButton, IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { pencil, settings, star } from 'ionicons/icons';
import React, { useState } from 'react';
import ExploreContainer from '../../../components/ExploreContainer';
import { useHistory } from 'react-router';
import '../tabPages.css';

const Profile: React.FC = () => {
  const history = useHistory();
  const _settings = async () => {
     history.push("/settings");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Perfil</IonTitle>
          <IonFab horizontal='end' vertical='center' edge>
          <IonFabButton onClick={_settings} color={'dark'} size="small"><IonIcon icon={settings}></IonIcon></IonFabButton>
          </IonFab>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader>
            <div id='profile-top'>
                <IonRow>
                  <IonCol size=''>
                    <IonAvatar >
                      <br/><IonImg src='assets/placeholder.png' id='roundImage'></IonImg>
                    </IonAvatar>
                  </IonCol>
                  <IonCol>
                    <br/>
                    <IonLabel id='profileNameLabel'> Nome do Usuário </IonLabel>
                    <br/><br/>
                    <IonIcon icon={star} color='light'></IonIcon>
                    <IonLabel id='profileRatingLabel'> X.Y </IonLabel>
                  </IonCol>
                </IonRow>
            </div>
        </IonHeader>
          <div id='background'>
            <div id='profile-about'>
              <IonLabel>Sobre</IonLabel> <br/><br/>

              <IonLabel>Contato</IonLabel> <br/><br/>
            
              <IonFabButton id='editbutton'>
                <IonIcon icon={pencil}></IonIcon>
              </IonFabButton>
            </div>
            <br/>
            <div id='profile-stats'>
              <IonLabel>Historico</IonLabel> <br/><br/>
            
              <IonList lines='full'>
                <IonItem></IonItem>
                <IonItem></IonItem>
                <IonItem></IonItem>
              </IonList>

            </div>
          </div>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
