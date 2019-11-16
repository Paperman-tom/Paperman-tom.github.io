$(function() {
    $("#check").click (function() {
        if($('#birthday').val()=='000828'){
            alert('i love u');
            window.location.href="https://paperman-tom.github.io/ilove10/";
            return true;
        }else {
            $('#birthday').val('');//清空输入框
            alert('登陆失败！');

            return false;
        }
    });
});