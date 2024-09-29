import React from "react"
import memesData from "/memesData.js"

export default function Meme(){
    
    // we need two inputs and one image with a button
    // the text will be on image and imge will be from the datafile and text 
    // will be from inputs where user will add data
    // so pur inouts and image are continuoulsy changing we need a state to maintain them and store their value so we will use one method to get random image doing some data raeding and so on
    // and then we need to know the etxt we will get thtat by things we learned in froms series and then we will use handleChange and this kind of function to deal with the changing text 
    let [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    });
    
    
    let [allMemeImages, setAllMemeImages] = React.useState(memesData);
    
    
    function handleChange(event){
        let {name,value} = event.target;
        setMeme((prevData)=>{
            return {
                ...prevData, 
                [name] : value
            }   
        })
    }
    
    function getMemeImage(){
        let length = memesData.data.memes.length;
        let randomNum = Math.floor(Math.random()*length)
        setMeme((prevMeme)=>{
            return ({
                ...prevMeme, 
                randomImage : allMemeImages.data.memes[randomNum].url
            })
        })
        }
    
    return (
        <main>
            <div className = "myForm">
                <div className  = "upDiv">
                    <label htmlFor="up">Up text</label>
                    <input 
                    id = "up" 
                    placeholder = "Shut Up"
                    name = "topText"
                    value = {meme.topText}
                    onChange = {handleChange}
                    />
                </div>
                <div className = "downDiv">
                    <label htmlFor="down">Down text</label>
                    <input 
                    id = "down"
                     placeholder = "And take your money"
                     name = "bottomText"
                    value = {meme.bottomText}
                    onChange = {handleChange}
                     />
                </div>
                <button onClick = {getMemeImage}>Get a new meme image  🖼</button>

            </div>
            <div className="ImageDiv">
                <img src={meme.randomImage} className="memeImage" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
// Making it form instead of div will actually clear up the form each time the button inside the 
// form is being clicked so we will be making it div