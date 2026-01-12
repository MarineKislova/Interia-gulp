export let configFTP = {
  host: "", //адрес FTP-сервера
  user: "", // Имя пользователя FTP
  password: "", // Пароль пользователя FTP
  parallel: 5, // Number of connections to FTP server (количество одновременных подключений к FTP серверу)
};


// не забываем в path.js указать путь до папки с проектом в FTP в самом внизу