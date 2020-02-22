# Gogopix API v1

Simple API made for gogopix that does a GET request from the subject and wallpaper tables in the postgres database.

## Getting Started

Download or clone files from this repository and install into server instance.  Remember to include all the dependencies within the package.json file.

### Prerequisites:
Node.js, Express, node-postgres (pg)

### Installing

To install dependncies in package.json file:

```
$ npm install express body-parser pg
```

To run express server:

```
$ node server.js
```
### Expected Results (JSON)

#### GET /subjects

```
[
    {
        "ID": 1,
        "sub_Name": "Today Only",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/TODAYONLY3.jpg",
        "sub_Order": 1,
        "Wallpapers_Count": 0,
        "img_s3_key": "TODAYONLY3.jpg"
    },
    {
        "ID": 2,
        "sub_Name": "Featured",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/FEATURED-KLARENS-KHALID-FINAL.jpg",
        "sub_Order": 2,
        "Wallpapers_Count": 0,
        "img_s3_key": "FEATURED-KLARENS-KHALID-FINAL.jpg"
    },
    {
        "ID": 3,
        "sub_Name": "Rappers",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/RAPPERS.jpg",
        "sub_Order": 3,
        "Wallpapers_Count": 0,
        "img_s3_key": "RAPPERS.jpg"
    },
    {
        "ID": 4,
        "sub_Name": "Bands",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/BANDSFINAL.jpg",
        "sub_Order": 5,
        "Wallpapers_Count": 0,
        "img_s3_key": "BANDSFINAL.jpg"
    },
    {
        "ID": 5,
        "sub_Name": "Fashion Drip",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/FINALFASHIONDRIP.jpg",
        "sub_Order": 6,
        "Wallpapers_Count": 0,
        "img_s3_key": "FINALFASHIONDRIP.jpg"
    },
    {
        "ID": 6,
        "sub_Name": "Love",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/LOVE.jpg",
        "sub_Order": 7,
        "Wallpapers_Count": 0,
        "img_s3_key": "LOVE.jpg"
    },
    {
        "ID": 10,
        "sub_Name": "High Time",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/HIGH+TIME.jpg",
        "sub_Order": 10,
        "Wallpapers_Count": 0,
        "img_s3_key": "HIGH TIME.jpg"
    },
    {
        "ID": 17,
        "sub_Name": "Zen",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/ZEN.jpg",
        "sub_Order": 9,
        "Wallpapers_Count": 0,
        "img_s3_key": "ZEN.jpg"
    },
    {
        "ID": 18,
        "sub_Name": "Devil’s Corner",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/DEVILSCORNERFINAL.jpg",
        "sub_Order": 12,
        "Wallpapers_Count": 0,
        "img_s3_key": "DEVILSCORNERFINAL.jpg"
    },
    {
        "ID": 22,
        "sub_Name": "3D Art",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/3D+ART.jpg",
        "sub_Order": 8,
        "Wallpapers_Count": 0,
        "img_s3_key": "3D ART.jpg"
    },
    {
        "ID": 23,
        "sub_Name": "Abstract",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/ABSTRACT.jpg",
        "sub_Order": 11,
        "Wallpapers_Count": 0,
        "img_s3_key": "ABSTRACT.jpg"
    },
    {
        "ID": 25,
        "sub_Name": "Singers",
        "Image_URL": "https://s3-us-west-2.amazonaws.com/subjects.gogopix.content/FINALSINGERSBILLIE.jpg",
        "sub_Order": 4,
        "Wallpapers_Count": 0,
        "img_s3_key": "FINALSINGERSBILLIE.jpg"
    }
]

```

#### GET /wallpapers

```
[
    {
        "nid": 1,
        "s_name": "Dirty Ribbon - BEEPLE",
        "s_thumbnail_url": "https://s3-us-west-2.amazonaws.com/wallpapers.thumbnails.gogopix.co/BEEPLE+CRAP+-+DIRTY+RIBBON+THUMBNAIL.png",
        "s_wallpaper_url": "https://s3-us-west-2.amazonaws.com/wallpapers.files.gogopix.co/BEEPLE+CRAP+-+Dirty+Ribbon.mp4",
        "s_thumb_s3_key": "BEEPLE CRAP - DIRTY RIBBON THUMBNAIL.png",
        "s_wallp_s3_key": "BEEPLE CRAP - Dirty Ribbon.mp4",
        "b_is_premium": true,
        "b_is_active": true,
        "source": null,
        "ID": 22
    },
    {
        "nid": 1,
        "s_name": "Dirty Ribbon - BEEPLE",
        "s_thumbnail_url": "https://s3-us-west-2.amazonaws.com/wallpapers.thumbnails.gogopix.co/BEEPLE+CRAP+-+DIRTY+RIBBON+THUMBNAIL.png",
        "s_wallpaper_url": "https://s3-us-west-2.amazonaws.com/wallpapers.files.gogopix.co/BEEPLE+CRAP+-+Dirty+Ribbon.mp4",
        "s_thumb_s3_key": "BEEPLE CRAP - DIRTY RIBBON THUMBNAIL.png",
        "s_wallp_s3_key": "BEEPLE CRAP - Dirty Ribbon.mp4",
        "b_is_premium": true,
        "b_is_active": true,
        "source": null,
        "ID": 10
    },
    {
        "nid": 1,
        "s_name": "Dirty Ribbon - BEEPLE",
        "s_thumbnail_url": "https://s3-us-west-2.amazonaws.com/wallpapers.thumbnails.gogopix.co/BEEPLE+CRAP+-+DIRTY+RIBBON+THUMBNAIL.png",
        "s_wallpaper_url": "https://s3-us-west-2.amazonaws.com/wallpapers.files.gogopix.co/BEEPLE+CRAP+-+Dirty+Ribbon.mp4",
        "s_thumb_s3_key": "BEEPLE CRAP - DIRTY RIBBON THUMBNAIL.png",
        "s_wallp_s3_key": "BEEPLE CRAP - Dirty Ribbon.mp4",
        "b_is_premium": true,
        "b_is_active": true,
        "source": null,
        "ID": 23
    },
    {
        "nid": 2,
        "s_name": "T Hawk - BEEPLE",
        "s_thumbnail_url": "https://s3-us-west-2.amazonaws.com/wallpapers.thumbnails.gogopix.co/BEEPLE+CRAP+-+T+HAWK+THUMBNAIL.png",
        "s_wallpaper_url": "https://s3-us-west-2.amazonaws.com/wallpapers.files.gogopix.co/BEEPLE+CRAP+-+T+Hawk.mp4",
        "s_thumb_s3_key": "BEEPLE CRAP - T HAWK THUMBNAIL.png",
        "s_wallp_s3_key": "BEEPLE CRAP - T Hawk.mp4",
        "b_is_premium": false,
        "b_is_active": true,
        "source": null,
        "ID": 22
    }
]
```

## Built With

* [Node.js](https://nodejs.org/en/) - Runtime Enviroment
* [express](https://expressjs.com/) - Web Framework Used
* [npm](https://www.npmjs.com/) - Dependency Management
* [AWS-RDS](https://aws.amazon.com/rds/) - Relational Database servicing



