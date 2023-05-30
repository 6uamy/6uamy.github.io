const quotes = [
    {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
    },
    {
    quote: '산다는것 그것은 치열한 전투이다.',
    author: '로망로랑',
    },
    {
    quote: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.',
    author: '사무엘존슨',
    },
    {
    quote: '우리를 향해 열린 문을 보지 못하게 된다.',
    author: '헬렌켈러',
    },
    {
    quote: '한번의 실패와 영원한 실패를 혼동하지 마라.',
    author: 'F.스콧 핏제랄드',
    },
    {
    quote: '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.',
    author: '단테',
    },
    {
    quote: '성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.',
    author: '톰 모나건',
    },
    {
    quote: '평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.',
    author: '제임스 딘',
    },
    {
    quote: '1퍼센트의 가능성, 그것이 나의 길이다.',
    author: '나폴레옹',
    },
    {
    quote: '고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다. ',
    author: '괴테',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;