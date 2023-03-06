import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Camera from "../components/Camera";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Noticias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Camera />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
