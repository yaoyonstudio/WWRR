import React from "react";
import { Link } from "react-router";

export default class Menu extends React.Component {
  navigate(){
      // console.log(this.props);
      // this.props.history.pushState(null,"/");
      this.props.history.push("/");
      // this.props.history.replaceState(null,"/");
  }

  render(){
    return (
      <div class="bg">

        {this.props.children}

        <nav class="bar bar-tab">
          <Link to="home" class="tab-item" activeClassName="active">
            <span class="icon icon-home"></span>
            <span class="tab-label">首页</span>
          </Link>
          <Link to="about" class="tab-item" activeClassName="active">
            <span class="icon icon-person"></span>
            <span class="tab-label">关于我们</span>
          </Link>
          <Link to="service" class="tab-item" activeClassName="active">
            <span class="icon icon-star-filled"></span>
            <span class="tab-label">服务范围</span>
          </Link>
          <Link to="news" class="tab-item" activeClassName="active">
            <span class="icon icon-list"></span>
            <span class="tab-label">资讯</span>
          </Link>
          <Link to="contact" class="tab-item" activeClassName="active">
            <span class="icon icon-info"></span>
            <span class="tab-label">联系我们</span>
          </Link>
        </nav>
      </div>
    );
  }
}
