import React, { useEffect, useState } from 'react';
import { Navigation } from '../../components';
import { About, Hero, Timeline } from '../../sections';
import firebase from '../../domain/firebase';

export default function Home() {
    const [profile, setProfile] = useState();
    const [skills, setSkills] = useState();
    const [timeline, setTimeline] = useState();

    useEffect(() => {
        getApiProfile();
        getApiSkills();
        getTimeline();
    }, []);

    function getApiProfile() {
        const profile = firebase.database().ref('profile');
        profile.on('value', function (data) {
            setProfile(data.val());
        });
    }

    function getApiSkills() {
        const skills = firebase.database().ref('skills');
        skills.on('value', function (data) {
            setSkills(data.val());
        });
    }

    function getTimeline() {
        const timeline = firebase.database().ref('timeline');
        timeline.on('value', function (data) {
            setTimeline(data.val());
        });
    }

    return (
        <>
            <Navigation />

            <Hero data={profile} loading={!profile} />
            <About bio={profile?.bio} skills={skills} loading={!skills} />
            <Timeline data={timeline} loading={!timeline} />
        </>
    );
}
