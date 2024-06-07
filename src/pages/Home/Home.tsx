import React, { useEffect, useState } from 'react'
import s from './Home.module.scss';

//ionic components
import { IonIcon, IonContent, IonPage, useIonActionSheet, IonProgressBar, IonInfiniteScroll, IonNavLink } from '@ionic/react';
import { informationCircleOutline, cardOutline, swapHorizontal, wallet, statsChart, phonePortraitOutline, notifications } from 'ionicons/icons'
import { Movement } from '../../components/Movement/Movement';
import ActionButton from '../../components/ActionButton/ActionButton';
import Avatar from '../../components/Avatar/Avatar';
import Profile from '../Profile/Profile';


const Home = () => {
    const [present] = useIonActionSheet();
    const [action, setAction] = useState<string>('');

    const [loading, setLoading] = useState(false);
    const [randomUsers, setRandomUsers] = useState<Array<Object>>([]);
    const [user, setUser] = useState<Object>({});

    useEffect(() => {
        setLoading(true);
        fetch('https://randomuser.me/api/?results=8')
        .then((response) => response.json())
        .then((json) => {
            setRandomUsers(json.results.slice(1));
            setUser(json.results[0])
            setLoading(false);
        })
        .catch((e: Error) => {
            console.log(e);
            setLoading(false);
        })
    }, [])

    const handlePresent = () => {
        present({
          header: 'Balance',
          buttons: [
            { text: 'Cargar saldo', handler: () => setAction('add_balance') },
            { text: 'Transferir', handler: () => setAction('transfer') },
            { text: 'Ver datos', handler: () => setAction('data') },
            { text: 'Cerrar', role: 'cancel', handler: () => setAction('cancel') },
          ],
        });
      };

    const options = [
        {label: 'Tranferir', icon: <IonIcon icon={swapHorizontal}/>},
        {label: 'Ingresar', icon: <IonIcon icon={wallet}/>},
        {label: 'Invertir', icon: <IonIcon icon={statsChart}/>},
        {label: 'Recargar', icon: <IonIcon icon={phonePortraitOutline}/>},
    ];

  return (
    <IonPage>
        <IonContent>
        <IonInfiniteScroll>
            <div className={s.container}>
                <div className={s.title}>
                    <IonNavLink routerDirection="forward" component={() => <Profile user={user}/>}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                {loading ? <></> : <Avatar user={user}/>}
                                <h1>Test</h1>
                                <h1 style={{fontWeight: 400}}>Wallet</h1>
                        </div>
                    </IonNavLink>
                    <IonIcon icon={notifications} style={{fontSize: '1.5em'}}/>
                </div>

                <div className={s.balance_section} id="card-balance-info" onClick={handlePresent}>
                    <div className={s.card_visa}>
                        <p>Saldo</p>
                        <IonIcon icon={cardOutline} style={{fontSize: '1.5em'}}/>
                    </div>
                    <div className={s.balance}>
                        <p>194.004,21</p>
                    </div>
                    <div className={s.card_info}>
                        <p>**** 4125</p>
                        <IonIcon icon={informationCircleOutline} style={{fontSize: '1.3em'}}/>
                    </div>
                </div>

                <div className={s.options}>
                    {
                        options.map((item, index) => <ActionButton item={item} key={index}/>)
                    }
                </div>

                <div className={s.movements}>
                    <h2>Movimientos</h2>
                    {
                        loading ?
                        <IonProgressBar type="indeterminate"></IonProgressBar>
                        : randomUsers.length ? randomUsers.map((user, index) => <Movement user={user} index={index} key={index}/>) : <p>Sin movimientos...</p>
                    }
                </div>
            </div>
        </IonInfiniteScroll>
        </IonContent>
    </IonPage>
  )
}

export default Home;