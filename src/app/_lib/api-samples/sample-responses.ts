export const getAllProductsResponse = `"count": 50,
"data": [
	{
		"id": 1,
		"best_seller": true,
		"in_stock": true,
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": { "name": "..." },
		"brand": { "name": "..." },
		"regular_price": 149.95,
		"sale_price": 129.95,
		"reviews_quantity": 7,
		"reviews_average": 4.51,
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
		"category": { "name": "..." },
		"brand": { "name": "..." },
		"regular_price": 88.99,
		"sale_price": 88.99,
		"reviews_quantity": 5,
		"reviews_average": 3.54,
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
		"category": { "name": "..." },
		"brand": { "name": "..." },
		"regular_price": 119.99,
		"sale_price": 47.99,
		"reviews_quantity": 2,
		"reviews_average": 2.50,
		"description": "Experience comfort, durability, and versatility with this World Rug Gallery Modern Large Floral Flowers Indoor Outdoor rug.",
		"slug": "world-rug-gallery-modern-large-floral-flowers-indoor-outdoor-rug",
		"specs": [...],
		"features": [...],
		"images": [...]
	},
	... 
]`;

export const getProductResponse = `"data": {
	"id": 1,
	"best_seller": true,
	"in_stock": true,
	"features": [...],
	"images": [...],
	"sku": 1,
	"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
	"category": { "name": "..." },
	"brand": { "name": "..." },
	"regular_price": 149.95,
	"sale_price": 129.95,
	"reviews_quantity": 7,
	"reviews_average": 4.51,
	"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
	"specs": [...],
	"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m"
}
`;

export const getAllReviewsResponse = `"count": 160,
"data": [
	{
		"recommends": true,
		"incentivized": true,
		"verified": true,
		"review": "The monitor was easy to set up and all the cables were included in the box to connect it. The stand itself is very minimalistic and has height base tilt swivel adjustment. The speakers in it are decent for them being monitor speakers, much better than the previous version. The color accuracy was true straight out of the box and didn't require any adjustments, unlike the previous one I bought from this series. The only down side to the whole monitor are the monitor controls, which are on the back and are hard to reach.",
		"rating": 4,
		"user_id": 9,
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 3,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
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
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 41,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
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
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 34,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
		"created_at": "2023-01-06T17:20:46.665Z",
		"review_id": 239
	}
	...
]
`;

export const getReviewResponse = `"data": {
	"recommends": true,
	"incentivized": false,
	"verified": false,
	"review": "Beautiful chairs, they are very comfy as well! When you first sit in them they are on the tougher side but after a few seconds it softens up. I would highly recommend these chairs. Easy to put together - the packaging was supreme and the shipping was super quick! Highly impressed all around!",
	"rating": 5,
	"user_id": 5,
	"user": {
		"name": "...",
		"photo": "..."
	},
	"product_id": 49,
	"product": {
		"id": 1,
		"sku": 18,
		"images": [...],
		"name": "...",
		"category": { "name": "..." },
		"brand": { "name": "..." }
	},
	"created_at": "2022-01-19T23:51:51.587Z",
	"review_id": 144
}
`;

export const getProductReviewsResponse = `"count": 6,
"data": [
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Exactly what it looked like in the picture. Size and color is perfect. Highly recommend!",
		"rating": 5,
		"user_id": 7,
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 7,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
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
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 7,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
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
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 7,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
		"created_at": "2022-07-21T08:37:29.410Z",
		"review_id": 256
	},
	...
]
`;

export const getCurrentUserReviewsResponse = `"count": 11,
"data": [
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "Perfect monitor if you Know how to calibrate it! HDR isn't great though. Worth it once you calibrate with RGB color hues & saturation. So good many settings.",
		"rating": 4,
		"user_id": 3,
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 3,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
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
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 10,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
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
		"user": {
			"name": "...",
			"photo": "..."
		},
		"product_id": 5,
		"product": {
			"id": 1,
			"sku": 18,
			"images": [...],
			"name": "...",
			"category": { "name": "..." },
			"brand": { "name": "..." }
		},
		"created_at": "2022-08-06T21:35:23.677Z",
		"review_id": 114
	},
	...
]
`;

export const createOrUpdateReviewResponse = `"data": {
	"recommends": true,
	"incentivized": false,
	"verified": false,
	"review": "...",
	"rating": 5,
	"product_id": 1,
	"user_id": 3,
	"user": {
		"name": "...",
		"photo": "..."
	},
	"product": {
		"id": 1,
		"sku": 18,
		"images": [...],
		"name": "...",
		"category": { "name": "..." },
		"brand": { "name": "..." }
	},
	"created_at": "2020-01-13T20:16:08.347Z",
	"review_id": 114
}
`;

export const getAllBrandsResponse = `"count": 44,
"data": [
	{ "id": 1, "name": "Abystyle" },
	{ "id": 2, "name": "Acer" },
	{ "id": 3, "name": "Adidas" },
	{ "id": 4, "name": "Amazfit" },
	...
]
`;

export const getAllCategoriesResponse = `"count": 6,
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

export const getAllProductsInCategoryResponse = `"count": 10,
"data": [
	{
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": { "name": "..." },
		"brand": { "name": "..." },
		"regular_price": 149.95,
		"sale_price": 129.95,
		"reviews_quantity": 7,
		"reviews_average": 4.51,
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
		"category": { "name": "..." },
		"brand": { "name": "..." },
		"regular_price": 369.99,
		"sale_price": 249.99,
		"reviews_quantity": 4,
		"reviews_average": 4.87,
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
		"category": { "name": "..." },
		"brand": { "name": "..." },
		"regular_price": 99.99,
		"sale_price": 69.99,
		"reviews_quantity": 7,
		"reviews_average": 4.5
		"description": "Get an intelligent little pal to remind you of the incoming calls, text messages, apps, and calendars, alarm clock, weather forecast, and support control the music playback & camera on your smartphone.",
		"specs": [...],
		"slug": "amazfit-gts-2-mini-smart-watch",
		"id": 8
	}
	...
]
`;

export const getAllProductsInBrandResponse = `"count": 2,
"data": [
	{
		"id": 20,
		"best_seller": true,
		"in_stock": false,
		"sku": 20,
		"name": "Foiled Jersey Sleeveless Gown",
		"category": { "name": "..." },
		"brand": { "name": "..." },
		"regular_price": 259.99,
		"sale_price": 229.99,
		"reviews_quantity": 7,
		"reviews_average": 4.5
		"description": "Cut from light-catching foiled jersey, Lauren Ralph Lauren's breathtaking evening gown is designed with a sexy slit at the skirt and a waist-defining self-belt, which is accented with a rhinestone-embellished buckle.",
		"slug": "foiled-jersey-sleeveless-gown",
		"specs": [...],
		"features": [...],
		"images": [...],
		"created_at": "2023-07-23T03:53:55.021034+00:00",
		"updated_at": "2023-07-23T03:54:16.816558+00:00"
	},
	{
		"id": 35,
		"best_seller": false,
		"in_stock": true,
		"sku": 35,
		"name": "Women's Double-Breasted Trench Coat",
		"category": { "name": "..." },
		"brand": { "name": "..." },
		"regular_price": 190,
		"sale_price": 93.1,
		"reviews_quantity": 7,
		"reviews_average": 4.5
		"description": "Lauren Ralph Lauren's signature raincoat is designed with a double-breasted silhouette that's belted at the waist for a defined figure.",
		"slug": "women-s-double-breasted-trench-coat",
		"specs": [...],
		"features": [...],
		"images": [...],
		"created_at": "2023-07-23T03:53:55.021034+00:00",
		"updated_at": "2023-07-23T03:54:16.816558+00:00"
	}
],
`;

export const getCurrentUserCartResponse = `"data": {
	"id": 9,
	"created_at": "2023-07-22T16:30:16.009774+00:00",
	"user_id": "c0df7068-b85e-4ea7-a69c-286272ee083b",
	"updated_at": "2023-08-04T00:43:49.076777+00:00",
	"cart_products": [
		{
			"product_id": 3,
			"quantity": 1,
			"product_data": {
				"id": 3,
				"sku": 3,
				"category": { "name": "..." },
				"images": [...],
				"brand": { "name": "..." },
				"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
				"regular_price": 369.99,
				"sale_price": 249.99
				"reviews_quantity": 4,
				"reviews_average": 4.87,
			}
		},
		{
			"product_id": 14,
			"quantity": 1,
			"product_data": {
				"id": 14,
				"sku": 14,
				"category": { "name": "..." },
				"images": [...],
				"brand": { "name": "..." },
				"name": "Men's Sonoma Goods For Life Supersoft Modern-Fit Raglan Tee & Jogger Pants Pajama Set",
				"regular_price": 54.99,
				"sale_price": 21.6
				"reviews_quantity": 3,
				"reviews_average": 4.45
			}
		},
		{
			"product_id": 38,
			"quantity": 1,
			"product_data": {
				"id": 38,
				"sku": 38,
				"category": { "name": "..." },
				"images": [...],
				"brand": { "name": "..." },
				"name": "Lakitu Sky World Expansion Toy Set",
				"regular_price": 39.99,
				"sale_price": 39
				"reviews_quantity": 9,
				"reviews_average": 4.62
			}
		},
		...
	]
}
`;

export const getCurrentUserPurchaseResponse = `"data": [
	{
		"id": 77,
		"paid": true,
		"created_at": "2023-08-12T03:24:43.213638+00:00",
		"total": 249.94,
		"user_id": "b810e6fc-bb73-485f-bd42-1021c8d1b47a",
		"purchase_products": [
			{
				"product_id": 1,
				"quantity": 1,
				"product_data": {
					"id": 1,
					"sku": 1,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m"
				}
			},
			{
				"product_id": 2,
				"quantity": 1,
				"product_data": {
					"id": 2,
					"sku": 2,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt"
				}
			}
		]
	},
	...
]
`;

export const getCurrentUserPurchasesResponse = `"data": [
	{
		"id": 77,
		"paid": true,
		"created_at": "2023-08-12T03:24:43.213638+00:00",
		"total": 249.94,
		"user_id": "b810e6fc-bb73-485f-bd42-1021c8d1b47a",
		"purchase_products": [
			{
				"product_id": 1,
				"quantity": 1,
				"product_data": {
					"id": 1,
					"sku": 1,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m"
				}
			},
			{
				"product_id": 2,
				"quantity": 1,
				"product_data": {
					"id": 2,
					"sku": 2,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt"
				}
			}
		]
	},
	...
],
"count": 5
`;

export const createPurchaseResponse = `"data": [
	{
		"id": 81,
		"paid": true,
		"created_at": "2023-08-12T03:31:03.980895+00:00",
		"total": 249.94,
		"user_id": "b810e6fc-bb73-485f-bd42-1021c8d1b47a",
		"purchase_products": [
			{
				"product_id": 1,
				"quantity": 1,
				"product_data": {
					"id": 1,
					"sku": 1,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m"
				}
			},
			{
				"product_id": 2,
				"quantity": 1,
				"product_data": {
					"id": 2,
					"sku": 2,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt"
				}
			}
		]
	}
]
`;

export const getCurrentUserWishlistResponse = `"data": [
	{
		"id": 10,
		"created_at": "2023-07-22T16:38:03.784318+00:00",
		"user_id": "c0df7068-b85e-4ea7-a69c-286272ee083b",
		"updated_at": "2023-07-30T03:53:20.576738+00:00",
		"wishlist_products": [
			{
				"product_id": 10,
				"product_data": {
					"id": 10,
					"sku": 10,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "Morden Fort Modern Contemporary Love Seat",
					"regular_price": 669,
					"sale_price": 600
					"reviews_quantity": 6,
					"reviews_average": 3.95
				}
			},
			{
				"product_id": 24,
				"product_data": {
					"id": 24,
					"sku": 24,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "Facefx 360 Anti-Aging Device",
					"regular_price": 189,
					"sale_price": 160.65
					"reviews_quantity": 7,
					"reviews_average": 4.26
				}
			},
			{
				"product_id": 29,
				"product_data": {
					"id": 29,
					"sku": 29,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "6-Pc. Wake Up With Me Complete Brightening Morning Routine",
					"regular_price": 177,
					"sale_price": 177
					"reviews_quantity": 10,
					"reviews_average": 4.63
				}
			},
			{
				"product_id": 50,
				"product_data": {
					"id": 50,
					"sku": 50,
					"category": { "name": "..." },
					"images": [...],
					"brand": { "name": "..." },
					"name": "Women's Plaid Single-Breasted Walker Coat",
					"regular_price": 400,
					"sale_price": 239.99
					"reviews_quantity": 1,
					"reviews_average": 4.00
				}
			}
		]
	}
]
`;

export const getAllUsersResponse = `"data": [
	{
		"id": 1,
		"name": "Amy Neal",
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/default.png"
	},
	{
		"id": 2,
		"name": "Marco Lawrence",
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/default.png"
	},
	...
],
"count": 19
`;

export const getUserResponse = `"data": {
	"id": 28,
	"name": "New User",
	"photo": null
}
`;

export const updateCurrentUserResponse = `"data": {
	"photo": "...",
	"name": "...",
	"email": "..."
}
`;

export const signupResponse = `"data": {
	"user": {
		"id": "3d27c4ed-de5c-4357-95b9-b9d319295395",
		"aud": "authenticated",
		"role": "authenticated",
		"email": "new_user@example.com",
		"email_confirmed_at": "2023-08-17T04:02:53.985079597Z",
		"phone": "",
		"last_sign_in_at": "2023-08-17T04:02:53.989617556Z",
		"app_metadata": {
			"provider": "email",
			"providers": [
				"email"
			]
		},
		"user_metadata": {},
		"identities": [
			{
				"id": "3d27c4ed-de5c-4357-95b9-b9d319295395",
				"user_id": "3d27c4ed-de5c-4357-95b9-b9d319295395",
				"identity_data": {
					"email": "new_user@example.com",
					"sub": "3d27c4ed-de5c-4357-95b9-b9d319295395"
				},
				"provider": "email",
				"last_sign_in_at": "2023-08-17T04:02:53.982465875Z",
				"created_at": "2023-08-17T04:02:53.982499Z",
				"updated_at": "2023-08-17T04:02:53.982499Z"
			}
		],
		"created_at": "2023-08-17T04:02:53.980215Z",
		"updated_at": "2023-08-17T04:02:53.992795Z"
	},
	"session": {
		"access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IlBSVkZGT2RhTWpXYlVVMW8iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkyMjg4MTczLCJpYXQiOjE2OTIyNDQ5NzMsImlzcyI6Imh0dHBzOi8vd2t6eXJyYnp5eWxqdHZrYXlqeW4uc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjNkMjdjNGVkLWRlNWMtNDM1Ny05NWI5LWI5ZDMxOTI5NTM5NSIsImVtYWlsIjoibmV3X3VzZXJAZXhhbXBsZS5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTY5MjI0NDk3M31dLCJzZXNzaW9uX2lkIjoiOWQ2NWMyOTYtYjNiMy00NWRmLTkzMWQtYTJjOWRmZGRkYmU2In0.5dVzDJ_X27gZ-2v4cHEyiV53-X8jaLEy2C06A_TCihk",
		"token_type": "bearer",
		"expires_in": 43200,
		"refresh_token": "L19zo5paz0_hzuVyhTYRtw",
		"user": {
			"id": "3d27c4ed-de5c-4357-95b9-b9d319295395",
			"aud": "authenticated",
			"role": "authenticated",
			"email": "new_user@example.com",
			"email_confirmed_at": "2023-08-17T04:02:53.985079597Z",
			"phone": "",
			"last_sign_in_at": "2023-08-17T04:02:53.989617556Z",
			"app_metadata": {
				"provider": "email",
				"providers": [
					"email"
				]
			},
			"user_metadata": {},
			"identities": [
				{
					"id": "3d27c4ed-de5c-4357-95b9-b9d319295395",
					"user_id": "3d27c4ed-de5c-4357-95b9-b9d319295395",
					"identity_data": {
						"email": "new_user@example.com",
						"sub": "3d27c4ed-de5c-4357-95b9-b9d319295395"
					},
					"provider": "email",
					"last_sign_in_at": "2023-08-17T04:02:53.982465875Z",
					"created_at": "2023-08-17T04:02:53.982499Z",
					"updated_at": "2023-08-17T04:02:53.982499Z"
				}
			],
			"created_at": "2023-08-17T04:02:53.980215Z",
			"updated_at": "2023-08-17T04:02:53.992795Z"
		},
		"expires_at": 1692288173
	}
}
`;

export const loginResponse = `"data": {
	"session": {
		"access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IlBSVkZGT2RhTWpXYlVVMW8iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkwNzE5MDU4LCJpYXQiOjE2OTA2NzU4NTgsImlzcyI6Imh0dHBzOi8vd2t6eXJyYnp5eWxqdHZrYXlqeW4uc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImMwZGY3MDY4LWI4NWUtNGVhNy1hNjljLTI4NjI3MmVlMDgzYiIsImVtYWlsIjoiY2FuZGFjZUBleGFtcGxlLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNjkwNjc1ODU4fV0sInNlc3Npb25faWQiOiIxNDUzNDdlOS02MjgxLTRmNjEtOWI4Yy1lZDE2YzFhMDNmMjQifQ.Uz-N_SShMLWl9KJW8bz5XnW5Q0vm2lmRG7cB6HG9DE0",
		"token_type": "bearer",
		"expires_in": 43200,
		"refresh_token": "9S3THlcWestAL3IQ8Fi1tg",
		"user": {
			"id": "c0df7068-b85e-4ea7-a69c-286272ee083b",
			"aud": "authenticated",
			"role": "authenticated",
			"email": "candace@example.com",
			"email_confirmed_at": "2023-07-26T23:51:23.362501Z",
			"phone": "",
			"confirmed_at": "2023-07-26T23:51:23.362501Z",
			"last_sign_in_at": "2023-07-30T00:10:58.223440391Z",
			"app_metadata": {
				"provider": "email",
				"providers": [
					"email"
				]
			},
			"user_metadata": {},
			"identities": [
				{
					"id": "c0df7068-b85e-4ea7-a69c-286272ee083b",
					"user_id": "c0df7068-b85e-4ea7-a69c-286272ee083b",
					"identity_data": {
						"email": "candace@example.com",
						"sub": "c0df7068-b85e-4ea7-a69c-286272ee083b"
					},
					"provider": "email",
					"last_sign_in_at": "2023-07-26T23:51:23.360882Z",
					"created_at": "2023-07-26T23:51:23.360919Z",
					"updated_at": "2023-07-26T23:51:23.360919Z"
				}
			],
			"created_at": "2023-07-26T23:51:23.359971Z",
			"updated_at": "2023-07-30T00:10:58.225014Z"
		},
		"expires_at": 1690719058
	}
}
`;
