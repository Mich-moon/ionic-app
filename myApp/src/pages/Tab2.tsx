import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonList, IonListHeader, IonItem } from '@ionic/react';
import './Tab2.css';

import majors from "../data/majors.json";
import minors from "../data/minors.json";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Undergraduate courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Programmes</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonListHeader>
            Majors
          </IonListHeader>
          {majors.map(major => {
            return (
              <IonItem key={major.id}>
                {major.title}
              </IonItem>
            )
          })}
        </IonList>
        <IonList>
          <IonListHeader>
            Minors
          </IonListHeader>
          {minors.map(minor => {
            return (
              <IonItem key={minor.id}>
                {minor.title}
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
