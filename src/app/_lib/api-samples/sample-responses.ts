export const getAllProductsResponse = `"status": "success",
"results": 50,
"total": 50,
"data": [
	{
		"id": 1,
		"best_seller": true,
		"in_stock": true,
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category_id": 1,
		"brand": "HP",
		"regular_price": 149.95,
		"sale_price": 129.95,
		"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
		"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
		"specs": [...],
		"features": [...],
		"images": [...]
	},
	{
		"id": 6,
		"best_seller": false,
		"in_stock": true,
		"sku": 6,
		"name": "Flowerbomb Ruby Orchid Eau de Parfum",
		"category_id": 5,
		"brand": "Viktor and Rolf",
		"regular_price": 88.99,
		"sale_price": 88.99,
		"description": "The heart of this luxurious perfume features two accords: the ruby orchid and the red vanilla bean accord, giving the fragrance a unequivocal sensuality, enhanced by the fresh scent of peach, floral, and vanilla fragrance.",
		"slug": "flowerbomb-ruby-orchid-eau-de-parfum",
		"specs": [...],
		"features": [...],
		"images": [...]
	},
	{
		"id": 7,
		"best_seller": false,
		"in_stock": true,
		"sku": 7,
		"name": "World Rug Gallery Modern Large Floral Flowers Indoor Outdoor Rug",
		"category_id": 6,
		"brand": "World Rug Gallery",
		"regular_price": 119.99,
		"sale_price": 47.99,
		"description": "Experience comfort, durability, and versatility with this World Rug Gallery Modern Large Floral Flowers Indoor Outdoor rug.",
		"slug": "world-rug-gallery-modern-large-floral-flowers-indoor-outdoor-rug",
		"specs": [...],
		"features": [...],
		"images": [...]
	},
	... 
]`;

export const getProductResponse = `"status": "success",
"data": {
	"id": 1,
	"best_seller": true,
	"in_stock": true,
	"features": [...],
	"images": [...],
	"sku": 1,
	"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
	"category_id": 1,
	"brand": "HP",
	"regular_price": 149.95,
	"sale_price": 129.95,
	"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
	"specs": [...],
	"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m"
}
`;

export const getAllReviewsResponse = `"status": "success",
"results": 100,
"total": 160,
"data": [
	{
		"recommends": true,
		"incentivized": true,
		"verified": true,
		"review": "The monitor was easy to set up and all the cables were included in the box to connect it. The stand itself is very minimalistic and has height base tilt swivel adjustment. The speakers in it are decent for them being monitor speakers, much better than the previous version. The color accuracy was true straight out of the box and didn't require any adjustments, unlike the previous one I bought from this series. The only down side to the whole monitor are the monitor controls, which are on the back and are hard to reach.",
		"rating": 4,
		"user_id": 9,
		"product_id": 3,
		"created_at": "2023-01-14T20:54:23.463Z",
		"review_id": 199
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "Bought this as a gift for my boyfriend for Christmas and he loved it! Plush came in great condition and has good detailing to it. If you're a fan of the character and series it's a must buy for any plushie collection.",
		"rating": 5,
		"user_id": 11,
		"product_id": 41,
		"created_at": "2023-01-14T02:42:07.449Z",
		"review_id": 186
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "Awesome robe, I didn't want a heavyweight boxers rope. This one is light to wear around the house in all seasons. I work from home and wear this lightweight robe everyday.",
		"rating": 4,
		"user_id": 17,
		"product_id": 34,
		"created_at": "2023-01-06T17:20:46.665Z",
		"review_id": 239
	}
	...
]
`;

export const getReviewResponse = `"status": "success",
"data": {
	"recommends": true,
	"incentivized": false,
	"verified": false,
	"review": "Beautiful chairs, they are very comfy as well! When you first sit in them they are on the tougher side but after a few seconds it softens up. I would highly recommend these chairs. Easy to put together - the packaging was supreme and the shipping was super quick! Highly impressed all around!",
	"rating": 5,
	"user_id": 5,
	"product_id": 49,
	"created_at": "2022-01-19T23:51:51.587Z",
	"review_id": 144
}
`;

export const getProductReviewsResponse = `"status": "success",
"results": 6,
"total": 6,
"data": [
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Exactly what it looked like in the picture. Size and color is perfect. Highly recommend!",
		"rating": 5,
		"user_id": 7,
		"product_id": 7,
		"created_at": "2022-07-23T23:42:46.797Z",
		"review_id": 170
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Nice colors and fits just right! Glad that it's non-slip and that I'll be able to wash it.",
		"rating": 5,
		"user_id": 10,
		"product_id": 7,
		"created_at": "2020-10-13T05:54:49.004Z",
		"review_id": 157
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Non-slip works great! Just wish it were a bit more durable but overall a solid purchase.",
		"rating": 4,
		"user_id": 19,
		"product_id": 7,
		"created_at": "2022-07-21T08:37:29.410Z",
		"review_id": 256
	},
	...
]
`;

export const getCurrentUserReviewsResponse = `"status": "success",
"results": 11,
"data": [
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "Perfect monitor if you Know how to calibrate it! HDR isn't great though. Worth it once you calibrate with RGB color hues & saturation. So good many settings.",
		"rating": 4,
		"user_id": 3,
		"product_id": 3,
		"created_at": "2022-04-19T18:28:52.446Z",
		"review_id": 123
	},
	{
		"recommends": true,
		"incentivized": true,
		"verified": false,
		"review": "I've had this couch for about 2 weeks now. I wanted to try it out and give an honest review. Its so beautiful and durable. I love that the cushion is very comfortable and yet durable. I dont think it will cave in any time soon. Soft velvet fabric used gives a soft feel. It arrived without any damages. It is actually a bigger couch than I initially thought. Do not hesitate to buy this you will not regret it. Assembly is very easy and takes less than 10 minutes. I would recommend this sofa based on looks as well as comfort.",
		"rating": 5,
		"user_id": 3,
		"product_id": 10,
		"created_at": "2022-03-29T17:56:59.705Z",
		"review_id": 118
	},
	{
		"recommends": false,
		"incentivized": false,
		"verified": false,
		"review": "Unfortunately, my microfleece top didn't hold up in the washing machine. After only 2 washes the stitching along a part of the neck opening came undone. I was very disappointed because the top was very soft and comfortable to wear. I expected better from this brand. I ordered the black in one size larger than what I would usually wear based on other reviews re: sizing.",
		"rating": 3,
		"user_id": 3,
		"product_id": 5,
		"created_at": "2022-08-06T21:35:23.677Z",
		"review_id": 114
	},
	...
]
`;

export const createOrUpdateReviewResponse = `"status": "success",
"data": {
	"recommends": true,
	"incentivized": false,
	"verified": false,
	"review": "...",
	"rating": 5,
	"product_id": 1,
	"user_id": 3,
	"created_at": "2020-01-13T20:16:08.347Z",
	"review_id": 114
}
`;

export const getAllBrandsResponse = `"status": "success",
"results": 47,
"data": [
	{ "id": 1, "name": "Abystyle" },
	{ "id": 2, "name": "Adidas" },
	{ "id": 3, "name": "Amazfit" },
	{ "id": 4, "name": "Brooklyn Steel Co" },
	...
]
`;

export const getAllCategoriesResponse = `"status": "success",
"results": 6,
"total": 6,
"data": [
	{
		"id": 1,
		"name": "Electronics",
		"slug": "electronics"
	},
	{
		"id": 2,
		"name": "Men's Clothing",
		"slug": "mens-clothing"
	},
	{
		"id": 3,
		"name": "Women's Clothing",
		"slug": "womens-clothing"
	},
	...
]
`;

export const getAllProductsInCategoryResponse = `"status": "success",
"results": 10,
"total": 10,
"data": [
	{
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category_id": 1,
		"brand": "HP",
		"regular_price": 149.95,
		"sale_price": 129.95,
		"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
		"specs": [...],
		"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
		"id": 1
	},
	{
		"best_seller": false,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 3,
		"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
		"category_id": 1,
		"brand": "Acer",
		"regular_price": 369.99,
		"sale_price": 249.99,
		"description": "Bring on the blitz. Turbo-charged refresh rates will fuel your need for gaming speed with this captivating 27 inch dislay.",
		"specs": [...],
		"slug": "acer-predator-xb3-27-in.-monitor-full-hd",
		"id": 3
	},
	{
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 8,
		"name": "Amazfit GTS 2 Mini Smart Watch",
		"category_id": 1,
		"brand": "Amazfit",
		"regular_price": 99.99,
		"sale_price": 69.99,
		"description": "Get an intelligent little pal to remind you of the incoming calls, text messages, apps, and calendars, alarm clock, weather forecast, and support control the music playback & camera on your smartphone.",
		"specs": [...],
		"slug": "amazfit-gts-2-mini-smart-watch",
		"id": 8
	}
	...
]
`;

export const getCurrentUserCartResponse = `"status": "success",
"results": 1,
"data": [
	{
		"products": [
			{
				"item": {
					"id": 5,
					"sku": 5,
					"name": "Women's Tek Gear Microfleece Crewneck Top",
					"brand": "Tek Gear",
					"regular_price": 24.99,
					"sale_price": 11.99,
					"slug": "women's-tek-gear-microfleece-crewneck-top"
				},
				"quantity": 1
			},
			...
		],
		"created_at": "2020-03-15T09:35:15.369Z",
		"total": 80.17,
		"total_pretty": "$80.17",
		"item_count": 3,
		"id": 4
	}
]
`;

export const addProductToCurrentUserCartResponse = `"status": "success",
"data": {
	"user_id": 3,
	"products": [
		{
			"item": {
				"id": 1,
				"sku": 1,
				"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
				"brand": "HP",
				"regular_price": 149.95,
				"sale_price": 129.95,
				"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m"
			},
			"quantity": 1
		}
	],
	"created_at": "2020-03-03T05:43:30.633Z",
	"total": 129.95,
	"total_pretty": "$129.95",
	"item_count": 1,
	"id": 4
}
`;

export const getCurrentUserPurchaseResponse = `"status": "success",
"data": {
	"paid": true,
	"id": 9,
	"user_id": 7,
	"products": [
		{
			"item": {
				"sku": 28,
				"name": "Good Genes All-In-One Lactic Acid Treatment",
				"brand": "Sunday Riley",
				"regular_price": 142,
				"sale_price": 122,
				"slug": "good-genes-all-in-one-lactic-acid-treatment",
				"id": 28
			},
			"quantity": 1
		},
		{
			"item": {
				"sku": 35,
				"name": "Women's Double-Brested Trench Coat",
				"brand": "Lauren Ralph Lauren",
				"regular_price": 190,
				"sale_price": 93.1,
				"slug": "women's-double-brested-trench-coat",
				"id": 35
			},
			"quantity": 1
		}
	],
	"date": "2021-09-08T19:38:16.496Z",
	"total": 215.1,
	"total_pretty": "$215.10",
	"id": 5
}
`;

export const getCurrentUserPurchasesResponse = `"status": "success",
"results": 1,
"data": [
	{
		"paid": true,
		"user_id": 3,
		"products": [
			{
				"item": {
					"sku": 2,
					"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt",
					"brand": "Susulv MCL",
					"regular_price": 119.99,
					"sale_price": 119.99,
					"slug": "susulv-mcl-men-shirt-men's-large-size-long-sleeve-lapel-zipper-shirt",
					"id": 2
				},
				"quantity": 1
			},
			{
				"item": {
					"sku": 11,
					"name": "Red Kap Men's Long Sleeve",
					"brand": "Red Kap",
					"regular_price": 48.3,
					"sale_price": 30.49,
					"slug": "red-kap-men's-long-sleeve",
					"id": 11
				},
				"quantity": 1
			},
			{
				"item": {
					"sku": 3,
					"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
					"brand": "Acer",
					"regular_price": 369.99,
					"sale_price": 249.99,
					"slug": "acer-predator-xb3-27-in.-monitor-full-hd",
					"id": 3
				},
				"quantity": 1
			}
		],
		"date": "2022-02-06T20:09:05.660Z",
		"total": 400.47,
		"total_pretty": "$400.47",
		"id": 8
	}
]
`;

export const createPurchaseResponse = `"status": "success",
"data": {
	"paid": true,
	"products": [
		{
			"item": {
				"sku": 1,
				"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
				"brand": "HP",
				"regular_price": 149.95,
				"sale_price": 129.95,
				"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
				"id": 1
			},
			"quantity": 1
		}
	],
	"date": "2021-02-24T04:57:12.443Z",
	"total": 129.95,
	"total_pretty": "$129.95",
	"id": 62
}
`;

export const getCurrentUserWishlistResponse = `"status": "success",
"data": {
	"wishlist": [
		{
			"sku": 30,
			"name": "FlashPatch Rejuvenating Eye Gels",
			"category_id": 5,
			"id": 30
		},
		{
			"sku": 27,
			"name": "Atmosphere Nonstick Aluminum 12-Pc. Cookware Set",
			"category_id": 6,
			"id": 27
		},
		{
			"sku": 50,
			"name": "Women's Plaid Single-Breasted Walker Coat",
			"category_id": 3,
			"id": 50
		}
	],
	"id": 4
}
`;

export const addProductToCurrentUserWishlistResponse = `"status": "success",
"data": [
	{
		"best_seller": false,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 30,
		"name": "FlashPatch Rejuvenating Eye Gels",
		"category_id": 5,
		"brand": "Patchology",
		"regular_price": 50,
		"sale_price": 42.5,
		"description": "Puffiness? Fatigue? Dryness? Enter the fast fix for tired eyes, featuring caffeine and hydrolyzed collagen. Look like you got your full 8 hours all day, every day.",
		"specs": [...],
		"slug": "flashpatch-rejuvenating-eye-gels",
		"id": 30
	},
	{
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 27,
		"name": "Atmosphere Nonstick Aluminum 12-Pc. Cookware Set",
		"category_id": 6,
		"brand": "Brooklyn Steel Co",
		"regular_price": 399.99,
		"sale_price": 299.99,
		"description": "Bring cooking to a higher level with this striking 12-piece set from Brooklyn Steel Co.'s Atmosphere collection. Aluminum combines with multi-layer ceramic nonstick interiors for superior performance and looks, as well as easy cleanup.",
		"specs": [...],
		"slug": "atmosphere-nonstick-aluminum-12-pc.-cookware-set",
		"id": 27
	},
	{
		"best_seller": false,
		"in_stock": false,
		"features": [...],
		"images": [...],
		"sku": 50,
		"name": "Women's Plaid Single-Breasted Walker Coat",
		"category_id": 3,
		"brand": "Calvin Klein",
		"regular_price": 400,
		"sale_price": 239.99,
		"description": "Classic plaid defines this single-breasted reefer coat from Calvin Klein, fashioned with two flap pockets and an elongated silhouette.",
		"specs": [...],
		"slug": "women's-plaid-single-breasted-walker-coat",
		"id": 50
	},
	{
		"best_seller": false,
		"in_stock": false,
		"features": [...],
		"images": [...],
		"sku": 2,
		"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt",
		"category_id": 2,
		"brand": "Susulv MCL",
		"regular_price": 119.99,
		"sale_price": 119.99,
		"description": "Cool, slim fit, top quality casual style shirt, perfect and comfortable for daily wear or relaxing weekends.",
		"specs": [...],
		"slug": "susulv-mcl-men-shirt-men's-large-size-long-sleeve-lapel-zipper-shirt",
		"id": 2
	}
]
`;

export const getCurrentUserResponse = `"status": "success",
"data": {
	"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
	"role": "user",
	"id": 3,
	"name": "Dorothy Jennings",
	"email": "dorothy@example.com",
}
`;

export const updateCurrentUserResponse = `"status": "success",
"data": {
	"user_id": {
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
		"role": "user",
		"id": 3,
		"name": "...",
		"email": "dorothy@example.com",
	}
}
`;

export const signupResponse = `"status": "success",
"token": "JWT would be here in the real world",
"data": {
	"user_id": {
		"photo": "default.jpg",
		"role": "user",
		"active": true,
		"id": 24,
		"name": "...",
		"email": "..."
	}
}
`;

export const loginResponse = `"status": "success",
"token": "...",
"data": {
	"user_id": {
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
		"role": "user",
		"id": 3,
		"name": "Dorothy Jennings",
		"email": "dorothy@example.com",
	}
}
`;
