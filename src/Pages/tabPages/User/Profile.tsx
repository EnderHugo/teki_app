import { IonCol, IonContent, IonHeader, IonImg, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../../components/ExploreContainer';
import '../tabPages.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
          <div id='profile-top'>
            <IonRow>
              <IonCol size='auto'>
                <div id='circle'>
                  <IonImg src='assets/placeholder.jpg' id='roundImage'></IonImg>
                </div>
              </IonCol>
              <IonCol>
                <IonLabel id='profileNameLabel'> Nome do Usuario </IonLabel>
                <br/>
                <IonLabel id='profileRatingLabel'> Avaliação </IonLabel>
              </IonCol>
            </IonRow>
          </div>


      </IonContent>
    </IonPage>
  );
};

export default Profile;
