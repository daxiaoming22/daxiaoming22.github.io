1|(function () {
2|    const initHolidayPopup = async () => {
3|        const now = new Date();
4|        const year = now.getFullYear();
5|        const month = now.getMonth() + 1;
6|        const day = now.getDate();
7|        
8|        const todayStr = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
9|        const todayFullStr = `${year}-${todayStr}`;
10|
11|        const displayDate = `今天是 ${year}年${month}月${day}日`;
12|
13|        const storageKey = `holiday_popup_seen_${todayFullStr}`;
14|        if (localStorage.getItem(storageKey)) return;
15|
16|        try {
17|            const response = await fetch('/holidays.json');
18|            if (!response.ok) return;
19|            const holidaysData = await response.json();
20|
21|            const todaysHolidays = holidaysData[todayStr];
22|            if (!todaysHolidays || todaysHolidays.length === 0) return;
23|
24|            renderPopup(todaysHolidays, displayDate, storageKey);
25|        } catch (error) {
26|            console.error('节假日数据加载失败:', error);
27|        }
28|    };
29|
30|    const getEmoji = (name) => {
31|        const emojiMap = {
32|            '春节': '🏮', '元旦': '🎉', '清明节': '🌿', '劳动节': '🛠️',
33|            '5·12汶川大地震纪念日': '🕯️', '9·18事变纪念日': '🕯️', '7·7卢沟桥事变纪念日': '🕯️',
34|            '端午节': '🐉', '中秋节': '🥮', '国庆节': '🇨🇳',
35|            '站长生日': '🎂', '博客生日': '💻',
36|            '七夕节': '💖', '感恩节': '🦃', '妇女节': '🌹',
37|            '青年节': '🔥', '儿童节': '🎈', '建党节': '🚩',
38|            '建军节': '🎖️', '教师节': '💐', '母亲节': '🌸', '父亲节': '🧔',
39|            '立春': '🌱', '雨水': '💧', '惊蛰': '⚡', '春分': '🌸',
40|            '谷雨': '🌧️', '立夏': '🍉', '小满': '🌾', '芒种': '🌻',
41|            '夏至': '☀️', '小暑': '🍧', '大暑': '🔥', '立秋': '🍂',
42|            '处暑': '🍁', '白露': '🍵', '秋分': '🌾', '寒露': '🍁',
43|            '霜降': '❄️', '立冬': '⛄', '小雪': '🌨️', '大雪': '❄️',
44|            '冬至': '🥟', '小寒': '🧣', '大寒': '🧤'
45|        };
46|        return emojiMap[name] || '✨';
47|    };
48|
49|    const renderPopup = (holidays, displayDate, storageKey) => {
50|        if (document.getElementById('holiday-popup-wrapper')) return;
51|
52|        const style = document.createElement('style');
53|        style.id = 'holiday-popup-style';
54|        style.textContent = `
55|            #holiday-popup-wrapper {
56|                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
57|                background: rgba(0, 0, 0, 0.5); 
58|                z-index: 999999;
59|                display: flex; justify-content: center; align-items: center;
60|            }
61|            #holiday-popup-box {
62|                position: relative; width: 85%; max-width: 380px;
63|                padding: 30px 25px; border-radius: 10px; text-align: center;
64|                background: rgba(255, 255, 255, 0.85); 
65|                backdrop-filter: blur(2px);
66|                -webkit-backdrop-filter: blur(2px);
67|                border: 1px solid rgba(255, 255, 255, 0.85);
68|                box-shadow: 0 8px 16px -4px rgba(138, 138, 138, 0.15);
69|                display: flex; flex-direction: column; align-items: center;
70|                transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
71|            }
72|            html[data-theme="dark"] #holiday-popup-box {
73|                background: rgba(30, 30, 30, 0.6);
74|                border: 1px solid rgba(255, 255, 255, 0.08);
75|                box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.2);
76|            }
77|            #holiday-popup-date { 
78|                font-size: 14px; margin-bottom: 22px; font-weight: 500;
79|                color: var(--font-color); opacity: 0.85; 
80|            }
81|            .holiday-item { margin-bottom: 22px; }
82|            .holiday-item:last-of-type { margin-bottom: 10px; }
83|            .holiday-title {
84|                font-size: 20px; font-weight: bold; margin: 0 0 12px 0;
85|                color: #49b1f5; display: flex; align-items: center; justify-content: center; gap: 8px;
86|            }
87|            .holiday-msg { 
88|                font-size: 15px; line-height: 1.6; margin: 0; 
89|                color: var(--font-color);
90|            }
91|            #holiday-popup-close-btn {
92|                margin-top: 20px; padding: 8px 32px;
93|                font-size: 14px; cursor: pointer; border-radius: 5px;
94|                border: 1px solid #49b1f5; background: transparent; color: #49b1f5;
95|                transition: all 0.3s;
96|            }
97|            #holiday-popup-close-btn:hover { background: #49b1f5; color: #fff; }
98|        `;
99|        document.head.appendChild(style);
100|
101|        const itemsHtml = holidays.map(holiday => {
102|            const randomMsg = holiday.msgs[Math.floor(Math.random() * holiday.msgs.length)];
103|            const emoji = getEmoji(holiday.name);
104|            return `
105|                <div class="holiday-item">
106|                    <h3 class="holiday-title"><span>${emoji}</span> ${holiday.name}</h3>
107|                    <p class="holiday-msg">${randomMsg}</p>
108|                </div>
109|            `;
110|        }).join('');
111|
112|        const isBirthday = holidays.some(holiday => 
113|            holiday.name === '站长生日' || holiday.name === '博客生日'
114|        );
115|        const closeBtnText = isBirthday ? '生日快乐！' : '关闭';
116|
117|        const wrapper = document.createElement('div');
118|        wrapper.id = 'holiday-popup-wrapper';
119|        wrapper.innerHTML = `
120|            <div id="holiday-popup-box">
121|                <div id="holiday-popup-date">${displayDate}</div>
122|                ${itemsHtml}
123|                <button id="holiday-popup-close-btn">${closeBtnText}</button>
124|            </div>
125|        `;
126|        document.body.appendChild(wrapper);
127|
128|        document.getElementById('holiday-popup-close-btn').addEventListener('click', () => {
129|            wrapper.remove();
130|            style.remove();
131|            localStorage.setItem(storageKey, 'true');
132|        });
133|    };
134|
135|    if (document.readyState === 'loading') {
136|        document.addEventListener('DOMContentLoaded', initHolidayPopup);
137|    } else {
138|        initHolidayPopup();
139|    }
140|    document.addEventListener('pjax:complete', initHolidayPopup);
141|})();