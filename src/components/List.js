import React from 'react';

const List = (props) => {

  if (props.repos) {
    //   const campaigns = props.repos.result.Campaigns;
    //   return (
    //     <ul>
    //       <h2 className='list-head'>Campaigns</h2>
    //       {campaigns.map((campaign) => {
    //         return (
    //           <li key={campaign.Id} className='list'>
    //             <span className='repo-text'>ID: {campaign.Id} - {campaign.Name}</span>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   );
    // }
    // const groups = props.repos.result.AdGroups;
    // return (
    //   <ul>
    //     <h2 className='list-head'>Groups</h2>
    //     {groups.map((group) => {
    //       return (
    //         <li key={group.Id} className='list'>
    //           <span className='repo-text'>ID: {group.Id} - {group.Name}</span>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // );
    const clients = props.repos.result.Clients;
    return (
      <ul>
        <h2 className='list-head'>Client</h2>
        {clients.map((client) => {
          return (
            <li key={client.ClientId} className='list'>
              <span className='repo-text'>ID: {client.ClientId} - {client.Login}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  return <p>Error</p>;

};

export default List;