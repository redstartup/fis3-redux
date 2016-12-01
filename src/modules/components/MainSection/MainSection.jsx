import React,{ Component } from 'react'

class MainSection extends Component {
    render() {
        return (
            <section className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="number">12</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="number">3</div>
                        </div>
                        <div className="col-3">
                            <div className="number">3</div>
                        </div>
                        <div className="col-3">
                            <div className="number">3</div>
                        </div>
                        <div className="col-3">
                            <div className="number">3</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="number">4</div>
                        </div>
                        <div className="col-4">
                            <div className="number">4</div>
                        </div>
                        <div className="col-4">
                            <div className="number">4</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="number">6</div>
                        </div>
                        <div className="col-4">
                            <div className="number">4</div>
                        </div>
                        <div className="col-2">
                            <div className="number">2</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <div className="number">2</div>
                        </div>
                        <div className="col-10">
                            <div className="number">10</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainSection
