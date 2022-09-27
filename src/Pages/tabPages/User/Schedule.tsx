import { IonContent, IonDatetime, IonHeader, IonLabel, IonPage, IonText} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react'
import * as swiper from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import '../tabPages.css';
import ScheduledDate from '../../../components/ScheduledDate';
import ExploreContainer from '../../../components/ExploreContainer';
import { useEffect, useRef } from 'react';


const Schedule: React.FC = () => {
  var dateSelect : number = 0;
  var date : Date[] = [];
  date[0] = new Date(2022, 11, 11);
  date[1] = new Date(2022, 11, 12);
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);

  useEffect(() => {
    if(!datetime.current) return;
    datetime.current.value = [date[dateSelect].toJSON()];
  }, []); 

  return (
    <IonPage>
      <IonHeader id='header'>
        
      </IonHeader>
      <IonContent fullscreen>
        <div id='background'>
          <IonDatetime size='cover' name='calendar' presentation='date' showDefaultTimeLabel={true} ref={datetime} multiple={true} contentEditable={false}></IonDatetime>
          
          <div id='displaytab'>
            <ScheduledDate name='#NOME 1' date={date[0]} n={0} ></ScheduledDate>
            <ScheduledDate name='#NOME 2' date={date[1]} n={1} ></ScheduledDate>
          </div>
          <div style={{height:'100px'}}/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;
