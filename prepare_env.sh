sudo apt-get update
sudo apt-get install node npm
cd ~/websites/my_site
npm install -g bower
bower install
(crontab -l ; echo "@reboot sh ~/websites/my_site/runServer.sh") | sort | uniq | crontab -
echo "You should now reboot the system"
