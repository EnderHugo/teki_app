import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { showTabs } from '../../../App';
import '../tabPages.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { useState } from 'react';



const ShowTab = () => {
  useIonViewWillEnter(() => showTabs())
}

const Home: React.FC = () => {

  const [data, setData] = useState<string[]>([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  
  const pushData = () => {
    const max = data.length + 20;
    const min = max - 20;
    const newData = [];
    for (let i = min; i < max; i++) {
      newData.push('Item' + i);
    }
    
    setData([
      ...data,
      ...newData
    ]);
  }
  const loadData = (ev: any) => {
    setTimeout(() => {
      pushData();
      console.log('Loaded data');
      ev.target.complete();
      if (data.length === 1000) {
        setInfiniteDisabled(true);
      }
    }, 500);
  }  
  
  useIonViewWillEnter(() => {
    pushData();
  });

  showTabs();

  return (
    
    <IonPage>
      <IonHeader id='header'>
        <IonToolbar color={"primary"}>
          <IonInfiniteScroll id='scrolling-wrapper'>
            <IonInfiniteScrollContent
              loadingSpinner="bubbles"
              loadingText="...">
            </IonInfiniteScrollContent>
          </IonInfiniteScroll>
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
