class OrdersPage{
    constructor(page){
        this.orderTableBody=page.locator("tbody");
        this.orderTableRow=page.locator("tbody tr");
        this.orderIdDetails=page.locator("div .col-text");
    }

    async verfiyOrder(expectedOrderId){
        await this.orderTableBody.first().waitFor();
        const rows=this.orderTableRow;
        const count1= await rows.count();
        for(let i=0;i<count1;i++){
        const rowOrderId=await rows.nth(i).locator("th").textContent();
            if(expectedOrderId.includes(rowOrderId)){
                await rows.nth(i).locator("button").first().click();
                break;
            }   
        }
        const orderIdDetails=await this.orderIdDetails.textContent()
        return orderIdDetails;
    }


}
module.exports={OrdersPage}