## React Native Build Environment ##

Demonstrate build React Native app using flavor/scheme in Android & iOS.
How to run
```
npx react-native run-android --variant=devDebug
npx react-native run-android --variant=stagingDebug
npx react-native run-android --variant=productionDebug

npx react-native run-ios --scheme FlavorDevelopment --configuration DevelopmentDebug
npx react-native run-ios --scheme FlavorStaging --configuration StagingDebug
npx react-native run-ios --scheme FlavorProduction --configuration ProductionDebug
```

#### Screenshot Android ####
| Flavor | Development | Staging | Production |
| :---: | :---: | :---: | :---: |
| ![](https://i.imgur.com/Y5qnoYs.png) | ![](https://i.imgur.com/eLVoch2.png) | ![](https://i.imgur.com/CP3Q0r8.png) | ![](https://i.imgur.com/rFac2AV.png) |

#### Screenshot iOS ####
| Flavor | Development | Staging | Production |
| :---: | :---: | :---: | :---: |
| ![](https://images2.imgbox.com/98/0c/FvGFcQ4M_o.png) | ![](https://images2.imgbox.com/91/dc/BTKb2neI_o.png) | ![](https://images2.imgbox.com/e0/61/T7j9PHyu_o.png) | ![](https://images2.imgbox.com/3d/70/ybwKTfxd_o.png) |

#### List Package ####
- [React Native Device Info](https://github.com/react-native-device-info/react-native-device-info)

#### References ####
- [Logicwind](https://blog.logicwind.com/adding-multiple-target/)
- [Medium](https://medium.com/simform-engineering/how-to-set-up-different-environments-in-react-native-9f7902ebf282)