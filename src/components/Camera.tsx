import {
  Camera as CapacitorCamera,
  CameraResultType,
  CameraSource,
} from '@capacitor/camera'
import { IonButton, IonImg } from '@ionic/react'
import { useState } from 'react'

const Camera = () => {
  const [image, setImage] = useState('')
  const takePhoto = async () => {
    const photo = await CapacitorCamera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    })

    setImage(photo.webPath || '')
  }
  return (
    <>
      <div>
        {image !== '' && (
          <IonImg src={image} style={{ with: '200px', height: '200px' }} />
        )}
      </div>
      <IonButton
        color={'danger'}
        onClick={() => {
          takePhoto()
        }}
      >
        Tomar foto
      </IonButton>
    </>
  )
}

export default Camera
