import React from 'react';
import s from './Movement.module.scss';

//Ionic
import { IonAvatar } from '@ionic/react';

//Modelos
import User from '../../models/user';

const Movement: React.FC<{movement: any, index: number}> = ({movement, index}) => {
    let user: User;
    let date : string = new Date(movement.date).toLocaleString('es-AR', {
        timeZone: 'America/Argentina/Buenos_Aires',
        year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true // Para formato de 24 horas
    })

    if(movement.Receiver.id === 1){
        user = movement.Sender;
    }else{
        user = movement.Receiver;
    }

  return (
    <div className={s.container}>
        <div className={s.avatar}>
            <IonAvatar style={{width: '3em', height:'3em'}}>
                <img src={user.avatar} alt={user.email} />
            </IonAvatar>
            <div className={s.info}>
                <h4>{`${user.name} ${user.lastname}`}</h4>
                <p>{date}</p>
            </div>
        </div>

        <p style={{color: movement.Sender.id === 1 ? '#B33A3A' : ''}}>{`${movement.Sender.id === 1 ? '- ' : '+ '}$ ${movement.monto.toFixed(2)}`}</p>
    </div>
  )
};

export default Movement;
