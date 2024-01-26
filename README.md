# gerald-takehome
Take-home challenge for Gerald

## End result
![](https://github.com/alanludin/gerald-takehome/blob/main/assets/Presentation.gif)

## Technical decisions
- Expo was used to speed up development, as well as expo-router for navigation since it not only reduces the amount of boilerplate code that react-navigation typically requires, leveraging file based routing, but also futureproofs the app with the ability to easily integrate deep linking and universal links. It also allows the app to work for web with minimal changes if needed. For animations I chose react-native-reanimated since it provides the most performant animations, and it's also full of great helpers and methods that allowed me to fine tune the animations to my liking.

## Challenges encountered
- The biggest challenge for me was to sync all the animations, as well as maintain the correct component hierarchy while also keeping the code clean and readable. For example, I wanted to make the animations dependant on the progress of the opening of the drawer, using the useDrawerProgress hook, which worked for the rotation and translation of the tab navigator, but when I tried to do the same for the translation on the Y axis that both the drawer and the content should make, revealing the white background behind the status bar, the useDrawerProgress hook was not available since it's not technically inside the context of the drawer anymore, so I had to find a workaround using the state of the drawer instead, and timing the animations with the withTiming helper that reanimated provides.
