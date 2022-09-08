import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { showTabs } from '../../../App';
import '../tabPages.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

const ShowTab = () => {
  useIonViewWillEnter(() => showTabs())
}

const Home: React.FC = () => {

  showTabs();

  return (
    
    <IonPage>
      <IonHeader id='header'>
        <IonToolbar color={"primary"}>
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            className="mySwiper"
            >
              <SwiperSlide id='techslide'> </SwiperSlide>
              <SwiperSlide id='techslide'> </SwiperSlide>
              <SwiperSlide id='techslide'> </SwiperSlide>
              <SwiperSlide id='techslide'> </SwiperSlide>
              <SwiperSlide id='techslide'> </SwiperSlide>
            </Swiper>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
          <div id='background'>

            <IonLabel>
              <br/>
              <h1>Tipo de atendimento</h1>
              <br/>
            </IonLabel>
          
            <div id='slider'>
            <Swiper
            spaceBetween={10}
            pagination={{
              dynamicBullets: true,
              clickable: true
            }}
            modules={[Pagination]}
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
            </Swiper>
            </div>

          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
