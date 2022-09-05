import React from 'react';
import './Table.css';
import Plan from './Plan';

class Todo extends React.Component {

    state = {
        items: [],
        text: ""
    }
    handelechange = (e) => {
        this.setState({ text: e.target.value })

    }
    handleSubmit = (e) => {
        if (this.state.text !== "") {
            const items = [...this.state.items, this.state.text];
            this.setState({ items: items, text: "" })
        }
    }

    render() {
        return (
            <>
                <div className='container'>
                    <table className='tbl'>
                        <div className='card'>
                            <div className='card-body'>
                                <h2 style={{ color: "red", marginLeft: "100px" }}>today's plan</h2>
                                <input type="text" value={this.state.text} onChange={this.handelechange} /><br />
                                <input type="button" id="btn" value="Add" style={{ color: "red" }} onSubmit={this.handleSubmit} />
                                {
                                    this.state.items.map((value,i) => {
                                        return <Plan key={i} id={i} value={value} />
                                    })
                                }
                            </div>
                        </div>
                    </table>
                </div>
            </>
        )
    }
}

export default Todo;
