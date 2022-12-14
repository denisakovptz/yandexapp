import React from 'react';
import { Link } from 'react-router-dom';

function Campaigns({ data, showGroups, groupsData, active, isLoadingGroups }) {

   if (data) {
      const campaigns = data.Campaigns;

      let showGroupsCamp = () => {
         const groups = groupsData.AdGroups;
         return (<ul className='camp_groups'>
            {groups.map((group) => {
               return (
                  <li key={group.Id}>- {group.Name}</li>
               );
            })}
         </ul>);
      };

      return (
         <ul>
            {campaigns.map((campaign) => {

               const onShowGroups = () => {
                  showGroups(campaign.Id);
               }

               return (
                  <li key={campaign.Id} className='list'>
                     <Link onClick={onShowGroups} className='camp_link'>ID: {campaign.Id} - {campaign.Name}</Link>
                     {(groupsData && (campaign.Id == active) && !isLoadingGroups) ?
                        showGroupsCamp() :
                        ''}
                  </li>
               );

            })}
         </ul>
      );
   }


   return (
      <p style={{ textAlign: 'center', fontSize: '20px' }}>
         Error loading campaigns...
      </p>
   );

}

export default Campaigns;

// import { useEffect, useState } from 'react';
// import { get_campaigns, api_url } from '../helpers/yandexApi';

// function Campaigns() {

//    const [campState, setCampState] = useState({});

//    useEffect(() => {
//       fetchData(get_campaigns);
//    }, []);

//    function fetchData(request) {

//       fetch(api_url, {
//          method: 'POST',
//          headers: {
//             'Content-Type': 'application/json'
//          },
//          body: JSON.stringify(request)
//       })
//          .then((res) => res.json())
//          .then((json) => {

//             setCampState({ ...campState, json });
//             console.log(campState);


//          })
//       // if (campState) {
//       //    const campaigns = campState.result.Campaigns;
//       //    return (
//       //       <ul>
//       //          <h2 className='list-head'>Campaigns</h2>
//       //          {campaigns.map((campaign) => {
//       //             return (
//       //                <li key={campaign.Id} className='list'>
//       //                   <span className='repo-text'>ID: {campaign.Id} - {campaign.Name}</span>
//       //                </li>
//       //             );
//       //          })}
//       //       </ul>
//       //    );
//       // } else {
//       //    return <p>Error</p>
//       // }
//    }
// }