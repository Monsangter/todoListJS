const quotes = [
    {
        quote: "삼시세끼 잘 챙겨먹자",
        author: "-어머니",

    },
    {
        quote: "규칙적으로 일어나자",
        author: "-어머니",

    },
    {
        quote: "일찍 일어나자",
        author: "-어머니",

    },
    {
        quote: "밤되면 자자",
        author: "-어머니",

    },
    {
        quote: "인스턴트 그만 먹자",
        author: "-어머니",

    },
    {
        quote: "돈 아껴 쓰자",
        author: "-어머니",

    },
    {
        quote: "독립심을 기르자",
        author: "-어머니",

    },
    {
        quote: "넌 잘 할 수 있을거야",
        author: "-어머니",

    },
    {
        quote: "화이팅",
        author: "-어머니",

    },
    {
        quote: "힘내자!!",
        author: "-어머니",

    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
