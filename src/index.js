import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import PicList from './components/pic_list';
import api from './api';

const clientId='4b19689470ca4f979e90eec448b30963';
const clientSecret='bfa6d61bb81d4d4eaac37f87de45f57b';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      pictures:[]
    };

    this.imageSearch('ilkerobi');

  }

imageSearch(username){
      // API endpoint for Instagram's popular images for the day.
      // The API requires a key that is defined as a property of the component.
      var url = `https://api.instagram.com/v1/media/popular?client_id=${clientId}&callback=?`;
      // Fetch some new images.
      $.getJSON(url, function(result) {
        console.log(result);
        if(!result || !result.data || !result.data.length){
          return;
        }
        var pictures = result.data.map(function(p){
          return {
            id: p.id,
            url: p.link,
            src: p.images.standard_resolution.url,
            title: p.caption ? p.caption.text : '',
            likes:p.likes.count
          };
        });
        this.setState({pictures:pictures});
      }.bind(this));
};

  render(){
    const imageSearch=_.debounce((username)=>{this.imageSearch(username)},300);
            return (
              <div>
              <SearchBar />
              <PicList
              pictures={this.state.pictures}
              />
              </div>
              );
          }
    }

ReactDOM.render(<App />,document.querySelector('.container'));
