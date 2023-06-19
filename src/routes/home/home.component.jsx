import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Directory from '../../components/directory/directory.component';
 import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import SHOP_DATA from '../../shop-data';




const Home = () => {

 useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, []);

  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
