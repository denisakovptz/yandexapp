import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

const Groups: React.FC = () => {

   const { showData } = useSelector((state: RootState) => state.groups);

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
