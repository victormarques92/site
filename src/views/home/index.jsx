import React, { useEffect, useState } from 'react';
import { Navigation } from '../../components';
import {
    About,
    Hero,
    Partners,
    Portfolios,
    Services,
    Timeline,
} from '../../sections';
import firebase from '../../domain/firebase';

export default function Home() {
    const [profile, setProfile] = useState();
    const [skills, setSkills] = useState();
    const [timeline, setTimeline] = useState();
    const [partners, setPartners] = useState();
    const [portfolios, setPortfolios] = useState();
    const [services, setServices] = useState();

    useEffect(() => {
        getApiProfile();
        getApiSkills();
        getTimeline();
        getPortfolios();
        getPartners();
        getServices();
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

    function getPortfolios() {
        const portfolios = firebase.database().ref('portfolios');
        portfolios.on('value', function (data) {
            setPortfolios(data.val());
        });
    }

    function getPartners() {
        const partners = firebase.database().ref('partners');
        partners.on('value', function (data) {
            setPartners(data.val());
        });
    }

    function getServices() {
        const services = firebase.database().ref('services');
        services.on('value', function (data) {
            setServices(data.val());
        });
    }

    return (
        <>
            <Navigation />

            <Hero data={profile} />
            <About bio={profile?.bio} skills={skills} />
            <Timeline data={timeline} />
            <Portfolios data={portfolios} />
            <Partners data={partners} />
            <Services data={services} />
        </>
    );
}
