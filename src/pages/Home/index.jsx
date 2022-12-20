import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGroups } from '../../redux/slices/groupsSlice';
import { fetchCampaigns } from '../../redux/slices/campaignsSlice';

import styles from './Home.module.scss';

import Groups from '../../components/Groups';
import Campaigns from '../../components/Campaigns';

const Home = () => {

   const dispatch = useDispatch();
   const campIds = useSelector((state) => state.campaigns.campIdList);
   const isLoadingCamp = useRef(false);

   useEffect(() => {
      dispatch(fetchCampaigns());
   }, []);

   useEffect(() => {
      if (isLoadingCamp.current) {
         dispatch(fetchGroups(campIds));
      }
      isLoadingCamp.current = true;
   }, [campIds]);

   return (
      <div className={styles.container}>
         <div className={styles.sidebar_container}>
            <Campaigns />
         </div>
         <div className={styles.body_container}>
            <Groups />
         </div>
      </div>
   )
}

export default Home;