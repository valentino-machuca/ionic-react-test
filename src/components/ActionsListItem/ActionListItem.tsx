import React from 'react';
import s from './ActionListItem.module.scss';

//Ionic
import { IonIcon, IonLabel } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';

const ActionListItem: React.FC<{option: any, index: number}> = ({option, index}) => {
  return (
    <div className={s.container} onClick={() => setTimeout(option.handler, 100)} style={{animationDuration: `.${index+3}s`}}>
        <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <IonIcon icon={option.icon} style={{fontSize: '1.3em'}}/>
            <IonLabel className={s.ion_label}>{option.label}</IonLabel>
        </div>
        <IonIcon icon={chevronForward}/>
    </div>
  )
}

export default ActionListItem;