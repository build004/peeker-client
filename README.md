# peeker-client

## Quick Start

1.  Clone this repo using `git clone https://github.com/build004/peeker-client.git`
2.  Move to the directory: `cd peeker-client`
3.  Run `npm i` or `yarn install` in order to install dependencies.
4.  Run `npm run android` or `yarn run android` to open your app on a connected Android device or emulator.
    * If you have `ENOSPC` errors on Linux, Run
      `sudo sysctl -w fs.inotify.max_user_instances=1024` and
      `sudo sysctl -w fs.inotify.max_user_watches=12288` both.
5.  Download [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) app on the Android device. More information for **Expo** is here: [_https://expo.io/_](https://expo.io/)
6.  Point the **Expo** app to QR code with the instruction at the terminal or Enter the indicated address in the **Expo** app's search bar. Android device will need to be **on the same local network** as this computer!
7.  Of course, it is available to work on the Android Emulator like [Genymotion](https://www.genymotion.com/) .
