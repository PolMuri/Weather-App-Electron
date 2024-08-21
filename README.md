# Weather App 🌡️☀️⛅☁️🌧️🌨️
Comments in Catalan (my native lenguage), code in English.

This is a desktop applicatio made with electron reusing the code of my Weather Web Wpp to view the weather in your current location through geolocation, real-time weather anywhere in the world through name search, and a 5-day weather forecast. It is designed to be used on Linux systems and is distributed as an .AppImage file for easy installation.

## Prerequisites
Before getting started, make sure you have the following software installed on your system:

## Installing Node.js
Download and install Node.js from the official website. You can also install Node.js using a package manager like apt (for Ubuntu/Debian):
``
sudo apt update
sudo apt install -y nodejs npm
``

Verify the installation:
``
node -v
npm -v
``

These commands should return the installed version of Node.js and npm, respectively.

## Installing Electron
Electron is installed as a development dependency via npm. After cloning the repository, you can install it with the following commands:

Install Electron and project dependencies:
``
npm install electron --save-dev
npm install
``

This command will install Electron according to the version specified in the package.json file.

## Installation

Follow these steps to set up the application on your system:

Clone this repository or download the source code.
``
git clone https://github.com/your_username/weather-app-pol.git
cd weather-app-pol
``

Install dependencies:
``
npm install
``

Run the application in development mode:
``
npm start
``
This will open the application in an Electron window, allowing you to see your weather web app in a desktop format.

## Building the Desktop Version
To generate the packaged version of the application (an .AppImage file for Linux), follow these steps:

Run the build script:
````
npm run build

> weather-app@1.0.0 build
> electron-builder

  • electron-builder  version=24.13.3 os=6.8.0-40-generic
  • loaded configuration  file=package.json ("build" field)
  • writing effective config  file=dist/builder-effective-config.yaml
  • packaging       platform=linux arch=x64 electron=32.0.0 appOutDir=dist/linux-unpacked
  • building        target=AppImage arch=x64 file=dist/Weather App-1.0.0.AppImage
````
This process will create the dist directory, where you will find the Weather App Pol-1.0.0.AppImage file:

![WhatsApp Image 2024-08-21 at 13 57 26](https://github.com/user-attachments/assets/c91f8a45-c70e-43c0-8009-3f99db852e74)


## Linux app -> AppImage:

The .AppImage file is a standalone format that can be executed directly on most Linux distributions. Simply right-click the file, grant execution permissions, and run the application.

![WhatsApp Image 2024-08-20 at 18 19 00](https://github.com/user-attachments/assets/b87e4387-f68d-4319-9089-5956db831e75)


# Some examples in catalan, english and spanish, the three supported lenguages:

  -Clear Sky (Catalan):

![WhatsApp Image 2024-08-20 at 18 22 29](https://github.com/user-attachments/assets/d462c814-d457-4760-add4-8f472ad6b9bd)


  -Rain (English):

  ![WhatsApp Image 2024-08-20 at 18 24 16](https://github.com/user-attachments/assets/7f92ad16-7730-4a61-aeb8-3e3f431ac9f2)

  -Scattered clouds (Spanish)

  ![WhatsApp Image 2024-08-20 at 18 25 19](https://github.com/user-attachments/assets/ed489d7b-60d6-4405-bd09-04b52df6abf7)

## In May 2024, we have updated our integration with the OpenWeatherMap API from version One Call API 2.5 to version One Call API 3.0.

This update brings along a series of significant improvements that benefit both our platform and our users

In addition to the update to version 3.0 of the OpenWeatherMap API, we have also incorporated the OpenWeatherMap Geocoding API into our platform. This API allows us to convert geographical addresses into geographical coordinates (latitude and longitude) and vice versa, expanding the geolocation capabilities of our platform and enhancing the accuracy of our location-related services.




  


