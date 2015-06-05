sudo apt-get update
sudo apt-get install nodejs npm -y
sudo ln -s /usr/bin/nodejs /usr/bin/node
cd ~/websites/my_site
sudo npm install -g bower
sudo npm install -g http-server
bower install --allow-root
(crontab -l ; echo "@reboot sh ~/websites/my_site/runServer.sh") | sort | uniq | crontab -
(crontab -l ; echo "*/30 * * * * sh ~/websites/my_site/runServer.sh") | sort | uniq | crontab -
echo "You should now reboot the system"
