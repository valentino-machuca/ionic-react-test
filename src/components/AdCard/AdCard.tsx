import React from 'react';
import s from './AdCard.module.scss';

import { IonIcon, IonItemDivider, IonLabel } from '@ionic/react';

const AdCard: React.FC<{icon: any, title: string, subtitle: string}> = ({icon, title, subtitle}) => {
  return (
    <IonItemDivider className={s.container}>
        <div className={s.main_logo}>
            <IonIcon icon={icon} style={{width: '4em', height: '4em'}}/>
        </div>
        <div className={s.text}>
            <IonLabel>{title}</IonLabel>
            <IonLabel style={{fontSize: '.8em', marginTop: '5px', fontWeight: '200'}}>{subtitle}</IonLabel>
        </div>
    </IonItemDivider>
  )
}

export default AdCard;