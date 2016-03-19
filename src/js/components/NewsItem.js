import React from "react";
import { Link } from "react-router";

export default class News extends React.Component {
  render(){
	if(this.props.thumbnailurl){
	    return (
		<Link to={`news/${this.props.id}`}>
			<div class="newsItem">
				<div class="newsItemThumbnail">
					<img src={this.props.thumbnailurl} />
				</div>

				<div class="newsItemRight">
					<h3>{this.props.title}</h3>
					<p>{this.props.date}</p>
				</div>
			</div>
		</Link>
	    );
	}else{
	    return (
		<Link to={`news/${this.props.id}`}>
			<div class="newsItem">
				<div class="newsItemRight">
				<h3>{this.props.title}</h3>
				<p>{this.props.date}</p>
				</div>
			</div>
		</Link>
	    );
	}
  }
}
