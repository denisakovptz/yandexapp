import React from 'react';

import { useSelector } from 'react-redux';

function Groups() {

   const { showData } = useSelector((state) => state.groups);
   const campIds = useSelector((state) => state.campaigns.campIdList);

   return (
      <ul>
         {showData.map((group) => {
            return (
               <li key={group.Id}>ID: {group.Id} - {group.Name}</li>
            );
         })}
      </ul>
   );

}

export default Groups;

//436184, 436185, 436186