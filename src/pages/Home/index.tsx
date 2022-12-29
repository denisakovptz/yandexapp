import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { fetchGroups } from '../../redux/slices/groupsSlice';
import { fetchCampaigns } from '../../redux/slices/campaignsSlice';
import { fetchCampStats } from '../../redux/slices/statsSlice';

import { RootState, useAppDispatch } from '../../redux/store';

import styles from './Home.module.scss';

import Campaigns from '../../components/Campaigns';
import Statistic from '../../components/Statistic';
import { ApiSetType, DateRangeType, Format, IncludeDiscount, IncludeVAT, Operator, ReportType } from '../../helpers/yandexStatsApiTypes';


const Home: React.FC = () => {

   const dispatch = useAppDispatch();
   const campIds: number[] = useSelector((state: RootState) => state.campaigns.campIdList);
   const isLoadingCamp = useRef<boolean>(false);

   const apiSet: ApiSetType = {
      params: {
         SelectionCriteria: {
            Filter: [{
               Field: "CampaignId",
               Operator: Operator.IN,
               Values: []
            }]
         },
         FieldNames: ["AdGroupId", "AdGroupName", "Impressions", "Clicks", "Cost", "Ctr", "BounceRate", "AvgClickPosition", "AvgPageviews"],
         OrderBy: [{
            Field: "AdGroupId"
         }],
         ReportName: "Actual Groups Data",
         ReportType: ReportType.ADGROUP_PERFORMANCE_REPORT,
         DateRangeType: DateRangeType.LAST_7_DAYS,
         Format: Format.TSV,
         IncludeVAT: IncludeVAT.YES,
         IncludeDiscount: IncludeDiscount.YES
      }
   }

   useEffect(() => {
      dispatch(fetchCampaigns());

   }, []);

   useEffect(() => {
      if (isLoadingCamp.current) {
         dispatch(fetchGroups(campIds));
         apiSet.params.SelectionCriteria.Filter[0].Values = campIds;
         dispatch(fetchCampStats(apiSet));
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