const bodyJson =
    `
    {
    "body": {
        "div": [{
                "-id": "carouselIndicators",
                "-class": "carousel slide position-absolute",
                "-data-ride": "carousel",
                "-data-interval": "5000",
                "ol": {
                    "-class": "carousel-indicators",
                    "li": [{
                            "-data-target": "#carouselIndicators",
                            "-data-slide-to": "0",
                            "-class": "active"
                        },
                        {
                            "-data-target": "#carouselIndicators",
                            "-data-slide-to": "1"
                        },
                        {
                            "-data-target": "#carouselIndicators",
                            "-data-slide-to": "2"
                        }
                    ]
                },
                "div": {
                    "-class": "carousel-inner",
                    "div": [{
                            "-class": "carousel-item active",
                            "img": {
                                "-src": "./img/front_page1.png",
                                "-class": "d-block w-100",
                                "-alt": "..."
                            },
                            "div": {
                                "-class": "carousel-caption d-none d-md-block"
                            }
                        },
                        {
                            "-class": "carousel-item",
                            "img": {
                                "-src": "./img/front_page2.png",
                                "-class": "d-block w-100",
                                "-alt": "..."
                            }
                        },
                        {
                            "-class": "carousel-item",
                            "img": {
                                "-src": "./img/front_page3.png",
                                "-class": "d-block w-100",
                                "-alt": "..."
                            }
                        }
                    ]
                }
            },
            {
                "-class": "container",
                "nav": {
                    "-id": "navbar"
                },
                "article": {
                    "-id": "article",
                    "-class": "text-white"
                }
            }
        ]
    }
}
`