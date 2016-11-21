#sudo ls -R /vagrant/debug | grep -v 'server.log' | xargs rm -rf; 
sudo fis3 release fedev -cwd /vagrant/debug/.fis3-tmp/www/;
