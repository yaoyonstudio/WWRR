import React from "react";

export default class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoad: false 
    }
  }  
  
  componentDidMount(){
    // console.log(this.props);
    var url = 'http://www.fymedia.tk/wp-json/wp/v2/posts/' + parseInt(this.props.routeParams.id); 
    this.serverRequest = $.getJSON(url,function(result){
      this.setState({
        post:result,
        isLoad:true
      });
    }.bind(this));
  }

  handleReturn(){
      // console.log(this.props);
      this.props.history.goBack();
  }
    
  render(){
    if(this.state.isLoad){
        return (
            <div class="content marginBottom">
                <header class="bar bar-nav">
                    <button class="btn btn-link btn-nav pull-left" onClick={this.handleReturn.bind(this)}>
                        <span class="icon icon-left-nav"></span>
                   </button>
                  <h1 class="title">新闻资讯</h1>
                </header>
                
                <div class="content-padded newsContent newsinfo">
                    <h2>{this.state.post.title}</h2>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
                </div>
           </div>
        );
    }    
    return (
      <div class="content marginBottom">
          <header class="bar bar-nav">
            <h1 class="title">新闻资讯</h1>
          </header>

          <div class="loading">
            <img src="../../img/loading.gif" width="80" height="80" />
          </div>
      </div>
    );
  }
}
