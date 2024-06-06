import React from 'react';
import s from './Movement.module.scss';
import { IonAvatar } from '@ionic/react';

export const Movement: React.FC<{user: any, index: number}> = ({user, index}) => {

    let username:String = `${user.name.first} ${user.name.last}`

  return (
    <div className={s.container}>
        <div className={s.avatar}>
            <IonAvatar>
                <img src={user.picture.thumbnail} alt={user.email} />
            </IonAvatar>
            <div className={s.info}>
                <h4>{username}</h4>
                <p>{user.registered.date.split('T')[0]}</p>
            </div>
        </div>

        <p>$ {user.location.street.number.toFixed(2)}</p>
    </div>
  )
}
