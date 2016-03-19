import React from "react";
import { Link } from "react-router";

import NewsItem from './NewsItem';

export default class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'http://www.fymedia.tk/wp-json/wp/v2/posts',
      isLoad: false 
    }
  }
  
  componentDidMount(){
    this.serverRequest = $.getJSON(this.state.url,function(result){
      this.setState({
        posts:result,
        isLoad:true
      });
    }.bind(this));
  }
  
  render(){
    if(this.state.isLoad){

        const NewsItems = this.state.posts.map((post, i) => <NewsItem key={i} id={post.id} title={post.title} thumbnailurl={post.thumbnailurl} date={post.date} />);

        return (
          <div class="content marginBottom">
                <header class="bar bar-nav">
                  <h1 class="title">最新资讯</h1>
                </header>
                
                <div class="content-padded newsContent">
                    { NewsItems }
                </div>
           </div>
        );
    }
    return (
          <div class="content marginBottom">
                <header class="bar bar-nav">
                  <h1 class="title">最新资讯</h1>
                </header>

                <div class="loading">
                  <img src="../../img/loading.gif" width="80" height="80" />
                </div>
           </div>
    );
  }
}
