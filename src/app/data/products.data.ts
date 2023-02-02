export interface Product {
  id: number,
  link: Object,
  header: string,
  rating: number,
  price: number,
  discount?: number,
  pictureAddress: string,
  availability: boolean
}

export const products: Product[] =
[
  {
    id:1,
    link: {
      address: 'https://google.com',
      label: 'Furniture shop'
    },
    header: 'Стол',
    rating: 4,
    price: 9000,
    pictureAddress: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Rokoko_bord_av_valn%C3%B6tstr%C3%A4%2C_1700-talets_sista_h%C3%A4lft_-_Hallwylska_museet_-_108491.tif/lossy-page1-1200px-Rokoko_bord_av_valn%C3%B6tstr%C3%A4%2C_1700-talets_sista_h%C3%A4lft_-_Hallwylska_museet_-_108491.tif.jpg',
    availability: true
  },
  {
    id:2,
    link: {
      address: 'https://yandex.ru',
      label: 'TeleShop'
    },
    header: 'Телефон',
    rating: 3,
    price: 5000,
    pictureAddress: 'https://static.onlinetrade.ru/img/items/m/mobilnyy_telefon_nokia_210_dual_sim_red_1028129_1.jpg',
    availability: true
  },
  {
    id:3,
    link: {
      address: 'https://vase.ru',
      label: 'Vase shop'
    },
    header: 'Ваза',
    rating: 5,
    price: 2000,
    pictureAddress: 'https://basket-04.wb.ru/vol436/part43627/43627053/images/big/1.jpg',
    availability: false
  },
  {
    id:4,
    link: {
      address: 'https://bottle.ru',
      label: 'Bottle Shop'
    },
    header: 'Бутылка',
    rating: 5,
    price: 1000,
    pictureAddress: 'https://avatars.mds.yandex.net/get-mpic/4012462/img_id868581098788317009.jpeg/orig',
    availability: false,
    discount: .23
  },
  {
    id:5,
    link: {
      address: 'https://shirt.ru',
      label: 'Shirt Shop'
    },
    header: 'Рубашка',
    rating: 3,
    price: 1700,
    pictureAddress: 'https://illan-gifts.ru/api/images/rubashka-muzhskaia-s-dlynnym-rukavom-bel-air-bezhevaia-16216.jpeg',
    availability: true
  },
  {
    id:6,
    link: {
      address: 'https://bicycle.ru',
      label: 'Bicycle Shop'
    },
    header: 'Велосипед',
    rating: 5,
    price: 11000,
    pictureAddress: 'https://velobuy.ru/image/catalog/mustang_v_24_v020_neon_red_blue_matt.jpg',
    availability: false,
    discount: .17
  },
  {
    id:7,
    link: {
      address: 'https://Coffee-machine.com',
      label: 'Coffee-machine Shop'
    },
    header: 'Кофе-машина',
    rating: 5,
    price: 28000,
    pictureAddress: 'https://first-bt.ru/images/detailed/26/ESAM_4000.jpg',
    availability: true,
    discount: .12
  },
  {
    id:8,
    link: {
      address: 'https://code-pen.com',
      label: 'Pen Shop'
    },
    header: 'Авто ручка',
    rating: 5,
    price: 799.99,
    pictureAddress: 'https://pen-parker.ru/pics/best/1/ct/parker/ruchka-roller-parker-sonnet-stratum-se18-t541-grey-pgt-2054828.jpg',
    availability: true,
    discount: .1
  }
]
