$(document).ready(function() {
	// 初始化数据
	let datas = initData();
	initView(datas);
});

function initView(datas) {
	for (let data in datas) {
		$(".index-page").append(
			'<article class="index-post">' +
			'<a class = "abstract-title" href = "/content">' +
			'<span > ' + datas[data].title + ' </span> ' +
			'</a> ' +
			'<div class = "abstract-content" >' +
			datas[data].content +
			'</div>' +
			'<div class = "abstract-post-meta" >' +
			'<div class = "abstract-date" >' +
			'<span class = "abstract-calander iconfont icon-clock" ></span>' +
			'<span class = "abstract-time" > ' + datas[data].date + ' </span>' +
			'</div>' +
			'</div>' +
			'</article>'
		)
	}
}

function initData() {
	var datas = [{
		'title': '宜家的设计问题',
		'content': '一、序宜家是一家优秀的公司，他们为家装和家居设计出模块化、标准化、简约的解决方案。对于大众消费者来说，既保证了基础的品质，又物美价廉。但是，我一直对宜家的商品展示牌的设计有很大的质疑，分享给大...',
		'date': '2021/08/14'
	}, {
		'title': '销售如何卖出产品',
		'content': '背景我发现同销售相关的同事聊天的时候，同事总会强调缺少活动，缺少赠品，缺少优​惠。当有了活动、赠品、优惠之后，销售同事又会强调缺少新的活动、缺少新赠品、​缺少新优惠。在这些同事看来，这些抓手不...',
		'date': '2021/08/10'
	}, {
		'title': '做难而正确的事 - 读《详谈左晖》',
		'content': '一、前言左晖 是链家和贝壳找房的创始人兼董事长。不久前，左晖因肺癌恶化而逝世。选择读左晖的著作一来是因为贝壳上市后，市值超过了 500 亿美金（下图）。二来是因为我发现用互联网手段改造传统...',
		'date': '2021/06/27'
	}, {
		'title': '会计指标应该反映出经营活动 - 读《经营与会计》',
		'content': '序最近常圳给我推荐了一本书，叫《经营与会计》，作者是日本的商界神人 稻盛和夫。稻盛和夫是京瓷、第二电电（现为 KDDI ）创办人，日本航空名誉会长（董事长）。稻盛和夫最有名的著作应该是《活...',
		'date': '2021/04/24'
	}, {
		'title': '鼓励犯错 - 读《华为供应链管理》',
		'content': '最近同事海晨给我分享了一本书，叫《华为供应链管理》，我看完有两个点印象深刻：华为任正非在内部信中强调要鼓励犯错。详细了解了一下 现金周转天数 和 库存周转天数。我展开聊一下。鼓励...',
		'date': '2021/04/18'
	}, {
		'title': '像经营企业一样经营城市 - 读《我在深圳当市长》',
		'content': '引言最近看完了《我在深圳当市长》，作者是前深圳市市长李子彬。李子彬在 94~00 年间在深圳市当市长，是深圳发展成为国内一线城市的主政者。在他的书中，我能看到一个城市经营发展面临的各种问题...',
		'date': '2021/03/19'
	}, {
		'title': '我对比特币的理解',
		'content': '一、前言比特币今年涨势很好，但最近刚刚有一个大的回落，跌到 5 万美元/个以下。对于比特币，市场有两个极端对立的观点：一波观点（代表者是巴菲特）认为是废纸，另一波观点认为比特币是黄金。我说...',
		'date': '2021/02/24'
	}, {
		'title': '华为手机 vs 苹果手机，我的一年评测对比报告',
		'content': '前言因为工作的原因，我早年一直从事 iOS 开发，所以一直用着苹果手机。iPhone 的体验一直挺好的。但是我一直比较好奇顶级的 Android 手机怎么样，体验和苹果会差多少，于是我去年...',
		'date': '2021/02/21'
	}, ]
	
	return datas;
}
