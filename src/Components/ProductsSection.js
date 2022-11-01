import React, { useEffect, useState } from 'react'


const ProductsSection = () => {
    const [list, setList] = useState();
    console.log(list);

    const products = async () => {
        const response = await fetch("https://shopnewage.com/collections/home-bar/products/home-bar-3-drawer-cabinet-21-61003.json");
        // console.log(response);
        const jsonData = await response.json();
        console.log(jsonData, "getting data");


        const response2 = await fetch("https://shopnewage.com/collections/home-bar/products/home-bar-2-door-with-drawer-cabinet-21-61004.json");
        console.log(response2);
        const jsonData2 = await response2.json();
        console.log(jsonData2, "getting data");


        const response3 = await fetch("https://shopnewage.com/collections/home-bar/products/home-bar-3-drawer-cabinet-21-61003.json");
        console.log(response3);
        const jsonData3 = await response3.json();
        console.log(jsonData3, "getting data");


        const response4 = await fetch("https://shopnewage.com/collections/home-bar/products/home-bar-wall-wine-rack-cabinet-21-61000.json ");
        console.log(response4);
        const jsonData4 = await response4.json();
        console.log(jsonData4, "getting data");


        const response5 = await fetch("https://shopnewage.com/collections/home-bar/products/home-bar-double-display-cabinet-42-61022.json");
        console.log(response5);
        const jsonData5 = await response5.json();
        console.log(jsonData5, "getting data");


        const response6 = await fetch("https://shopnewage.com/collections/home-bar/products/home-bar-wine-storage-cabinet-21-61023.json");
        console.log(response6);
        const jsonData6 = await response6.json();
        console.log(jsonData6, "getting data");

        let data = [
            jsonData, jsonData2, jsonData3, jsonData4, jsonData5, jsonData6
        ];
        setList(data);
    }
    useEffect(() => {
        products();
    }, []);
    console.log(list, "list")

    return (
        <div>
            <div className='productHead mt-5'>
            <h1>Shop Home Bars</h1>
            <p>Choose from a variety of different styles to suit your home</p>
            </div>
            <div className='CardContainer'>
                {list && list.length > 0 && list.map((values) => {
                    console.log(values, list, "values");
                    return (
                        <>
                            <div className='cardGrid'>
                                <article>
                                    {/* <div className='cardImage'> */}
                                    <img width={350} height={250} src={values.product.image.src} alt="img" />
                                    {/* </div> */}
                                    <div className='cardInfo'>
                                        <strike>{values.product.variants[0].compare_at_price}</strike>
                                        <h2>${values.product.variants[0].price}</h2>
                                        <p>{values.product.title}</p>
                                        <button>BUY NOW</button>
                                    </div>
                                </article>
                            </div>
                        </>
                    );
                })}

                {/* <div className='box'>
                <div className='image'>
                    <img src={products.image} alt="img" />
                </div>
                <strike>$466.99</strike>
                <h2>$399.99</h2>
                <p>{products.title}</p>
                <button>BUynow</button>
            </div> */}
            </div>
        </div>

    )
}

export default ProductsSection;
