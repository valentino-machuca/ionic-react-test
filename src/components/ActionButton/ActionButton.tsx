import React from 'react';
import s from './ActionButton.module.scss';

//Ionic components
import { IonButton } from '@ionic/react';

const ActionButton: React.FC<{item: {icon: any, label: string}}> = ({item}) => {
  return (
    <div className={s.container}>
        <IonButton color='dark'>
            {item?.icon}
        </IonButton>
        <p>{item.label}</p>
    </div>
  )
}

export default ActionButton