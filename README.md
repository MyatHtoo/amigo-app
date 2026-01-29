# Amigo App

A comprehensive travel planning application built with React Native and Expo, designed to help users plan, organize, and manage their trips with ease.

## Create Account, Sign In and log in are used temporarily, no authentication and permanent. 


## 📱 About

Amigo App is a mobile travel companion that helps you:
- Plan your trips with step-by-step guidance
- Get AI-powered travel recommendations
- Track flight and hotel information
- Manage trip itineraries and timelines
- Save and organize multiple travel plans
- View visa requirements and accommodation details

## 🚀 Features

- **Trip Planning**: Multi-step trip creation with detailed customization
- **AI Integration**: Smart travel recommendations and planning assistance
- **Flight & Hotel Search**: Integration with travel APIs for real-time data
- **Visual Timeline**: Interactive itinerary with day-by-day activities
- **User Authentication**: Secure login with Google Sign-In support
- **Dark Mode**: Theme support for comfortable viewing
- **Offline Storage**: Local data persistence with AsyncStorage

## 🛠️ Tech Stack

- **Framework**: React Native (Expo SDK 54)
- **Navigation**: Expo Router 6
- **State Management**: Zustand
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Language**: TypeScript
- **Authentication**: Expo Auth Session + Google Sign-In
- **UI Components**: 
  - React Native Reanimated
  - React Native Gesture Handler
  - React Native Calendars
  - Custom UI components

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/htay-htay-thwe/amigo-app.git
cd amigo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
```bash
# For Android
npm run android

# For iOS
npm run ios

# For Web
npm run web
```

## 📂 Project Structure

```
amigo-app/
├── app/                    # Main application screens
│   ├── screens/           # All screen components
│   ├── DataForm/          # Trip data form components
│   ├── _layout.tsx        # Root layout
│   └── Home.tsx           # Home screen
├── components/            # Reusable components
│   ├── constants/         # API configs and data
│   ├── hooks/             # Custom React hooks
│   ├── navigation/        # Navigation stacks
│   ├── store/             # Zustand state stores
│   ├── ui/                # UI components
│   └── utils/             # Utility functions
├── assets/                # Images and static files
└── android/               # Android native code
```

## 🔑 Key Screens

- **GetStarted**: Onboarding screen
- **Login/Register**: User authentication
- **StepOne - StepSix**: Multi-step trip planning flow
- **TripPlan**: View and edit trip details
- **Save**: Saved trips and plans
- **Settings**: User preferences

## 🌐 API Integration

The app integrates with various travel APIs for:
- Flight information
- Hotel bookings
- YouTube travel guides
- Currency conversion
- Country and visa information

## 📱 Platform Support

- ✅ Android
- ✅ iOS
- ✅ Web

## 👨‍💻 Development

This project uses:
- TypeScript for type safety
- NativeWind for styling
- React Navigation for routing
- Expo's new architecture enabled

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Repository**: [htay-htay-thwe/amigo-app](https://github.com/htay-htay-thwe/amigo-app)

**Version**: 1.0.0

Made with ❤️ using React Native & Expo
