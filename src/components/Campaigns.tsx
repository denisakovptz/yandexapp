import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../redux/store';
import { showGroups, showAllGroups } from '../redux/slices/groupsSlice';
import { clearError } from '../redux/slices/campaignsSlice';
import { ErrorModal } from '../components/errorModal';

import styles from './Campaigns.module.scss';

const Campaigns: React.FC = () => {

   const { data, error } = useSelector((state: RootState) => state.campaigns);
   const groups = useSelector((state: RootState) => state.groups.data);

   const dispatch = useAppDispatch();

   const [activeCamp, setActiveCamp] = useState<null | number>(null);

   const showGroupsCamp = (campId: number) => {
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
      (error)
         ? <ErrorModal error={error} clearError={() => dispatch(clearError())} />
         : <>
            <h2 className={styles.camp}>Campaigns</h2>
            <ul>
               {data.map((campaign) => {

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
                        <a onClick={setActive} className={(activeCamp == campaign.Id) ? styles.active : styles.camp_link}>ID: {campaign.Id} - {campaign.Name}</a>
                        {(campaign.Id == activeCamp) ?
                           showGroupsCamp(campaign.Id) :
                           ''}
                     </li>
                  );

               })}
            </ul>
         </>
   );
}

export default Campaigns;