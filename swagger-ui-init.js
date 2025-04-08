
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/backlink-checker": {
        "get": {
          "operationId": "BacklinkCheckerController_getBacklinks",
          "summary": "Check backlinks of a given website",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to check for backlinks",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "backlink-checker"
          ]
        }
      },
      "/rank-checker": {
        "get": {
          "operationId": "RankCheckerController_getRank",
          "summary": "Check the rank of a given website for a specified keyword",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to check the rank for",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "keyword",
              "required": true,
              "in": "query",
              "description": "Keyword to check the rank against",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "rank-checker"
          ]
        }
      },
      "/rank-checker/keywords": {
        "get": {
          "operationId": "RankCheckerController_getKeywords",
          "summary": "Get keywords associated with a given website",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to get keywords for",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "rank-checker"
          ]
        }
      },
      "/seo-audit": {
        "get": {
          "operationId": "SeoAuditController_audit",
          "summary": "Perform an SEO audit on a given website",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to audit",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "seo-audit"
          ]
        }
      },
      "/sitemap-generator": {
        "get": {
          "operationId": "SitemapGeneratorController_generateSitemap",
          "summary": "Generate an XML sitemap for a given website",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to generate sitemap for",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "sitemap-generator"
          ]
        }
      },
      "/competitor-analysis": {
        "get": {
          "operationId": "CompetitorAnalysisController_analyze",
          "summary": "Analyze and compare competitor websites' SEO performance",
          "parameters": [
            {
              "name": "urls",
              "required": true,
              "in": "query",
              "description": "Comma-separated list of competitor URLs to analyze",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "keyword",
              "required": true,
              "in": "query",
              "description": "Keyword to check the rank against",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "competitor-analysis"
          ]
        }
      },
      "/page-speed-analyzer": {
        "get": {
          "operationId": "PageSpeedAnalyzerController_analyze",
          "summary": "Analyze the page speed of a given website",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to analyze",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "page-speed-analyzer"
          ]
        }
      },
      "/content-optimization": {
        "get": {
          "operationId": "ContentOptimizationController_optimize",
          "summary": "Analyze and optimize content for a given website",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to analyze",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "content-optimization"
          ]
        }
      },
      "/internal-linking": {
        "get": {
          "operationId": "InternalLinkingController_analyze",
          "summary": "Analyze internal linking structure of a given website",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to analyze",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "internal-linking"
          ]
        }
      },
      "/social-media-integration": {
        "get": {
          "operationId": "SocialMediaIntegrationController_analyze",
          "summary": "Analyze social media integration of a given website",
          "parameters": [
            {
              "name": "url",
              "required": true,
              "in": "query",
              "description": "Website URL to analyze",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "social-media-integration"
          ]
        }
      }
    },
    "info": {
      "title": "SEO TOOLS API",
      "description": "All seo checking tool API of a particular website. PLEASE DO NOT TEST WITH SUBDOMAIN",
      "version": "1.0",
      "contact": {
        "name": "SEO TOOLS API",
        "url": "https://github.com/SEO-Tools-Api",
        "email": "oguzhancart1@gmail.com"
      }
    },
    "tags": [],
    "servers": [],
    "components": {
      "schemas": {}
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
