import {
  Camera as CapacitorCamera,
  CameraResultType,
  CameraSource,
} from "@capacitor/camera";
import { IonButton, IonImg } from "@ionic/react";
import { useState } from "react";

const Camera = () => {
  const [image, setImage] = useState("");
  const takePhoto = async () => {
    const photo = await CapacitorCamera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 100,
    });
    let imageUrl = `data:image/jpeg;base64,${photo}`;
    setImage(imageUrl);
  };
  return (
    <>
      <IonButton
        onClick={() => {
          takePhoto();
        }}
      >
        Tomar foto
      </IonButton>
      <div>{image && <IonImg src={image} />}</div>
    </>
  );
};

export default Camera;
