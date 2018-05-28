import { Validators } from '@angular/forms';

export const dbSchema = {
  'title': { name: 'title', keyPath: 'title', options: { unique:true }},
  'lifeForm': { name: 'lifeForm', keyPath: 'lifeForm' },
  'class': { name: 'class', keyPath: 'class' },
  'rootSystem': { name: 'rootSystem', keyPath: 'rootSystem' },
  'sheetType': { name: 'sheetType', keyPath: 'sheetType' },
  'vinationType': { name: 'vinationType', keyPath: 'vinationType' },
  'flowerType': { name: 'flowerType', keyPath: 'flowerType' },
  'fetusType': { name: 'fetusType', keyPath: 'fetusType' },
  'distributeType': { name: 'distributeType', keyPath: 'distributeType' },
  'environmentType': { name: 'environmentType', keyPath: 'environmentType' },
  'usageType': { name: 'usageType', keyPath: 'usageType' },
}

export const validationMap = {
  'title': ['', Validators.required],
  'lifeForm': ['', Validators.required],
  'class': ['', Validators.required],
  'rootSystem': ['', Validators.required],
  'sheetType': ['', Validators.required],
  'vinationType': ['', Validators.required],
  'flowerType': ['', Validators.required],
  'fetusType': ['', Validators.required],
  'distributeType': ['', Validators.required],
  'environmentType': ['', Validators.required],
  'usageType': ['', Validators.required],
}

export const inputs = [
  {
    title: 'видовое название растения',
    name: 'title',
  }
];

export const selects = [
  {
    title: 'жизненная форма',
    name: 'lifeForm',
    values: [
      '-',
      'дерево',
      'кустарник',
      'кустарничек',
      'трава'
    ]
  },
  {
    title: 'класс',
    name: 'class',
    values: [
      '-',
      'однодольные',
      'двудольные'
    ]
  },
  {
    title: 'тип корневой системы',
    name: 'rootSystem',
    values: [
      '-',
      'cтержневая крн си',
      'мочковатая крн си',
      'подземные побеги'
    ]
  },
  {
    title: 'тип листьев',
    name: 'sheetType',
    values: [
      '-',
      'простой',
      'сидячий',
      'сложный'
    ]
  },
  {
    title: 'тип жилкования',
    name: 'vinationType',
    values: [
      '-',
      'сетчатый',
      'дуговой'
    ]
  },
  {
    title: 'тип цветка',
    name: 'flowerType',
    values: [
      '-',
      'одиночный',
      'соцветие'
    ]
  },
  {
    title: 'формула цветка, тип плода',
    name: 'fetusType',
    values: [
      '-',
      'крестоцветные',
      'розоцветные',
      'бобовые',
      'пасленовые',
      'сложноцветные',
      'лилейные',
      'злаковые'
    ]
  },
  {
    title: 'тип распространения',
    name: 'distributeType',
    values: [
      '-',
      'сухие',
      'сочные'
    ]
  },
  {
    title: 'место произрастания',
    name: 'environmentType',
    values: [
      '-',
      'лес',
      'луг',
      'поле',
      'болото'
    ]
  },
  {
    title: 'применяемые человеком',
    name: 'usageType',
    values: [
      '-',
      'пищевое',
      'лекарственное',
      'сорняк', 'кормовое',
      'медонос',
      'хлебные',
      'декоративное'
    ]
  }
];

export const nameMapping = {
  title: 'видовое название растения',
  lifeForm: 'жизненная форма',
  class: 'класс',
  rootSystem: 'тип корневой системы',
  sheetType: 'тип листьев',
  vinationType: 'тип жилкования',
  flowerType: 'тип цветка',
  fetusType: 'формула цветка, тип плода',
  distributeType: 'тип распространения',
  environmentType: 'место произрастания',
  usageType: 'применяемые человеком',
}
