import React from 'react';

function Groups(props) {

   if (props.data) {
      const groups = props.data.result.AdGroups;
      return (
         <ul>
            {groups.map((group) => {
               return (
                  <li key={group.Id}>ID: {group.Id} - {group.Name}</li>
               );
            })}
         </ul>
      );
   }


   return (
      <p style={{ textAlign: 'center', fontSize: '20px' }}>
         Error...
      </p>
   );

}

export default Groups;