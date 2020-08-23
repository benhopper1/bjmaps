# bjmaps


kill -9 $(lsof -t -i:8080)






===============================================












https://medium.com/@gnowland/deploying-lets-encrypt-on-an-amazon-linux-ami-ec2-instance-f8e2e8f4fc1f
this worked


sudo su
yum install python27-devel git
git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
/opt/letsencrypt/letsencrypt-auto --debug




Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/bjmaps.net/fullchain.pem

   Your key file has been saved at:
   /etc/letsencrypt/live/bjmaps.net/privkey.pem
   Your cert will expire on 2020-11-20. To obtain a new or tweaked
   version of this certificate in the future, simply run
   letsencrypt-auto again with the "certonly" option. To
   non-interactively renew *all* of your certificates, run
   "letsencrypt-auto renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le


..............................
make this file:
/etc/letsencrypt/config.ini

echo "rsa-key-size = 4096" >> /etc/letsencrypt/config.ini
echo "email = ohv.recmaps@gmail.com" >> /etc/letsencrypt/config.ini

