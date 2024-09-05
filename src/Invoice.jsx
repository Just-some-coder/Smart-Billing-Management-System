import {useState} from "react";

function Invoice() {

    const [invoiceData, setInvoiceData] = useState({
        issue_date: "",
        due_date: "",
        sender_name: "",
        receiver_name: "",
        sender_address: "",
        receiver_address: "",
        products: [
            {
                name: "",
                quantity: "",
                price: "",
                amount: ""
            }
        ]
    });

    // const [item, setItem] = useState({
    //     name: "",
    //     quantity: "",
    //     price: "",
    //     amount: "",
    // });
    //
    // const handleItemChange = (event) => {
    //     const id = event.target.id;
    //     const value = event.target.value;
    //     let data = {...invoiceData, [id]: value};
    //     data["amount"] = data["price"] * data["quantity"];
    //     setItem(data);
    // }
    //
    // const addItem = () => {
    //     setItemList([...itemList, item]);
    // }

    const handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;

        let data = {...invoiceData, [id]: value};
        setInvoiceData(data);
        console.log(data);
    }

    return (
        <>
            <section className={'invoice-info-section'}>
                <ul>
                    <li>
                        <h2>Issue Date</h2>
                        <input id="issue_date" type="date" placeholder={'24-08-05'} onChange={handleChange}
                               value={invoiceData.issue_date}/>

                        <h2>Due Date</h2>
                        <input type="date" placeholder="Password" id={"due_date"} onChange={handleChange}
                               value={invoiceData.due_date}/>
                    </li>

                    <li>
                        <h2>Sender's Name</h2>
                        <input type="text" placeholder="Dory" id={"sender_name"} onChange={handleChange}
                               value={invoiceData.sender_name}/>
                    </li>

                    <li>
                        <h2>Sender's Address</h2>
                        <input type="text" placeholder="P. Sherman 42 Wallaby Way, Syndey" id={"sender_address"}
                               onChange={handleChange} value={invoiceData.sender_address}/>
                    </li>

                    <li>
                        <h2>Receiver's Name</h2>
                        <input type="text" placeholder="Walter White" id={"receiver_name"} onChange={handleChange}
                               value={invoiceData.receiver_name}/>
                    </li>


                    <li>
                        <h2>Receiver's Address</h2>
                        <input type="text" placeholder="308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104."
                               id={"receiver_address"} onChange={handleChange} value={invoiceData.receiver_address}/>
                    </li>
                </ul>

                <span className={"outer"}>
                    <span className={"inner"}>
                        <h3>Name</h3>
                        <input type="text" id={"name"} />

                        <h3>Quantity</h3>
                        <input type="text" id={"name"} />
                    </span>

                    <span className={"inner"}>
                        <h3>Price</h3>
                        <input type="text" id={"name"}/>

                        <h3>Discount</h3>
                        <input type="text" id={"name"}/>
                    </span>
                </span>

                <button className={"item-add-button"}>
                    Add Item
                </button>


            </section>

            <section className={'invoice-info-preview'}>
                <h1 className={'newsreader'}>Invoice <span style={{color: '#7bff64'}}>#394</span></h1>
                <h3>Issue <span style={{color: "#7bff64"}}>{invoiceData.issue_date} </span>
                    ➡︎
                    Due <span style={{color: "#7bff64"}}>{invoiceData.due_date}</span>
                </h3>
                <p className={"address-info"}>
                    <h3>
                        From<br/>
                        <span style={{color: "#7bff64"}}>{invoiceData.sender_name}</span>
                        <br/>
                        <span style={{color: "#7bff64"}}>{invoiceData.sender_address}</span> <br/>
                    </h3>
                    <h3>
                        To<br/>
                        <span style={{color: "#7bff64"}}>{invoiceData.receiver_name}</span>
                        <br/>
                        <span style={{color: "#7bff64"}}>{invoiceData.receiver_address}</span>
                        <br/>
                    </h3>
                </p>

                <table className={'invoice-table'}>
                    <tr>
                        <th>Products</th>
                        <th>Rate</th>
                        <th>Qty</th>
                        <th>Amount</th>
                    </tr>

                    <tr>
                        <td>Lays</td>
                        <td>₹20</td>
                        <td>50</td>
                        <td>₹1000</td>
                    </tr>

                    <tr>
                        <td>Lays</td>
                        <td>₹20</td>
                        <td>50</td>
                        <td>₹1000</td>
                    </tr>

                    <tr>
                        <td>Lays</td>
                        <td>₹20</td>
                        <td>50</td>
                        <td>₹1000</td>
                    </tr>


                </table>

                <h2 className={"total"}>Total : ₹3000</h2>
            </section>
            <button className={"get-invoice-button"}>Get Invoice</button>
        </>
    );
}

export default Invoice
