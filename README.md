# Bird Call App Proposal
===
## Project Description
In my app, users will be able to experiences bird sounds from around the world. Users will be able to select a certain country and will be able to listen to a (short) field recording of a bird from that country. 

## Wireframe

===

### Home
![Home-Screen](Home.png "Home")

### Bird Details
![Bird-Details](Details.png "Details")

===

## MVP User Stories

- As a user, I  can click on "Birdy" in the navbar and it will always return to home screen.
- As a user, I should see cards on the home screen.
- As a user, I can click on a card and it loads a new page. 
- As a user, that new page will show the bird's name, country of origin, and a soundfile. 
- As a user, I can click play on the soundfile and hear a bird sound. 

### Post MVP Stretch Goals

- As a user, I will see a carousel of bird images on the home page.
- As a user, I can click on a dropdown box on the home page and select from various countries. 
- As a user, I will see a collection of different bird sounds after selecting a country. 
- As a user, I will also see a corresponding image of each bird.

=== 

## API

[Bird Sound (Brazil) API](https://xeno-canto.org/api/2/recordings?query=cnt:brazil)

**Bird Call Response**

```
{ 
    "recordings": [
{
"id": "510934",
"gen": "Rhea",
"sp": "americana",
"ssp": "",
"en": "Greater Rhea",
"rec": "GABRIEL LEITE",
"cnt": "Brazil",
"loc": "Barra do Quaraí, Rio Grande do Sul",
"lat": "-30.2037",
"lng": "-57.5145",
"alt": "50",
"type": "adult, call",
"url": "//xeno-canto.org/510934",
"file": "https://xeno-canto.org/510934/download",
"file-name": "XC510934-Rhea americana_espinilho_1241.mp3",
"sono": {
"small": "//xeno-canto.org/sounds/uploaded/TGBFXDVERJ/ffts/XC510934-small.png",
"med": "//xeno-canto.org/sounds/uploaded/TGBFXDVERJ/ffts/XC510934-med.png",
"large": "//xeno-canto.org/sounds/uploaded/TGBFXDVERJ/ffts/XC510934-large.png",
"full": "//xeno-canto.org/sounds/uploaded/TGBFXDVERJ/ffts/XC510934-full.png"
},
"lic": "//creativecommons.org/licenses/by-nc-sa/4.0/",
"q": "A",
"length": "0:04",
"time": "07:00",
"date": "2019-11-25",
"uploaded": "2019-12-07",
"also": [
""
],
"rmk": "",
"bird-seen": "no",
"playback-used": "no"
},
{
"id": "314181",
"gen": "Rhea",
"sp": "americana",
"ssp": "",
"en": "Greater Rhea",
"rec": "Rafael Martos Martins",
"cnt": "Brazil",
"loc": "Uberaba, Minas Gerais",
"lat": "-19.2797",
"lng": "-48.0278",
"alt": "950",
"type": "song",
"url": "//xeno-canto.org/314181",
"file": "https://xeno-canto.org/314181/download",
"file-name": "XC314181-Rhea americana_0630.mp3",
"sono": {
"small": "//xeno-canto.org/sounds/uploaded/VXDVESQDET/ffts/XC314181-small.png",
"med": "//xeno-canto.org/sounds/uploaded/VXDVESQDET/ffts/XC314181-med.png",
"large": "//xeno-canto.org/sounds/uploaded/VXDVESQDET/ffts/XC314181-large.png",
"full": "//xeno-canto.org/sounds/uploaded/VXDVESQDET/ffts/XC314181-full.png"
},
"lic": "//creativecommons.org/licenses/by-nc-sa/4.0/",
"q": "A",
"length": "0:02",
"time": "07:14",
"date": "2016-04-23",
"uploaded": "2016-04-29",
"also": [
"Cariama cristata"
],
"rmk": "",
"bird-seen": "no",
"playback-used": "no"
},
{
"id": "229053",
"gen": "Rhea",
"sp": "americana",
"ssp": "",
"en": "Greater Rhea",
"rec": "Peter Boesman",
"cnt": "Brazil",
"loc": "Chapada dos Guimaraes, Mato Grosso",
"lat": "-15.3333333333",
"lng": "-55.8333333333",
"alt": "",
"type": "call",
"url": "//xeno-canto.org/229053",
"file": "https://xeno-canto.org/229053/download",
"file-name": "XC229053-Greater Rhea B 3.mp3",
"sono": {
"small": "//xeno-canto.org/sounds/uploaded/OOECIWCSWV/ffts/XC229053-small.png",
"med": "//xeno-canto.org/sounds/uploaded/OOECIWCSWV/ffts/XC229053-med.png",
"large": "//xeno-canto.org/sounds/uploaded/OOECIWCSWV/ffts/XC229053-large.png",
"full": "//xeno-canto.org/sounds/uploaded/OOECIWCSWV/ffts/XC229053-full.png"
},
"lic": "//creativecommons.org/licenses/by-nc-nd/4.0/",
"q": "A",
"length": "0:16",
"time": "07:15",
"date": "2005-07-20",
"uploaded": "2015-03-23",
"also": [
""
],
"rmk": "ID certainty 95%. (Archiv. tape 371 side B track 33 seq. A)",
"bird-seen": "unknown",
}

}
```
=== 

## Component Hierarchy

![Component-Hierarchy](Components.png "Components")

