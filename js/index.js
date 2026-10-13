// ^ html element


var productnameinput = document.getElementById("productname");
var productcategoryinput = document.getElementById("category");
var productpriceinput = document.getElementById("price");
var productdescriptioninput = document.getElementById("description");
var productimageinput = document.getElementById("productimage");
var ProductsContainer =  document.getElementById("productscontainer");
var productSearch= document.getElementById("searchProduct")


console.log(productnameinput);
console.log(productcategoryinput);
console.log(productdescriptioninput);
console.log(productpriceinput);
console.log(productimageinput);






// app variable

var ProductList=JSON.parse(localStorage.getItem('ProductList'))||[];

DisplayAllProducts();


//function
function addproduct()
{
    var product = {
        name: productnameinput.value,
        category:productcategoryinput.value,
        price:productpriceinput.value,
        description:productdescriptioninput.value,
        imagesrc:productimageinput.files[0].name
    }
       ProductList.push(product)   
       localStorage.setItem('ProductList', JSON.stringify(ProductList) )
       displayproduct(ProductList.length-1)
}



function displayproduct(index) {
    var ProductCardMarkup = ` <div class="col-md-6 col-lg-3">
                        <div class="product-card p-2 m rounded-3">
                            <img class="w-100 object-fit-contain rounded-2 bg-white mb-2" src="./images/${ProductList[index].imagesrc}"
                                alt="mobile">
                            <div class="product-info">
                                <div class="d-flex justify-content-center align-items-center">
                                    <h3 class="h5">${ProductList[index].name} </h3>
                                </div>

                                <div class=" py-2 align-content-center justify-content-between d-flex">
                                    <h4 class="h6">
                                        <i class="fa-solid fa-tags"></i>
                                        <span>${ProductList[index].category}</span>
                                    </h4>
                                    <span>${ProductList[index].price}</span>


                                </div>

                                <p class="text-secondary">
                                   ${ProductList[index].description}
                                </p>
                            </div>
                            <div class="d-flex gap-2">
                             <button class="btn w-100 btn-outline-primary">Update</button>
                            <button class="btn w-100 btn-outline-warning" onclick=deleteProduct(${index}) >Delete</button>   
                            </div>
                            

                        </div>


                    </div>`


 ProductsContainer.innerHTML+=ProductCardMarkup;
}
function DisplayAllProducts(){

    for(var i=0;i<ProductList.length;i++)
    {
        displayproduct(i);
    }


}
function deleteProduct(index){

    ProductList.splice(index,1)
    localStorage.setItem('ProductList',JSON.stringify(ProductList))
    ProductsContainer.innerHTML=""
    DisplayAllProducts();



}

function searchProducts(){
    ProductsContainer.innerHTML="";
    var searched = productSearch.value;
    for(var i=0 ;i<ProductList.length;i++){
        
        if(ProductList[i].name.toLowerCase().includes(searched.toLowerCase()))
        {   
            displayproduct(i);
        }


    }





}

