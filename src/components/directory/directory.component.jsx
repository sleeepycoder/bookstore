import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Biography',
    imageUrl: 'https://m.media-amazon.com/images/I/510RQE9G+AL._SL500_.jpg',
    route: 'shop/biography',
  },
  {
    id: 2,
    title: 'philosophy',
    imageUrl: 'https://m.media-amazon.com/images/I/81JXcLVzAnL._AC_UF1000,1000_QL80_.jpg',
    route: 'shop/philosophy',
  },
  {
    id: 3,
    title: 'Horror',
    imageUrl: 'https://m.media-amazon.com/images/I/51IzeRM6KkL.jpg',
    route: 'shop/horror',
  },
  {
    id: 4,
    title: 'Motivational',
    imageUrl: 'https://www.rd.com/wp-content/uploads/2023/01/inspiring-books-opener-via-merchant-7.jpg',
    route: 'shop/motivational',
  },
  {
    id: 5,
    title: 'Spritual',
    imageUrl: 'https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019/uac760.jpg',
    route: 'shop/spritual',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
