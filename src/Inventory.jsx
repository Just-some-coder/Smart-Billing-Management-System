import {useState} from "react";

function Inventory(){
    const [stockData, setStockData] = useState(
        [
            {
                id: 48321,
                name: "Kurkure",
                price: 20,
                quantity: 12,
                expiry: "2024-10-15",
                availability: false
            },
            {
                id: 15789,
                name: "Lays",
                price: 20,
                quantity: 67,
                expiry: "2024-11-01",
                availability: true
            },
            {
                id: 64213,
                name: "Maggi",
                price: 15,
                quantity: 34,
                expiry: "2024-10-15",
                availability: true
            },
            {
                id: 90475,
                name: "Bournvita",
                price: 250,
                quantity: 0,
                expiry: "2024-08-10",
                availability: false
            },
            {
                id: 31826,
                name: "Red Bull",
                price: 150,
                quantity: 0,
                expiry: "2024-09-20",
                availability: true
            },
            {
                id: 77504,
                name: "Coca Cola",
                price: 40,
                quantity: 22,
                expiry: "2024-11-05",
                availability: true
            },
            {
                id: 26389,
                name: "Surf Excel",
                price: 450,
                quantity: 86,
                expiry: "2024-10-25",
                availability: true
            },
            {
                id: 40712,
                name: "Colgate",
                price: 80,
                quantity: 0,
                expiry: "2024-09-01",
                availability: false
            }
        ]
    );

    const tempInitialState = {

    }

    const [tempItem, setTempItem] = useState(tempInitialState);

    const handleChange = (event) =>{
        const value = event.target.value;
        const id = event.target.id;
        let temp = tempItem;
        temp[id] = value;
        setTempItem(temp);
        console.log(temp);
    }

    const updateStockData = () =>{
        let temp = [...stockData];
        temp.push(tempItem);
        setStockData(temp);
        setTempItem(tempInitialState);
    }

    return(
        <>
            <section>
                <div className="stock-container">
                    <h3 className={"stock-title"}>Products</h3>
                    <table className="stock-table">
                        <tr className="stock-table-header">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Expiry Date</th>
                            <th>Availability</th>
                        </tr>

                        {
                            stockData.map((item) => {
                                return (<tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>₹{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity  !== 0 ? item.expiry :
                                        <span style={{color: '#f40115'}}>Not Available</span>}</td>
                                    <td>{item.quantity !== 0 ? <span style={{color: '#7bff64'}}>In Stock</span> :
                                        <span style={{color: '#f40115'}}>Out Of Stock</span>}</td>
                                </tr>)
                            })
                        }
                    </table>
                </div>

                <div className={"add-stock-container"}>
                    <h2>Add New Product</h2>
                    <ul>
                        <li>
                            <label>Product Name</label>
                            <input type="text" id="name" placeholder="Enter product name" onChange={handleChange}/>
                        </li>
                        <li>
                            <label >Product ID</label>
                            <input type="text" id="id" placeholder="Enter product ID" onChange={handleChange}  />
                        </li>
                        <li>
                            <label>Price</label>
                            <input type="number" id="price" placeholder="Enter price"  onChange={handleChange}  />
                        </li>
                        <li>
                            <label>Quantity</label>
                            <input type="number" id="quantity" placeholder="Enter quantity" onChange={handleChange} />
                        </li>
                        <li>
                            <label>Expiry Date</label>
                            <input type="date" id="expiry" onChange={handleChange} />
                        </li>
                    </ul>

                    <button onClick={updateStockData}>Add</button>

                </div>

            </section>

        </>
    );
}

export default Inventory