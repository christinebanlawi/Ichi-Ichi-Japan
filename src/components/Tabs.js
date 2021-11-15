import React, { useState } from 'react'

function Tabs(props) {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="tabs-container">
            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odio eos. Hic sapiente labore temporibus tenetur dolorem, ab ducimus, repellat, incidunt beatae aperiam illum quae.</p>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus ratione eos perferendis quidem at id, voluptas ullam, incidunt minus ex! Placeat a excepturi voluptatem!</p>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum fuga mollitia, pariatur nobis maxime maiores eum recusandae ipsa voluptate id, voluptatum voluptas reiciendis quod!</p>
                </div>
                <div className={toggleState === 4 ? "content active-content" : "content"}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quibusdam reprehenderit nostrum vel fuga molestiae. Eum totam autem, fuga aut distinctio minima obcaecati iste.</p>
                </div>
            </div>
            <div className="tabs-title">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    2018
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    2019
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    2020
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    2021
                </button>
            </div>
        </div>
    )
}

export default Tabs