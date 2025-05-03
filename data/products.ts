import { Product, Category, Banner } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'cat1',
    name: 'Mainan Anak',
    icon: 'child',
    imageUrl: 'https://images.pexels.com/photos/3661264/pexels-photo-3661264.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'cat2',
    name: 'Anime & Figure',
    icon: 'gamepad-2',
    imageUrl: 'https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'cat3',
    name: 'Boneka',
    icon: 'heart',
    imageUrl: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'cat4',
    name: 'Lego & Blocks',
    icon: 'puzzle',
    imageUrl: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'cat5',
    name: 'Mainan Edukasi',
    icon: 'brain',
    imageUrl: 'https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'cat6',
    name: 'Mainan Outdoor',
    icon: 'tent',
    imageUrl: 'https://images.pexels.com/photos/68134/pexels-photo-68134.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const banners: Banner[] = [
  {
    id: 'banner1',
    imageUrl: 'https://images.pexels.com/photos/8014187/pexels-photo-8014187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Diskon 50% Mainan Edukasi',
    description: 'Beli sekarang untuk mendapatkan diskon spesial',
    link: '/category/cat5'
  },
  {
    id: 'banner2',
    imageUrl: 'https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Koleksi Anime Terbaru',
    description: 'Dapatkan figure anime limited edition',
    link: '/category/cat2'
  },
  {
    id: 'banner3',
    imageUrl: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Boneka Karakter Favorit',
    description: 'Koleksi boneka karakter Disney dan lainnya',
    link: '/category/cat3'
  }
];

export const products: Product[] = [
  // Mainan Anak Category
  {
    id: 'p1',
    name: 'Mobil Remote Control Turbo Racer',
    description: 'Mobil remote control dengan kecepatan tinggi dan baterai tahan lama. Cocok untuk anak usia 6 tahun ke atas. Dilengkapi dengan fitur drift dan lampu LED.',
    price: 349000,
    originalPrice: 499000,
    discount: 30,
    imageUrl: 'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat1',
    rating: 4.7,
    reviews: 245,
    stock: 50,
    isFeatured: true,
    isNew: false,
    isBestSeller: true
  },
  {
    id: 'p2',
    name: 'Robot Pintar Edukatif',
    description: 'Robot pintar yang dapat diprogram untuk melakukan berbagai gerakan dan aktivitas. Membantu anak belajar dasar-dasar coding. Kompatibel dengan aplikasi smartphone.',
    price: 599000,
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat1',
    rating: 4.9,
    reviews: 187,
    stock: 25,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'p3',
    name: 'Drone Mini Kamera HD',
    description: 'Drone mini dengan kamera HD, mudah dikendalikan dan aman untuk anak-anak. Dapat terbang hingga 15 menit dengan satu kali pengisian daya.',
    price: 750000,
    originalPrice: 900000,
    discount: 15,
    imageUrl: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/725908/pexels-photo-725908.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat1',
    rating: 4.5,
    reviews: 122,
    stock: 18,
    isFeatured: false,
    isNew: true
  },
  
  // Anime & Figure Category
  {
    id: 'p4',
    name: 'Action Figure Naruto Uzumaki Sage Mode',
    description: 'Action figure Naruto dalam mode Sage dengan detail tinggi. Tinggi 25cm, bahan PVC berkualitas. Termasuk stand display dan aksesoris tambahan.',
    price: 850000,
    imageUrl: 'https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5558208/pexels-photo-5558208.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat2',
    rating: 4.8,
    reviews: 315,
    stock: 10,
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'p5',
    name: 'Nendoroid Demon Slayer Tanjiro',
    description: 'Nendoroid Tanjiro dari seri Demon Slayer. Versi chibi yang lucu dengan ekspresi dan pose yang dapat diganti. Produk resmi Good Smile Company.',
    price: 650000,
    originalPrice: 750000,
    discount: 15,
    imageUrl: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat2',
    rating: 4.9,
    reviews: 210,
    stock: 15,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'p6',
    name: 'Figure One Piece Monkey D. Luffy Gear 5',
    description: 'Action figure Luffy dalam transformasi Gear 5 dengan detail luar biasa. Tinggi 30cm, bahan PVC premium. Edisi terbatas dengan sertifikat keaslian.',
    price: 1250000,
    imageUrl: 'https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/242324/pexels-photo-242324.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1098092/pexels-photo-1098092.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat2',
    rating: 5.0,
    reviews: 178,
    stock: 5,
    isFeatured: true,
    isNew: true,
    isBestSeller: true
  },
  
  // Boneka Category
  {
    id: 'p7',
    name: 'Boneka Stitch Jumbo',
    description: 'Boneka Stitch ukuran jumbo, tinggi 80cm. Bahan lembut dan aman untuk anak-anak. Cocok untuk kado ulang tahun atau koleksi.',
    price: 399000,
    originalPrice: 550000,
    discount: 25,
    imageUrl: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/42256/teddy-teddy-bear-teddybear-white-42256.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/103933/pexels-photo-103933.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat3',
    rating: 4.7,
    reviews: 253,
    stock: 30,
    isFeatured: true
  },
  {
    id: 'p8',
    name: 'Boneka Beruang Giant Teddy',
    description: 'Boneka beruang teddy ukuran besar dengan bahan premium yang sangat lembut. Tinggi 1 meter, cocok untuk hadiah spesial.',
    price: 589000,
    imageUrl: 'https://images.pexels.com/photos/42256/teddy-teddy-bear-teddybear-white-42256.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/42256/teddy-teddy-bear-teddybear-white-42256.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/103933/pexels-photo-103933.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/175766/pexels-photo-175766.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat3',
    rating: 4.6,
    reviews: 167,
    stock: 15
  },
  {
    id: 'p9',
    name: 'Set Boneka Pokemon',
    description: 'Set 6 boneka Pokemon karakter favorit: Pikachu, Bulbasaur, Charmander, Squirtle, Eevee, dan Jigglypuff. Ukuran 20cm, bahan halus.',
    price: 450000,
    originalPrice: 600000,
    discount: 25,
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat3',
    rating: 4.8,
    reviews: 198,
    stock: 20,
    isFeatured: false,
    isNew: true,
    isBestSeller: true
  },
  
  // Lego & Blocks Category
  {
    id: 'p10',
    name: 'LEGO Star Wars Millennium Falcon',
    description: 'Set LEGO Star Wars Millennium Falcon dengan 1466 pieces. Termasuk 7 minifigures karakter dari film Star Wars. Cocok untuk usia 9 tahun ke atas.',
    price: 2500000,
    imageUrl: 'https://images.pexels.com/photos/667701/pexels-photo-667701.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/667701/pexels-photo-667701.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat4',
    rating: 4.9,
    reviews: 345,
    stock: 8,
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'p11',
    name: 'Building Blocks Kota 1200 Pieces',
    description: 'Set building blocks untuk membangun kota dengan 1200 pieces. Termasuk figur orang, kendaraan, dan aksesori. Kompatibel dengan merek blocks lainnya.',
    price: 499000,
    originalPrice: 699000,
    discount: 30,
    imageUrl: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/667701/pexels-photo-667701.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat4',
    rating: 4.6,
    reviews: 187,
    stock: 25
  },
  {
    id: 'p12',
    name: 'LEGO Technic Bugatti Chiron',
    description: 'LEGO Technic Bugatti Chiron dengan 3599 pieces. Model super car dengan detail yang sangat akurat. Memiliki gearbox dan engine yang berfungsi.',
    price: 3750000,
    imageUrl: 'https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/667701/pexels-photo-667701.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat4',
    rating: 5.0,
    reviews: 156,
    stock: 5,
    isFeatured: true,
    isNew: true
  },
  
  // Mainan Edukasi Category
  {
    id: 'p13',
    name: 'Puzzle World Map Edukasi',
    description: 'Puzzle peta dunia dengan 500 pieces yang membantu anak belajar geografi. Termasuk booklet informasi tentang negara-negara di dunia.',
    price: 175000,
    imageUrl: 'https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1293156/pexels-photo-1293156.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8014187/pexels-photo-8014187.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat5',
    rating: 4.7,
    reviews: 211,
    stock: 40,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'p14',
    name: 'Laboratorium Sains Mini',
    description: 'Kit laboratorium sains untuk anak dengan 30 eksperimen yang aman. Dilengkapi dengan buku panduan dan semua bahan yang diperlukan.',
    price: 350000,
    originalPrice: 450000,
    discount: 20,
    imageUrl: 'https://images.pexels.com/photos/209651/pexels-photo-209651.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/209651/pexels-photo-209651.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8014187/pexels-photo-8014187.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat5',
    rating: 4.8,
    reviews: 145,
    stock: 20,
    isFeatured: true
  },
  {
    id: 'p15',
    name: 'Papan Magnetik Huruf dan Angka',
    description: 'Papan magnetik dengan huruf dan angka untuk membantu anak belajar membaca dan berhitung. Desain colorful dan mudah dibawa.',
    price: 125000,
    imageUrl: 'https://images.pexels.com/photos/8014187/pexels-photo-8014187.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/8014187/pexels-photo-8014187.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/209651/pexels-photo-209651.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat5',
    rating: 4.5,
    reviews: 178,
    stock: 35,
    isBestSeller: true
  },
  
  // Mainan Outdoor Category
  {
    id: 'p16',
    name: 'Sepeda Anak Frozen Edition',
    description: 'Sepeda anak dengan tema Frozen, ukuran 16 inci. Dilengkapi dengan roda bantu, keranjang, dan aksesoris Frozen.',
    price: 1200000,
    originalPrice: 1500000,
    discount: 20,
    imageUrl: 'https://images.pexels.com/photos/115407/bicycle-child-winter-baby-trailer-115407.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/115407/bicycle-child-winter-baby-trailer-115407.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3073952/pexels-photo-3073952.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/386024/pexels-photo-386024.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat6',
    rating: 4.8,
    reviews: 210,
    stock: 10,
    isFeatured: true
  },
  {
    id: 'p17',
    name: 'Set Perlengkapan Berkemah Anak',
    description: 'Set perlengkapan berkemah untuk anak termasuk tenda, sleeping bag, senter, dan peralatan masak mainan. Cocok untuk aktivitas outdoor dan roleplay.',
    price: 450000,
    imageUrl: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1687527/pexels-photo-1687527.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat6',
    rating: 4.6,
    reviews: 98,
    stock: 15,
    isNew: true
  },
  {
    id: 'p18',
    name: 'Seluncuran Air Inflatable',
    description: 'Seluncuran air inflatable dengan panjang 5 meter. Dilengkapi dengan sprinkler air dan area splash pool. Mudah dipasang dan dikemas.',
    price: 899000,
    originalPrice: 1200000,
    discount: 25,
    imageUrl: 'https://images.pexels.com/photos/68134/pexels-photo-68134.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/68134/pexels-photo-68134.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'cat6',
    rating: 4.9,
    reviews: 156,
    stock: 8,
    isFeatured: true,
    isBestSeller: true
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getBestSellerProducts = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};