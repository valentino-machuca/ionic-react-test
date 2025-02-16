import React, { useContext, useEffect, useState } from 'react'
import s from './Home.module.scss';

//ionic components
import { IonIcon, IonContent, IonPage, useIonActionSheet, IonProgressBar, IonInfiniteScroll, IonNavLink, IonLabel, IonItemDivider } from '@ionic/react';
import { informationCircleOutline, cardOutline, swapHorizontal, statsChart, phonePortraitOutline, notifications, walletOutline, discOutline, flame } from 'ionicons/icons'

//Service
import { getUserById } from '../../service/users/users';

//Custom components
import Movement from '../../components/Movement/Movement';
import ActionButton from '../../components/ActionButton/ActionButton';
import Avatar from '../../components/Avatar/Avatar';
import Profile from '../Profile/Profile';
import AdCard from '../../components/AdCard/AdCard';

//i18n
import { useTranslation } from 'react-i18next';

//Temas
import { ThemeContext } from '../../theme/ThemeContext';
import { getMovementsByUser } from '../../service/movimientos/movements';

const Home = () => {
    const [present] = useIonActionSheet();
    const [action, setAction] = useState<string>('');

    const [loading, setLoading] = useState(false);
    const [movements, setMovements] = useState<Array<typeof Movement>>([]);
    const [user, setUser] = useState<any>({});

    // Traductor
    const { t } = useTranslation();

    const theme: {theme: string, toggleTheme: Function} = useContext(ThemeContext);

    const getData = () => {
        setLoading(true);
        getUserById(1)
        .then(res => {
            setUser(res);
        })
        .catch(e => console.log(e))

        getMovementsByUser(1)
        .then(res => {
            setMovements(res);
            setLoading(false);
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        getData();
    }, [])

    const handlePresent = () => {
        present({
          header: t('home.balance'),
          buttons: [
            { text: t('action.deposit_balance'), handler: () => setAction('add_balance') },
            { text: t('action.transfer'), handler: () => setAction('transfer') },
            { text: t('action.see_data'), handler: () => setAction('data') },
            { text: t('action.close'), role: 'cancel', handler: () => setAction('cancel') },
          ],
        });
      };

    const options = [
        {label: t('action.transfer'), icon: <IonIcon icon={swapHorizontal}/>},
        {label: t('action.deposit'), icon: <IonIcon icon={walletOutline}/>},
        {label: t('action.invest'), icon: <IonIcon icon={statsChart}/>},
        {label: t('action.charge'), icon: <IonIcon icon={phonePortraitOutline}/>},
    ];

  return (
    <IonPage>
        <IonContent color={theme.theme}>
        <IonInfiniteScroll>
            <div className={s.container}>
                <div className={s.title}>
                    <IonNavLink routerDirection="forward" component={() => <Profile user={user} theme={theme}/>}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            {loading ? <></> : <Avatar user={user}/>}
                            <h1>{`${t('title.welcome')}`}</h1>
                            <h1 style={{fontWeight: 400, marginLeft: '5px'}}>{user?.name}!</h1>
                        </div>
                    </IonNavLink>
                    <IonIcon icon={notifications} style={{fontSize: '1.3em'}}/>
                </div>

                <IonItemDivider className={s.balance_section} id="card-balance-info" onClick={handlePresent} color={theme.theme === "light" ? 'dark' : "light"}>
                    <div className={s.card_visa}>
                        <IonLabel color={theme.theme}>{t('home.balance')}</IonLabel>
                        <IonIcon icon={cardOutline} style={{fontSize: '1.2em'}} color={theme.theme}/>
                    </div>
                    <div className={s.balance}>
                        <IonLabel color={theme.theme}>104.474,21</IonLabel>
                    </div>
                    <div className={s.card_info}>
                        <IonLabel color={theme.theme}>**** 4125</IonLabel>
                        <IonIcon icon={informationCircleOutline} style={{fontSize: '1.3em'}} color={theme.theme}/>
                    </div>
                </IonItemDivider>

                <div className={s.options}>
                    {
                        options.map((item, index) => <ActionButton item={item} key={index}/>)
                    }
                </div>

                <AdCard icon={flame} title={t('ad.title')} subtitle={t('ad.text')} theme={theme.theme}/>

                <div className={s.movements}>
                    <h2>{t("home.movements")}</h2>
                    {
                        loading ?
                        <IonProgressBar type="indeterminate" color={theme.theme === "light" ? 'dark' : "light"}></IonProgressBar>
                        : movements.length ? movements.map((item, index) => <Movement movement={item} index={index} key={index}/>) : <p>Sin movimientos...</p>
                    }
                </div>
            </div>
        </IonInfiniteScroll>
        </IonContent>
    </IonPage>
  )
}

export default Home;