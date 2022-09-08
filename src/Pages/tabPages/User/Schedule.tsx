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
        <Swiper 
        navigation={true} 
        modules={[swiper.Navigation]} 
        className="mySwiper"
        >
          <SwiperSlide id='primary-color'>1</SwiperSlide>
          <SwiperSlide id='primary-color'>2</SwiperSlide>
          <SwiperSlide id='primary-color'> 3</SwiperSlide>
          <SwiperSlide id='primary-color'> 4</SwiperSlide>
          <SwiperSlide id='primary-color'> 5</SwiperSlide>
          <SwiperSlide id='primary-color'> 6</SwiperSlide>
          <SwiperSlide id='primary-color'> 7</SwiperSlide>
          <SwiperSlide id='primary-color'> 8</SwiperSlide>
          <SwiperSlide id='primary-color'> 9</SwiperSlide>
          <SwiperSlide id='primary-color'> 10</SwiperSlide>
          <SwiperSlide id='primary-color'> 11</SwiperSlide>
          <SwiperSlide id='primary-color'> 12</SwiperSlide>
        </Swiper>
      </IonHeader>
      
      <IonContent fullscreen>
        <div id='background'>
          <IonDatetime size='cover' name='calendar' showDefaultTimeLabel={true}></IonDatetime>
          <div id='displaytab'>
    
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;
