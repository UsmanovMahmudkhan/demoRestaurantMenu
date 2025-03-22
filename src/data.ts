import { MenuItem, CategoryInfo } from './types';

// Export menu items
export const menuItems: MenuItem[] = [
// SOUPS
{
  id: 'soup-1',
  category: 'soup',
  price: 12.50,
  image: '/imgs/shurpa.png',
  translations: {
    en: {
      name: 'Shurpa Soup',
      description: 'Uzbek Lamb Shurpa is a rich, slow-cooked soup with lamb, vegetables, and spices..',
      ingredients: ['Lamb', 'Carrots', 'Potatoes', 'Onions', 'Bell peppers', 'Tomatoes', 'Spices']
    },
    ja: {
      name: 'ウズベク・シュルパ',
      description: 'ウズベクのラム・シュルパは、ラム肉、野菜、スパイスをじっくり煮込んだ濃厚なスープです',
      ingredients: ['ラム肉', 'ニンジン', 'ジャガイモ', 'タマネギ', 'ピーマン', 'トマト', 'スパイス']
    },
    ko: {
      name: '우즈베크 슈르파',
      description: '우즈베크 양고기 슈르파는 양고기, 채소, 향신료로 천천히 끓인 진한 국물 요리입니다.',
      ingredients: ['양고기', '당근', '감자', '양파', '피망', '토마토', '향신료']
    }
  }
},
  {
    id: 'mushroom-soup',
    category: 'soup',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    translations: {
      en: {
        name: 'Mushroom Soup',
        description: 'Creamy soup made with assorted wild mushrooms and fresh herbs.',
        ingredients: ['Assorted mushrooms', 'Onions', 'Garlic', 'Heavy cream', 'Thyme', 'Black pepper', 'Butter']
      },
      ja: {
        name: 'きのこのスープ',
        description: '様々な野生のきのこと新鮮なハーブで作られたクリーミーなスープ。',
        ingredients: ['各種きのこ', 'タマネギ', 'ニンニク', '生クリーム', 'タイム', '黒コショウ', 'バター']
      },
      ko: {
        name: '버섯 수프',
        description: '다양한 야생 버섯과 신선한 허브로 만든 크리미한 수프.',
        ingredients: ['모둠 버섯', '양파', '마늘', '생크림', '타임', '후추', '버터']
      }
    }
  },
  {
    id: 'shurpa',
    category: 'soup',
    price: 12.50,
    image: '/imgs/shurpa.png',
    translations: {
      en: {
        name: 'Shurpa Soup',
        description: 'Uzbek Lamb Shurpa is a rich, slow-cooked soup with lamb, vegetables, and spices.',
        ingredients: ['Lamb', 'Carrots', 'Potatoes', 'Onions', 'Bell peppers', 'Tomatoes', 'Spices']
      },
      ja: {
        name: 'ウズベク・シュルパ',
        description: 'ウズベクのラム・シュルパは、ラム肉、野菜、スパイスをじっくり煮込んだ濃厚なスープです',
        ingredients: ['ラム肉', 'ニンジン', 'ジャガイモ', 'タマネギ', 'ピーマン', 'トマト', 'スパイス']
      },
      ko: {
        name: '우즈베크 슈르파',
        description: '우즈베크 양고기 슈르파는 양고기, 채소, 향신료로 천천히 끓인 진한 국물 요리입니다.',
        ingredients: ['양고기', '당근', '감자', '양파', '피망', '토마토', '향신료']
      }
    }
  },
  {
    id: 'borsh',
    category: 'soup',
    price: 14.00,
    image: '/imgs/borsh.png',
    translations: {
      en: {
        name: 'Borsh',
        description: 'Borscht is a beet-based Eastern European soup, often served with sour cream.',
        ingredients: ['Beets', 'Cabbage', 'Potatoes', 'Carrots', 'Onions', 'Tomato paste', 'Sour cream']
      },
      ja: {
        name: 'ボルシチ',
        description: 'ボルシチはビーツをベースにした東ヨーロッパのスープで、よくサワークリームと一緒に提供されます。',
        ingredients: ['ビーツ', 'キャベツ', 'ジャガイモ', 'ニンジン', 'タマネギ', 'トマトペースト', 'サワークリーム']
      },
      ko: {
        name: '보르시치',
        description: '보르시치는 비트를 기본으로 한 동유럽 수프로, 종종 사워크림과 함께 제공됩니다.',
        ingredients: ['비트', '양배추', '감자', '당근', '양파', '토마토 페이스트', '사워크림']
      }
    }
  },
  {
    id: 'pelmeni',
    category: 'soup',
    price: 13.00,
    image: '/imgs/pelmeni.png',
    translations: {
      en: {
        name: 'Pelmeni',
        description: 'Russian dumplings filled with meat, served in broth.',
        ingredients: ['Flour', 'Eggs', 'Water', 'Salt', 'Minced meat', 'Onions', 'Broth']
      },
      ja: {
        name: 'ペリメニ',
        description: '肉入りのロシア風水餃子、スープとともに提供。',
        ingredients: ['小麦粉', '卵', '水', '塩', 'ひき肉', 'タマネギ', 'ブロス']
      },
      ko: {
        name: '펠메니',
        description: '고기로 채운 러시아식 만두, 국물과 함께 제공됩니다.',
        ingredients: ['밀가루', '계란', '물', '소금', '다진 고기', '양파', '육수']
      }
    }
  },
  {
    id: 'okroshka',
    category: 'soup',
    price: 10.00,
    image: '/imgs/okroshka.png',
    translations: {
      en: {
        name: 'Okroshka',
        description: 'Cold soup with vegetables, herbs, and kvass or kefir.',
        ingredients: ['Cucumbers', 'Radishes', 'Boiled potatoes', 'Boiled eggs', 'Dill', 'Kvass or kefir']
      },
      ja: {
        name: 'オクローシカ',
        description: '野菜やハーブ、クワスまたはケフィアを使った冷製スープ。',
        ingredients: ['キュウリ', 'ラディッシュ', 'ゆでたジャガイモ', 'ゆで卵', 'ディル', 'クワスまたはケフィア']
      },
      ko: {
        name: '오크로시카',
        description: '야채, 허브, 크바스 또는 케피어가 들어간 냉수프.',
        ingredients: ['오이', '무', '삶은 감자', '삶은 계란', '딜', '크바스 또는 케피어']
      }
    }
  },
  {
    id: 'beef-goulash',
    category: 'soup',
    price: 14.50,
    image: '/imgs/goulash.png',
    translations: {
      en: {
        name: 'Beef Goulash',
        description: 'Thick beef stew with paprika and vegetables.',
        ingredients: ['Beef', 'Onions', 'Garlic', 'Paprika', 'Tomatoes', 'Carrots', 'Potatoes']
      },
      ja: {
        name: 'ビーフグヤーシュ',
        description: 'パプリカと野菜を使った濃厚な牛肉シチュー。',
        ingredients: ['牛肉', 'タマネギ', 'ニンニク', 'パプリカ', 'トマト', 'ニンジン', 'ジャガイモ']
      },
      ko: {
        name: '비프 굴라시',
        description: '파프리카와 야채가 들어간 진한 소고기 스튜.',
        ingredients: ['소고기', '양파', '마늘', '파프리카', '토마토', '당근', '감자']
      }
    }
  },
  {
    id: 'mastava',
    category: 'soup',
    price: 12.00,
    image: '/imgs/mastava.png',
    translations: {
      en: {
        name: 'Mastava',
        description: 'Uzbek rice soup with meat and vegetables.',
        ingredients: ['Rice', 'Beef or lamb', 'Carrots', 'Onions', 'Tomatoes', 'Garlic', 'Spices']
      },
      ja: {
        name: 'マスタヴァ',
        description: '肉と野菜入りのウズベキスタン風ライススープ。',
        ingredients: ['米', '牛肉またはラム肉', 'ニンジン', 'タマネギ', 'トマト', 'ニンニク', 'スパイス']
      },
      ko: {
        name: '마스타바',
        description: '고기와 야채가 들어간 우즈베키스탄식 밥국.',
        ingredients: ['쌀', '소고기 또는 양고기', '당근', '양파', '토마토', '마늘', '향신료']
      }
    }
  },

  {
    id: 'main-1',
    category: 'main',
    price: 12000,
    image: '/imgs/plov.png',
    translations: {
      en: {
        name: 'Plov',
        description: 'Uzbek rice pilaf with lamb and vegetables.',
        ingredients: ['Rice', 'Lamb', 'Carrots', 'Onions', 'Spices']
      },
      ja: {
        name: 'プロフ',
        description: 'ラム肉と野菜入りのウズベキスタン風ピラフ。',
        ingredients: ['米', 'ラム肉', '人参', 'タマネギ', 'スパイス']
      },
      ko: {
        name: '플로브',
        description: '양고기와 야채가 들어간 우즈베키스탄식 필라프.',
        ingredients: ['쌀', '양고기', '당근', '양파', '향신료']
      }
    }
  },
  {
    id: 'main-2',
    category: 'main',
    price: 13900,
    image: '/imgs/manti.png',
    translations: {
      en: {
        name: 'Manti',
        description: 'Steamed dumplings stuffed with spiced meat.',
        ingredients: ['Flour', 'Meat', 'Onions', 'Spices']
      },
      ja: {
        name: 'マンティ',
        description: 'スパイスの効いた肉を詰めた蒸し餃子。',
        ingredients: ['小麦粉', '肉', 'タマネギ', 'スパイス']
      },
      ko: {
        name: '만티',
        description: '양념한 고기를 넣은 찐만두.',
        ingredients: ['밀가루', '고기', '양파', '향신료']
      }
    }
  },
  {
    id: 'main-3',
    category: 'main',
    price: 13900,
    image: '/imgs/jizBiz.png',
    translations: {
      en: {
        name: 'Jiz-Biz',
        description: 'Fried beef liver with onions and spices.',
        ingredients: ['Beef liver', 'Onions', 'Spices']
      },
      ja: {
        name: 'ジズビギ',
        description: '玉ねぎとスパイス入りの牛レバー炒め。',
        ingredients: ['牛レバー', 'タマネギ', 'スパイス']
      },
      ko: {
        name: '지즈비기',
        description: '양파와 향신료로 볶은 소 간 요리.',
        ingredients: ['소 간', '양파', '향신료']
      }
    }
  },
  {
    id: 'main-4',
    category: 'main',
    price: 13900,
    image: '/imgs/cutlet.png',
    translations: {
      en: {
        name: 'Cutlet with garnish',
        description: 'Fried meat cutlet served with side garnish.',
        ingredients: ['Meat', 'Breading', 'Garnish']
      },
      ja: {
        name: 'カツレツと付け合わせ',
        description: '揚げた肉のカツレツと付け合わせ。',
        ingredients: ['肉', '衣', '付け合わせ']
      },
      ko: {
        name: '커틀렛 가니쉬',
        description: '고기 커틀렛과 곁들인 가니쉬.',
        ingredients: ['고기', '빵가루', '가니쉬']
      }
    }
  },
  {
    id: 'main-5',
    category: 'main',
    price: 16900,
    image: '/imgs/grilled_lamb_ribs.png',
    translations: {
      en: {
        name: 'Lamb Ribs',
        description: 'Grilled lamb ribs seasoned with spices.',
        ingredients: ['Lamb ribs', 'Spices']
      },
      ja: {
        name: 'ラムのスペアリブ',
        description: 'スパイスをまぶしたグリルラムリブ。',
        ingredients: ['ラムリブ', 'スパイス']
      },
      ko: {
        name: '양갈비',
        description: '향신료를 뿌려 구운 양갈비.',
        ingredients: ['양갈비', '향신료']
      }
    }
  },
  {
    id: 'main-6',
    category: 'main',
    price: 13900,
    image: '/imgs/kurisaKlyar.png',
    translations: {
      en: {
        name: 'Chicken with Potato',
        description: 'Chicken and potatoes cooked with spices.',
        ingredients: ['Chicken', 'Potatoes', 'Spices']
      },
      ja: {
        name: 'チキンとポテト',
        description: 'スパイスで調理したチキンとポテト。',
        ingredients: ['鶏肉', 'ポテト', 'スパイス']
      },
      ko: {
        name: '치킨 감자',
        description: '향신료로 조리한 닭고기와 감자.',
        ingredients: ['닭고기', '감자', '향신료']
      }
    }
  },
  {
    id: 'main-7',
    category: 'main',
    price: 13900,
    image: '/imgs/honim.png',
    translations: {
      en: {
        name: 'Honim',
        description: 'Steamed Uzbek dish made with layered dough and meat.',
        ingredients: ['Dough', 'Meat', 'Onions']
      },
      ja: {
        name: 'ホニム',
        description: '層状の生地と肉を使ったウズベキスタンの蒸し料理。',
        ingredients: ['生地', '肉', 'タマネギ']
      },
      ko: {
        name: '허님',
        description: '반죽과 고기를 층층이 쪄낸 우즈베키스탄 요리.',
        ingredients: ['반죽', '고기', '양파']
      }
    }
  },
  {
    id: 'main-8',
    category: 'main',
    price: 13900,
    image: '/imgs/tuy-kabob.png',
    translations: {
      en: {
        name: 'Tuy Kabob',
        description: 'Uzbek wedding-style beef kebab.',
        ingredients: ['Beef', 'Spices']
      },
      ja: {
        name: 'トゥイカバブ',
        description: 'ウズベキスタンの結婚式スタイルのビーフケバブ。',
        ingredients: ['牛肉', 'スパイス']
      },
      ko: {
        name: '투이 카밥',
        description: '우즈베키스탄 전통 결혼식 소고기 케밥.',
        ingredients: ['소고기', '향신료']
      }
    }
  },
  {
    id: 'main-9',
    category: 'main',
    price: 13900,
    image: '/imgs/tefteli.jpg',
    translations: {
      en: {
        name: 'Meatballs with Puree',
        description: 'Juicy meatballs served with creamy mashed potatoes.',
        ingredients: ['Ground meat', 'Potatoes', 'Spices']
      },
      ja: {
        name: 'ミートボールとピューレ',
        description: 'クリーミーなマッシュポテトを添えたジューシーなミートボール。',
        ingredients: ['ひき肉', 'ジャガイモ', 'スパイス']
      },
      ko: {
        name: '미트볼 퓌레',
        description: '부드러운 으깬 감자와 함께 제공되는 미트볼.',
        ingredients: ['다진 고기', '감자', '향신료']
      }
    }
  },
  {
    id: 'main-10',
    category: 'main',
    price: 2000,
    image: '/imgs/rice.png',
    translations: {
      en: {
        name: 'Steamed Rice',
        description: 'Simple steamed white rice.',
        ingredients: ['Rice']
      },
      ja: {
        name: '蒸しご飯',
        description: 'シンプルな白ごはん。',
        ingredients: ['米']
      },
      ko: {
        name: '공기밥',
        description: '기본 흰 쌀밥.',
        ingredients: ['쌀']
      }
    }
  },
  {
    id: 'main-11',
    category: 'main',
    price: 13900,
    image: '/imgs/goluptsi.png',
    translations: {
      en: {
        name: 'Stuffed Cabbage Rolls',
        description: 'Cabbage leaves filled with meat and rice.',
        ingredients: ['Cabbage', 'Meat', 'Rice', 'Spices']
      },
      ja: {
        name: 'ロールキャベツ',
        description: '肉とご飯を詰めたキャベツロール。',
        ingredients: ['キャベツ', '肉', 'ご飯', 'スパイス']
      },
      ko: {
        name: '양배추 롤',
        description: '고기와 밥을 채운 양배추 롤.',
        ingredients: ['양배추', '고기', '밥', '향신료']
      }
    }
  },
  {
    id: 'main-12',
    category: 'main',
    price: 13900,
    image: '/imgs/tabaka.png',
    translations: {
      en: {
        name: 'Tabaka Chicken',
        description: 'Pan-fried whole chicken flattened and seasoned.',
        ingredients: ['Chicken', 'Spices']
      },
      ja: {
        name: 'タバカチキン',
        description: '平らにして味付けした鶏をフライパンで焼いた料理。',
        ingredients: ['鶏肉', 'スパイス']
      },
      ko: {
        name: '타바카 치킨',
        description: '편평하게 눌러 조리한 닭고기 요리.',
        ingredients: ['닭고기', '향신료']
      }
    }
  },
  {
    id: 'main-13',
    category: 'main',
    price: 14900,
    image: '/imgs/kazan_kabob.png',
    translations: {
      en: {
        name: 'Kazan-Kabob',
        description: 'Fried meat and potatoes cooked in a cauldron.',
        ingredients: ['Meat', 'Potatoes', 'Spices']
      },
      ja: {
        name: 'カザンカバブ',
        description: '大鍋で調理した揚げ肉とポテト。',
        ingredients: ['肉', 'ジャガイモ', 'スパイス']
      },
      ko: {
        name: '카잔 케밥',
        description: '솥에서 조리한 튀긴 고기와 감자.',
        ingredients: ['고기', '감자', '향신료']
      }
    }
  },
  {
    id: 'main-14',
    category: 'main',
    price: 13900,
    image: '/imgs/fransuz.png',
    translations: {
      en: {
        name: 'French Salad',
        description: 'Layered salad with beets, potatoes, carrots, and mayo.',
        ingredients: ['Beets', 'Potatoes', 'Carrots', 'Mayonnaise']
      },
      ja: {
        name: 'フランス風サラダ',
        description: 'ビーツ、ポテト、ニンジン、マヨネーズの層状サラダ。',
        ingredients: ['ビーツ', 'ポテト', 'ニンジン', 'マヨネーズ']
      },
      ko: {
        name: '프랑스식 샐러드',
        description: '비트, 감자, 당근, 마요네즈가 들어간 층층이 샐러드.',
        ingredients: ['비트', '감자', '당근', '마요네즈']
      }
    }
  },
  {
    id: 'main-15',
    category: 'main',
    price: 10000,
    image: '/imgs/lavash.png',
    translations: {
      en: {
        name: 'Lamb Kebab',
        description: 'Lavash roll stuffed with lamb kebab and vegetables.',
        ingredients: ['Lavash', 'Lamb', 'Vegetables']
      },
      ja: {
        name: 'ラムラヴァシュケバブ',
        description: 'ラムケバブと野菜を詰めたラヴァシュロール。',
        ingredients: ['ラヴァシュ', 'ラム肉', '野菜']
      },
      ko: {
        name: '양고기 라바시 케밥',
        description: '양고기 케밥과 야채를 넣은 라바시 롤.',
        ingredients: ['라바시', '양고기', '야채']
      }
    }
  },
  {
    id: 'main-16',
    category: 'main',
    price: 10000,
    image: '/imgs/lavash.png',
    translations: {
      en: {
        name: 'Beef Kebab',
        description: 'Lavash roll stuffed with beef kebab and vegetables.',
        ingredients: ['Lavash', 'Beef', 'Vegetables']
      },
      ja: {
        name: 'ラムラヴァシュケバブ',
        description: 'ラムケバブと野菜を詰めたラヴァシュロール。',
        ingredients: ['ラヴァシュ', '牛肉', '野菜']
      },
      ko: {
        name: '양고기 라바시 케밥',
        description: '양고기 케밥과 야채를 넣은 라바시 롤.',
        ingredients: ['라바시', '소고기', '야채']
      }
    }
  },
  {
    id: 'main-17',
    category: 'main',
    price: 10000,
    image: '/imgs/lavash.png',
    translations: {
      en: {
        name: 'Chicken Kebab',
        description: 'Lavash roll stuffed with chicken kebab and vegetables.',
        ingredients: ['Lavash', 'Chicken', 'Vegetables']
      },
      ja: {
        name: 'ラムラヴァシュケバブ',
        description: 'ラムケバブと野菜を詰めたラヴァシュロール。',
        ingredients: ['ラヴァシュ', '鶏肉', '野菜']
      },
      ko: {
        name: '양고기 라바시 케밥',
        description: '양고기 케밥과 야채를 넣은 라바시 롤.',
        ingredients: ['라바시', '닭고기', '야채']
      }
    }
  },
  {
    id: 'main-18',
    category: 'main',
    price: 11000,
    image: '/imgs/eggs_sausage.png',
    translations: {
      en: {
        name: 'Eggs with Sausage',
        description: 'Scrambled eggs with sliced sausage.',
        ingredients: ['Eggs', 'Sausage']
      },
      ja: {
        name: '卵とソーセージ',
        description: 'ソーセージ入りスクランブルエッグ。',
        ingredients: ['卵', 'ソーセージ']
      },
      ko: {
        name: '계란 소시지',
        description: '소시지를 곁들인 스크램블 에그.',
        ingredients: ['계란', '소시지']
      }
    }
  },
  {
    id: 'main-19',
    category: 'main',
    price: 11000,
    image: '/imgs/nonkebab.png',
    translations: {
      en: {
        name: 'Chicken Non Kebab',
        description: 'Kebab served in traditional bread with chicken.',
        ingredients: ['Chicken', 'Bread']
      },
      ja: {
        name: 'チキンノンケバブ',
        description: '伝統的なパンに包まれたチキンケバブ。',
        ingredients: ['鶏肉', 'パン']
      },
      ko: {
        name: '치킨 논 케밥',
        description: '전통 빵에 넣은 닭고기 케밥.',
        ingredients: ['닭고기', '빵']
      }
    }
  },
  {
    id: 'main-20',
    category: 'main',
    price: 11000,
    image: '/imgs/nonkebab.png',
    translations: {
      en: {
        name: 'Lamb Non Kebab',
        description: 'Lamb kebab wrapped in Uzbek flatbread.',
        ingredients: ['Lamb', 'Flatbread']
      },
      ja: {
        name: 'ラムノンケバブ',
        description: 'ウズベキスタンのフラットブレッドに包まれたラムケバブ。',
        ingredients: ['ラム肉', 'フラットブレッド']
      },
      ko: {
        name: '양고기 논 케밥',
        description: '우즈베크 빵에 싸인 양고기 케밥.',
        ingredients: ['양고기', '우즈벡 빵']
      }
    }
  },
  {
    id: 'main-21',
    category: 'main',
    price: 11000,
    image: '/imgs/nonkebab.png',
    translations: {
      en: {
        name: 'Beef Non Kebab',
        description: 'Beef kebab wrapped in Uzbek flatbread.',
        ingredients: ['Beef', 'Flatbread']
      },
      ja: {
        name: 'ラムノンケバブ',
        description: 'ウズベキスタンのフラットブレッドに包まれたラムケバブ。',
        ingredients: ['牛肉', 'フラットブレッド']
      },
      ko: {
        name: '양고기 논 케밥',
        description: '우즈베크 빵에 싸인 양고기 케밥.',
        ingredients: ['소고기', '우즈벡 빵']
      }
    }
  },
  {
    id: 'main-22',
    category: 'main',
    price: 15000,
    image: '/imgs/tandir.png',
    translations: {
      en: {
        name: 'Tandir',
        description: 'Slow-roasted lamb cooked in a clay oven.',
        ingredients: ['Lamb', 'Spices']
      },
      ja: {
        name: 'タンドール',
        description: '粘土オーブンでじっくり焼いたラム肉。',
        ingredients: ['ラム肉', 'スパイス']
      },
      ko: {
        name: '탄두르',
        description: '점토 오븐에서 천천히 구운 양고기.',
        ingredients: ['양고기', '향신료']
      }
    }
  },
  {
    id: 'main-23',
    category: 'main',
    price: 14000,
    image: '/imgs/norin.png',
    translations: {
      en: {
        name: 'Norin',
        description: 'Uzbek cold noodle dish with horse meat or beef.',
        ingredients: ['Noodles', 'Horse meat or Beef', 'Vegetables']
      },
      ja: {
        name: 'ノリン',
        description: '馬肉または牛肉入りのウズベク風冷製麺料理。',
        ingredients: ['麺', '馬肉または牛肉', '野菜']
      },
      ko: {
        name: '노린',
        description: '말고기 또는 소고기가 들어간 우즈벡 냉면 요리.',
        ingredients: ['면', '말고기 또는 소고기', '야채']
      }
    }
  },
  {
    id: 'main-24',
    category: 'main',
    price: 13000,
    image: '/imgs/jarenniy.jpeg',
    translations: {
      en: {
        name: 'Fried Pelmeni',
        description: 'Crispy pan-fried dumplings filled with meat.',
        ingredients: ['Dumplings', 'Meat', 'Spices']
      },
      ja: {
        name: '焼きペリメニ',
        description: '肉入りのカリカリ焼き餃子。',
        ingredients: ['餃子', '肉', 'スパイス']
      },
      ko: {
        name: '튀긴 펠메니',
        description: '고기가 들어간 바삭한 팬 프라이 만두.',
        ingredients: ['만두', '고기', '향신료']
      }
    }
  },
  {
    id: 'main-25',
    category: 'main',
    price: 13500,
    image: '/imgs/okorochkaRisom.jpeg',
    translations: {
      en: {
        name: 'Okorochka with Rice',
        description: 'Baked chicken leg served with steamed rice.',
        ingredients: ['Chicken leg', 'Rice', 'Spices']
      },
      ja: {
        name: 'ライス付きオクローチカ',
        description: '焼いた鶏もも肉とライス。',
        ingredients: ['鶏もも肉', 'ご飯', 'スパイス']
      },
      ko: {
        name: '밥과 함께 오크로치카',
        description: '구운 닭다리와 밥.',
        ingredients: ['닭다리', '밥', '향신료']
      }
    }
  },
  {
    id: 'main-26',
    category: 'main',
    price: 13500,
    image: '/imgs/okorochkaPyure.jpeg',
    translations: {
      en: {
        name: 'Okorochka with Mashed Potatoes',
        description: 'Baked chicken leg with creamy mashed potatoes.',
        ingredients: ['Chicken leg', 'Potatoes', 'Spices']
      },
      ja: {
        name: 'ピューレ付きオクローチカ',
        description: '焼いた鶏もも肉とクリーミーなマッシュポテト。',
        ingredients: ['鶏もも肉', 'ジャガイモ', 'スパイス']
      },
      ko: {
        name: '매시드 포테이토와 오크로치카',
        description: '구운 닭다리와 부드러운 으깬 감자.',
        ingredients: ['닭다리', '감자', '향신료']
      }
    }
  },


  // SHASHLIK (SKEWERS)
  {
    id: 'shashlik-1',
    category: 'shashlik',
    price: 22.00,
    image: '/imgs/shashlik/beefShish.png',
    translations: {
      en: {
        name: 'Beef Shashlik',
        description: 'Juicy marinated beef skewers grilled to perfection.',
        ingredients: ['Beef', 'Marinade', 'Spices']
      },
      ja: {
        name: 'ビーフシャシリク',
        description: 'ジューシーなマリネビーフの串焼き。',
        ingredients: ['牛肉', 'マリネ液', 'スパイス']
      },
      ko: {
        name: '소고기 샤슐릭',
        description: '육즙 가득한 소고기 꼬치를 완벽하게 구웠습니다.',
        ingredients: ['소고기', '양념', '향신료']
      }
    }
  },
  {
    id: 'shashlik-2',
    category: 'shashlik',
    price: 24.00,
    image: '/imgs/shashlik/lampShish.png',
    translations: {
      en: {
        name: 'Lamb Shashlik',
        description: 'Tender lamb skewers grilled over charcoal.',
        ingredients: ['Lamb', 'Charcoal', 'Spices']
      },
      ja: {
        name: 'ラムシャシリク',
        description: '柔らかいラム肉の炭火串焼き。',
        ingredients: ['ラム肉', '炭火', 'スパイス']
      },
      ko: {
        name: '양고기 샤슐릭',
        description: '부드러운 양고기 꼬치를 숯불에 구웠습니다.',
        ingredients: ['양고기', '숯불', '향신료']
      }
    }
  },
  {
    id: 'shashlik-3',
    category: 'shashlik',
    price: 20.00,
    image: '/imgs/shashlik/chickenShish.png',
    translations: {
      en: {
        name: 'Chicken Shashlik',
        description: 'Grilled marinated chicken skewers with herbs and spices.',
        ingredients: ['Chicken', 'Herbs', 'Spices']
      },
      ja: {
        name: 'チキンシャシリク',
        description: 'ハーブとスパイスでマリネした鶏肉の串焼き。',
        ingredients: ['鶏肉', 'ハーブ', 'スパイス']
      },
      ko: {
        name: '치킨 샤슐릭',
        description: '허브와 향신료에 재운 닭고기 꼬치 구이.',
        ingredients: ['닭고기', '허브', '향신료']
      }
    }
  },
  {
    id: 'shashlik-4',
    category: 'shashlik',
    price: 30.00,
    image: '/imgs/shashlik/setShashlik.jpeg',
    translations: {
      en: {
        name: 'Set Shashlik',
        description: 'Mixed grill platter of various shashlik types.',
        ingredients: ['Beef', 'Lamb', 'Chicken', 'Spices']
      },
      ja: {
        name: 'シャシリクセット',
        description: '様々な種類のシャシリクを盛り合わせたグリルプレート。',
        ingredients: ['牛肉', 'ラム肉', '鶏肉', 'スパイス']
      },
      ko: {
        name: '샤슐릭 세트',
        description: '다양한 종류의 샤슐릭을 모은 혼합 구이 플래터.',
        ingredients: ['소고기', '양고기', '닭고기', '향신료']
      }
    }
  },
  {
    id: 'shashlik-5',
    category: 'shashlik',
    price: 18.00,
    image: '/imgs/shashlik/wings.jpeg',
    translations: {
      en: {
        name: 'Chicken Wings',
        description: 'Spicy grilled chicken wings served with sauce.',
        ingredients: ['Chicken Wings', 'Spices', 'Sauce']
      },
      ja: {
        name: 'チキンウィング',
        description: 'スパイシーなグリルチキンウィング、ソース付き。',
        ingredients: ['チキンウィング', 'スパイス', 'ソース']
      },
      ko: {
        name: '치킨 윙',
        description: '매콤하게 구운 치킨 윙과 소스를 함께 제공합니다.',
        ingredients: ['치킨 윙', '향신료', '소스']
      }
    }
  },
  {
    id: 'shashlik-6',
    category: 'shashlik',
    price: 20.00,
    image: '/imgs/shashlik/molotiy.png',
    translations: {
      en: {
        name: 'Molotiy',
        description: 'Minced meat skewer grilled to a juicy finish.',
        ingredients: ['Minced Meat', 'Spices']
      },
      ja: {
        name: 'モロティー',
        description: 'ジューシーに焼き上げた挽肉の串焼き。',
        ingredients: ['挽肉', 'スパイス']
      },
      ko: {
        name: '몰로티',
        description: '육즙 가득하게 구운 다진 고기 꼬치.',
        ingredients: ['다진 고기', '향신료']
      }
    }
  },

  // SALADS
  {
    id: 'salad-1',
    category: 'salad',
    price: 5000,
    image: '/imgs/salad/olivia.png',
    translations: {
      en: { name: 'Olivier Salad', description: 'Traditional Russian salad with vegetables and mayonnaise.', ingredients: ['Potatoes', 'Carrots', 'Eggs', 'Peas', 'Pickles', 'Mayonnaise'] },
      ko: { name: '올리비에 샐러드', description: '야채와 마요네즈로 만든 러시아식 전통 샐러드.', ingredients: ['감자', '당근', '계란', '완두콩', '피클', '마요네즈'] },
      ja: { name: 'オリビエサラダ', description: '野菜とマヨネーズを使ったロシアの伝統的なサラダ。', ingredients: ['ジャガイモ', 'ニンジン', '卵', 'グリンピース', 'ピクルス', 'マヨネーズ'] }
    }
  },
  {
    id: 'salad-2',
    category: 'salad',
    price: 5000,
    image: '/imgs/salad/vinegret.png',
    translations: {
      en: { name: 'Vinegret', description: 'Beetroot salad with potatoes, carrots, and pickles.', ingredients: ['Beets', 'Potatoes', 'Carrots', 'Pickles', 'Onions'] },
      ko: { name: '비네그레트', description: '비트, 감자, 당근, 피클이 들어간 샐러드.', ingredients: ['비트', '감자', '당근', '피클', '양파'] },
      ja: { name: 'ビネグレット', description: 'ビーツ、ジャガイモ、ニンジン、ピクルスのサラダ。', ingredients: ['ビーツ', 'ジャガイモ', 'ニンジン', 'ピクルス', 'タマネギ'] }
    }
  },
  {
    id: 'salad-3',
    category: 'salad',
    price: 4000,
    image: '/imgs/salad/morkov.png',
    translations: {
      en: { name: 'Korean Carrot Salad', description: 'Spicy shredded carrot salad with garlic.', ingredients: ['Carrots', 'Garlic', 'Chili', 'Salt'] },
      ko: { name: '당근 무침', description: '마늘이 들어간 매콤한 당근 샐러드.', ingredients: ['당근', '마늘', '고추', '소금'] },
      ja: { name: '韓国風ニンジンサラダ', description: 'ニンニク入りのスパイシーな千切りニンジンサラダ。', ingredients: ['人参', 'ニンニク', '唐辛子', '塩'] }
    }
  },
  {
    id: 'salad-4',
    category: 'salad',
    price: 4000,
    image: '/imgs/salad/ogrusi.png',
    translations: {
      en: { name: 'Pickled Cucumbers', description: 'Crispy salted cucumbers.', ingredients: ['Cucumbers', 'Salt', 'Vinegar'] },
      ko: { name: '오이 절임', description: '바삭한 소금 오이 절임.', ingredients: ['오이', '소금', '식초'] },
      ja: { name: '塩漬けキュウリ', description: 'カリカリの塩漬けキュウリ。', ingredients: ['キュウリ', '塩', '酢'] }
    }
  },
  {
    id: 'salad-5',
    category: 'salad',
    price: 4000,
    image: '/imgs/salad/tomato.png',
    translations: {
      en: { name: 'Tomato Salad', description: 'Fresh tomato salad with herbs.', ingredients: ['Tomatoes', 'Herbs', 'Olive Oil', 'Salt'] },
      ko: { name: '토마토 샐러드', description: '허브가 곁들여진 신선한 토마토 샐러드.', ingredients: ['토마토', '허브', '올리브 오일', '소금'] },
      ja: { name: 'トマトサラダ', description: 'ハーブを添えた新鮮なトマトサラダ。', ingredients: ['トマト', 'ハーブ', 'オリーブオイル', '塩'] }
    }
  },
  {
    id: 'salad-6',
    category: 'salad',
    price: 4500,
    image: '/imgs/salad/suzma.png',
    translations: {
      en: { name: 'Salad with Suzma and Cucumbers', description: 'Cucumber salad with creamy Suzma yogurt.', ingredients: ['Cucumbers', 'Suzma', 'Dill', 'Salt'] },
      ko: { name: '수즈마 오이 샐러드', description: '부드러운 수즈마 요거트와 오이 샐러드.', ingredients: ['오이', '수즈마', '딜', '소금'] },
      ja: { name: 'スズマとキュウリのサラダ', description: 'クリーミーなスズマヨーグルトとキュウリのサラダ。', ingredients: ['キュウリ', 'スズマ', 'ディル', '塩'] }
    }
  },
  {
    id: 'salad-7',
    category: 'salad',
    price: 6000,
    image: '/imgs/salad/baliq.png',
    translations: {
      en: { name: 'Herring with Potatoes', description: 'Salted herring served with potatoes.', ingredients: ['Herring', 'Potatoes', 'Onions', 'Vinegar', 'Salt'] },
      ko: { name: '청어 감자 샐러드', description: '감자와 함께 제공되는 절인 청어.', ingredients: ['청어', '감자', '양파', '식초', '소금'] },
      ja: { name: 'ニシンとポテトのサラダ', description: 'ポテトを添えた塩漬けニシンのサラダ。', ingredients: ['ニシン', 'ジャガイモ', 'タマネギ', '酢', '塩'] }
    }
  },
  {
    id: 'salad-8',
    category: 'salad',
    price: 4500,
    image: '/imgs/salad/ogonok.png',
    translations: {
      en: { name: 'Pickled Tomatoes', description: 'Marinated tomatoes in brine.', ingredients: ['Tomatoes', 'Salt', 'Water', 'Vinegar', 'Herbs'] },
      ko: { name: '토마토 절임', description: '소금물에 절인 토마토.', ingredients: ['토마토', '소금', '물', '식초', '허브'] },
      ja: { name: 'トマトのピクルス', description: '塩水で漬けたトマト。', ingredients: ['トマト', '塩', '水', '酢', 'ハーブ'] }
    }
  },
  {
    id: 'salad-9',
    category: 'salad',
    price: 6000,
    image: '/imgs/salad/xolodes.png',
    translations: {
      en: { name: 'Kholodets', description: 'Cold meat jelly made with broth and garlic.', ingredients: ['Meat', 'Broth', 'Garlic', 'Gelatin'] },
      ko: { name: '수육 묵', description: '육수와 마늘로 만든 차가운 고기 젤리.', ingredients: ['고기', '육수', '마늘', '젤라틴'] },
      ja: { name: 'ハムとゼリー', description: 'ブロスとニンニクで作られた冷たいゼリー状の肉。', ingredients: ['肉', 'ブロス', 'ニンニク', 'ゼラチン'] }
    }
  },
  // DESSERTS
  {
    id: 'dessert-1',
    category: 'dessert',
    price: 5500,
    image: '/imgs/des/napalyon.png',
    translations: {
      en: { name: 'Napoleon', description: 'Layered puff pastry dessert with creamy filling.', ingredients: ['Puff pastry', 'Cream', 'Sugar'] },
      ja: { name: 'ナポレオン', description: 'クリーミーなフィリングを重ねたパフペストリーのデザート。', ingredients: ['パフペストリー', 'クリーム', '砂糖'] },
      ko: { name: '나폴레옹', description: '크림 필링이 들어간 겹겹이 페이스트리 디저트.', ingredients: ['퍼프 페이스트리', '크림', '설탕'] }
    }
  },
  {
    id: 'dessert-2',
    category: 'dessert',
    price: 5500,
    image: '/imgs/des/medovik.png',
    translations: {
      en: { name: 'Medovik', description: 'Russian honey cake with multiple soft layers.', ingredients: ['Honey', 'Flour', 'Eggs', 'Cream'] },
      ja: { name: 'メドビック', description: '柔らかい層が重なるロシアのハニーケーキ。', ingredients: ['蜂蜜', '小麦粉', '卵', 'クリーム'] },
      ko: { name: '메도빅', description: '부드러운 층으로 이루어진 러시아 꿀 케이크.', ingredients: ['꿀', '밀가루', '계란', '크림'] }
    }
  },
  {
    id: 'dessert-3',
    category: 'dessert',
    price: 9500,
    image: '/imgs/des/chizkeyk.png',
    translations: {
      en: { name: 'Cheesecake', description: 'Rich and creamy cheesecake slice.', ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Crust'] },
      ja: { name: 'チーズケーキ', description: '濃厚でクリーミーなチーズケーキのスライス。', ingredients: ['クリームチーズ', '砂糖', '卵', 'クラスト'] },
      ko: { name: '치즈케이크', description: '진하고 부드러운 치즈케이크 한 조각.', ingredients: ['크림치즈', '설탕', '계란', '크러스트'] }
    }
  },
  {
    id: 'dessert-4',
    category: 'dessert',
    price: 10000,
    image: '/imgs/des/blinchik.png',
    translations: {
      en: { name: 'Blinich (3 pcs)', description: 'Russian pancakes served in a set of three.', ingredients: ['Flour', 'Eggs', 'Milk', 'Sugar'] },
      ja: { name: 'ブリヌイ（3個）', description: '3個入りのロシア風パンケーキ。', ingredients: ['小麦粉', '卵', '牛乳', '砂糖'] },
      ko: { name: '블리니 (3개)', description: '3개 세트로 제공되는 러시아 팬케이크.', ingredients: ['밀가루', '계란', '우유', '설탕'] }
    }
  },
  {
    id: 'dessert-5',
    category: 'dessert',
    price: 40000,
    image: '/imgs/des/whole.png',
    translations: {
      en: { name: 'Whole Medovik', description: 'A full Russian honey cake, perfect for sharing.', ingredients: ['Honey', 'Flour', 'Eggs', 'Cream'] },
      ja: { name: 'メドビックホール', description: 'シェアに最適なロシアのハニーケーキのホール。', ingredients: ['蜂蜜', '小麦粉', '卵', 'クリーム'] },
      ko: { name: '통 메도빅', description: '여럿이 나눠 먹기 좋은 러시아 꿀 케이크 한 판.', ingredients: ['꿀', '밀가루', '계란', '크림'] }
    }
  },
  {
    id: 'dessert-6',
    category: 'dessert',
    price: 5000,
    image: '/imgs/des/baklava.png',
    translations: {
      en: { name: 'Baklava', description: 'Sweet pastry with nuts and honey.', ingredients: ['Pastry', 'Nuts', 'Honey', 'Syrup'] },
      ja: { name: 'バクラヴァ', description: 'ナッツと蜂蜜の甘いペイストリー。', ingredients: ['ペイストリー', 'ナッツ', '蜂蜜', 'シロップ'] },
      ko: { name: '바클라바', description: '견과류와 꿀이 들어간 달콤한 페이스트리.', ingredients: ['페이스트리', '견과류', '꿀', '시럽'] }
    }
  },
  {
    id: 'dessert-7',
    category: 'dessert',
    price: 5000,
    image: '/imgs/des/ice.png',
    translations: {
      en: { name: 'Vanilla Ice Cream', description: 'Classic vanilla ice cream dessert.', ingredients: ['Milk', 'Cream', 'Vanilla', 'Sugar'] },
      ja: { name: 'バニラアイスクリーム', description: 'クラシックなバニラアイスクリーム。', ingredients: ['牛乳', 'クリーム', 'バニラ', '砂糖'] },
      ko: { name: '바닐라 아이스크림', description: '클래식한 바닐라 아이스크림 디저트.', ingredients: ['우유', '크림', '바닐라', '설탕'] }
    }
  },
  {
    id: 'dessert-8',
    category: 'dessert',
    price: 5000,
    image: '/imgs/des/qaymoq.png',
    translations: {
      en: { name: 'qaymoq', description: 'Traditional creamy dairy dessert.', ingredients: ['Milk', 'Cream'] },
      ja: { name: 'カイマク', description: '伝統的なクリーミーな乳製品デザート。', ingredients: ['牛乳', 'クリーム'] },
      ko: { name: '카이막', description: '전통적인 크리미한 유제품 디저트.', ingredients: ['우유', '크림'] }
    }
  },

  // BREADS
  {
    id: 'bread-1',
    category: 'bread',
    price: 2000,
    image: '/imgs/bread/lepyosh.png',
    translations: {
      en: { name: 'Flatbread (S)', description: 'Small individual round flatbread.', ingredients: ['Flour', 'Water', 'Salt', 'Yeast'] },
      ja: { name: '小さな単品パン', description: '小さな丸型単品パン。', ingredients: ['小麦粉', '水', '塩', 'イースト'] },
      ko: { name: '작은 낱개 빵', description: '작은 크기의 둥근 낱개 빵.', ingredients: ['밀가루', '물', '소금', '이스트'] }
    }
  },
  {
    id: 'bread-2',
    category: 'bread',
    price: 3000,
    image: '/imgs/bread/lepyosh.png',
    translations: {
      en: { name: 'Flatbread (M)', description: 'Medium individual round flatbread.', ingredients: ['Flour', 'Water', 'Salt', 'Yeast'] },
      ja: { name: '中サイズ単品パン', description: '中くらいの丸型単品パン。', ingredients: ['小麦粉', '水', '塩', 'イースト'] },
      ko: { name: '중간 낱개 빵', description: '중간 크기의 둥근 낱개 빵.', ingredients: ['밀가루', '물', '소금', '이스트'] }
    }
  },
  {
    id: 'bread-3',
    category: 'bread',
    price: 5000,
    image: '/imgs/bread/lepyosh.png',
    translations: {
      en: { name: 'Flatbread (L)', description: 'Large individual round flatbread.', ingredients: ['Flour', 'Water', 'Salt', 'Yeast'] },
      ja: { name: '大きな単品パン', description: '大きな丸型単品パン。', ingredients: ['小麦粉', '水', '塩', 'イースト'] },
      ko: { name: '큰 낱개 빵', description: '큰 크기의 둥근 낱개 빵.', ingredients: ['밀가루', '물', '소금', '이스트'] }
    }
  },
  {
    id: 'bread-4',
    category: 'bread',
    price: 4000,
    image: '/imgs/bread/patir.png',
    translations: {
      en: { name: 'Layered Flatbread (M)', description: 'Medium flaky layered flatbread.', ingredients: ['Flour', 'Butter', 'Water', 'Salt', 'Yeast'] },
      ja: { name: '中サイズの層状パン', description: '中サイズのパイ風パン。', ingredients: ['小麦粉', 'バター', '水', '塩', 'イースト'] },
      ko: { name: '중간 겹빵', description: '중간 크기의 바삭한 겹빵.', ingredients: ['밀가루', '버터', '물', '소금', '이스트'] }
    }
  },
  {
    id: 'bread-5',
    category: 'bread',
    price: 6000,
    image: '/imgs/bread/patir.png',
    translations: {
      en: { name: 'Layered Flatbread (L)', description: 'Large flaky layered flatbread.', ingredients: ['Flour', 'Butter', 'Water', 'Salt', 'Yeast'] },
      ja: { name: '大サイズの層状パン', description: '大サイズのパイ風パン。', ingredients: ['小麦粉', 'バター', '水', '塩', 'イースト'] },
      ko: { name: '큰 겹빵', description: '큰 크기의 바삭한 겹빵.', ingredients: ['밀가루', '버터', '물', '소금', '이스트'] }
    }
  },
  {
    id: 'bread-6',
    category: 'bread',
    price: 3000,
    image: '/imgs/bread/somsa.png',
    translations: {
      en: { name: 'Samsa', description: 'Uzbek pastry stuffed with onions.', ingredients: ['Flour', 'Onions', 'Oil', 'Spices'] },
      ja: { name: 'サムサ', description: '玉ねぎ入りのウズベク風ペイストリー。', ingredients: ['小麦粉', '玉ねぎ', '油', 'スパイス'] },
      ko: { name: '삼사', description: '양파가 들어간 우즈벡식 페이스트리.', ingredients: ['밀가루', '양파', '기름', '향신료'] }
    }
  },
  {
    id: 'bread-7',
    category: 'bread',
    price: 0,
    image: '/imgs/bread/tandir.png',
    translations: {
      en: { name: 'Tandoor Samsa', description: 'Samsa baked in a traditional tandoor oven.', ingredients: ['Flour', 'Onions', 'Oil', 'Spices'] },
      ja: { name: 'タンドール・サムサ', description: 'タンドールで焼かれたサムサ。', ingredients: ['小麦粉', '玉ねぎ', '油', 'スパイス'] },
      ko: { name: '탄두르 삼사', description: '탄두르에서 구운 삼사.', ingredients: ['밀가루', '양파', '기름', '향신료'] }
    }
  },
  {
    id: 'bread-8',
    category: 'bread',
    price: 2500,
    image: '/imgs/bread/pirashka.png',
    translations: {
      en: { name: 'Pirozhki', description: 'Small baked bun filled with savory filling.', ingredients: ['Flour', 'Filling', 'Oil', 'Egg'] },
      ja: { name: 'ピロシキ', description: '具材入りの小さな焼きパン。', ingredients: ['小麦粉', '具材', '油', '卵'] },
      ko: { name: '피로시키', description: '속이 찬 작은 구운 번.', ingredients: ['밀가루', '속재료', '기름', '계란'] }
    }
  },
  {
    id: 'bread-9',
    category: 'bread',
    price: 3000,
    image: '/imgs/bread/cheburek.png',
    translations: {
      en: { name: 'Cheburek', description: 'Crispy fried turnover with a savory filling.', ingredients: ['Flour', 'Meat', 'Onions', 'Oil', 'Spices'] },
      ja: { name: 'チェブレキ', description: '具材入りのカリカリ揚げペイストリー。', ingredients: ['小麦粉', '肉', '玉ねぎ', '油', 'スパイス'] },
      ko: { name: '치부레키', description: '속이 찬 바삭한 튀김 페이스트리.', ingredients: ['밀가루', '고기', '양파', '기름', '향신료'] }
    }
  },


  // DRINKS

  {
    id: 'drink-1',
    category: 'drink',
    price: 2000,
    image: '/imgs/drink/black.png',
    translations: {
      en: { name: 'Black Tea', description: 'Classic black tea served hot.', ingredients: ['Water', 'Black Tea Leaves'] },
      ko: { name: '홍차', description: '따뜻하게 제공되는 클래식한 홍차.', ingredients: ['물', '홍차 잎'] },
      ja: { name: '紅茶', description: 'クラシックなホットブラックティー。', ingredients: ['水', '紅茶の葉'] }
    }
  },
  {
    id: 'drink-2',
    category: 'drink',
    price: 2000,
    image: '/imgs/drink/kuk.png',
    translations: {
      en: { name: 'Green Tea', description: 'Refreshing green tea with earthy flavor.', ingredients: ['Water', 'Green Tea Leaves'] },
      ko: { name: '녹차', description: '상쾌한 맛의 녹차.', ingredients: ['물', '녹차 잎'] },
      ja: { name: '緑茶', description: '爽やかな風味の緑茶。', ingredients: ['水', '緑茶の葉'] }
    }
  },
  {
    id: 'drink-3',
    category: 'drink',
    price: 2000,
    image: '/imgs/drink/limon.png',
    translations: {
      en: { name: 'Lemon Green Tea', description: 'Green tea infused with fresh lemon flavor.', ingredients: ['Water', 'Green Tea Leaves', 'Lemon'] },
      ko: { name: '레몬 녹차', description: '상큼한 레몬 향이 더해진 녹차.', ingredients: ['물', '녹차 잎', '레몬'] },
      ja: { name: 'レモン緑茶', description: 'レモンの風味が加わった緑茶。', ingredients: ['水', '緑茶の葉', 'レモン'] }
    }
  },
  {
    id: 'drink-4',
    category: 'drink',
    price: 3000,
    image: '/imgs/drink/ayran.png',
    translations: {
      en: { name: 'Ayran', description: 'Cold yogurt-based savory drink.', ingredients: ['Yogurt', 'Water', 'Salt'] },
      ko: { name: '아이란', description: '요거트를 기반으로 한 짭짤한 음료.', ingredients: ['요거트', '물', '소금'] },
      ja: { name: 'アイラン', description: 'ヨーグルトベースの塩味ドリンク。', ingredients: ['ヨーグルト', '水', '塩'] }
    }
  },
  {
    id: 'drink-5',
    category: 'drink',
    price: 3000,
    image: '/imgs/drink/kefir.png',
    translations: {
      en: { name: 'Kefir', description: 'Probiotic drink made from fermented milk.', ingredients: ['Milk', 'Kefir Grains'] },
      ko: { name: '케피르', description: '발효 우유로 만든 프로바이오틱 음료.', ingredients: ['우유', '케피르 곡물'] },
      ja: { name: 'ケフィア', description: '発酵乳から作られたプロバイオティクスドリンク。', ingredients: ['牛乳', 'ケフィア粒'] }
    }
  },
  {
    id: 'drink-6',
    category: 'drink',
    price: 2000,
    image: '/imgs/drink/fanta.png',
    translations: {
      en: { name: 'Fanta', description: 'Orange flavored carbonated soft drink.', ingredients: ['Carbonated Water', 'Sugar', 'Natural Orange Flavor'] },
      ko: { name: '환타', description: '오렌지 맛 탄산음료.', ingredients: ['탄산수', '설탕', '오렌지 향'] },
      ja: { name: 'ファンタ', description: 'オレンジ味の炭酸飲料。', ingredients: ['炭酸水', '砂糖', 'オレンジ風味'] }
    }
  },
  {
    id: 'drink-7',
    category: 'drink',
    price: 2000,
    image: '/imgs/drink/sprite.png',
    translations: {
      en: { name: 'Sprite', description: 'Lemon-lime flavored carbonated drink.', ingredients: ['Carbonated Water', 'Sugar', 'Lemon-Lime Flavor'] },
      ko: { name: '사이다', description: '레몬라임 맛의 탄산음료.', ingredients: ['탄산수', '설탕', '레몬라임 향'] },
      ja: { name: 'スプライト', description: 'レモンライム味の炭酸飲料。', ingredients: ['炭酸水', '砂糖', 'レモンライム風味'] }
    }
  },
  {
    id: 'drink-8',
    category: 'drink',
    price: 3000,
    image: '/imgs/drink/mineral.png',
    translations: {
      en: { name: 'Mineral Water', description: 'Refreshing carbonated mineral water.', ingredients: ['Carbonated Mineral Water'] },
      ko: { name: '탄산수', description: '청량한 탄산 미네랄 워터.', ingredients: ['탄산 미네랄 워터'] },
      ja: { name: 'ミネラルウォーター', description: '爽やかな炭酸入りミネラルウォーター。', ingredients: ['炭酸入りミネラルウォーター'] }
    }
  },
  {
    id: 'drink-9',
    category: 'drink',
    price: 4000,
    image: '/imgs/drink/tashkent.png',
    translations: {
      en: { name: 'Tashkent Tea', description: 'Traditional Uzbek black tea with herbs.', ingredients: ['Water', 'Black Tea Leaves', 'Herbs'] },
      ko: { name: '타쉬켄트 차', description: '허브가 첨가된 우즈베키스탄 전통 홍차.', ingredients: ['물', '홍차 잎', '허브'] },
      ja: { name: 'タシケントティー', description: 'ハーブ入りのウズベキスタン伝統紅茶。', ingredients: ['水', '紅茶の葉', 'ハーブ'] }
    }
  },
  {
    id: 'drink-10',
    category: 'drink',
    price: 3000,
    image: '/imgs/drink/yagadamil.png',
    translations: {
      en: { name: 'Fruit Kompot', description: 'Sweet beverage made with mixed fruits.', ingredients: ['Mixed Fruits', 'Water', 'Sugar'] },
      ko: { name: '믹스 과일 주스', description: '다양한 과일로 만든 달콤한 음료.', ingredients: ['혼합 과일', '물', '설탕'] },
      ja: { name: 'フルーツコンポート', description: 'ミックスフルーツで作った甘い飲み物。', ingredients: ['ミックスフルーツ', '水', '砂糖'] }
    }
  },
  {
    id: 'drink-11',
    category: 'drink',
    price: 8000,
    image: '/imgs/drink/orik.png',
    translations: {
      en: { name: 'Dry Fruit Kompot', description: 'Traditional drink brewed with dried fruits.', ingredients: ['Dried Fruits', 'Water', 'Sugar'] },
      ko: { name: '살구 콤포트', description: '말린 과일로 우린 전통 음료.', ingredients: ['건과일', '물', '설탕'] },
      ja: { name: 'ドライフルーツコンポート', description: '乾燥フルーツで煮出した伝統的な飲み物。', ingredients: ['乾燥フルーツ', '水', '砂糖'] }
    }
  },
  {
    id: 'drink-12',
    category: 'drink',
    price: 2000,
    image: '/imgs/drink/cola.png',
    translations: {
      en: { name: 'Coca-Cola', description: 'Popular fizzy cola drink.', ingredients: ['Carbonated Water', 'Sugar', 'Caramel Color', 'Phosphoric Acid', 'Caffeine'] },
      ko: { name: '콜라', description: '인기 있는 탄산 콜라 음료.', ingredients: ['탄산수', '설탕', '카라멜 색소', '인산', '카페인'] },
      ja: { name: 'コカ・コーラ', description: '人気の炭酸コーラ飲料。', ingredients: ['炭酸水', '砂糖', 'カラメル色素', 'リン酸', 'カフェイン'] }
    }
  },
  {
    id: 'drink-13',
    category: 'drink',
    price: 3000,
    image: '/imgs/drink/bigCola.png',
    translations: {
      en: { name: 'Coca-Cola 1.25L', description: 'Large bottle of Coca-Cola for sharing.', ingredients: ['Carbonated Water', 'Sugar', 'Caramel Color', 'Phosphoric Acid', 'Caffeine'] },
      ko: { name: '콜라 1.25L', description: '나눠 마시기 좋은 대용량 콜라.', ingredients: ['탄산수', '설탕', '카라멜 색소', '인산', '카페인'] },
      ja: { name: 'コカ・コーラ 1.25L', description: 'みんなでシェアできる大容量コーラ。', ingredients: ['炭酸水', '砂糖', 'カラメル色素', 'リン酸', 'カフェイン'] }
    }
  },
  {
    id: 'drink-14',
    category: 'drink',
    price: 3000,
    image: '/imgs/drink/coffe.jpeg',
    translations: {
      en: { name: 'Coffee', description: 'Freshly brewed hot coffee.', ingredients: ['Water', 'Ground Coffee Beans'] },
      ko: { name: '커피', description: '갓 내린 따뜻한 커피.', ingredients: ['물', '원두'] },
      ja: { name: 'コーヒー', description: '挽きたてのホットコーヒー。', ingredients: ['水', '挽いたコーヒー豆'] }
    }
  },
  {
    id: 'drink-15',
    category: 'drink',
    price: 3000,
    image: '/imgs/drink/latte.jpeg',
    translations: {
      en: { name: 'Latte Coffee', description: 'Hot espresso with steamed milk.', ingredients: ['Espresso', 'Steamed Milk'] },
      ko: { name: '라떼 커피', description: '스팀 밀크를 더한 따뜻한 에스프레소.', ingredients: ['에스프레소', '스팀 밀크'] },
      ja: { name: 'ラテコーヒー', description: 'スチームミルクを加えたホットエスプレッソ。', ingredients: ['エスプレッソ', 'スチームミルク'] }
    }
  },
  {
    id: 'drink-16',
    category: 'drink',
    price: 5000,
    image: '/imgs/drink/malina.png',
    translations: {
      en: { name: 'Mint Raspberry Tea', description: 'Herbal tea with mint and raspberry.', ingredients: ['Water', 'Mint Leaves', 'Raspberries'] },
      ko: { name: '민트 라즈베리 차', description: '민트와 라즈베리가 어우러진 허브티.', ingredients: ['물', '민트 잎', '라즈베리'] },
      ja: { name: 'ミントラズベリーティー', description: 'ミントとラズベリーのハーブティー。', ingredients: ['水', 'ミントの葉', 'ラズベリー'] }
    }
  }
];

// Add categories export
export const categories: CategoryInfo[] = [
  {
    id: 'soup',
    translations: {
      en: { name: 'Soups' },
      ja: { name: 'スープ' },
      ko: { name: '수프' }
    }
  },
  {
    id: 'main',
    translations: {
      en: { name: 'Main Courses' },
      ja: { name: 'メインコース' },
      ko: { name: '메인 요리' }
    }
  },
  {
    id: 'shashlik',
    translations: {
      en: { name: 'Shashlik' },
      ja: { name: 'シャシリク' },
      ko: { name: '샤슐릭' }
    }
  },
  {
    id: 'salad',
    translations: {
      en: { name: 'Salads' },
      ja: { name: 'サラダ' },
      ko: { name: '샐러드' }
    }
  },
  {
    id: 'dessert',
    translations: {
      en: { name: 'Desserts' },
      ja: { name: 'デザート' },
      ko: { name: '디저트' }
    }
  },
  {
    id: 'bread',
    translations: {
      en: { name: 'Bread' },
      ja: { name: 'パン' },
      ko: { name: '빵' }
    }
  },
  {
    id: 'drink',
    translations: {
      en: { name: 'Drinks' },
      ja: { name: '飲み物' },
      ko: { name: '음료' }
    }
  }
];

// Translator texts
export const translatorTexts = {
  en: {
    search: 'Search Menu',
    filterByCategory: 'Filter by category',
    all: 'All',
    priceLabel: 'Price',
    currencySymbol: '₩',
    restaurantName: 'Grand Samarkand Restaurant',
    restaurantTagline: 'Authentic Central Asian Cuisine',
    address: '10 Eulji-ro 44-gil, Jung District, Seoul, South Korea',
    phone: '+821041775778',
    languageSelector: 'Language',
    english: 'English',
    japanese: '日本語',
    korean: '한국어',
    copyright: '© 2025 Grand Samarkand Restaurant. All rights reserved.',
    viewMenu: 'View Menu',
    viewGallery: 'View Gallery',
    photoGallery: 'Our Restaurant Gallery',
    videoGallery: 'Watch Our Videos',
    watchVideo: 'Watch Video',
    restaurantInterior: 'Restaurant Interior',
    traditionalSetting: 'Traditional Setting',
    chefPreparingFood: 'Chef Preparing Food',
    privateDining: 'Private Dining Area',
    traditionalDecoration: 'Traditional Decoration',
    openingHours: 'Opening Hours',
    weekdays: 'Monday - Friday',
    weekends: 'Saturday - Sunday',
    // Detail page translations
    itemNotFound: 'Item Not Found',
    itemNotFoundDescription: 'Sorry, the menu item you are looking for does not exist.',
    backToMenu: 'Back to Menu',
    description: 'Description',
    ingredients: 'Ingredients',
    nutritionalInfo: 'Nutritional Information',
    calories: 'Calories',
    protein: 'Protein',
    carbs: 'Carbohydrates',
    fats: 'Fats',
    youMightAlsoLike: 'You might also like',
    categories: {
      soup: 'Soup',
      main: 'Main Dish',
      shashlik: 'Shashlik',
      salad: 'Salad',
      dessert: 'Dessert',
      bread: 'Bread',
      drink: 'Drink'
    }
  },
  ja: {
    search: 'メニュー検索',
    filterByCategory: 'カテゴリでフィルター',
    all: 'すべて',
    priceLabel: '価格',
    currencySymbol: '₩',
    restaurantName: 'グランド・サマルカンド',
    restaurantTagline: '本格的な中央アジア料理',
    address: 'ソウル特別市中区乙支路44キル10番地',
    phone: '+821041775778',
    languageSelector: '言語',
    english: 'English',
    japanese: '日本語',
    korean: '한국어',
    copyright: '© 2025 サマルカンドレストラン. 全著作権所有。',
    viewMenu: 'メニューを見る',
    viewGallery: 'ギャラリーを見る',
    photoGallery: '当レストランのギャラリー',
    videoGallery: '動画を見る',
    watchVideo: '動画を見る',
    restaurantInterior: 'レストラン内装',
    traditionalSetting: '伝統的な設定',
    chefPreparingFood: 'シェフの料理風景',
    privateDining: 'プライベートダイニング',
    traditionalDecoration: '伝統的な装飾',
    openingHours: '営業時間',
    weekdays: '月曜日〜金曜日',
    weekends: '土曜日〜日曜日',
    // Detail page translations
    itemNotFound: '商品が見つかりません',
    itemNotFoundDescription: '申し訳ありませんが、お探しのメニュー項目は存在しません。',
    backToMenu: 'メニューに戻る',
    description: '説明',
    ingredients: '材料',
    nutritionalInfo: '栄養情報',
    calories: 'カロリー',
    protein: 'タンパク質',
    carbs: '炭水化物',
    fats: '脂肪',
    youMightAlsoLike: 'おすすめ',
    categories: {
      soup: 'スープ',
      main: 'メイン',
      shashlik: 'シャシリク',
      salad: 'サラダ',
      dessert: 'デザート',
      bread: 'パン',
      drink: 'ドリンク'
    }
  },
  ko: {
    search: '메뉴 검색',
    filterByCategory: '카테고리별 필터',
    all: '전체',
    priceLabel: '가격',
    currencySymbol: '₩',
    restaurantName: '그랜드 사마르칸트 레스토랑',
    restaurantTagline: '정통 중앙아시아 요리',
    address: '서울특별시 중구 을지로44길 10',
    phone: '+821041775778',
    languageSelector: '언어',
    english: 'English',
    japanese: '日本語',
    korean: '한국어',
    copyright: '© 2025 사마르칸트 레스토랑. 모든 권리 보유.',
    viewMenu: '메뉴 보기',
    viewGallery: '갤러리 보기',
    photoGallery: '레스토랑 갤러리',
    videoGallery: '동영상을 시청하세요',
    watchVideo: '동영상 보기',
    restaurantInterior: '레스토랑 내부',
    traditionalSetting: '전통적인 세팅',
    chefPreparingFood: '요리사의 음식 준비',
    privateDining: '개인 다이닝 공간',
    traditionalDecoration: '전통 장식',
    openingHours: '영업 시간',
    weekdays: '월요일 - 금요일',
    weekends: '토요일 - 일요일',
    // Detail page translations
    itemNotFound: '항목을 찾을 수 없음',
    itemNotFoundDescription: '죄송합니다. 찾고 계신 메뉴 항목이 존재하지 않습니다.',
    backToMenu: '메뉴로 돌아가기',
    description: '설명',
    ingredients: '재료',
    nutritionalInfo: '영양 정보',
    calories: '칼로리',
    protein: '단백질',
    carbs: '탄수화물',
    fats: '지방',
    youMightAlsoLike: '함께 보면 좋은 메뉴',
    categories: {
      soup: '수프',
      main: '메인 요리',
      shashlik: '샤슐릭',
      salad: '샐러드',
      dessert: '디저트',
      bread: '빵',
      drink: '음료'
    }
  }
};