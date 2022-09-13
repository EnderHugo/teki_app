import { IonContent, IonDatetime, IonHeader, IonLabel, IonPage} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react'
import * as swiper from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import '../tabPages.css';


const Schedule: React.FC = () => {
  return (
    <IonPage>
      <IonHeader id='header'>
      </IonHeader>
      
      <IonContent fullscreen>
        <div id='background'>
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;
