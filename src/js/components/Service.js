import React from "react";

export default class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'http://www.fymedia.tk/wp-json/wp/v2/pages/196',
      isLoad: false 
    }
  }

  componentDidMount(){
    this.serverRequest = $.getJSON(this.state.url, function(result){
      this.setState({
        page: result,
        isLoad:true
      });
    }.bind(this));
  }
  
  render(){
    if(this.state.isLoad){
        //console.log(this.state.page);
        
        return (
            <div class="content marginBottom">
                <header class="bar bar-nav">
                  <h1 class="title">服务范围</h1>
                </header>

                <div class="content-padded marginTop">
                    <div class="pageContent" dangerouslySetInnerHTML={{ __html: this.state.page.content.rendered }} />
                </div>
            </div>
        );
    }
    return (
          <div class="content marginBottom">
                <header class="bar bar-nav">
                  <h1 class="title">服务范围</h1>
                </header>

                <div class="loading">
                  <img src="../../img/loading.gif" width="80" height="80" />
                </div>
            </div>
    );
  }
}
