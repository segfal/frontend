import React,{useState,useEffect} from "react";
import  styles from "../styles/Home.module.css";



class Box{
  color: string; //color of the box
  height: number; //height of the box
  width: number; //width of the box


  constructor(color: string = "red", height: number = 10, width: number = 10) {
    this.color = color; 
    this.height = height;
    this.width = width;
  }
  

  getHeight() { return this.height; } //returns the height of the box
  getWidth() { return this.width; } //returns the width of the box
  getColor() { return this.color; } //returns the color of the box
  getArea() { return this.height * this.width; } //returns the area of the box
  getPerimeter() { return 2 * (this.height + this.width); } //returns the perimeter of the box
  getVolume() { return this.height * this.width * this.width; }
  getSurfaceArea() { return 6 * (this.height * this.width); }
  getDiagonal() { return Math.sqrt((this.height * this.height) + (this.width * this.width)); }
  




}

const App = () => {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [color, setColor] = useState("red");
  const [boxList, setBoxList] = useState<Box[]>([]); //list of boxes



  return (
    <div>
      <h1>Box Generator</h1>
      <div>
        <label>Height: </label>
        <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
        
        <label>Width: </label>
        <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />

        <label>Color: </label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value )} />

        <button onClick={() => setBoxList([...boxList, new Box(color, height, width)])}>Add Box</button>

        <div>
          {
          boxList.map((box, index) => (
            <div key={index} className={styles.container}>
              <div>Height: {box.getHeight()}</div>
              <div>Width: {box.getWidth()}</div>
              <div>Color: {box.getColor()}</div>
              <div>Area: {box.getArea()}</div>
              <div>Perimeter: {box.getPerimeter()}</div>
              <div>Volume: {box.getVolume()}</div>
              <div>Surface Area: {box.getSurfaceArea()}</div>
              <div>Diagonal: {box.getDiagonal()}</div>
              <h1> Box </h1>
              <div style={{backgroundColor: box.getColor(), height: box.getHeight()*100, width: box.getWidth()*100, borderRadius :5}}></div>
              
            </div>
          ))}


</div>
</div>
     

    </div>
  ); //end return
} //end App



export default App;//end export