# eCommerce-APIs

APIs for an eCommerce Application

1. Auth Endpoints
    Signup: POST("/ecomm/api/v1/auth/signup")
    Signin: POST("/ecomm/api/v1/auth/signin")

2. Category Endpoints
    Create Category: POST("/ecomm/api/v1/categories")
    Get all Categories: GET("/ecomm/api/v1/categories")
    Get Category for Id: GET("/ecomm/api/v1/categories/:id")
    Update Category for Id: PUT("/ecomm/api/v1/categories/:id")
    Delete Category for Id: DELETE("/ecomm/api/v1/categories/:id")

3. Product Endpoints
    Create Product: POST("/ecomm/api/v1/products")
    Get all Products: GET("/ecomm/api/v1/products")
    Filter Products: GET("/ecomm/api/v1/products/filter")
    Get Product for Id: GET("/ecomm/api/v1/products/:id")
    Update Product for Id: PUT("/ecomm/api/v1/products/:id")
    Delete Product for Id: DELETE("/ecomm/api/v1/products/:id")

4. Cart Endpoints
    Get Cart: GET("/ecomm/api/v1/carts/:id")
    Update Cart: PUT("/ecomm/api/v1/carts/:id")