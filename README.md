## baixar e instalar composer 
baixar
https://getcomposer.org/download/

instalar no cmd digite: 
composer install

## copiar e colar modelo_banco.sql do arquivo /banco

CREATE TABLE transacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('receita', 'despesa') NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(255) NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## no terminal do backend digite

certifique na pasta env. a conexão certa no BD mysql

php artisan migrate

para migrar os dados para o banco mysql





## instalar angular16

## apos fazer todas as açoes acima

## no terminal backend digite

php artisan serve

## no terminal frontend digite

ng serve 
