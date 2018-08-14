## REACTOGRAPHY
Today's sprint leaves a lot of room for you to be creative.

#### THE TASK
We'll be looking at using data from a third party API. Your task is to create a React-based interface to present this data in an interactive and engaging way. What you display and how you display it is entirely up to you, but your app must allow users to interact with your data visualisation in some way.

For example if you were displaying a heatmap for earthquake data, the user might choose to show only data for a certain location, and then they may choose to show only events between January and May 2018. The interface would alter the data visualisation to match what the user had chosen.

The first step is to decide on which API you will use for this project. We recommend using one from the following list as they are fairly easy to get started with. Stray at your own risk!

#### CHOOSE YOUR API
Pick one of the following APIs as your main source of data:
- [UK Police Data](https://data.police.uk/docs/) - Policing & crime data in the UK
- [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/fdsnws/event/1/) - Earthquakes and stuff
- [BikeWise](https://www.bikewise.org/documentation/api_v2) - Bike crashes, hazards and thefts
- [Open Weather Map](https://openweathermap.org/api) - Current and forecast weather accross the globe
- [TicketMaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) - Events
- [Google books](https://developers.google.com/books/docs/overview) - Information on Books
- [NASA](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh) - Meteorite landings

Once you have chosen your API you should spend a little time planning.
* [] Draw out your interface
* [] Choose which pieces of the interface can be separated into components
* [] Draw out the tree structure for your components
* [] Decide which pieces of state each component will need and get a rough idea of where this state will sit on your tree
* [] Design your state so you keep it to a minimum. Don't repeat yourself!
* [] Ensure state is high enough it can be shared by necessary components, but as low as possible to avoid passing it unnecessarily.

#### Visualisation
We encourage you to make good use of data visualisation packages such as [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) or [react-google-charts](https://www.npmjs.com/package/react-google-charts)
These are fairly customisable and save you from re-inventing the wheel when it comes to creating charts.

Some of the data sets from the APIs above come with coordinates (lat, lon) so it would be cool to use them to visualise your data on a map. [React-Leaflet](https://react-leaflet.js.org/) would be a good place to start.

Don't feel confined to these suggestions. If you come accross something else you'd like to try feel free =]

Note:
If you cd into the root directory of this repo you can run `create-react-app .` to place your new project in here.
