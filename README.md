# Домашнее задание "Алгоритмы"

Домашнее задание #10 в ШРИ Яндекса 2018.

## Задание "Генератор событий"

Реализовать генератор событий, имеющий следующие методы

- подписка на событие — on
- отписка от события — off
- вызов события — emit

```js
const emitter = {
   on: function(event, handler) {
      // TODO: подписать
   },

   off: function(event, handler) {
      // TODO: отписать
   },

   emit: function(event) {
      // TODO: обработка события
   }
}

const handler = function () {
  // что-то делаем
};

// подписали
emitter.on('event', handler);
// обработали событие
emitter.emit('event');
// отписали
emitter.off('event', handler);
```

А так же оценить сложность получившихся методов.

Дополнительные условия и ограничения:

- Обработчики должны возникать в том порядке, в котором их подписали
- Подписка, отписка и вызов обработчиков должны работать максимально быстро
- Ограничений по дополнительной памяти нет, но чем меньше, тем лучше
- Считаем, что на вход данные подаются хорошие, т.е. event - строка, handler - функция.

## Задание "Саджест"

Есть большой массив названий улиц, и инпут на сайте, в котором эту улицу нужно выбрать. При вводе пользователю предлагается до 10 улиц, в названии которых есть введенная пользователем подстрока без учета регистра (т.е. на ввод "тверская" должно найтись "ул. Тверская").
Нужно реализовать функцию, которая принимает на вход строку input, и возвращает массив найденных улиц (не больше 10).

```js
const roads = [
  'ул. Тверская',
  'ул. Ломоносова',
  'проспект Сахарова'
  // и еще много-много улиц
];

function suggest(input) {
  // поиск улиц
}
```

И оценить сложность получившейся функции.

Дополнительные условия и ограничения:

- Поиск должен работать максимально быстро
- Ограничений по дополнительной памяти нет, но чем меньше, тем лучше
- Считаем, что на вход данные подаются хорошие, input - строка.

## Запуск

```bash
npm i
```

Для тестов:

```bash
npm test
```

Для benchmark-инга:

```bash
npm run bench
```

## Выполнение задания

- Сделал несколько вариантов
- Написал тесты
- Написал тесты becnhmark-инга

### Выполнение задания "Генератор событий"

#### Функция Emitter.on

| Функция | Реализация | Сложность | Becnhmark, ops/sec |
| - | - | - | - |
| `EmitterWithArray.on` | `[]` + `Array.prototype.push` | O(1) | 6,501,344 |
| `EmitterWithBabelArray.on` | `[]` + `Array.prototype.push` | O(1) | 6,059,890 |
| `EmitterWithMap.on` | `new Map()` + `Map.prototype.set` | O(1) | 8,797,473 |
| `EmitterWithObject.on` | `{}` + `=` | O(1) | 802,661 |
| `EmitterWithSet.on` | `new Set()` + `Set.prototype.add` | O(1) | 8,328,306 |

Быстрее: `EmitterWithSet.on`.

#### Функция Emitter.emit

| Функция | Реализация | Сложность | Becnhmark, ops/sec |
| - | - | - | - |
| `EmitterWithArray.emit` | `Array.prototype.forEach` | O(N) | 6,657,536 |
| `EmitterWithBabelArray.emit` | `for...of` + `Array.prototype.values` | O(N) | 28,699,581 |
| `EmitterWithMap.emit` | `for...of` + `Map.prototype.values` | O(N) | 24,500,580 |
| `EmitterWithObject.emit` | `Object.keys` + `Array.prototype.forEach` | O(N) | 4,863,851 |
| `EmitterWithSet.emit` | `for...of` + `Map.prototype.values` | O(N) | 14,325,820 |

Быстрее: `EmitterWithBabelArray.emit`.

#### Функция Emitter.off

| Функция | Реализация | Сложность | Becnhmark, ops/sec |
| - | - | - | - |
| `EmitterWithArray.off` | `Array.prototype.filter` | O(N) | 6,876,560 |
| `EmitterWithBabelArray.off` | `Array.prototype.filter` | O(N) | 6,306,493 |
| `EmitterWithMap.off` | `Map.prototype.delete` | O(1) | 14,658,335 |
| `EmitterWithObject.off` | `delete` | O(1) | 937,753 |
| `EmitterWithSet.off` | `Set.prototype.delete` | O(1) | 16,177,982 |

Быстрее: `EmitterWithSet.off`.

#### Итог задания "Генератор событий"

- Добавиление и удаление обработчиков событий быстрее у реализаций `EmitterWithMap` и `EmitterWithSet`, так как они имеют меньшую сложность, но вот вызов обработчиков быстрее у `EmitterWithBabelArray` (видимо за счет другой работы с памятью или меньшей сложности функции `values`).
- Так как скорость вызова обработчиков у `EmitterWithMap` и `EmitterWithSet` не существенно ниже, чем у `EmitterWithBabelArray`, я выбираю `EmitterWithSet`.

### Выполнение задания "Саджест"

| Функция | Реализация | Сложность* | Becnhmark, ops/sec |
| - | - | - | - |
| `suggestWithFor` | `for` * `for` | O(N*(2M+K)) | 141.325 |
| `suggestWithFor2` | `for` * `for` | O(N*(M+K)) | 126.493 |
| `suggestWithIncludes` | `for` * `String.prototype.includes` | O(N*(2M+K)) | 381.147 |
| `suggestWithIndexOf` | `for` * `String.prototype.inexOf` | O(N*(2M+K)) | 412.873 |
| `suggestWithRegExp` | `for` * (`new RegExp()` + `RegExp.prototype.test`) | O(N*M) | 819.307 |
| `suggestWithSearch` | `for` * `String.prototype.search` | O(N*(2M+K)) | 225.228 |

\* — сложность, без учёта сложности используемых внутри нативных методов.<br>
N — количество элементов в массиве.<br>
M — количество символов в строке массива.<br>
K — количество символов в искомой строке.<br>

#### Итог задания "Саджест"

- Была мысль реализовать KMP и Bitap алгоритмы, но я пока что не очень понимаю, как они работают, а копипастить чужой код не хочется.
- Функция `suggestWithFor2` хоть и имеет ниже сложность, чем у `suggestWithFor`, но на самом деле сложность у неё получается равнозначная ей, так как внутри цикла увеличилось количество операций.
- Самой быстрой вышла функция `suggestWithRegExp` за счёт того, что с помошью `RegExp` можно осуществлять регистронезависимый поиск. Поэтому я выбираю её.п
