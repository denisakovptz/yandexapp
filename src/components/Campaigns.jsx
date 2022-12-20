import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { showGroups, showAllGroups } from '../redux/slices/groupsSlice'

import styles from './Campaigns.module.scss';

function Campaigns() {

   const campaigns = useSelector((state) => state.campaigns.data);
   const groups = useSelector((state) => state.groups.data);

   const dispatch = useDispatch();

   const [activeCamp, setActiveCamp] = useState(null);

   const showGroupsCamp = (campId) => {
      const adGroups = groups.filter(val => val.CampaignId == campId);
      return (<ul className={styles.camp_groups}>
         {adGroups.map((group) => {
            return (
               <li key={group.Id}>- {group.Name}</li>
            );
         })}
      </ul>);
   };

   return (
      <ul>
         {campaigns.map((campaign) => {

            const setActive = () => {
               if (activeCamp == campaign.Id) {
                  setActiveCamp(null);
                  dispatch(showAllGroups());
               } else {
                  setActiveCamp(campaign.Id);
                  dispatch(showGroups([campaign.Id]));
               }

            }
            return (
               <li key={campaign.Id} className={styles.list}>
                  <Link onClick={setActive} className={(activeCamp == campaign.Id) ? styles.active : styles.camp_link}>ID: {campaign.Id} - {campaign.Name}</Link>
                  {(campaign.Id == activeCamp) ?
                     showGroupsCamp(campaign.Id) :
                     ''}
               </li>
            );

         })}
      </ul>
   );
}

export default Campaigns;