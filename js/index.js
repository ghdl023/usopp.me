$(document).ready(function(){
    console.log("Ready!");
    let words = [
        { text: 'ISFP', weight: 5, tooltip:'호기심 많은 예술가!'},
        { text: '안양대학교', weight: 7, tooltip: '정보통신공학과 13학번 19졸업하였음'},
        { text: '취미', weight: 10, tooltip:'집에서 게임하거나 넷플릭스,소설을 읽는것을 좋아함. 운동도 취미라면 취미'},
        { text: 'danbee.ai', weight: 8, tooltip: '2019년2월에 입사하여 현재까지 프론트엔드 개발자로 활약중'},
        { text: '롤(League of Legends)', weight: 4, tooltip: '원딜,정글 유저로 최고티어 다이아3'},
        { text: '스타크래프트', weight: 3, tooltip: '10대를 스타크래프트에 갈아넣은 스진남중에 스진남. 한번은 준프로게이머 선발대회에 참가하여 광탈한 경험이있음.'},
        { text: '경력', weight: 5, tooltip: '2019년2월 ~ 현재: 단비Ai 프론트엔드 개발'},
    ];

    bindClickHandler();

    $('#container').jQCloud(words,{
        // shape: 'elliptic',
        autoResize: true,
        fontSize: { from: 0.1, to: 0.01 },
        colors: ['#fff'],
    });

    let timer;

    function bindClickHandler() {
        for(let word of words) {
            word.handlers = {
                click: function(e){
                    console.log(e);
                    let selector = '#' + e.target.id;
                    tippy(selector, {
                        content: word.tooltip,
                        trigger: 'click',
                        animation: 'shift-away-subtle',
                        maxWidth: 350,
                        duration: 100,

                        onShow(instance) {
                            if(timer) clearTimeout(timer);
                            timer = setTimeout(function() {
                                instance.hide();
                            }, 5000);
                        },
                    });
                }
            }
        }
    }
});