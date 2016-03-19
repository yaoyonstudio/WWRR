import React from "react";

export default class HomeService extends React.Component {
  render(){
    return (
      <div class="homeServiceContainer">
        <h2>服务范围</h2>
        <div class="homeService">
          <div class="homeServiceItem">
            <img src="../../img/s1.png" />
            <p>网站建设</p>
          </div>
          <div class="homeServiceItem">
            <img src="../../img/s2.png" />
            <p>微信开发</p>
          </div>
          <div class="homeServiceItem">
            <img src="../../img/s3.png" />
            <p>网络推广</p>
          </div>
        </div>

        <div class="homeService">
          <div class="homeServiceItem">
            <img src="../../img/s4.png" />
            <p>活动策划</p>
          </div>
          <div class="homeServiceItem">
            <img src="../../img/s5.png" />
            <p>设计印刷</p>
          </div>
          <div class="homeServiceItem">
            <img src="../../img/s6.png" />
            <p>广告制作</p>
          </div>
        </div>
      </div>
    );
  }
}
