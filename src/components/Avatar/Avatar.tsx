import React from 'react';
import s from './Avatar.module.scss';
import { IonAvatar } from '@ionic/react';

const Avatar: React.FC<{user:any}>= ({user}) => {
  return (
    <div className={s.container}>
        <IonAvatar style={{width: '3em', height:'3em'}}>
            <img src={user?.picture?.large} alt="avatar_user" />
        </IonAvatar>
    </div>
  )
}

export default Avatar