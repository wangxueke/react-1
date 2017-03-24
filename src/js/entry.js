require('../less/entry.less')
var React = require('react')
var ReactDom = require('react-dom')
// var data = [
// 				'wang',
// 				'xue',
// 				'ke',
// 				'yes'
// 		]

// var App = React.createClass({
// 	getDefaultProps:function () {
// 		console.log('getDefaultProps')
// 	},
// 	componentWillMount:function () {
// 		console.log('componentWillMount')
// 	},
// 	componentDidMount:function () {
// 		console.log('componentDidMount')
// 	},
// 	shouldComponentUpdate:function (nextProps,nextState){
// 		console.log('shouldComponentUpDate')
// 		console.log(nextProps,nextState)
// 		return true;
// 	},
// 	componentWillUpdate:function () {
// 		console.log('componentWillUpDate')
// 	},
// 	getInitialState:function () {
// 		console.log('getInitialState')
// 		return {
// 			open:true
// 		}
// 	},
// 	onChangeColor:function () {
// 		var flag = this.state.open
// 		this.setState({
// 			open:!flag
// 		})
// 	},

// 	render:function () {
// 		console.log('render')
// 		var fontColor = {
// 			color:'red'
// 		}
// 		if(!this.state.open){
// 			fontColor.color = 'green'
// 		}

// 		return(
// 			<div style = {fontColor} className = {'wangxueke'}>
// 				<h1 onClick = {this.onChangeColor}>handsomeBoy</h1>
// 				<ul>
// 					{
// 						data.map(function (ele,index) {
// 							return <li key = {index + 10}>{ele}</li>
// 						})
// 					}
// 				</ul>
// 			</div>
// 		)
// 	}
// });

var Mask = React.createClass({
	getDefaultProps:function () {
		return {
			style:{
				width:'100%',
				position:'absolute',
				left:0,
				right:0,
				top:0,
				bottom:0,
				opacity:0.5,
				background:'#000',
				display:'none'
			}
		}
	},
	render:function () {
		var style = Object.assign({},this.props.style)
		if(this.props.openFlag){
			style.display = 'block'
		}
		return (
			<div style = {style}>
				{this.props.children}
			</div>
			)

	}
});
var Info = React.createClass({
	getDefaultProps:function () {
		return {
			message:'wangxueke',
			style:{
				margin:'200px auto',
				textAlign:'center',
				height:'150px',
				lineHeight:'150px',
				backgroundColor:'orange',
				color:'red'
			}
		}
	},
	render:function () {
		return (
			<div onClick = {this.props.onhandleClick} style = {this.props.style}>{this.props.message}</div>
			)
	}
});
var ButtonDialog = React.createClass({
	getInitialState:function () {
		return {
			open:false
		}
	},
	onChangeState:function () {
		var flag = !this.state.open;
		this.setState({
			open:flag
		})
	},
	render:function () {
		return (
			<div>
				<button onClick = {this.onChangeState}>Click</button>
				<Mask openFlag = {this.state.open}>
					<Info onhandleClick = {this.onChangeState}></Info>
				</Mask>
			</div>
			)
	}
})






ReactDom.render(
	<ButtonDialog/>,
	document.getElementById('root')
	)