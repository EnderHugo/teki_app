import { IonAvatar, IonBackButton, IonButtons, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import 'swiper/css';
import "swiper/css/navigation";
import '../tabPages.css';
import { analytics, card, documentText, informationCircle, lockClosed } from 'ionicons/icons';
import { useHistory } from 'react-router';


const Settings: React.FC = () => {
  const history = useHistory();
  const _terms = async () => {
    history.push("/terms");
 };
  return (
    <IonPage>
       
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot="start">
            <IonBackButton color={'light'}/>
            <IonTitle>Configurações</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
          <IonList lines='full'>

            <IonItem button detail={true}>  
              <IonIcon icon={analytics}></IonIcon>
            </IonItem>
            <IonItem button detail={true}>  
             <IonIcon icon={lockClosed}></IonIcon>
            </IonItem> 
            <IonItem button detail={true}
            onClick={_terms}>  
              <IonIcon icon={documentText}></IonIcon>
            </IonItem>
            <IonItem button detail={true}>  
              <IonIcon icon={card}></IonIcon>
            </IonItem> 
            <IonItem button detail={true} lines='none'>  
              <IonIcon icon={informationCircle}></IonIcon>
            </IonItem>
            
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
