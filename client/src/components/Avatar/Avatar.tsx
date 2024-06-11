import React from 'react';
import s from './Avatar.module.scss';
import { IonAvatar } from '@ionic/react';
import User from '../../models/user';

const Avatar: React.FC<{user: User}>= ({user}) => {
  return (
    <div className={s.container}>
        <IonAvatar style={{width: '3em', height:'3em'}}>
            <img src={user?.avatar} alt="avatar_user" />
        </IonAvatar>
    </div>
  )
}

export default Avatar