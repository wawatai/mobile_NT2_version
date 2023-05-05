import { jumpChange } from "./function.js";

$(function(){
    //請先登入視窗
    $(document).on("click",".unLogin",function(){
        jumpChange();
        
        $(".plsGo")
        .addClass("display");
    })

    //登入彈窗
    $(".loginBtn,.jumpWindow.forgetWindow .return").on("click",function(){
        jumpChange();

        $(".jumpWindow.loginWindow")
        .addClass("display");
    })

    //忘記密碼
    $(".jumpWindow.loginWindow .forget p").on("click",function(){
        jumpChange();

        $(".jumpWindow.forgetWindow")
        .addClass("display");
    })

    //註冊彈窗
    $(".signupBtn,.jumpWindow.ruleWindow .return").on("click",function(){
        jumpChange();

        $(".jumpWindow.registerWindow")
        .addClass("display");
    })

    //開啟規則
    $(".jumpWindow.registerWindow .ruleBtn").on("click",function(){
        jumpChange();

        $(".jumpWindow.ruleWindow")
        .addClass("display");
    })

    //最新消息
    $(".jumpWindow.loginWindow .realLogin").on("click",function(){
        jumpChange();

        $(".jumpWindow.news")
        .addClass("display");
    })
    $(document).on("click",".newsBtn",function(){
        jumpChange();
        
        $(".jumpWindow.news")
        .addClass("display");
    })

    //各大遊戲投注彈窗呼叫
    $(document).on("click",".callSport",function(){
        jumpChange();

        $(".jumpWindow.gameWindow.sport")
        .addClass("display");
    })
    $(document).on("click",".callLive",function(){
        jumpChange();

        $(".jumpWindow.gameWindow.live")
        .addClass("display");
    })
    $(document).on("click",".callLottery",function(){
        jumpChange();

        $(".jumpWindow.gameWindow.lottery")
        .addClass("display");
    })
    $(".callSlot").on("click",function(){
        jumpChange();

        $(".jumpWindow.gameWindow.slot")
        .addClass("display");
    })
    $(".callFish").on("click",function(){
        jumpChange();

        $(".jumpWindow.gameWindow.fish")
        .addClass("display");
    })
    $(".callBoard").on("click",function(){
        jumpChange();

        $(".jumpWindow.gameWindow.board")
        .addClass("display");
    })

    //member頁語言切換
    $(".memberWrap .options.opLang").on("click",function(){
        jumpChange();

        $(".jumpWindow.langWindow")
        .addClass("display");
    })

    //memberInfo更變密碼
    $(".memberInfo .chPassword").on("click",function(){
        jumpChange();

        $(".jumpWindow.passwordWindow")
        .addClass("display");
    })

    //memberInfo更變手機
    $(".memberInfo .chPhone").on("click",function(){
        jumpChange();

        $(".jumpWindow.phoneWindow")
        .addClass("display");
    })

    //查詢紅利
    $(".bettingWrap .pointCheck").on("click",function(){
        jumpChange();

        $(".jumpWindow.pointWindow")
        .addClass("display");
    })

    //投注紀錄選擇帳號/選擇平台
    $(".bettingWrap .opAcc").on("click",function(){
        jumpChange();

        $(".jumpWindow.accWindow")
        .addClass("display");
    })
    $(".bettingWrap .opPlat").on("click",function(){
        jumpChange();

        $(".jumpWindow.platWindow")
        .addClass("display");
    })

    //優惠申請彈窗
    $(".applyList .applyBtn").on("click",function(){
        jumpChange();

        $(".jumpWindow.plsGo")
        .addClass("display");
    })
    $(".applyList .checkBtn").on("click",function(){
        jumpChange();

        $(".jumpWindow.eventWindow")
        .addClass("display");
    })
    
    //綁定銀行卡確認
    $(".cardContent .check").on("click",function(){
        jumpChange();

        $(".jumpWindow.plsGo2")
        .addClass("display");
    })


    //關閉彈窗
    $(".jumpWindow .close").on("click",function(){
        $(".filter")
        .removeClass("display");
    })
})