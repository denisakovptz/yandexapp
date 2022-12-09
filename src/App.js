import { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import List from './components/List';
import withListLoading from './components/withListLoading';
import { get_client, api_url, get_groups } from './components/yandexApi';

function App() {

   const ListLoading = withListLoading(List);
   const [appState, setAppState] = useState({
      loading: false,
      repos: null,
   });

   useEffect(() => {
      setAppState({ loading: true });

      fetch(api_url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(get_client)
      })
         .then((res) => res.json())
         .then((json) => {
            setAppState({ loading: false, repos: json });
         })
         .catch((err) => {
            console.warn(err);
            alert('Не удалось получить информацию');
         });
   }, [setAppState]);

   return (
      <div className='App'>
         <Header />
         <div className='container'>
            <div className='sidebar-container'>
               <ListLoading isLoading={appState.loading} repos={appState.repos} />
            </div>
            <div className='body-container'>

            </div>
         </div>
         <Footer />
      </div>
   );
}

export default App;