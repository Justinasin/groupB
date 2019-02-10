//www.utilities-online.info/xmltojson/
const bodyJson =
  `{
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
}`

const navbarJson =
  `{
    "div": {
      "-class": "navbar navbar-expand-lg navbar-dark ",
      "a": {
        "-class": "navbar-brand",
        "-href": "#",
        "img": {
          "-src": "./img/VIZZY_logo.png",
          "-width": "150",
          "-height": "30",
          "-class": "d-inline-block align-top"
        }
      },
      "button": {
        "-class": "navbar-toggler btn-light",
        "-type": "button",
        "-data-toggle": "collapse",
        "-data-target": "#navbarSupportedContent",
        "-aria-controls": "navbarSupportedContent",
        "-aria-expanded": "false",
        "-aria-label": "Toggle navigation",
        "span": { "-class": "navbar-toggler-icon" }
      },
      "div": {
        "-class": "collapse navbar-collapse",
        "-id": "navbarSupportedContent",
        "ul": {
          "-class": "navbar-nav mr-auto",
          "li": [
            {
              "-class": "nav-item active",
              "a": {
                "-class": "nav-link text-white ",
                "-href": "#home",
                "#text": "HOME ",
                "span": {
                  "-class": "sr-only",
                  "#text": "(current)"
                }
              }
            },
            {
              "-class": "nav-item",
              "a": {
                "-class": "nav-link text-white",
                "-href": "#products",
                "#text": "PRODUCTS"
              }
            },
            {
              "-class": "nav-item",
              "a": {
                "-class": "nav-link text-white",
                "-href": "#templates",
                "#text": "TEMPLATES"
              }
            },
            {
              "-class": "nav-item",
              "a": {
                "-class": "nav-link text-white",
                "-href": "#pricing",
                "#text": "PRICING"
              }
            }
          ]
        },
        "form": {
          "-class": "form-inline my-2 my-lg-0",
          "button": [
            {
              "-class": "btn my-2 my-sm-0 text-white",
              "-type": "submit",
              "#text": "SIGN IN"
            },
            {
              "-class": "btn btn-light my-2 my-sm-0",
              "-type": "submit",
              "#text": "SIGN UP"
            }
          ]
        }
      }
    }
  }`

const articleJson1 =
  `{    
    "div": {
        "div": 
        {
            "-class": "row",
            "div": [
            {
                "-class": "col",
                "h1": {
                "-class": "display-4",
                "#text": "Create Stunning Visual Media"
                },
                "p": [
                    {
                    "#text": "Super simpletool to create trendy videos and pictures for your ads, social media, blogs and websites."
                    },
                    {"#text": "Make your project stand out!"}
                ]
            },
            { "-class": "col-3" }
            ]
        },

      
        "button": {
        "-id": "createDesignBtn",
        "-type": "button",
        "-class": "btn btn-danger",
        "-data-toggle": "modal",
        "-data-target": "#Modal1",
        "#text": "CREATE DESIGN"
        }
    }      
  }`

const modalJson =
  `{
    "div": {
      "-class": "modal fade",
      "-id": "Modal1",
      "-tabindex": "-1",
      "-role": "dialog",
      "-aria-labelledby": "Modal1Label",
      "-aria-hidden": "true",
      "div": {
      "-class": "modal-dialog modal-dialog-centered modal-lg",
      "-role": "document",
      "div": {
          "-class": "modal-content",
          "div": [
          {
              "-class": "modal-header",
              "h5": {
              "-class": "modal-title",
              "-id": "Modal1Label",
              "#text": "Create design"
              },
              "button": {
              "-type": "button",
              "-class": "close",
              "-data-dismiss": "modal",
              "-aria-label": "Close",
              "span": {
                  "-aria-hidden": "true",
                  "#text": "X"
              }
              }
          },
          {
              "-class": "modal-body",
              "p": "Please check at what phase you are and use our site accordingly",
              "img": {
              "-id": "modal1-immage",
              "-src": "./img/progress.jpg",
              "-alt": "progress"
              }
          },
          {
              "-class": "modal-footer",
              "button": [
              {
                  "-type": "button",
                  "-class": "btn btn-secondary",
                  "-data-dismiss": "modal",
                  "#text": "Foff"
              },
              {
                  "-type": "button",
                  "-class": "btn btn-primary",
                  "#text": "Pricing"
              }
              ]
          }
          ]
      }
      }
    }
}`

const articleJson2 = `{
    "div": {
        "-class": "row",
        "div": [
            {
                "-class": "col",
                "article": {
                    "-class": "text-white",
                    "h1": {
                        "-class": "display-4",
                        "#text": "Our Products"
                    },
                    "p": {
                        "#text": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odit? Esse tempore cum repellendus quidem rem, cumque eligendi dolore. Harum, doloremque expedita tempora necessitatibus maiores nam iure possimus molestiae eligendi!"
                    }
                }
            },
            {
                "-class": "col-3"
            }
        ]
    }
}`

const testJson = `{

"form": {
    "-class": "form-class",
    "button": [
      {
        "-class": "btn1-class",
        "#text": "BUTT 1"
      },
      {
        "-class": "btn2-class",
        "#text": "BUTT 2"
      }
    ]
  }
}`