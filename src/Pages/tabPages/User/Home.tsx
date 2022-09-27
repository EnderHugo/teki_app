import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonLoading, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { showTabs } from '../../../App';
import '../tabPages.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import LoadingIcons from 'react-loading-icons'
import { useState } from 'react';
import SpinningCircles from 'react-loading-icons/dist/esm/components/spinning-circles';
import Oval from 'react-loading-icons/dist/esm/components/oval';
import Hearts from 'react-loading-icons/dist/esm/components/hearts';
import Rings from 'react-loading-icons/dist/esm/components/rings';
import Puff from 'react-loading-icons/dist/esm/components/puff';
import ThreeDots from 'react-loading-icons/dist/esm/components/three-dots';
import TailSpin from 'react-loading-icons/dist/esm/components/tail-spin';
import Bars from 'react-loading-icons/dist/esm/components/bars';
import BallTriangle from 'react-loading-icons/dist/esm/components/ball-triangle';



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
            <IonContent>
              <IonInfiniteScroll id='scrolling-wrapper'>
                <IonInfiniteScrollContent
                  loadingSpinner="bubbles"
                  loadingText="...">
                </IonInfiniteScrollContent>
              </IonInfiniteScroll>
            </IonContent>
          <Oval style={{'margin':'14px'}}/>
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
            creativeEffect={{
            }}
            modules={[Pagination, EffectCreative]}
            className="mainSwiper"
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
            <br/><br/>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
