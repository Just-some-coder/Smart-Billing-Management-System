import img2 from "./assets/img_1.png";

function Insights(){
    return(
        <>
            <section className={'overview-section'}>
                <h2>
                    Overview
                </h2>
                <table className={'overview-table'}>
                    <tr>
                        <td>
                            ₹21,190
                            <br/>
                            <span style={{color: '#7bff64'}}>Total Profit</span>
                        </td>
                        <td>
                            ₹18,300
                            <br/>
                            <span style={{color: '#ff7d21'}}>Revenue</span>
                        </td>
                        <td>
                            ₹17,432
                            <br/>
                            <span style={{color: '#7bff64'}}>Sales</span>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            ₹1,17,432
                            <br/>
                            <span style={{color: '#7bff64'}}>Net Purchase Value</span>
                        </td>
                        <td>
                            ₹80,432
                            <br/>
                            <span style={{color: '#ff7000'}}>Net Sales Value</span>
                        </td>
                        <td>
                            ₹30,432
                            <br/>
                            <span style={{color: '#7bff64'}}>MoM Profit</span>
                        </td>
                        <td>
                            ₹1,10,432
                            <br/>
                            <span style={{color: '#7bff64'}}>YoY Profit</span>
                        </td>
                    </tr>
                </table>
            </section>

            <section className={'top-selling-stock-section'}>
                <h2>Top Selling Stock</h2>
                <table className={'top-selling-stock-table'}>
                    <tr>
                        <th>Name</th>
                        <th>Sold Quantity</th>
                        <th>Remaining Quantity</th>
                        <th>Price</th>
                    </tr>

                    <tr>
                        <td>Surf Excel</td>
                        <td>30</td>
                        <td>12</td>
                        <td>
                            <span style={{color: '#7bff64'}}>₹100</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Rin</td>
                        <td>21</td>
                        <td>15</td>
                        <td>
                            <span style={{color: '#7bff64'}}>₹207</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Parle G</td>
                        <td>19</td>
                        <td>17</td>
                        <td>
                            <span style={{color: '#7bff64'}}>₹105</span>
                        </td>
                    </tr>


                </table>
            </section>

            <section className={'best-selling-product-section'}>
                <h2>Best Selling Product</h2>
                <table className={'best-selling-product-table'}>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Remaining Quantity</th>
                        <th>Turn Over</th>
                        <th>Increased By</th>
                        <th>Product ID</th>
                    </tr>

                    <tr>
                        <td>
                            Tomato
                        </td>
                        <td>
                            Vegetable
                        </td>
                        <td>
                            225 KG
                        </td>
                        <td>
                            ₹17,000
                        </td>
                        <td>
                            <span style={{color: '#7bff64'}}>2.3%</span>
                        </td>
                        <td>
                            23567
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Onion
                        </td>
                        <td>
                            Vegetable
                        </td>
                        <td>
                            200 KG
                        </td>
                        <td>
                            ₹12,000
                        </td>
                        <td>
                            <span style={{color: '#7bff64'}}>1.3%</span>
                        </td>
                        <td>
                            56841
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Milk
                        </td>
                        <td>
                            Dairy
                        </td>
                        <td>
                            369 ltr
                        </td>
                        <td>
                            ₹12,177
                        </td>
                        <td>
                            <span style={{color: '#7bff64'}}>6.9%</span>
                        </td>
                        <td>
                            23567
                        </td>
                    </tr>

                </table>
            </section>

            <section className={'graph'}>
                <h2>Sales Chart</h2>
                <img src={img2} width={'400px'} height={'250px'} />
            </section>
        </>
    );
}

export default Insights
