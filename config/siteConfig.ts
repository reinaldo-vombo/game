const tabs = [
   { name: 'Historia', image: ['/cb-h-1.jpg','/cb-h-2.jpg','/cb-h-3.jpg'], type: 'content', desc: 'Assuma o trabalho da sua vida – roubar um implante único que é a chave para a imortalidade – e construa a sua lenda no vasto mundo aberto de Night City, onde as escolhas que você faz moldam a história e as pessoas ao seu redor. Participe de uma variedade de shows para passar de mercenário emergente a lendário cyberpunk, ao mesmo tempo em que desvenda os mistérios do implante inestimável que todos estão morrendo de vontade de colocar as mãos.' },
   { name: 'Personagens', image: ['/cb-p3.jpg','/cb-p3.jpg','/cb-p3.jpg'], type: 'content', desc: 'Conheça uma série de personagens memoráveis, desde o rebelde roqueiro Johnny Silverhand (interpretado por Keanu Reeves) até uma variedade de consertadores, amigos e inimigos - todos com seus próprios planos. Quem você escolhe ajudar e como nem sempre será fácil e terá consequências de longo alcance para sua própria sobrevivência.' },
   { name: 'Gameplay', image: ['/cb-g1.jpg','/cb-g2.jpg','/cb-g3.jpg'], type: 'content', desc: 'Invista em uma variedade de habilidades e vantagens para construir um estilo de jogo adequado ao seu personagem. Use armas atualizáveis, habilidades de hacking e implantes que melhoram o corpo para se tornar o melhor pistoleiro da cidade. Participe de combates violentos, derrote inimigos à distância ou caminhe furtivamente por locais cuidadosamente guardados.' },
]
const media = [
   { name: 'Galeria', image: ['/gr/cb1.jpg','/gr/cb2.jpg','/gr/cb3.jpg','/gr/cb4.jpg','/gr/cb5.jpg','/gr/cb6.jpg','/gr/cb7.jpg'], type: 'media', },
   { name: 'Media', image: ['/cb-h-1.jpg','/cb-h-2.jpg','/cb-h-3.jpg'], type: 'media', },

]
export const user = {
   _id: 'dfhhweuffhu3i',
   name: 'Reinaldo Vombo',
   avatar: '/avatar.jpg',
   role: 'Úsuario da comunidade'
}

export const config = {
   NAVA_LINK: [
      {
         name: 'Sobre',
         link: '/sobre'
      },
      {
         name: 'Políticas de Privacidade',
         link: '/politicas-de-privacidade'
      },
      {
         name: 'Políticas de Devolução & Reembolso',
         link: '/politicas-de-devolucao'
      },
      {
         name: 'Contacte-nos',
         link: '/contactos'
      },
   ],
   SIDEBAR: [
      {
         title: 'Feature link',
         items: [
            {name: 'Últimas', url: '#'},
            {name: 'Brevemento', url: '#'},
            {name: 'Poupilares', url: '#'},
            {name: 'Explore', url: '#'}
         ]
      },
      {
         title: 'Plataformas',
         items: [
            {name: 'Ps3', url: '#'},
            {name: 'Ps4', url: '#'},
            {name: 'Ps5', url: '#'},
            {name: 'Xbox', url: '#'}
         ]
      },
      {
         title: 'Categorias',
         items: [
            {name: 'Jogos', url: '#'},
            {name: 'Acessorios', url: '#'},
            {name: 'Laptop', url: '#'},
            {name: 'Desktop', url: '#'}
         ]
      },
   ],
   BANNER: [
      {
         title: 'League of Legends',
         decription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium corporis dignissimos voluptatem eligendi molestiae ipsum laborum rerum perferendis',
         like: true,
         image: '/lg.jpg',
         video: '/God-of-War-v.mp4',
         platform: ['PS4','PS5','PC']
      },
      {
         title: 'Cyberpunk 2077',
         decription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium corporis dignissimos voluptatem eligendi molestiae ipsum laborum rerum perferendis',
         like: false,
         image: '/cb.jpeg',
         video: '/God-of-War-v.mp4',
         platform: ['PS4','PS5','PC']
      },
      {
         title: 'Redeed Dead Redemption 2',
         decription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium corporis dignissimos voluptatem eligendi molestiae ipsum laborum rerum perferendis',
         like: false,
         image: '/red.jpg',
         video: '/God-of-War-v.mp4',
         platform: ['PS4','PS5','PC']
      },
      {
         title: 'Horizon Forbidden West',
         decription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium corporis dignissimos voluptatem eligendi molestiae ipsum laborum rerum perferendis',
         like: true,
         image: '/hz.jpg',
         video: '/God-of-War-v.mp4',
         platform: ['PS4','PS5','PC']
      },
   ],
   GAMES: [
      {
         _id: '12335804',
         payment: ['/mastercard.svg','/visa.svg','/multicaixa.png'],
         video_url: [],
         title: 'God of War',
         category: ['jogo','Acessórios PS5'],
         desc: '',
         image: '/god-of-war.jpg',
         poster: '/gw-post.jpg',
         playes: 1,
         cumpuny: 'Sony Interactive Entertainment',
         online: true,
         avalible: ['/xboxone.svg', '/ps4.svg', '/ps5.svg', '/pc.svg'],
         violance: ['/violence.png','/ingamepurchases.webp','/16.webp',],
         psn: 'Subscreva o/a PlayStation Plus Extra para aceder a este jogo, bem como a centenas de outros, no Catálogo de Jogos',
         cover_image: '/gw-cover',
         alt_cover: '',
         video_file: '/god-of-war-v.mp4',
         price: 400,
         discount: 30,
         color: '',
         slug: 'god-of-war',
         images: [],
         info: []
      },
      {
         _id: '125796',
         payment: ['/mastercard.svg','/visa.svg','/multicaixa.png'],
         video_url: ['https://www.youtube.com/watch?v=zrHb2p4YPT0','https://www.youtube.com/watch?v=PbVKBoDuhZ0','https://www.youtube.com/watch?v=InrHVskqJsE'],
         title: 'CyberPunk 2077',
         category: ['jogo','Acessórios PS5'],
         desc: 'Assuma o trabalho da sua vida – roubar um implante único que é a chave para a imortalidade – e construa a sua lenda no vasto mundo aberto de Night City, onde as escolhas que você faz moldam a história e as pessoas ao seu redor. Participe de uma variedade de shows para passar de mercenário emergente a lendário cyberpunk, ao mesmo tempo em que descobre os mistérios do implante inestimável que todos estão morrendo de vontade de colocar em suas mãos',
         image: '/cb.jpeg',
         poster: '/cb-post.jpg',
         playes: 1,
         cumpuny: '',
         online: true,
         avalible: ['/xboxone.svg', '/ps4.svg', '/ps5.svg', '/pc.svg'],
         violance: ['/violence.png','/ingamepurchases.webp','/16.webp',],
         psn: 'Subscreva o/a PlayStation Plus Extra para aceder a este jogo, bem como a centenas de outros, no Catálogo de Jogos',
         cover_image: '/cb-cover',
         alt_cover: '/gr/banner.jpg',
         video_file: '/god-of-war-hero-video-us-18oct17.mp4',
         price: 400,
         discount: 30,
         color: '#fcee0a',
         slug: 'ciber-punk-2077',
         images: media,
         info: tabs
      },
      {
         _id: '12336834',
         payment: ['/mastercard.svg','/visa.svg','/multicaixa.png'],
         video_url: [],
         title: 'Control',
         category: ['jogo','Acessórios PS5'],
         desc: '',
         image: '/control.jpg',
         poster: '/ct-post.jpg',
         playes: 1,
         cumpuny: '',
         online: true,
         avalible: ['/xboxone.svg', '/ps4.svg', '/ps5.svg', '/pc.svg'],
         violance: ['/violence.png','/ingamepurchases.webp','/16.webp',],
         psn: 'Subscreva o/a PlayStation Plus Extra para aceder a este jogo, bem como a centenas de outros, no Catálogo de Jogos',
         cover_image: '/c-cover.jpg',
         alt_cover: '',
         video_file: '/god-of-war-hero-video-us-18oct17.mp4',
         price: 400,
         discount: 30,
         color: '',
         slug: 'control',
         images: [],
         info: []
      },
      {
         _id: '12336834',
         payment: ['/mastercard.svg','/visa.svg','/multicaixa.png'],
         video_url: ['https://www.youtube.com/watch?v=zrHb2p4YPT0','https://www.youtube.com/watch?v=PbVKBoDuhZ0','https://www.youtube.com/watch?v=InrHVskqJsE'],
         title: 'Hogwarts Lagacy',
         category: ['jogo','Acessórios PS5'],
         desc: '',
         image: '/gl.png',
         poster: '/hw-post.jpg',
         playes: 1,
         cumpuny: '',
         online: true,
         avalible: ['/xboxone.svg', '/ps4.svg', '/ps5.svg', '/pc.svg'],
         violance: ['/violence.png','/ingamepurchases.webp','/16.webp',],
         psn: 'Subscreva o/a PlayStation Plus Extra para aceder a este jogo, bem como a centenas de outros, no Catálogo de Jogos',
         cover_image: '/gl-cover',
         alt_cover: '',
         video_file: '/god-of-war-hero-video-us-18oct17.mp4',
         price: 400,
         discount: 30,
         color: '',
         slug: 'hogworts-legacy',
         images: [],
         info: []
      },
      {
         _id: '12336834344',
         payment: ['/mastercard.svg','/visa.svg','/multicaixa.png'],
         video_url: ['https://www.youtube.com/watch?v=zrHb2p4YPT0','https://www.youtube.com/watch?v=PbVKBoDuhZ0','https://www.youtube.com/watch?v=InrHVskqJsE'],
         title: 'Diablo® IV',
         category: ['Jogo','Acessórios PS5'],
         desc: 'A batalha entre High Heavens e Burning Hells continua. Com demónios para matar, capacidades para dominar, masmorras e saques, o Diablo IV traz aventura e devastação.',
         image: '/db.jpg',
         poster: '/db-post.jpg',
         playes: 1,
         cumpuny: 'Blizzard Entertainment',
         online: true,
         avalible: ['/xboxone.svg', '/ps4.svg', '/ps5.svg', '/pc.svg'],
         violance: ['/violence.png','/ingamepurchases.webp','/16.webp',],
         psn: 'Subscreva o/a PlayStation Plus Extra para aceder a este jogo, bem como a centenas de outros, no Catálogo de Jogos',
         cover_image: '/db-cover.jpg',
         alt_cover: '',
         video_file: '/diablo.mp4',
         price: 400,
         discount: 30,
         color: 'red',
         slug: 'diablo-5',
         images: [],
         info: []
      },
      {
         _id: '12335856634604',
         payment: ['/mastercard.svg','/visa.svg','/multicaixa.png'],
         video_url: [],
         title: 'PlayStation 5 (Slim) Disc Console',
         category: ['Acessórios', 'PS5'],
         desc: '',
         image: '/ps5.jpg',
         poster: '/ps5.jpg',
         playes: 1,
         cumpuny: 'Sony Interactive Entertainment',
         online: true,
         avalible: [],
         violance: [],
         psn: '',
         cover_image: '/PS4',
         alt_cover: '',
         video_file: '/god-of-war-v.mp4',
         price: 799,
         discount: 30,
         color: '',
         slug: 'playstation-5-slim-disc-console',
         images: [],
         info: []
      },
   ],
   ACESSORY: [
      {
         _id: '12335856634604',
         payment: ['/mastercard.svg','/visa.svg','/multicaixa.png'],
         video_url: [],
         title: 'PlayStation 5 (Slim) Disc Console',
         category: ['Acessórios', ],
         desc: '',
         image: '/ps5-console-featured.webp',
         poster: '/ps5.jpg',
         playes: 1,
         cumpuny: 'Sony Interactive Entertainment',
         online: true,
         avalible: [],
         violance: [],
         psn: '',
         cover_image: '/PS4',
         alt_cover: '',
         video_file: '/god-of-war-v.mp4',
         price: 799,
         discount: 30,
         color: '',
         slug: 'playstation-5-slim-disc-console',
         images: [],
         info: []
      },
   ],
   CATEGORIES: [
      {name: 'PS3', image: '/ps3-bg.jpg', color: '#3c2edd', items: ['New games', 'Acessórios', '']},
      {name: 'PS4', image: '/ps4-bg.jpg', color: '#3c2edd', items: ['New games', 'Acessórios', '']},
      {name: 'PS5', image: '/ps5-bg.jpg', color: '#3c2edd', items: ['New games', 'Acessórios', '']},
      {name: 'XBOX', image: '/xbox-bg.png', color: 'green', items: ['New games', 'Acessórios', '']},
      {name: 'PC', image: '/pc-bg.jpg', color: 'red', items: ['New games', 'Acessórios', '']},
   ],
   BANKS: [
      {
         fullName: "Banco de Fomento Angola (BFA)",
         name: 'BFA',
         logo: "/bfa.svg",
         icon: '/th.png',
         color: '#fe760f linear-gradient(45deg,#f05d1a 0,#ff9727 100%)'
      },
      {
         fullName: "Banco Angolano de Investimentos, (BAI)",
         name: 'BAI',
         logo: "/bai.png",
         icon: '/th2.png',
         color: '#00a1e0'
      },
      {
         fullName: "Banco de Poupança e Crédito (BFA)",
         name: 'BPC',
         logo: "/bpc.png",
         icon: '/th3.png',
         color: '#2563eb'
      },
   ],
   NEWGAMES: [
      {
         slug: 'os-melhores-jogos-de-desport',
         image: '/esp.jpg',
         mainItem: {},
         cover: '/bg-sp.jpg',
         title: 'Os melhores jogos de desporto da PlayStation'
      },
      {
         slug: 'os-melhores-jogos-de-super-herois',
         image: '/super-h.jpg',
         mainItem: {},
         cover: '/bg-sh.jpg',
         title: 'Os melhores jogos de super-heróis da PlayStation'
      },
      {
         slug: 'os-melhores-jogos-de-terror',
         image: '/horror.jpg',
         mainItem: {},
         cover: '/bg-hr.jpg',
         title: 'Os melhores jogos de terror da PlayStation'
      },
   ],
   BLOGS: [
      {
         _id: '3r58888t3yh4h4u',
         slug: 'official-playStation-podcast-episode-475',
         title: 'Official PlayStation Podcast Episode 475: 2023 Enters the Halls of Valhalla',
         subTitle: 'Featuring a discussion with developers from Santa Monica Studio on the God of War Ragnarök free epilogue DLC Valhalla.',
         image: '/blog-god.webp',
         descrition: '',
         author: user,
         comment: 1,
         likes: 20,
         audio: 1
      },
      {
         _id: '3r5t3y333h4h4u',
         slug: 'share-of-the-week-cyberpunk-2077',
         title: 'Share of the Week: Cyberpunk 2077',
         subTitle: '',
         image: '/blog-cb.webp',
         descrition: '',
         author: user,
         comment: 1,
         likes: 20,
         audio: 1
      },
      {
         _id: '3r5t3yy67h4h4u',
         slug: 'tekken-8-hands-on-with-arcade-quest',
         title: 'Tekken 8: hands-on with Arcade Quest, Super Ghost Battles, and Tekken Ball',
         subTitle: '',
         image: '/blog-tk.webp',
         descrition: '',
         author: user,
         comment: 1,
         likes: 20,
         audio: 1
      },
   ],
   EMOJES: [
      {lable: 'Gosto', icon: '/emoj/like.gif'},
      {lable: 'Adoro', icon: '/emoj/heart.gif'},
      {lable: 'Riso', icon: '/emoj/happy.gif'},
      {lable: 'Supresa', icon: '/emoj/surprised.gif'},
      {lable: 'Tristeza', icon: '/emoj/sad.gif'},
      {lable: 'Ira', icon: '/emoj/angry.gif'},
   ],
   FEEDBAK: [
      {
         title: 'Bug',
         icon: '/bug.gif'
      },
      {
         title: 'Idea',
         icon: '/idea.gif'
      },
      {
         title: 'Outros',
         icon: '/outros.gif'
      },
   ],
   PAYMENT: [
      {type: 'Multicaixa', icon: '/multicaixa.png'},
      {type: 'Master card', icon: '/mastercard.svg'},
      {type: 'Paypall', icon: '/paypal.svg'},
   ],
   USERS: [
      {
         _id: 'dfhhweuffhu3i',
         name: 'Reinaldo Vombo',
         avatar: '/avatar.jpg',
         role: 'Úsuario da comunidade'
      },
   ]
}