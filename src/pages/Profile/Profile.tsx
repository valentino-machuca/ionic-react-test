import { IonBackButton, IonButtons, IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react'
import React from 'react';
import s from './Profile.module.scss';

const Profile: React.FC<{ user: any }> = ({user}) => {
  return (
    <>
        <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>Perfil</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img src={user?.picture?.large} alt="profile_pic" />
                    <h2>{`${user.name.first} ${user.name.last}`}</h2>
                </div>
            </div>
        </IonContent>
    </>
  )
}

export default Profile