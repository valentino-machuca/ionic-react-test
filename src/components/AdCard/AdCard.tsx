import React from 'react';
import s from './AdCard.module.scss';

import { IonIcon, IonItemDivider, IonLabel } from '@ionic/react';

const AdCard: React.FC<{icon: any, title: string, subtitle: string, theme: string}> = ({icon, title, subtitle, theme}) => {
  return (
    <IonItemDivider className={s.container} color={theme === "light" ? 'dark' : "light"}>
        <div className={s.main_logo}>
            <IonIcon icon={icon} style={{width: '4em', height: '4em'}}/>
        </div>
        <div className={s.text}>
            <IonLabel color={theme}>{title}</IonLabel>
            <IonLabel color={theme} style={{fontSize: '.8em', marginTop: '5px', fontWeight: '200'}}>{subtitle}</IonLabel>
        </div>
    </IonItemDivider>
  )
}

export default AdCard;