from php:8.3-apache

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

run apt update 
run apt install git -y 

RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

EXPOSE 8082
Run sed -i 's/80/8082/g' /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf 

run service apache2 restart 

workdir /var/www/html
#run composer update 

cmd ["php" , "artisan" , "serve" , "--host=0.0.0.0" , "--port=8082"]
