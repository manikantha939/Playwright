class APIUtils{
    
    constructor(apiContext, loginPayload){
        this.apiContext=apiContext;
        this.loginPayload=loginPayload
    }

    async getToken(){
        const loginResponse=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
                {
                    data: this.loginPayload
                }
            )
            const loginResponseJson= await loginResponse.json();
            const token=loginResponseJson.token;
            console.log(token);
            return token;
    }

    async createOrder(createOrderPayload){
        let response={};
        response.token= await this.getToken();
        const orderAPIResponse=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
               {
                data:createOrderPayload,
                headers:{
                    "Authorization":response.token,
                    "content-type": "application/json"
                }
               }
            )
            const orderAPIJson=await orderAPIResponse.json();
            console.log(orderAPIJson)
            const orderId=orderAPIJson.orders[0];
            response.orderId=orderId;
            return response;
    }
}

module.exports={APIUtils}