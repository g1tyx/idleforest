/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Idle Forest": "森林放置",
    "Ok!": "好的！",
    "Welcome back! The following happened while you were away...": "欢迎回来！ 在你不在的时候发生了以下事情……",
    "Add planter": "添加种植者",
    "Add salesman": "添加推销员",
    "Bartering": "以物易物",
    "C02": "二氧化碳",
    "Daily challenge: Hire a Rare salesman": "每日挑战：聘请稀有推销员",
    "Different trees will provide different benefits, you'll need a diverse collection to save the world": "不同的树会提供不同的好处，你需要多样化的收藏来拯救世界",
    "Good luck!": "祝你好运！",
    "H20": "水",
    "Hints": "提示",
    "How to play": "怎么玩",
    "Human Resources": "人力资源",
    "icon at the bottom of the screen": "屏幕底部的图标",
    "If water or nitrogen levels drop to zero, trees will start to die and will produce less fruit and logs. Prioritise the water tower and nitrogen factory upgrades to help prevent this": "如果水或氮含量降至零，树木将开始死亡，并会产生更少的果实和原木。优先考虑水塔和氮气工厂升级，以帮助防止这种情况发生",
    "If you have too many trees using too many resources, you can harvest the trees. This will also produce some fruit or logs": "如果你有太多的树使用太多的资源，你可以收割这些树。这也会产生一些水果或原木",
    "If you're running low on coins, try and complete your daily challenge for a generous reward!": "如果您的硬币不足，请尝试完成您的每日挑战以获得丰厚的奖励！",
    "If your water or nitrogen levels dip below zero, your trees will start to suffer! Make sure you acquire upgrades by clicking the": "如果您的水或氮含量降至零以下，您的树木将开始受苦！确保您通过单击",
    "Items sold by salesmen: 0": "销售人员出售的物品：0",
    "Items sold: 0": "已售商品：0",
    "Lemon Tree": "柠檬树",
    "N": "N",
    "No items to sell :(": "没有要出售的物品:(",
    "No planters found :(": "没有找到种植园主:(",
    "No salesmen found :(": "没有找到推销员:(",
    "Planting": "种植",
    "Planting trees will provide you with fruit and logs, which can be sold for coins or used to build upgrades": "种树会为你提供水果和原木，可以出售硬币或用于建造升级",
    "Progress will continue while the app is closed (capped at 8 hours)": "应用程序关闭时进度将继续（上限为 8 小时）",
    "Searching for and befriending pets will make your journey much easier!": "寻找宠物并与宠物交朋友将使您的旅程更加轻松！",
    "There are a number of achievements available, see if you can collect them all!": "有许多可用的成就，看看你能不能把它们都收集起来！",
    "This planet is dying - carbon dioxide is overly abundant and oxygen levels are at an all time low. That's where you come in.": "这个星球正在死去——二氧化碳过多，氧气含量处于历史最低水平。 那就是你进来的地方。",
    "To get started with your first tree, click the": "要开始使用您的第一棵树，请单击",
    "Tutorial": "教程",
    "Welcome to Idle Forest": "欢迎来到空闲森林",
    "X": "X",
    "You can also hire workers who will plant trees or sell fruit and logs automatically (for a fee)": "您还可以雇用自动种植树木或出售水果和原木的工人（收费）",
    "Your primary objective is to bring carbon dioxide levels down from the dangerous level where it currently sits": "您的主要目标是将二氧化碳水平从目前的危险水平降低",
    "Select a plant to automate": "选择要自动种植的植物",
    "Skills": "技能",
    "Stats": "统计",
    "The oxygen level is currently too low for pets to be able to survive. Check back later.": "目前氧气水平太低，宠物无法生存。 过一会再来检查。",
    "There are 31 achievements left to unlock!": "还有 31 项成就等待解锁！",
    "View planters": "查看花盆",
    "View salesmen": "查看推销员",
    "+ Lemons": "+ 柠檬",
    "Buy": "购买",
    "Cost of next tier:": "下一层费用：",
    "Harvest": "收成",
    "Increased nitrogen production": "增加氮产量",
    "Increased water production": "产水量增加",
    "Job Centre": "工作中心",
    "Nitrogen factory": "制氮厂",
    "No plants to harvest :(": "没有植物可收获:(",
    "Nothing to sell :(": "没什么好卖的:(",
    "Plant Shop Membership": "植物店会员",
    "Reduced cost for plants": "降低工厂成本",
    "Reduced hiring fees": "减少招聘费用",
    "Sell": "出售",
    "Upgrades": "升级",
    "Water Tower": "水塔",
    "Producing": "生产",
    "Warning Nitrogen has run out! Plant growth will now be stunted!": "警告：氮气已用完！ 现在植物的生长会受到阻碍！",
    "Warning Water has run out! Plants may start to perish!": "警告：水已用完！ 植物可能开始枯萎！",
    "Common": "常见",
    "Fee per plant:": "每棵费用：",
    "Grace": "优雅",
    "Greg": "格雷格",
    "Hire for": "雇用",
    "Mark": "标记",
    "Marsha": "玛莎",
    "Mega Rare": "超级稀有",
    "Rare": "稀有",
    "Select a planter to recruit": "选择要招募的种植者",
    "Steve": "史蒂夫",
    "Super Rare": "超级稀有",
    "Tier:": "等级：",
    "Tom": "汤姆",
    "Ultra Rare": "超稀有",
    "Uncommon": "罕见",
    "Daisy": "雏菊",
    "Fire Claire": "解雇克莱尔",
    "Fire Sarah": "解雇莎拉",
    "Fire Tom": "解雇汤姆",
    "Lemon": "柠檬",
    "Max": "最大限度",
    "Novice Planter": "新手种植者",
    "Novice Trader": "新手交易员",
    "Sarah": "莎拉",
    "Sarah has been recruited!": "莎拉被招募了！",
    "Select which product to automate": "选择要自动化的产品",
    "Select which salesman to recruit": "选择要招聘的推销员",
    "Sell all for": "全部卖掉",
    "Tap an item to sell it": "点按物品即可出售",
    "Terry": "特里",
    "Tom has been recruited!": "汤姆被招募了！",
    "Warning Not enough funds for planter to plant.": "警告 没有足够的资金供种植者种植。",
    "Achievement unlocked Novice Planter": "成就解锁新手种植者",
    "Achievement unlocked Novice Trader": "成就解锁新手交易员",
    "Assigned plant: Lemon Tree": "指定植物：柠檬树",
    "Assigned product: Lemon": "指定产品：柠檬",
    "Beth": "贝丝",
    "Claire": "克莱尔",
    "Claire has been recruited!": "克莱尔被招募了！",
    "Wendy": "温迪",
    "+ Apples": "+ 苹果",
    "+ Basic Logs": "+ 基础原木",
    "Chop down all": "全部砍掉",
    "Achievement unlocked Experienced Trader": "成就解锁经验丰富的交易员",
    "For every plant harvested, one respective product will be produced and added to your inventory": "对于收获的每一株植物，将生产一种相应的产品并将其添加到您的仓库中",
    "Harvesting plants will permanently remove them from your forest": "收获植物会将它们从你的森林中永久移除",
    "Materials required: 100 Basic Logs": "所需材料：100个基本原木",
    "Big ears": "大耳朵",
    "Effect: ?": "影响： ？",
    "Gerald": "杰拉德",
    "Hungry Harry": "饥饿的哈利",
    "Monk": "猴子",
    "Peter Panda": "彼得熊猫",
    "Search for Big ears": "搜索大耳朵",
    "Search for Gerald": "搜索杰拉德",
    "Search for Hungry Harry": "搜索饥饿的哈利",
    "Search for Monk": "搜索猴子",
    "Search for Peter Panda": "搜索彼得熊猫",
    "You haven't found this pet yet!": "你还没有找到这个宠物！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "double_arrow": "double_arrow",
    "shopping_cart": "shopping_cart",
    "settings": "settings",
    "emoji_events": "emoji_events",
    "help": "help",
    "people": "people",
    "pets": "pets",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Current tier: Tier ": "当前层级：层 ",
    "Salesmen fired: ": "被解雇的推销员：",
    "Salesmen recruited: ": "招聘推销员：",
    "Plants planted by hand: ": "手工种植的植物：",
    "Plants planted by planters: ": "种植者种植的植物：",
    "Planters fired: ": "解雇的种植者：",
    "Planters recruited: ": "招募的种植者：",
    "Items sold: ": "物品销售：",
    "Plants planted: ": "种植的植物：",
    "Items sold by salesmen: ": "推销员出售的物品：",
    "Sales per minute: ": "每分钟销量：",
    "Sales: ": "销售：",
    "Your HumanResources level has increased! Your Human Resources level is now level ": "你的人力资源等级提高了！ 您的人力资源等级现在是等级 ",
    "Plants planted: ": "种植的植物：",
    "Fresh Air Pt ": "新鲜空气 Pt ",
    "Get oxygen levels to ": "将氧气水平提高到 ",
    "Achieved on: ": "完成日期：",
    "Hired at: ": "入职日期：",
    "Coins earned: ": "获得的硬币：",
    "Apple Tree": "苹果树",
    "Basic Tree": "基础树",
    "Currently searching for: ": "目前正在寻找：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)k$/,
    /^([\d\.]+)G$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Requires level (.+) Planting$/, '需要 $1 级才能种植'],
    [/^Water has increased by (.+)$/, '水 增加了 $1'],
    [/^Nitrogen has increased by (.+)$/, '氮气 增加了 $1'],
    [/^Oxygen has increased by (.+)$/, '氧气 增加了 $1'],
    [/^Water has decreased by (.+)$/, '水 减少了 $1'],
    [/^Nitrogen has decreased by (.+)$/, '氮气 减少了 $1'],
    [/^Carbon Dioxide has decreased by (.+)$/, '二氧化碳 减少了 $1'],
    [/^Plants per minute: (.+)$/, '每分钟植物数：$1'],
    [/^Requires level (.+) human resources to hire$/, '需要 $1 级人力资源才能雇用'],
    [/^There are (.+) achievements left to unlock!$/, '还有 $1 项成就等待解锁！'],
    [/^Successfully plant (.+) trees$/, '成功种植 $1 棵树'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^(.+) Lemons have been harvested$/, '$1 柠檬已收获'],
    [/^Lemon Tree \(([\d\.]+)\)$/, '柠檬树 \($1\)'],
    [/^every ([\d\.,]+)s$/, '每 $1 秒'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^\- ([\d\.]+) C02\/s$/, '\- $1 二氧化碳\/秒'],
	[/^\- ([\d\.]+) H20\/s$/, '\- $1 水\/秒'],
	[/^\- ([\d\.]+) N\/s$/, '\- $1 氮气\/秒'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^\+ ([\d\.]+) ([\d\.]+)\/s$/, '\+ $1 $2\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^Lemon \(([\d\.]+)\)$/, '柠檬 （$1）'],
    [/^Chop down ([\d\.]+)$/, '砍下 $1'],
    [/^Buy ([\d\.]+)$/, '购买 $1'],
    [/^Earn ([\d\.]+) coins$/, '赚取 $1 金币'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) in-game minutes passed$/, '$1 分钟的游戏时间过去了'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);