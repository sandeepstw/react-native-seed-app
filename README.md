# React Native Seed app

# installation
### After clone or download you need to install npm locally
```bash
//install missing packages using npm install from your project directory path
>npm install
```
![](/images/npmInstall.PNG "Description goes here")


# setup

Open project in Android studio and create virtual device in AVD Manager with following properties

![](/images/virualDevice.PNG "Description goes here")

Before apk build command run you need to Launch created AVD in emulator

![](/images/listEmulator.PNG "Description goes here")

```bash
#### 1. Check/Set system variables properly for JAVA and sdk
#### 2. Also check svn.exe path in Android studio->file->settings->version control->subversion->use command line client
#### Verify that path matches with your svn.exe path.
```

After run following command for build apk
```bash
>react-native run-android
```

![](/images/runAndroid.PNG "Description goes here")

react-native run-android will automatically start Node.js 

![](/images/node.PNG "Description goes here")

When Node.js bundling index.android.js done it will start emulator

![](/images/loademulator.PNG "Description goes here")
![](/images/home.PNG "Description goes here")

# Screens
![](/images/homescreen.PNG "Description goes here")
![](/images/whattodo.PNG "Description goes here")
![](/images/wheretostay.PNG "Description goes here")
![](/images/whattoeat.PNG "Description goes here")
![](/images/navigation.PNG "Description goes here")
![](/images/contact.PNG "Description goes here")


# Here some useful commands

```bash
cd android && gradlew clean 	- for clean project
react-native eject				- for recreates the android and ios folder
react-native cli				- used to generate new project
npm install –g react-native-cli - install react-native globally

```
