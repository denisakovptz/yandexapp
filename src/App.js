import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Header from './pages/Header';
import Footer from './pages/Footer';
import List from './components/List';
import withListLoading from './components/withListLoading';
import { get_campaigns, get_groups, get_client, api_url } from './components/yandexApi';

function App() {

   const ListLoading = withListLoading(List);
   const [appState, setAppState] = useState({
      loading: false,
      data: null,
   });

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
            console.log(json);
            setAppState({ loading: false, data: json });
         })
         .catch((err) => {
            console.warn(err);
            alert('Не удалось получить информацию');
         });
   }

   useEffect(() => {
      setAppState({ loading: true });
      fetchData(get_groups);
   }, [setAppState]);

   return (
      <div className='App'>
         <Header />
         <div className='container'>
            <div className='sidebar-container'>
               <ListLoading isLoading={appState.loading} data={appState.data} request='get_groups' />
            </div>
            <div className='body-container'>

            </div>
         </div>
         <Footer />
      </div>
   );
}

export default App;