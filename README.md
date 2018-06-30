# webpack-simple-slicing
Сборка чисто для верстки, минимум
#### Установка
```sh
$ yarn install
```
#### Разработка
```sh
$ yarn start
```
#### Билд
```sh
$ yarn build
```
#### Проверка на статическом сервере
```sh
$ yarn serve
```
##### Что умеет делать:
  - Берёт html файлы из папки `src/templates` и вставляет в них css и js, для каждого файла создается свой файл в папке `build`
  - Минифицирует картинки, стили, скрипты
  - devserver + browsersync с автоперезагрузкой и hot reload для стилей
  - Sass
