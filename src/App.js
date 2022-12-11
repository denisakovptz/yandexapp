import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import './styles/App.scss';

import Header from './pages/Header';
import Footer from './pages/Footer';
import List from './components/List';
import Groups from './components/Groups';
import LoadingList from './components/LoadingList';
import { get_campaigns, get_groups, api_url } from './helpers/yandexApi';

function App() {

   const ListData = LoadingList(List);
   const GroupsData = LoadingList(Groups);

   const [campState, setCampState] = useState({
      loading: false,
      data: null,
   });
   const [groupsState, setGroupsState] = useState({
      loading: false,
      data: null,
   });

   function fetchData(request) {
      fetch(api_url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(request)
      })
         .then((res) => res.json())
         .then((json) => {
            if (json.result && json.result.hasOwnProperty('AdGroups')) {
               setGroupsState({ loading: false, data: json });
            }
            if (json.result && json.result.hasOwnProperty('Campaigns')) {
               setCampState({ loading: false, data: json });
            }
         })
         .catch((err) => {
            console.warn(err);
            alert('Не удалось получить информацию');
         });
   }

   useEffect(() => {
      setCampState({ loading: true });
      fetchData(get_campaigns);
   }, []);

   useEffect(() => {
      setGroupsState({ loading: true });
      fetchData(get_groups);
   }, []);


   function Client() {
      return (
         <div className='container'>
            <div className='sidebar-container'>
               <p>Кампании клиета</p>
               <ListData isLoading={campState.loading} data={campState.data} request='get_campaigns' />
            </div>
            <div className='body-container'>
               <GroupsData isLoading={groupsState.loading} data={groupsState.data} />
            </div>
         </div>
      )
   }

   function AllClients() {
      return (
         <div className='container'>
            <div className='sidebar-container'>
               <ListData isLoading={campState.loading} data={campState.data} request='get_campaigns' />
            </div>
            <div className='body-container'>
               <GroupsData isLoading={groupsState.loading} data={groupsState.data} />
            </div>
         </div>
      )
   }

   return (


      <div className='App'>
         <Header />
         <Routes>
            <Route path="/" element={<AllClients />} />
            <Route path="client" element={<Client />} />
         </Routes>
         <Footer />
      </div>

   );
}

export default App;