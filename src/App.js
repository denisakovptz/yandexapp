import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import axios from 'axios';

import './styles/App.scss';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Groups from './components/Groups';
import Campaigns from './components/Campaigns'
import LoadingList from './components/LoadingList';
import { get_campaigns, get_groups, api_url, get_group_stats } from './helpers/yandexApi';

function App() {

   const CampaignsData = LoadingList(Campaigns);
   const GroupsData = LoadingList(Groups);

   const [campState, setCampState] = useState({
      loading: false,
      data: null,
      active: null
   });
   const [groupsState, setGroupsState] = useState({
      loading: false,
      data: null
   });

   function fetchData(request) {

      axios.post(api_url, request, { 'Content-Type': 'application/json' })
         .then((json) => {
            if (json.data.result && json.data.result.hasOwnProperty('AdGroups')) {
               setGroupsState({ ...groupsState, loading: false, data: json.data.result });
            }
            if (json.data.result && json.data.result.hasOwnProperty('Campaigns')) {
               setCampState({ ...campState, loading: false, data: json.data.result });
            }
         })
         .catch((err) => {
            console.warn(err);
            alert('Не удалось получить информацию');
         });
   }


   useEffect(() => {
      setCampState({ ...campState, loading: true });
      fetchData(get_campaigns);
      setGroupsState({ ...groupsState, loading: true });
      fetchData(get_groups);
   }, []);


   function showGroups(CampaignsId) {
      get_groups["apiSet"]["params"]["SelectionCriteria"]["CampaignIds"] = [CampaignsId];
      fetchData(get_groups);
      setCampState({ ...campState, active: CampaignsId });
      setGroupsState({ ...groupsState, loading: true });


   }



   function Client() {
      return (
         <div className='container'>
            <div className='sidebar-container'>
               <CampaignsData
                  isLoading={campState.loading}
                  data={campState.data}
                  showGroups={showGroups}
                  groupsData={groupsState.data}
                  active={campState.active}
                  isLoadingGroups={groupsState.loading}
               />
            </div>
            <div className='body-container'>
               <GroupsData isLoading={groupsState.loading} data={groupsState.data} />
            </div>
         </div>
      )
   }

   return (

      <div className='app'>
         <Header />
         <Routes>
            <Route path="/" element={<Client />} />
         </Routes>
         <Footer />
      </div>

   );
}

export default App;