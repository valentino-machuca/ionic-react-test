import React from 'react';
import s from './Profile.module.scss';

//Ionic
import { IonBackButton, IonButtons, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, useIonActionSheet, IonLabel } from '@ionic/react'
import { languageOutline, logOutOutline, personOutline, settings, settingsOutline } from 'ionicons/icons';

//custom components
import ActionListItem from '../../components/ActionsListItem/ActionListItem';

//i18n
import { useTranslation } from 'react-i18next';

const Profile: React.FC<{ user: any }> = ({user}) => {
    const [present] = useIonActionSheet();

    // Traductor
    const { t, i18n } = useTranslation();

    const handlePresentLanguage = () => {
        present({
            header: t('language.chage_language'),
            buttons: [
                { text: t('language.spanish'), handler: () => i18n.changeLanguage('es') },
                { text: t('language.english'), handler: () => i18n.changeLanguage('en')},
                { text: t('action.close'), role: 'cancel'},
            ],
        });
    };

    const profile_options = [
        {label: t('profile_actions.settings'), icon: settingsOutline, handler: () => {alert('settings')}},
        {label: t('profile_actions.profile'), icon: personOutline, handler: () => {alert('my_profile')}},
        {label: t('profile_actions.language'), icon: languageOutline, handler: () => {handlePresentLanguage()}},
        {label: t('profile_actions.logout'), icon: logOutOutline, handler: () => {alert('logout')}},
    ]

  return (
    <>
        <IonHeader>
        <IonToolbar color='dark'>
            <IonButtons slot="start">
            <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>{t('profile.profile')}</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent color='dark'>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img src={user?.picture?.large} alt="profile_pic" />
                    <div style={{marginLeft: '5%'}}>
                        <IonLabel>
                            <h2>{`${user.name.first} ${user.name.last}`}</h2>
                            <p>{user.email}</p>
                        </IonLabel>
                    </div>
                </div>

                <div className={s.options}>
                    {profile_options.map((op, index) => (<ActionListItem key={index} index={index} option={op}/>))}
                </div>
            </div>
        </IonContent>
    </>
  )
}

export default Profile;