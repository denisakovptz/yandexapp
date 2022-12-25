import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { fetchGroups } from '../../redux/slices/groupsSlice';
import { fetchCampaigns } from '../../redux/slices/campaignsSlice';
import { fetchCampStats } from '../../redux/slices/campaignStats';

import { RootState, useAppDispatch } from '../../redux/store';

import styles from './Home.module.scss';

import Groups from '../../components/Groups';
import Campaigns from '../../components/Campaigns';
import Statistic from '../../components/Statistic';


const Home: React.FC = () => {

   const dispatch = useAppDispatch();
   const campIds: number[] = useSelector((state: RootState) => state.campaigns.campIdList);
   const isLoadingCamp = useRef<boolean>(false);

   useEffect(() => {
      dispatch(fetchCampaigns());
      dispatch(fetchCampStats());
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
            <Statistic />
         </div>
      </div>
   )
}

export default Home;