import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation';
import firebase from '../../domain/firebase';
import Hero from '../../sections/hero';

export default function Home() {
    const [profile, setProfile] = useState();

    useEffect(() => {
        getApiProfile();
    }, []);

    function getApiProfile() {
        const profile = firebase.database().ref('profile');
        profile.on('value', function (data) {
            setProfile(data.val());
        });
    }

    // function handleSkills() {
    //     const paramsSkills = [
    //         {
    //             type: 'default',
    //             name: 'HTML',
    //             strong: true,
    //         },
    //         {
    //             type: 'default',
    //             name: 'CSS',
    //             strong: true,
    //         },
    //     ];

    //     firebase.database().ref('skills').set(paramsSkills);
    // }

    return (
        <>
            <Navigation />

            <Hero data={profile} loading={!profile} />
        </>
    );
}
