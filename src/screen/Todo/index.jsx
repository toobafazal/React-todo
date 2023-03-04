import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


const Todo = () => {
    const [item, setItem] = useState("")
    const [list, setList] = useState([])

    const addItem = () => {
      console.log(item)
        setList([...list,{item}])
        setItem("")   
      }
      console.log(list,"list")
      let deleteItem = (i) => {
        list.splice(i, 1)
        setList([...list])
      };
      
        let editItem = (e,i) =>{
          let newValue = prompt("Edit the text", e);
          list[i].item = newValue;
          setList([...list])
          };
      let deleteAll = () => {
        setList([]);
      };
      let checkItem = (e) => {
        e.checked = !e.checked
        setList([...list])
      }

  return (
    <>
      <div className="parent">
        <div className="main">
          <div className="heading">Todo App</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Input 
            type="text"
            className="input" 
            placeholder="Add Todo"
            value={item}
            onChange={(e) => {
                setItem(e.target.value)
             }}  
            />
            <Button label="Add" className="add" onClick={addItem} />
          </div>
          <div>
        {list.map((e, i) => {
          return <p key={i} className={e.checked ? "list selected" : "list"} >{e.item}
            <span>
              {e.checked?<CheckBoxIcon sx={{ marginLeft: "10px" }} onClick={() => checkItem(e)} />:<CheckBoxOutlineBlankIcon sx={{ marginLeft: "10px" }} onClick={() => checkItem(e)} />}
              
              <EditIcon sx={{ marginLeft: "10px" }}  onClick={e.checked ? null : () => editItem(e.text, i)} />
              <DeleteIcon sx={{ marginLeft: "10px" }} onClick={e.checked ? null : () => deleteItem(i)} />
            </span>
          </p>
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <Button sx={{ margin: "20px" }} className="error" variant="contained" onClick={deleteAll} label="Delete All"/>
      </div>

        </div>
      </div>
    </>
  );
};

export default Todo;
