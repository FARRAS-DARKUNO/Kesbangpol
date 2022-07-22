# HOW TO HOSTING WEBSITE TO SERVER

okay, on this occasion the author will provide a very useful tutorial for hosting a web on a server
The following are the steps in doing it:

1. Sign in with SSH. 
 ```
 ssh userName@ipNumber
 ```
2. Go to the desired server folder.
 ```
 cd <namaFolder>
 ```
3. Cloning the gihub file into the server folder.
 ```
 sudo git clone https://github.com/UserName/NameFile.git
 ```
4. Installing packages or modules from applications or the web
 ```
 sudo npm install
 ```
5. Perform testing by doing runing like "sudo npm start" if the application is npm based
 ```
 sudo npm start
 ```
6. then buld the app (if using react use "sudo npm build" )
 ```
 sudo npm build
 ```   
7. then run the build folder with the command
```
 pm2 serve build/ nomor_of_port --name "like name of project" --spa
```   
8. Make block serve
```
 cd /etc/nginx/conf.d/
```   
9. Running block server
- command to copy an existing block server into a new block server
```
 sudo cp name__of_server_blok name_new_server_blok
``` 
- command to create a new block server manually
```
 sudo nano name_of_server_blok
``` 
- command to rename block server
```
 sudo mv name_of_server_blok_old name_of_server_blok_new
```
- to reload on the block server
```
 sudo systemctl reload nginx
```
- to restart the block server
```
 sudo systemctl restart nginx
```
