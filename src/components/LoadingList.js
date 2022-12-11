import React from 'react';

function LoadingList(Component) {
   return function IsLoadingComponent({ isLoading, ...props }) {
      if (!isLoading) return <Component {...props} />;
      return (
         <p style={{ textAlign: 'center', fontSize: '20px' }}>
            Loading...
         </p>
      );
   };
}
export default LoadingList;