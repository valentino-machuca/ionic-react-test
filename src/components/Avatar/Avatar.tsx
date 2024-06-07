import React from 'react';
import s from './Avatar.module.scss';
import { IonAvatar } from '@ionic/react';

const Avatar: React.FC<{user:any}>= ({user}) => {
  return (
    <div className={s.container}>
        <IonAvatar>
            <img src={user?.picture?.thumbnail} alt="avatar_user" />
        </IonAvatar>
    </div>
  )
}

export default Avatar