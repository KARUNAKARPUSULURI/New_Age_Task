import React from 'react'
import Coleft from "../images/left.png";
import CoRight from "../images/right.png"
const ColumnBoxes = () => {
    return (
        <div className='paren'>
            <div className='grid1'>
                <div className='grid1-item'>
                    <div className='card1'>
                        <img className='card1-img' src={Coleft} />
                        <div card1-content>
                            <h3 className='card1-header'>Lorem Ipsum is simply a dummy text</h3>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam architecto accusantium quaerat nemo modi? Quisquam nihil incidunt, facilis, fugiat ipsum, vitae ea mollitia architecto commodi sapiente eum?</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className='grid1-item'>
                    <div className='card1'>
                        <img className='card1-img' src={CoRight} />
                        <div card1-content>
                            <h3 className='card1-header'>Lorem Ipsum is simply a dummy text</h3>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam architecto accusantium quaerat nemo modi? Quisquam nihil incidunt, facilis, fugiat ipsum, vitae ea mollitia architecto commodi sapiente eum?</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColumnBoxes;
