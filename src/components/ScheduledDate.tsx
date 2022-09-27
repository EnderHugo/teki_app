import { IonCol } from '@ionic/react';
import './ScheduledDate.css';

interface ContainerProps {
  name: string;
  date: Date;
  n: number;
}

var selected = false;

const FormatDate = (date: Date) => {
    var FormatDate = date.toLocaleDateString();
   return FormatDate;
}

function DateClick() {
  selected = true;
}

const ScheduledDate: React.FC<ContainerProps> = ({ name, date}) => {
  return (
    <div className="container" onClick={DateClick}>
        <IonCol >
            <strong>{name}</strong>   
        </IonCol>

        <IonCol>
            <strong>{FormatDate(date)}</strong>  
        </IonCol>
    </div>
  );
};

export default ScheduledDate;
