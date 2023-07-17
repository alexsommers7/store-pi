export const getAllProductsResponse = `"status": "success",
"results": 50,
"total": 50,
"data": [
	{
		"reviews_average": 4.63,
		"reviews_quantity": 8,
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "HP",
		"regular_price": 149.95,
		"sale_price": 129.95,
		"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
		"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
		"id": "6213d55cf8b9765ec0fbbcaa"
	},
	{
		"reviews_average": 4.5,
		"reviews_quantity": 4,
		"best_seller": false,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 2,
		"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "Acer",
		"regular_price": 369.99,
		"sale_price": 249.99,
		"description": "Bring on the blitz. Turbo-charged refresh rates will fuel your need for gaming speed with this captivating 27 inch dislay.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/2a.jpg",
		"slug": "acer-predator-xb3-27-in.-monitor-full-hd",
		"id": "6213d55cf8b9765ec0fbbcad"
	},
	{
		"reviews_average": 4.67,
		"reviews_quantity": 6,
		"best_seller": false,
		"in_stock": false,
		"features": [...],
		"images": [...],
		"sku": 3,
		"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt",
		"category": {
			"_id": "6213d49cb7f67e0d64774e93",
			"name": "Men's Clothing"
		},
		"brand": "Susulv MCL",
		"regular_price": 119.99,
		"sale_price": 119.99,
		"description": "Cool, slim fit, top quality casual style shirt, perfect and comfortable for daily wear or relaxing weekends.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/mens_clothing/1a.jpg",
		"slug": "susulv-mcl-men-shirt-men's-large-size-long-sleeve-lapel-zipper-shirt",
		"id": "6213d55cf8b9765ec0fbbcb0"
	},
	... 
]`;

export const getProductResponse = `"status": "success",
"data": {
		"reviews_average": 4.63,
		"reviews_quantity": 8,
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "HP",
		"regular_price": 149.95,
		"sale_price": 129.95,
		"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
		"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
		"id": "6213d55cf8b9765ec0fbbcaa"
}
`;

export const createNewProductResponse = `"status": "success",
"data": {
	"reviews_average": 4.5,
	"reviews_quantity": 0,
	"best_seller": false,
	"in_stock": true,
	"features": [],
	"images": [],
	"sku": 1234,
	"name": "...",
	"category": {
		"_id": "6213d49cb7f67e0d64774e92",
		"name": "Electronics"
	},
	"brand": "...",
	"regular_price": 99.95,
	"sale_price": 79.95,
	"description": "...",
	"id": "634a49847857d50016d56ae1"
}
`;

export const updateProductResponse = `"status": "success",
"data": {
	"reviews_average": 4.63,
	"reviews_quantity": 8,
	"best_seller": true,
	"in_stock": true,
	"features": [...],
	"images": [...],
	"sku": 1,
	"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
	"category": {
		"_id": "6213d49cb7f67e0d64774e92",
		"name": "Electronics"
	},
	"brand": "HP",
	"regular_price": 159.95,
	"sale_price": 139.95,
	"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
	"specs": [...],
	"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
	"id": "6213d55cf8b9765ec0fbbcaa"
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
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-9.jpg",
			"_id": "6213d79b3a57cb555079db71",
			"name": "Marco Lawrence"
		},
		"product": "6213d55cf8b9765ec0fbbcad",
		"created_at": "2023-01-14T20:54:23.463Z",
		"id": "63c79151aba0c344e4a221e4"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "Bought this as a gift for my boyfriend for Christmas and he loved it! Plush came in great condition and has good detailing to it. If you're a fan of the character and series it's a must buy for any plushie collection.",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-11.jpg",
			"_id": "6213d79b3a57cb555079db73",
			"name": "Casey Zimmerman"
		},
		"product": "625c50fcc1198f626cc41849",
		"created_at": "2023-01-14T02:42:07.449Z",
		"id": "63c79151aba0c344e4a221d7"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "Awesome robe, I didn't want a heavyweight boxers rope. This one is light to wear around the house in all seasons. I work from home and wear this lightweight robe everyday.",
		"rating": 4,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-17.jpg",
			"_id": "6213d79b3a57cb555079db79",
			"name": "Bennie Walton"
		},
		"product": "625c50fcc1198f626cc41841",
		"created_at": "2023-01-06T17:20:46.665Z",
		"id": "63c79152aba0c344e4a2220c"
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
	"user": {
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-4.jpg",
		"_id": "6213d79b3a57cb555079db6c",
		"name": "Shari Castro"
	},
	"product": "625c50fcc1198f626cc41851",
	"created_at": "2022-01-19T23:51:51.587Z",
	"id": "625c762ee84c84320ca30be3"
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
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-6.jpg",
			"_id": "6213d79b3a57cb555079db6e",
			"name": "Daisy Gregory"
		},
		"product": "6213d55cf8b9765ec0fbbccb",
		"created_at": "2022-07-23T23:42:46.797Z",
		"id": "623641df96433b10a833b05e"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Nice colors and fits just right! Glad that it's non-slip and that I'll be able to wash it.",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-8.jpg",
			"_id": "6213d79b3a57cb555079db70",
			"name": "Candace Burns"
		},
		"product": "6213d55cf8b9765ec0fbbccb",
		"created_at": "2020-10-13T05:54:49.004Z",
		"id": "625c762ee84c84320ca30bee"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Non-slip works great! Just wish it were a bit more durable but overall a solid purchase.",
		"rating": 4,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-19.jpg",
			"_id": "6213d79b3a57cb555079db7b",
			"name": "Perry Jimenez"
		},
		"product": "6213d55cf8b9765ec0fbbccb",
		"created_at": "2022-07-21T08:37:29.410Z",
		"id": "63c79152aba0c344e4a2221a"
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
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
			"_id": "6213d79b3a57cb555079db6a",
			"name": "Dorothy Jennings"
		},
		"product": {
			"sku": 2,
			"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
			"category": {
				"_id": "6213d49cb7f67e0d64774e92",
				"name": "Electronics"
			},
			"brand": "Acer",
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/2a.jpg",
			"id": "6213d55cf8b9765ec0fbbcad"
		},
		"created_at": "2022-04-19T18:28:52.446Z",
		"id": "623641df96433b10a833b058"
	},
	{
		"recommends": true,
		"incentivized": true,
		"verified": false,
		"review": "I've had this couch for about 2 weeks now. I wanted to try it out and give an honest review. Its so beautiful and durable. I love that the cushion is very comfortable and yet durable. I dont think it will cave in any time soon. Soft velvet fabric used gives a soft feel. It arrived without any damages. It is actually a bigger couch than I initially thought. Do not hesitate to buy this you will not regret it. Assembly is very easy and takes less than 10 minutes. I would recommend this sofa based on looks as well as comfort.",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
			"_id": "6213d79b3a57cb555079db6a",
			"name": "Dorothy Jennings"
		},
		"product": {
			"sku": 10,
			"name": "Morden Fort Modern Contemporary Love Seat",
			"category": {
				"_id": "6213d49cb7f67e0d64774e97",
				"name": "Home"
			},
			"brand": "Morden Fort Store",
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/home/2a.jpg",
			"id": "625c50fcc1198f626cc41829"
		},
		"created_at": "2022-03-29T17:56:59.705Z",
		"id": "625c762ee84c84320ca30bb7"
	},
	{
		"recommends": false,
		"incentivized": false,
		"verified": false,
		"review": "Unfortunately, my microfleece top didn't hold up in the washing machine. After only 2 washes the stitching along a part of the neck opening came undone. I was very disappointed because the top was very soft and comfortable to wear. I expected better from this brand. I ordered the black in one size larger than what I would usually wear based on other reviews re: sizing.",
		"rating": 3,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
			"_id": "6213d79b3a57cb555079db6a",
			"name": "Dorothy Jennings"
		},
		"product": {
			"sku": 4,
			"name": "Women's Tek Gear Microfleece Crewneck Top",
			"category": {
				"_id": "6213d49cb7f67e0d64774e94",
				"name": "Women's Clothing"
			},
			"brand": "Tek Gear",
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/womens_clothing/1a.jpg",
			"id": "6213d55cf8b9765ec0fbbcb6"
		},
		"created_at": "2022-08-06T21:35:23.677Z",
		"id": "625c762ee84c84320ca30bb1"
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
	"product": {
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"id": "6213d55cf8b9765ec0fbbcaa"
	},
	"user": "6213d79b3a57cb555079db6a",
	"created_at": "2020-01-13T20:16:08.347Z",
	"id": "634f83e48eb7ac0016e8cd4f"
}
`;

export const getAllBrandsResponse = `"status": "success",
"results": 47,
"data": [
	"Abystyle",
	"Acer",
	"Adidas",
	"Amazfit",
	"Brooklyn Steel Co",
	...
]
`;

export const getAllCategoriesResponse = `"status": "success",
"results": 6,
"total": 6,
"data": [
	{
		"item_count": 10,
		"_id": "6213d49cb7f67e0d64774e92",
		"name": "Electronics",
		"slug": "electronics"
	},
	{
		"item_count": 8,
		"_id": "6213d49cb7f67e0d64774e93",
		"name": "Men's Clothing",
		"slug": "mens-clothing"
	},
	{
		"item_count": 8,
		"_id": "6213d49cb7f67e0d64774e94",
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
		"reviews_average": 4.63,
		"reviews_quantity": 8,
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "HP",
		"regular_price": 149.95,
		"sale_price": 129.95,
		"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
		"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
		"id": "6213d55cf8b9765ec0fbbcaa"
	},
	{
		"reviews_average": 4.5,
		"reviews_quantity": 4,
		"best_seller": false,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 2,
		"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "Acer",
		"regular_price": 369.99,
		"sale_price": 249.99,
		"description": "Bring on the blitz. Turbo-charged refresh rates will fuel your need for gaming speed with this captivating 27 inch dislay.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/2a.jpg",
		"slug": "acer-predator-xb3-27-in.-monitor-full-hd",
		"id": "6213d55cf8b9765ec0fbbcad"
	},
	{
		"reviews_average": 4,
		"reviews_quantity": 3,
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 8,
		"name": "Amazfit GTS 2 Mini Smart Watch",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "Amazfit",
		"regular_price": 99.99,
		"sale_price": 69.99,
		"description": "Get an intelligent little pal to remind you of the incoming calls, text messages, apps, and calendars, alarm clock, weather forecast, and support control the music playback & camera on your smartphone.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/3a.jpg",
		"slug": "amazfit-gts-2-mini-smart-watch",
		"id": "625c50fcc1198f626cc41827"
	}
	...
]
`;

export const createOrUpdateCategoryResponse = `"status": "success",
"data": {
	"item_count": 0,
	"_id": "63520d186ffa520016c6c08a",
	"name": "..."
}
`;

export const getAllCartsResponse = `"status": "success",
"results": 19,
"total": 19,
"data": [
	{
		"user": {
			"_id": "6213d79b3a57cb555079db70",
			"name": "Candace Burns"
		},
		"products": [
			{
				"item": {
					"sku": 16,
					"name": "Flip 6 Water-Resistant Bluetooth Speaker",
					"brand": "JBL",
					"regular_price": 129.95,
					"sale_price": 110.95,
					"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/4a.jpg",
					"slug": "flip-6-water-resistant-bluetooth-speaker",
					"id": "625c50fcc1198f626cc4182f"
				},
				"quantity": 1
			},
			...
		],
		"created_at": "2022-04-20T12:43:20.791Z",
		"total": 272.92,
		"total_pretty": "$272.92",
		"item_count": 4,
		"id": "623641e496433b10a833b0bc"
	},
	{
		"user": {
			"_id": "6213d79b3a57cb555079db71",
			"name": "Marco Lawrence"
		},
		"products": [],
		"created_at": "2021-12-28T04:51:12.510Z",
		"total": 0,
		"total_pretty": "$0.00",
		"item_count": 0,
		"id": "623641e496433b10a833b0bf"
	},
	{
		"user": {
			"_id": "6213d79b3a57cb555079db7c",
			"name": "Tracy Flores"
		},
		"products": [],
		"created_at": "2021-11-06T14:40:35.524Z",
		"total": 0,
		"total_pretty": "$0.00",
		"item_count": 0,
		"id": "623641e496433b10a833b0e0"
	},
	...
]
`;

export const getCartResponse = `"status": "success",
"data": {
	"user": {
		"_id": "6213d79b3a57cb555079db72",
		"name": "Dustin Fernandez"
	},
	"products": [
		{
			"item": {
				"sku": 32,
				"name": "Men's Bomber Jacket with Reflective Logo Detailing",
				"brand": "Guess",
				"regular_price": 125,
				"sale_price": 79.95,
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/mens_clothing/7a.jpg",
				"slug": "men's-bomber-jacket-with-reflective-logo-detailing",
				"id": "625c50fcc1198f626cc4183f"
			},
			"quantity": 1
		}
	],
	"created_at": "2021-03-16T13:51:38.308Z",
	"total": 79.95,
	"total_pretty": "$79.95",
	"item_count": 1,
	"id": "623641e496433b10a833b0c2"
}
`;

export const getCurrentUserCartResponse = `"status": "success",
"results": 1,
"data": [
	{
		"products": [
			{
				"item": {
					"sku": 4,
					"name": "Women's Tek Gear Microfleece Crewneck Top",
					"brand": "Tek Gear",
					"regular_price": 24.99,
					"sale_price": 11.99,
					"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/womens_clothing/1a.jpg",
					"slug": "women's-tek-gear-microfleece-crewneck-top",
					"id": "6213d55cf8b9765ec0fbbcb6"
				},
				"quantity": 1
			},
			...
		],
		"created_at": "2020-03-15T09:35:15.369Z",
		"total": 80.17,
		"total_pretty": "$80.17",
		"item_count": 3,
		"id": "623641e496433b10a833b0ad"
	}
]
`;

export const addProductToCurrentUserCartResponse = `"status": "success",
"data": {
	"user": {
		"_id": "6213d79b3a57cb555079db6a",
		"name": "Dorothy Jennings"
	},
	"products": [
		{
			"item": {
				"sku": 1,
				"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
				"brand": "HP",
				"regular_price": 149.95,
				"sale_price": 129.95,
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
				"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
				"id": "6213d55cf8b9765ec0fbbcaa"
			},
			"quantity": 1
		}
	],
	"created_at": "2020-03-03T05:43:30.633Z",
	"total": 129.95,
	"total_pretty": "$129.95",
	"item_count": 1,
	"id": "623641e496433b10a833b0ac"
}
`;

export const getAllPurchasesResponse = `"status": "success",
"results": 50,
"total": 50,
"data": [
	{
		"paid": true,
		"user": {
			"_id": "6213d79b3a57cb555079db6e",
			"name": "Daisy Gregory"
		},
		"products": [
			{
				"item": {
					"sku": 28,
					"name": "Good Genes All-In-One Lactic Acid Treatment",
					"brand": "Sunday Riley",
					"regular_price": 142,
					"sale_price": 122,
					"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/health_and_beauty/3a.jpg",
					"slug": "good-genes-all-in-one-lactic-acid-treatment",
					"id": "625c50fcc1198f626cc4183b"
				},
				"quantity": 1
			},
			{
				"item": {
					"sku": 36,
					"name": "Women's Double-Brested Trench Coat",
					"brand": "Lauren Ralph Lauren",
					"regular_price": 190,
					"sale_price": 93.1,
					"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/womens_clothing/7a.jpg",
					"slug": "women's-double-brested-trench-coat",
					"id": "625c50fcc1198f626cc41843"
				},
				"quantity": 1
			}
		],
		"date": "2021-09-08T19:38:16.496Z",
		"total": 215.1,
		"total_pretty": "$215.10",
		"id": "627816ed796f4e5ca4288d08"
},
{
	"paid": true,
	"_id": "627816ed796f4e5ca4288d13",
	"user": {
		"_id": "6213d79b3a57cb555079db71",
		"name": "Marco Lawrence"
	},
	"products": [
		{
			"item": {
				"sku": 2,
				"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
				"brand": "Acer",
				"regular_price": 369.99,
				"sale_price": 249.99,
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/2a.jpg",
				"slug": "acer-predator-xb3-27-in.-monitor-full-hd",
				"id": "6213d55cf8b9765ec0fbbcad"
			},
			"quantity": 3
		},
		{
			"item": {
				"sku": 18,
				"name": "Men's Mixed Media Motorcycle Jacket",
				"brand": "DKNY",
				"regular_price": 224.99,
				"sale_price": 135.99,
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/mens_clothing/5a.jpg",
				"slug": "men's-mixed-media-motorcycle-jacket",
				"id": "625c50fcc1198f626cc41831"
			},
			"quantity": 1
		}
	],
	"date": "2021-08-20T01:30:06.383Z",
	"total": 885.96,
	"total_pretty": "$885.96",
	"id": "627816ed796f4e5ca4288d13"
},
{
	"paid": true,
	"_id": "627816ed796f4e5ca4288d0b",
	"user": {
		"_id": "6213d79b3a57cb555079db6e",
		"name": "Daisy Gregory"
	},
	"products": [
		{
			"item": {
				"sku": 31,
				"name": "Flex Men's 505 Regular Fit Jeans",
				"brand": "Levi's",
				"regular_price": 69.5,
				"sale_price": 48.65,
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/mens_clothing/6a.jpg",
				"slug": "flex-men's-505-regular-fit-jeans",
				"id": "625c50fcc1198f626cc4183e"
			},
			"quantity": 2
		},
		{
			"item": {
				"sku": 39,
				"name": "Toy RC Robotic Robotosaur Mini",
				"brand": "Sharper Image",
				"regular_price": 35.99,
				"sale_price": 13.99,
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/kids_and_baby/6a.jpg",
				"slug": "toy-rc-robotic-robotosaur-mini",
				"id": "625c50fcc1198f626cc41846"
			},
			"quantity": 1
		}	
	],
	"date": "2021-10-08T08:32:50.487Z",
	"total": 111.29,
	"total_pretty": "$111.29",
	"id": "627816ed796f4e5ca4288d0b"
	},
	...
]
`;

export const getPurchaseResponse = `"status": "success",
"data": {
	"paid": true,
	"_id": "627816ed796f4e5ca4288d08",
	"user": {
		"_id": "6213d79b3a57cb555079db6e",
		"name": "Daisy Gregory"
	},
	"products": [
		{
			"item": {
				"sku": 28,
				"name": "Good Genes All-In-One Lactic Acid Treatment",
				"brand": "Sunday Riley",
				"regular_price": 142,
				"sale_price": 122,
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/health_and_beauty/3a.jpg",
				"slug": "good-genes-all-in-one-lactic-acid-treatment",
				"id": "625c50fcc1198f626cc4183b"
			},
			"quantity": 1
		},
		{
			"item": {
				"sku": 36,
				"name": "Women's Double-Brested Trench Coat",
				"brand": "Lauren Ralph Lauren",
				"regular_price": 190,
				"sale_price": 93.1,
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/womens_clothing/7a.jpg",
				"slug": "women's-double-brested-trench-coat",
				"id": "625c50fcc1198f626cc41843"
			},
			"quantity": 1
		}
	],
	"date": "2021-09-08T19:38:16.496Z",
	"total": 215.1,
	"total_pretty": "$215.10",
	"id": "627816ed796f4e5ca4288d08"
}
`;

export const getCurrentUserPurchasesResponse = `"status": "success",
"results": 1,
"data": [
	{
		"paid": true,
		"user": {
			"_id": "6213d79b3a57cb555079db6a",
			"name": "Dorothy Jennings"
		},
		"products": [
			{
				"item": {
					"sku": 3,
					"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt",
					"brand": "Susulv MCL",
					"regular_price": 119.99,
					"sale_price": 119.99,
					"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/mens_clothing/1a.jpg",
					"slug": "susulv-mcl-men-shirt-men's-large-size-long-sleeve-lapel-zipper-shirt",
					"id": "6213d55cf8b9765ec0fbbcb0"
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
					"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/mens_clothing/2a.jpg",
					"slug": "red-kap-men's-long-sleeve",
					"id": "625c50fcc1198f626cc4182a"
				},
				"quantity": 1
			},
			{
				"item": {
					"sku": 2,
					"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
					"brand": "Acer",
					"regular_price": 369.99,
					"sale_price": 249.99,
					"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/2a.jpg",
					"slug": "acer-predator-xb3-27-in.-monitor-full-hd",
					"id": "6213d55cf8b9765ec0fbbcad"
				},
				"quantity": 1
			}
		],
		"date": "2022-02-06T20:09:05.660Z",
		"total": 400.47,
		"total_pretty": "$400.47",
		"id": "627816ed796f4e5ca4288d04"
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
				"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
				"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
				"id": "6213d55cf8b9765ec0fbbcaa"
			},
			"quantity": 1
		}
	],
	"date": "2021-02-24T04:57:12.443Z",
	"total": 129.95,
	"total_pretty": "$129.95",
	"id": "6354cb9490eabd001600a26c"
}
`;

export const getCurrentUserWishlistResponse = `"status": "success",
"data": {
	"wishlist": [
		{
			"sku": 29,
			"name": "FlashPatch Rejuvenating Eye Gels",
			"category": {
				"_id": "6213d49cb7f67e0d64774e96",
				"name": "Health & Beauty"
			},
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/health_and_beauty/4a.jpg",
			"id": "625c50fcc1198f626cc4183c"
		},
		{
			"sku": 26,
			"name": "Atmosphere Nonstick Aluminum 12-Pc. Cookware Set",
			"category": {
				"_id": "6213d49cb7f67e0d64774e97",
				"name": "Home"
			},
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/home/4a.jpg",
			"id": "625c50fcc1198f626cc41839"
		},
		{
			"sku": 35,
			"name": "Women's Plaid Single-Breasted Walker Coat",
			"category": {
				"_id": "6213d49cb7f67e0d64774e94",
				"name": "Women's Clothing"
			},
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/womens_clothing/6a.jpg",
			"id": "625c50fcc1198f626cc41842"
		}
	],
	"_id": "6213d79b3a57cb555079db6a"
}
`;

export const addProductToCurrentUserWishlistResponse = `"status": "success",
"data": [
	{
		"reviews_average": 3.33,
		"reviews_quantity": 3,
		"best_seller": false,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 29,
		"name": "FlashPatch Rejuvenating Eye Gels",
		"category": {
			"_id": "6213d49cb7f67e0d64774e96",
			"name": "Health & Beauty"
		},
		"brand": "Patchology",
		"regular_price": 50,
		"sale_price": 42.5,
		"description": "Puffiness? Fatigue? Dryness? Enter the fast fix for tired eyes, featuring caffeine and hydrolyzed collagen. Look like you got your full 8 hours all day, every day.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/health_and_beauty/4a.jpg",
		"slug": "flashpatch-rejuvenating-eye-gels",
		"id": "625c50fcc1198f626cc4183c"
	},
	{
		"reviews_average": 2,
		"reviews_quantity": 1,
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 26,
		"name": "Atmosphere Nonstick Aluminum 12-Pc. Cookware Set",
		"category": {
			"_id": "6213d49cb7f67e0d64774e97",
			"name": "Home"
		},
		"brand": "Brooklyn Steel Co",
		"regular_price": 399.99,
		"sale_price": 299.99,
		"description": "Bring cooking to a higher level with this striking 12-piece set from Brooklyn Steel Co.'s Atmosphere collection. Aluminum combines with multi-layer ceramic nonstick interiors for superior performance and looks, as well as easy cleanup.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/home/4a.jpg",
		"slug": "atmosphere-nonstick-aluminum-12-pc.-cookware-set",
		"id": "625c50fcc1198f626cc41839"
	},
	{
		"reviews_average": 4.67,
		"reviews_quantity": 3,
		"best_seller": false,
		"in_stock": false,
		"features": [...],
		"images": [...],
		"sku": 35,
		"name": "Women's Plaid Single-Breasted Walker Coat",
		"category": {
			"_id": "6213d49cb7f67e0d64774e94",
			"name": "Women's Clothing"
		},
		"brand": "Calvin Klein",
		"regular_price": 400,
		"sale_price": 239.99,
		"description": "Classic plaid defines this single-breasted reefer coat from Calvin Klein, fashioned with two flap pockets and an elongated silhouette.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/womens_clothing/6a.jpg",
		"slug": "women's-plaid-single-breasted-walker-coat",
		"id": "625c50fcc1198f626cc41842"
	},
	{
		"reviews_average": 4.67,
		"reviews_quantity": 6,
		"best_seller": false,
		"in_stock": false,
		"features": [...],
		"images": [...],
		"sku": 3,
		"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt",
		"category": {
			"_id": "6213d49cb7f67e0d64774e93",
			"name": "Men's Clothing"
		},
		"brand": "Susulv MCL",
		"regular_price": 119.99,
		"sale_price": 119.99,
		"description": "Cool, slim fit, top quality casual style shirt, perfect and comfortable for daily wear or relaxing weekends.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/mens_clothing/1a.jpg",
		"slug": "susulv-mcl-men-shirt-men's-large-size-long-sleeve-lapel-zipper-shirt",
		"id": "6213d55cf8b9765ec0fbbcb0"
	}
]
`;

export const getAllUsersResponse = `"status": "success",
"results": 20,
"total": 20,
"data": [
	{
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
		"role": "user",
		"wishlist": [
			"625c50fcc1198f626cc4183c",
			"625c50fcc1198f626cc41839",
			"625c50fcc1198f626cc41842"
		],
		"_id": "6213d79b3a57cb555079db6a",
		"name": "Dorothy Jennings",
		"email": "dorothy@example.com"
	},
	{
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-4.jpg",
		"role": "user",
		"wishlist": [],
		"_id": "6213d79b3a57cb555079db6c",
		"name": "Shari Castro",
		"email": "shari@example.com"
	},
	{
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-3.jpg",
		"role": "user",
		"wishlist": [
			"625c50fcc1198f626cc41854",
			"625c50fcc1198f626cc41853",
			"625c50fcc1198f626cc41851",
			"625c50fcc1198f626cc4184f",
			"625c50fcc1198f626cc4184c",
			"625c50fcc1198f626cc41849",
			"625c50fcc1198f626cc41845"
		],
		"_id": "6213d79b3a57cb555079db6b",
		"name": "Jodi Warner",
		"email": "jodi@example.com"
	},
	...
]
`;

export const getUserResponse = `"status": "success",
"data": {
	"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
	"role": "user",
	"wishlist": [
		"625c50fcc1198f626cc4183c",
		"625c50fcc1198f626cc41839",
		"625c50fcc1198f626cc41842"
	],
	"_id": "6213d79b3a57cb555079db6a",
	"name": "Dorothy Jennings",
	"email": "dorothy@example.com",
}
`;

export const updateCurrentUserResponse = `"status": "success",
"data": {
	"user": {
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
		"role": "user",
		"wishlist": [
			"625c50fcc1198f626cc4183c",
			"625c50fcc1198f626cc41839",
			"625c50fcc1198f626cc41842"
		],
		"_id": "6213d79b3a57cb555079db6a",
		"name": "...",
		"email": "dorothy@example.com",
	}
}
`;

export const signupResponse = `"status": "success",
"token": "JWT would be here in the real world",
"data": {
	"user": {
		"photo": "default.jpg",
		"role": "user",
		"active": true,
		"wishlist": [],
		"_id": "6355c3239a33470016d4a7b0",
		"name": "...",
		"email": "..."
	}
}
`;

export const loginResponse = `"status": "success",
"token": "...",
"data": {
	"user": {
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
		"role": "user",
		"wishlist": [
			"625c50fcc1198f626cc4183c",
			"625c50fcc1198f626cc41839",
			"625c50fcc1198f626cc41842"
		],
		"_id": "6213d79b3a57cb555079db6a",
		"name": "Dorothy Jennings",
		"email": "dorothy@example.com",
	}
}
`;
