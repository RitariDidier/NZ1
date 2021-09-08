import React from "react";
import './form.css';
import List from './list';


class EditTeam extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        });
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text!==""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text: '',
                    key: ''
                }
            })
        }
    }
    deleteItem(key){
        const filteredItems =this.state.items.filter(item => item.key!==key);
        this.setState({
            items:filteredItems
        })
    }
    render(){
    return (

        <div className="form-container">
        <div className="form-content-left">
            <form className="form" onSubmit={this.addItem}>
                <h2>Create Group</h2>
                <div className="form-inputs">
                    <input type="text" className="form-input" name="groupName" placeholder="Group Name"></input>
                </div>
                <div className="form-inputs">
                    <h4 for="chooseP">Add a user</h4>
                <select className="form-input" name="groupName" value={this.state.currentItem.text} onChange={this.handleInput}>
                    <option Default hidden>Saved Names</option>
                    <option >Jim Bob</option>
                    <option >Bob Smith</option>
                    <option >Karina Rodgers</option>
                    <option >Mary Tariq</option>
                </select>
                </div>
                <div className="form-inputs">
                    <button type="submit" className="form-input-btn" >Add this user</button>
                </div>
                <div className="form-inputs">
                    <h4>Users added</h4>
                </div>
                <div className="form-inputs">
                    <List items = {this.state.items} deleteItem={this.deleteItem}></List>
                </div>
                <div className="form-inputs">
                    <button className="form-input-btn">Confirm Create Group</button>
                </div>
            </form>
        </div>
        <div className="form-content-right">
            <form className="form" onSubmit={this.addItem}>
        <h2>Edit Existing Group</h2>
        <div className="form-inputs">
        <select name="group-name" className="form-input">
            <option value="default">Taniwha Group</option>
        </select>
        </div>
            <div className="form-inputs">
            <input type="text" className="form-input" placeholder="Group Name"></input>
            </div>
            <div className="form-inputs">
                    <h4 for="chooseP">Add a user</h4>
                <select className="form-input" name="groupName" value={this.state.currentItem.text} onChange={this.handleInput}>
                    <option value="default" name="chooseP">Jim Bob</option>
                    <option>Collin curd</option>
                </select>
                </div>
            <div className="form-inputs">
                    <button className="form-input-btn">Add this user</button>
                </div>
                <div className="form-inputs">
                    <h4>Users added</h4>
                </div>
                <div className="form-inputs">
                    <List items = {this.state.items} deleteItem={this.deleteItem}></List>
                </div>
                <div className="form-inputs">
                    <button className="form-input-btn">Confirm Create Group</button>
                </div>
            </form>
        </div>
        </div>
        
    );
};
}
export default EditTeam;
