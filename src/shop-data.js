const SHOP_DATA = [
  {
    title: 'Biography',
    items: [
      
      {
        id: 2,
        name: 'A Beautiful Mind by Sylvia Nasar',
        imageUrl: 'https://m.media-amazon.com/images/I/511wQDs0J7L.jpg',
        price: 18,
      },
      {
        id: 3,
        name: 'Alexander Hamilton by Ron Chernow',
        imageUrl: 'https://m.media-amazon.com/images/I/514BVljl9wL.jpg',
        price: 35,
      },
      {
        id: 4,
        name: 'E=mc²: A Biography of the Worlds Most Famous Equation by David Bodanis',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429810533l/2802.jpg',
        price: 25,
      },
      {
        id: 5,
        name: ' Enriques Journey by Sonia Nazario',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320543035l/158277.jpg',
        price: 18,
      },
      {
        id: 6,
        name: 'Mao: The Unknown Story by Jung Chang',
        imageUrl: 'https://m.media-amazon.com/images/I/51LAq+DzD4L.jpg',
        price: 14,
      },
      {
        id: 7,
        name: 'Red BeanieThe Minds of Billy Milligan by Daniel Keyes',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554312314l/18373.jpg',
        price: 18,
      },
      {
        id: 8,
        name: 'Napoleon: A Life by Andrew Roberts',
        imageUrl: 'https://m.media-amazon.com/images/I/51MQqw2ffHL.jpg',
        price: 14,
      },
      {
        id: 9,
        name: 'Prince: A Private View by Afshin Shahidi',
        imageUrl: 'https://m.media-amazon.com/images/I/519iQ7ukbwL.jpg',
        price: 16,
      },
    ],
  },
  {
    title: 'Philosophy',
    items: [
      {
        id: 10,
        name: 'Republic',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJbD0l5rsm4Kqk9nGQlyVZ0o_bSGw4mcsQJrDXqyjU64mk0mCX',
        price: 220,
      },
      {
        id: 11,
        name: 'Meditations',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdZT0K64jy4e-Iadf_CkYnP4nkQzogRyHtdzr1sOKlSgdGEyZb',
        price: 280,
      },
      {
        id: 12,
        name: 'Black ConverseCritique of Pure Reason',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTot5Rx67qRvbOCOX4vzgo95AxhHsR5Kwif5KkgsB6JcDQC_9UU',
        price: 110,
      },
      {
        id: 13,
        name: 'Meditations on First Philosophy',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR80WLBNPfKvzovDZSEJOEe8kibgz8XPyHfIea8dvhiHBMPA0-m',
        price: 160,
      },
      {
        id: 14,
        name: 'Being and Nothingness',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSpr3hpc9diIswDAxggSrM0929eiof_mdq_4WwC6C07qjIkRSI4',
        price: 160,
      },
      {
        id: 15,
        name: 'Letters From A Stoic',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3tIPHrODFnJAzWCWMT1ozSWvJiiY1PGmv6rIqGyj2EZVq3lS',
        price: 160,
      },
      {
        id: 16,
        name: 'AMans Search for Meaning',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQp6OD9u55wJoYA_Xf9YcUlT-_XpGcjxiKYaIuO06zdYctZZGAK',
        price: 190,
      },
      {
        id: 17,
        name: 'A Treatise of Human Nature',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZkfukYuc5tDFevJiCe72S-CSo5sYcBhMs9JQQ7DEzNuLqYO7',
        price: 200,
      },
    ],
  },
  {
    title: 'Horror',
    items: [
      {
        id: 18,
        name: 'Dracula',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwNUjH5t7MTf-1va1dkxuNd8hZYgxl6pMDDY-OwsgRNZdG4Pkx',
        price: 125,
      },
      {
        id: 19,
        name: 'Frankenstein',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWOvWV-UtYvY2Qu57SAEGFDMsvxmxU3JjUgPh2_6GgS_6rGUyU',
        price: 90,
      },
      {
        id: 20,
        name: 'The Haunting of Hill House',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTSr3b0yUQBXK9Uv5JqasUBq3UK46u9yR31WnIzsXlmxv7WS05l',
        price: 90,
      },
      {
        id: 21,
        name: 'House of Leaves',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSewzKLOg_K8wTY62-P1zL3XymskzSv8dnfzfd_dAqaaxDZdVcJ',
        price: 165,
      },
      {
        id: 22,
        name: 'The Shining',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_-CV4k0qUBAveSa4brbKsfgTHT9eaYDppEnjhpEB8AyH9hSi',
        price: 185,
      },
    ],
  },
  {
    title: 'Motivational',
    items: [
      {
        id: 23,
        name: 'BThe Alchemist',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8fK2XPR2ahpu1PZOLzTK4It1_VvoSwVuTvk1jc34dw58IOaX',
        price: 25,
      },
      {
        id: 24,
        name: 'Big Magic (deluxe): Creative Living Beyond Fear',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.pnghttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROhqbssKSgBLMrtpWxuR4UEK8j6oSGiEeaJH80M3smNZY6s2jy',
        price: 20,
      },
      {
        id: 25,
        name: 'Floral DressThe Four Agreements',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNCZVKGZCDGqfv4qpDOKXcs9bXz47XnWiUbmDr-PsqRbxFvclW',
        price: 80,
      },
      {
        id: 26,
        name: 'The Power of Positive Thinking',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPyf2Ew6UyqM6wCQr_FNhwStJO4uwV3o-UnzM7n7ZegOmOWj7ghttps://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped SweaSiddhartater',
        imageUrl: 'https://https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRoy3zTZ0TAmrE7h6G7gOTOtdjKxq0uUUM_z7csDsd4iBXRBC1Wi.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow TrRich Dad Poor Dadack Suit',
        imageUrl: 'https://ihttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlrQfRuyGKdvR9r_1QROkXsmnX0sV_-XeEgKk0w80lEGql4GGg.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'White BloOutliers: The Story of Successuse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLXXrKKJrzkshECgu3eW-C9ALKsykXdicQfZSt9yxiWSrq7QbCwhite-vest.png',
        price: 20,
      },
    ],
  },
  {
    title: 'Spritual',
    items: [
      {
        id: 30,
        name: 'Camo DownThe Power of Now Vest',
        imageUrl: 'https://ihttps://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_HSDBfXhntpTRSVXDnED6UOnGn-zRdmwB9xJlnboh8THf9x03.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral TAutobiography of a Yogi-shirt',
        imageUrl: 'https://i.ibhttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQK3Y2QBqq-ZtfWkgfTw4buIN2LgHxWcUP3z2jEdBc9of6uCUzb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: ' New Earth',
        imageUrl: 'https://https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCkBP0Kd55fU2stZbSVGEs3ji8ytgrUb1No-Ma90s_nI5V4e18i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-The Bhagavad Gita',
        imageUrl: 'https://i.ibb.co/Rvhttps://images-na.ssl-images-amazon.com/images/I/518aPMbn8uL._SX292_BO1,204,203,200_.jpgwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean LongBe Here Now Sleeve',
        imageUrl: 'https://https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGOtEcUZb0bA3hfBPz9mW9HQJ3t0y88DreAImmLXZWA92saDhli.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy Jonathan Livingston SeagullT-shirt',
        imageUrl: 'https://i.ibb.co/https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYNhJifiHU96gAc54f-nbkcltoo_R73FVNNUt9_vidorabqw4vmh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
