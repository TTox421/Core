# Меню
[Установка проекта](#установка-проекта)
[Установка базы данных](#установка-базы-данных)
[Запуск проекта](#запуск-проекта)

# Gambit V

## Установка проекта

### Скачиваем проект с git
``git clone ссылка``

### Устанавливаем node зависимости.
``npm i``

### Скачиваем altv сервер
[Скачать](https://altv.mp/downloads/)

![Изображение инструкция какие кнопки нажимать. Нужнр js-module, Data files](https://i.ibb.co/4wLF1TG/image.png)
![Изображение инструкция. Перекидываем файлы из архива в корневую папку с проектом gambit-core](https://i.ibb.co/T1jrN61/image.png)

### Создаем недостающие файлы
Путь - `Корневой каталог`

Название файла - `server.toml`

Содержимое:
```
name = "AltV Server"
host = "127.0.0.1"
port = 7000 // Можно указывать любой не занятый
players = 1024
announce = false
gamemode = "RolePlay"
language = "Russian"
debug = true
streamingDistance = 400
migrationDistance = 150
useCdn = false
newSync=true
cdnUrl = "http://127.0.0.1:3000"
connectionQueue = true
modules = [
    "js-module"
]
resources = ["core"]
```

-------------------------------------------------------------------------------------------------------------------------


## Установка базы данных
- Скачиваем нужную нам версию и устанавливаем. [Скачать](https://www.postgresql.org/download/)
- Заходим в панель управления pgadmin4.
- Указываем пользователя и пaроль.
- Создайте таблицу.
- Подключаете в файле `ваш_каталог/source/core/server/database/index.ts`


## Запуск проекта
В консоль напишите команду `npm run dev`


## Development зависимости
//
"@altv/types-client": "^16.2.1",
"@altv/types-natives": "^16.2.0",
"@altv/types-server": "^16.2.0",
"@altv/types-shared": "^16.2.1",
"@altv/types-webview": "^16.2.1",
"@stuyk/altv-reconnect": "^1.5.0",
"@swc/cli": "^0.1.61",
"@swc/core": "^1.3.35",
"@types/nodemailer": "^6.4.6",
"@types/password-hash": "^1.2.21",
"altv-pkg-gambit": "^1.2.2",
"fs-extra": "^10.1.0",
"glob": "^7.2.3",
"nodemon": "^2.0.20",
"npm-run-all": "^4.1.5",
"path": "^0.12.7",
"promisify-child-process": "^4.1.1",
"regenerator-runtime": "^0.13.11",
"rimraf": "^3.0.2",
"tsc-watch": "^4.6.2",
"typeorm": "^0.3.12",
"typescript": "^4.9.3"