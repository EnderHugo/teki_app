import { IonContent, IonDatetime, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 10</SwiperSlide>
          <SwiperSlide>Slide 11</SwiperSlide>
          <SwiperSlide>Slide 12</SwiperSlide>
        </Swiper>
      </IonHeader>
      
      <IonContent fullscreen>

        <IonDatetime name='calendar' showDefaultTitle={true} showDefaultTimeLabel={true}></IonDatetime>;

      </IonContent>
    </IonPage>
  );
};

export default Schedule;
