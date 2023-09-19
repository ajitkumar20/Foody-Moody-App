import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

// Functional Component
const Title = () => (
  <a href="/">
    <img className="logo" alt="Foody-Moody-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREb9ExSSBTUgiAGr_x2wsay3rapsB0YEzGWw&usqp=CAU" />
  </a>
);


const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    "info": {
      "id": "222663",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Enclave Park",
      "areaName": "Khajpura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "222663",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2300
      },
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-20 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-d353fa58-ecd2-40e1-a666-736decc1d8c1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-enclave-park-khajpura-patna-222663",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "633716",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "cloudinaryImageId": "etld6y9oudk2nwj8ku01",
      "locality": "Baily Road",
      "areaName": "Khajpura",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "633716",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3700
      },
      "parentId": "582",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-19 22:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-d353fa58-ecd2-40e1-a666-736decc1d8c1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-baily-road-khajpura-patna-633716",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "331777",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "healpsfc0yuplmblcraz",
      "locality": "Saguna",
      "areaName": "Khajpura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "331777",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2400
      },
      "parentId": "4961",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-19 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-d353fa58-ecd2-40e1-a666-736decc1d8c1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-saguna-khajpura-patna-331777",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "437296",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Gola road",
      "areaName": "Khajpura",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.7,
      "feeDetails": {
        "restaurantId": "437296",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2300
      },
      "parentId": "721",
      "avgRatingString": "3.7",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-19 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-d353fa58-ecd2-40e1-a666-736decc1d8c1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-gola-road-khajpura-patna-437296",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "677700",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
      "locality": "AG COLONY PO",
      "areaName": "ASHIYANA NAGAR",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "677700",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4600
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4600
      },
      "parentId": "6249",
      "avgRatingString": "4.5",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 7.8,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "7.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-20 00:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-d353fa58-ecd2-40e1-a666-736decc1d8c1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-ag-colony-po-ashiyana-nagar-patna-677700",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "95902",
      "name": "Baskin Robbins - Ice Cream Desserts",
      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
      "locality": "Patna One Mall",
      "areaName": "Kurji",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Ice Cream"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "95902",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4700
      },
      "parentId": "5588",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 7.2,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "7.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-19 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
      "context": "seo-data-d353fa58-ecd2-40e1-a666-736decc1d8c1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-one-mall-kurji-patna-95902",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
];

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) => {
  return (
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

//Props - Properties
const Body = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })
      }
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h4>Footer</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);