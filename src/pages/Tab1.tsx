import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Tab1.css'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Problema</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Descripcion</IonLabel>
            <IonInput type="text" />
          </IonItem>

          <IonButton className="ion-margin-top" type="submit" expand="block">
            Enviar Formulario
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
