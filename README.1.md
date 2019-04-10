# Digital Passport Mobile App

## Genral Setup For Development

Clone this repository, install dependencies and start application:

```bash
npm install -g react-native-cli@2.0.1  # Install only if you don't have react native CLI installed globally already.
git clone git@gitlab.dominode.com:Hypatia-Technologies/digital-passport-mobile-app.git
cd digital-passport-mobile-app
npm install
```
Create a folder called `env` in the project root and add the project's environment variables within `env/env.js`

```bash
npm start # For development.
```

Dependencies have been installed correctly if you get this after running the above: `Your app is running at...`

### Detach From ExpoKit

In order to install native dependencies and run the application on an emulator/simulator, you need to detach the application from ExpoKit.

```bash
npm run expo -- login # Use Dominode Expo account login credentials.
npm run expo -- eject
brew install git-lfs # Homebrew should already be installed.
git lfs install
react-native link blinkid-react-native
react-native link react-native-touch-id
```

When prompted, select: `ExpoKit: I'll create or log in with an Expo account to use React Native and the Expo SDK.`


## Setup For iOS Development

1. Open `digital-passport-mobile-app/ios` in xcode and select `Hypatia Technologies INC` as team within the project's general settings.

2. Add faceID permissions into `info.plist`:
```
<key>NSFaceIDUsageDescription</key>
<string>Enabling Face ID allows you quick and secure access to your account.</string>
```

3. Run the commands below in a terminal to install the application on an iOS simulator:

```bash
cd ios # From project root.
pod install
cd ..
react-native run-ios
```

### Deployment using fastlane

1. Install fastlane (if not already installed): 

```bash
xcode-select --install

# Using RubyGems
sudo gem install fastlane -NV

# Alternatively using Homebrew
brew cask install fastlane

fastlane init # Run within `digital-passport-mobile-app/ios`
```

2. 
a. Replace the files within `digital-passport-mobile-app/ios/fastlane` with those within `digital-passport-mobile-app/samples/fastlane`. Also, replace values where necessary within `Appfile`.
b. Goto the testflight section of [appstoreconnect](https://appstoreconnect.apple.com/) and note the latest version and build number.
c. Setup automating version and build number by going [here](https://developer.apple.com/library/archive/qa/qa1827/_index.html/) and following steps 1 and 2 within the Xcode subheading.

3. Run the command below to deploy a beta build:

```
fastlane beta
```

4. Follow the steps to release the app on testflight:
a. Goto the testflight section of [appstoreconnect](https://appstoreconnect.apple.com/).
b. Navigate to iOS Builds > deployed version (build number).
c. click `Provide Export Compliance Information` > select `No` > click `Start Internal Testing`.


## Setup For Android Development

1. Add microblink maven repository to `digital-passport-mobile-app/android/app/build.gradle`: 
```
allprojects {
  repositories {
    // don't forget to add maven and jcenter if not there already
    mavenLocal()
    jcenter()
    
    // ... other repositories your project needs
    
    maven { url "http://maven.microblink.com" }
  }
}
```

2. Replace the keyword `compile` with `implementation` in files `digital-passport-mobile-app/android/app/build.gradle`,  `digital-passport-mobile-app/node_modules/blinkid-react-native/src/android/build.gradle` and `digital-passport-mobile-app/node_modules/react-native-touch-id/android/build.gradle`

3. Add biometrics permissions into `AndroidManifest.xml`:
```
<uses-permission android:name="android.permission.USE_FINGERPRINT" />
```

4. Within `digital-passport-mobile-app/node_modules/blinkid-react-native/src/android/build.gradle`, replace:
```
implementation "com.facebook.react:react-native:(versionNumber)"
```
with
```
implementation "com.facebook.react:react-native:+"
```

5. Open `digital-passport-mobile-app/android` in a android studio and allow the `gradle sync` process run to completion.

6 Run the following

```bash
react-native run-android # From project root.
```
