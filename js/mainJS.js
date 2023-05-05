$(function(){
    //首頁切換遊戲列
    $(".gameList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".gameBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //首頁登入
    $(".realLogin").on("click",function(){
        //marquee熱門公告功能
        $(".marqueeBox .unLogin")
        .attr("class","newsBtn");

        //gameBox按鈕呼叫投注彈窗
        $(".homeCenter .gameBox.sport li")
        .attr("class","callSport");
        $(".homeCenter .gameBox.live li")
        .attr("class","callLive");
        $(".homeCenter .gameBox.lottery li")
        .attr("class","callLottery");

        //gameBox按鈕轉頁面連結
        $(".homeCenter .gameBox.slot li")
        .removeClass()
        .attr("onClick","window.location.href='./html/slotPage.html'");
        // $(".homeCenter .gameBox.fish li")
        // .removeClass()
        // .attr("onClick","window.location.href='./html/fishPage.html'");
        // $(".homeCenter .gameBox.board li")
        // .removeClass()
        // .attr("onClick","window.location.href='./html/boardPage.html'");

        //operate選單轉頁面連結
        $(".memberArea .operate button:eq(0)")
        .removeClass()
        .attr("onClick","window.location.href='./html/deposit.html'");
        $(".memberArea .operate button:eq(1)")
        .removeClass()
        .attr("onClick","window.location.href='./html/transfer.html'");
        $(".memberArea .operate button:eq(2)")
        .removeClass()
        .attr("onClick","window.location.href='./html/withdrawal.html'");
        $(".memberArea .operate button:eq(3)")
        .removeClass()
        .attr("onClick","window.location.href='./html/vip.html'");

        //footer轉頁面連結
        $("footer li:eq(1)")
        .removeClass()
        .attr("onClick","window.location.href='./html/event.html'");
        $("footer li:eq(2)")
        .removeClass()
        .attr("onClick","window.location.href='./html/wallet.html'");
        $("footer li:eq(3)")
        .removeClass()
        .attr("onClick","window.location.href='./html/help_often_contact.html'");
        $("footer li:eq(4)")
        .removeClass()
        .attr("onClick","window.location.href='./html/member.html'");

        //header右上訊息提醒頁面連結
        $(".header .msg_ic")
        .removeClass("unLogin")
        .attr("onClick","window.location.href='./html/mail.html'");
        
        //切換登入後樣式
        $(".loginBox")
        .removeClass("display");
        $(".alLogin")
        .addClass("display");
    })

    //news切換
    $(".jumpWindow.news .typeList li button").on("click",function(){
        $(this)
        .addClass("active")
        .closest("li").siblings().find("button").removeClass("active");

        var n = $(this).closest("li").index();

        $(".jumpWindow.news .content:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //更換語言
    $(".jumpWindow.langWindow li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).text();

        $(".memberWrap .options.opLang span")
        .text(""+ n +"");

        $(".filter")
        .removeClass("display");
    })

    //wallet展開錢包
    $(".walletWrap .openBtn").on("click",function(){
        $(".walletWrap .openBtn,.walletWrap .walletList ul")
        .toggleClass("active");
    })

    //mail編輯
    $("header .edit_ic").on("click",function(){
        $(this)
        .removeClass("display");

        $("header .detailBtn,.mailBody .editBox")
        .addClass("display");

        $(".mailBody .mailBox")
        .addClass("editing");

        $(".mailBox li")
        .attr("onclick","");
    })
    $("header .detailBtn").on("click",function(){
        $("header .detailBtn,.mailBody .editBox")
        .removeClass("display");

        $("header .edit_ic")
        .addClass("display");

        $(".mailBody .mailBox")
        .removeClass("editing");

        $(".mailBox li")
        .attr("onclick","window.location.href='./mail_page.html'");
    })

    //mail消息切換
    $(".mailBody .subClass.second li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".mailBody .mailBox.normal:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".mailBody .subClass.third li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".mailBody .mailBox.post:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //mail上列切換
    $(".topList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".mailBody:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");

        if(n > 0)
        {
            $("header .edit_ic,header .detailBtn,.mailBody .editBox")
            .removeClass("display");

            $(".mailBox")
            .removeClass("editing");
        }
        else
        {
            $("header .edit_ic")
            .addClass("display");
        }
    })

    //各式紀錄呼叫列表
    $(".bettingWrap .searchContent .check").on("click",function(){
        $(".bettingWrap .list .noData")
        .removeClass("display")
        .siblings().addClass("display");
    })
    $(".bettingWrap .date button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".bettingWrap .list .noData")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //投注紀錄下方攔展開
    $(".bettingWrap .recordBox .open").on("click",function(){
        $(this)
        .toggleClass("active");

        $(this).prev()
        .toggleClass("active");
    })

    //優惠申請頁切換
    $(".eventApplyType li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".applyList:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //優惠申請頁呼叫列表
    $(".applyList .searchContent .check").on("click",function(){
        $(".applyList .recordList .noData")
        .removeClass("display")
        .siblings().addClass("display");
    })
    $(".applyList .date button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".applyList .recordList .noData")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //提款頁呼叫錢包列
    $(".withWrap .walletDetail .check").on("click",function(){
        $(this).next()
        .toggleClass("active");
    })
    
    //轉帳頁呼叫錢包列
    $(".transWrap .openBtn").on("click",function(){
        $(".transWrap .openBtn,.transWrap .walletList ul")
        .toggleClass("active");
    })

    //event
    $(".eventType li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    //slotPage
    $(".slotWrap .listBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
    $(".slotWrap .love_ic").on("click",function(){
        $(this)
        .toggleClass("active");
    })

    //deposit
    $(".depList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".depContent:eq("+ n +")")
        .addClass("display")
        .siblings(".depContent").removeClass("display");
    })
    $(".depContent.card .check").on("click",function(){
        $(".depContent.already")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //help切換
    $(".helpBody li").on("click",function(){
        var n = $(this).index();

        $("header .helpPage:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".helpWrap")
        .removeClass("display")

        $(".helpInner,.helpInner ul:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $("header .helpPage .back_arrow").on("click",function(){
        $(".helpInner")
        .removeClass("display");

        $(".helpWrap")
        .addClass("display");

        $("header .helpPage:first-child")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".helpInner li .title").on("click",function(){
        $(this).closest("li")
        .toggleClass("active");
    })
})