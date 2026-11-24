

const songs = [
    {
        title: "Always Online",
        singer: "林俊杰",
        genre: ["抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "I Believe",
        singer: "范逸臣",
        genre: ["抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "雨爱",
        singer: "杨丞琳",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "慢慢",
        singer: "顏人中",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "雨天",
        singer: "汪苏泷",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "重演",
        singer: "王巨星",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "漫漫",
        singer: "Bao Yu",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "童话",
        singer: "光良",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "爱你",
        singer: "王心凌",
        genre: ["甜歌", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "泪桥",
        singer: "伍佰",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "间距",
        singer: "en",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "妥协",
        singer: "蔡依林",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "爱错",
        singer: "王力宏",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "命运",
        singer: "家家",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "忍住",
        singer: "司馬缸砸光",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: "R&B"
    },
    {
        title: "走后",
        singer: "陈雅森",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "遇见",
        singer: "孙燕姿",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "宿命",
        singer: "en",
        genre: ["抒情", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "小宇",
        singer: "张震岳",
        genre: ["抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "不在",
        singer: "顏人中",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "偏爱",
        singer: "张芸京",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "指纹",
        singer: "胡歌",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "嚣张",
        singer: "en",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "像鱼",
        singer: "王贰浪",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "恋人",
        singer: "李榮浩",
        genre: [ "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "芊芊",
        singer: "回音哥",
        genre: ["古风", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "座位",
        singer: "承桓",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "只你",
        singer: "颜人中",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "小孩",
        singer: "罗森涛",
        genre: ["抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "即兴",
        singer: "小咪",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "舍得",
        singer: "王唯旖",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "泪海",
        singer: "许茹芸",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "幻听",
        singer: "许嵩",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "暖暖",
        singer: "梁静茹",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "画圈",
        singer: "en",
        genre: ["抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "白羊",
        singer: "徐秉龙",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "朝夕",
        singer: "檀健次",
        genre: ["古风", "抒情"],
        crown: "",
        note: ""
    },
    {
        title: "很需要",
        singer: "颜人中",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "等花落",
        singer: "贺子玲",
        genre: ["古风", "甜歌", "抒情"],
        crown: "",
        note: ""
    },
    {
        title: "同花顺",
        singer: "en",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "他他他",
        singer: "艾辰",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "下雨天",
        singer: "南拳妈妈",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "达尔文",
        singer: "蔡健雅",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "小幸运",
        singer: "田馥甄",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "多幸运",
        singer: "韩安旭",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "苏州河",
        singer: "薛凯琪",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "影子说",
        singer: "洛先生",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "跳楼机",
        singer: "LBI利比",
        genre: ["流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我会等",
        singer: "承桓",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "云水谣",
        singer: "en",
        genre: ["古风", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "静悄悄",
        singer: "陈泫孝",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "褪黑素",
        singer: "江皓南",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我想在",
        singer: "颜人中",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "追光者",
        singer: "岑宁儿",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "那栋楼",
        singer: "齊晨",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "想自由",
        singer: "林宥嘉",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "安河桥",
        singer: "宋冬野",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "学不会",
        singer: "林俊杰",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "天秤座",
        singer: "家衛老師",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "愿某人",
        singer: "周兴哲",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我想念",
        singer: "汪苏泷",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "怎么了",
        singer: "周兴哲",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "海屿你",
        singer: "馬也_Crabbit、Cole先生",
        genre: [ "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "美人鱼",
        singer: "林俊杰",
        genre: ["甜歌", "流行", "抒情"],
        crown: "",
        note: ""
    },
    {
        title: "曾经你说",
        singer: "趙乃吉",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "天空之外",
        singer: "弦子",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "消散对白",
        singer: "杜宣達",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我要的爱",
        singer: "杜宣达",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "一路向北",
        singer: "周杰伦",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我怀念的",
        singer: "孙燕姿",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "字字句句",
        singer: "郑润泽",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "修炼爱情",
        singer: "林俊杰",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "如果可以",
        singer: "韦礼安",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "开始懂了",
        singer: "孙燕姿",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "明天过后",
        singer: "张杰",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我不难过",
        singer: "孙燕姿",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "红尘客栈",
        singer: "周杰伦",
        genre: ["古风", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "好想好想",
        singer: "古巨基",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "爱你没错",
        singer: "张信哲",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "爱过的你",
        singer: "承桓",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "忘记时间",
        singer: "胡歌",
        genre: ["古风", "抒情", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "此生不换",
        singer: "青鸟飞鱼",
        genre: ["古风", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "你在不在",
        singer: "郭采洁",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "今夜有雨",
        singer: "h3R3",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "思念成灾",
        singer: "任夏",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "交换余生",
        singer: "林俊杰",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "城北的花",
        singer: "王宇宙Leto、喬浚丞",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "你好不好",
        singer: "周兴哲",
        genre: ["甜歌", "抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },

    {
        title: "就是爱你",
        singer: "陶喆",
        genre: ["甜歌", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "空心之城",
        singer: "文夫",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "忘了没有",
        singer: "王靖雯",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "执迷不悟",
        singer: "小乐哥",
        genre: ["流行", "EMO"],
        crown: "",
        note: "DJ"
    },
    {
        title: "我的纸飞机",
        singer: "GooGoo、王之睿",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "黑夜问白天",
        singer: "林俊杰",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "听吹过的风",
        singer: "林俊杰",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "没预报的雨",
        singer: "林時嶼、葛雨晴",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "愿得一人心",
        singer: "李行亮",
        genre: ["古风", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "下一个天亮",
        singer: "郭静",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "风如约而至",
        singer: "陸傑",
        genre: ["抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "我只能离开",
        singer: "顏人中",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "晚风又吹动",
        singer: "汪應駿",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我们的明天",
        singer: "鹿晗",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "少一点天份",
        singer: "孙盛希",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "只是太爱你",
        singer: "张敬轩",
        genre: ["甜歌", "抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "握不住的风",
        singer: "趙乃吉",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我会好好的",
        singer: "王心凌",
        genre: ["抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "听吹过的风",
        singer: "林叙",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "例外的偏爱",
        singer: "啊润",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "离开我的依赖",
        singer: "王艷薇",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "像晴天像雨天",
        singer: "汪苏泷",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "跨不过的距离",
        singer: "虎二",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "32度的晚风",
        singer: "陸傑",
        genre: ["甜歌", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "阿拉斯加海湾",
        singer: "菲道尔",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },

    {
        title: "刚下过雨的街",
        singer: "Wy",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    
    {
        title: "最后一首情歌",
        singer: "夏天Alex",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "永不失联的爱",
        singer: "周兴哲",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "如果这就是爱情",
        singer: "张靓颖",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "夏夜最后的烟火",
        singer: "颜人中",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "你比日落更浪漫",
        singer: "陸傑",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "这世界那么多人",
        singer: "莫文蔚",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    
    {
        title: "看着我的眼睛说",
        singer: "張遠",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "是你先说的喜欢",
        singer: "承桓",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "凌晨三点的雨夜",
        singer: "探長",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    
    {
        title: "其实一个人也挺好",
        singer: "薛鵬",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "不必让所有人懂你",
        singer: "DaiMusic",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    
    {
        title: "一个人想着一个人",
        singer: "曾沛慈",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "我爱的是爱我的你",
        singer: "鹿晗",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    
    {
        title: "第57次取消发送",
        singer: "菲菲公主",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "在加纳共和国离婚",
        singer: "菲道尔、DIOR大颖",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    {
        title: "此刻最好的都在身边",
        singer: "丁祾",
        genre: ["甜歌", "抒情", "流行"],
        crown: "",
        note: ""
    },
    {
        title: "手放开是我最后的爱",
        singer: "楊不乖",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    },
    
    {
        title: "先说爱的人为什么先离开",
        singer: "田園",
        genre: ["抒情", "流行", "EMO"],
        crown: "",
        note: ""
    }
];



const songList = document.getElementById("song-list");
const searchInput = document.getElementById("song-search");
const genreButtons = document.querySelectorAll("[data-genre]");

// 記錄目前選擇的歌曲類型
let selectedGenre = "全部";

// 顯示歌曲
function renderSongs() {
    // 取得搜尋框裡的文字
    const keyword = searchInput.value.trim().toLowerCase();

    // 篩選歌曲
    const filteredSongs = songs.filter(function(song) {
        // 檢查歌曲類型
        const matchGenre =
            selectedGenre === "全部" ||
            song.genre.includes(selectedGenre);

        // 檢查搜尋關鍵字
        const searchableText = [
            song.title,
            song.singer,
            song.note,
            ...song.genre
        ].join(" ").toLowerCase();

        const matchSearch =
            searchableText.includes(keyword);

        // 類型與搜尋都符合才顯示
        return matchGenre && matchSearch;
    });

    // 清空舊的歌曲列表
    songList.replaceChildren();

    // 如果沒有符合的歌曲
    if (filteredSongs.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.textContent = "找不到符合條件的歌曲。";

        row.appendChild(cell);
        songList.appendChild(row);
        return;
    }

    // 逐首歌曲建立表格列
    filteredSongs.forEach(function(song) {
        const row = document.createElement("tr");

        [
            song.title,
            song.singer,
            song.note || "—"
        ].forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        songList.appendChild(row);
    });
}

// 點擊歌曲類型按鈕
genreButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedGenre = button.dataset.genre;

        // 更新按鈕的選中外觀
        genreButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        // 重新顯示符合條件的歌曲
        renderSongs();
    });
});

// 輸入搜尋文字時即時更新
searchInput.addEventListener("input", renderSongs);

// 網頁載入後先顯示全部歌曲
renderSongs();
// 找到隨機選歌按鈕
const randomButton = document.querySelector(".random-btn");

// 點擊按鈕時，隨機選一首歌
randomButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    alert("🎵 隨機選到的歌曲是：\n" + randomSong.title + " - " + randomSong.singer);
});

