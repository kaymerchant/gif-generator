import React, { Component } from 'react';
import classes from '../MainPage/MainPage.module.css'
import axios from 'axios'


class MainPage extends Component{  

  state = {
    category : null,
    typeOfGif : ' ',
    imageLink : [],
    isclicked : false,
    modalStatus : false,
    altImage : null
  }

  onloadHandler = () => {
    this.setState({isclicked: true})
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=QzwdaWAASennLz0xLqS1NBLUOHaGVjxs&limit=24')
    .then(response => {
        for(let i = 0; i < 20; i++) {
          var link = response.data.data[i].images.downsized_large.url;
          var imageList = [...this.state.imageLink]
          imageList.push(link);
          this.setState({imageLink : imageList})
        }
        return;
    })
  }

  categoryHandle = (event) => {
      this.setState({category:event.target.value})
  }

  setImagegifName = (event) => {
    var gifName =  event.target.value
    this.setState({typeOfGif:gifName});

  }

  imageDisplayHandler = () => {
    return (<div className={classes.imageLayout}>
        {this.state.imageLink.map((images, index) => {
        return ( 
                <img key= {index} 
                src={images} 
                alt={index}
                onClick={this.enlargeImageHandler} className={classes.imageSize}/>
                )
        })}
        </div>)
  }

  getGifHandler = () => {
    let category = this.state.category;
    let gifType = this.state.typeOfGif;
    if(category === null) {
        alert("Please select category");
        return;
    }

    if(this.state.imageLink != null) {
        this.setState({imageLink : []})
    }
    axios.get('https://api.giphy.com/v1/'+ category +'/search?api_key=QzwdaWAASennLz0xLqS1NBLUOHaGVjxs&q=' + gifType + '&limit=24')
    .then(response => {
        for(let i = 0; i < 24; i++) {
          var link = response.data.data[i].images.downsized_large.url;
          var imageList = [...this.state.imageLink]
          imageList.push(link);
          this.setState({imageLink : imageList})
        }
    })
  }

  enlargeImageHandler= (event) => {    
        if(!this.state.modalStatus && this.state.altImage === null) {
            event.target.className=classes.modal
            this.setState({modalStatus:true})
            this.setState({altImage:event.target.alt})
        }
        else if (this.state.modalStatus && this.state.altImage === event.target.alt) {
            event.target.className=classes.imageSize
            this.setState({modalStatus:false})
            this.setState({altImage:null})
            console.log("2");
        }   
  }

render() {
    return (
        <div>
            <div className={classes.searchBar}>
                <label>
                <input type="radio" value="gifs" name = "category" onChange={this.categoryHandle}/>
                    Gifs
                </label>
                <label>
                <input type="radio" value="stickers" name = "category" onChange={this.categoryHandle}/>
                    Stickers
                </label>
                <div>
                    <input type="text"  onChange={this.setImagegifName}/><br/>
                    <input type="button" value="Let's Go!" onClick={this.getGifHandler} className={classes.button}/>
                </div>
            </div>
            {this.state.isclicked ? this.imageDisplayHandler() : this.onloadHandler()}
        </div>
  );
  }
}

export default MainPage;