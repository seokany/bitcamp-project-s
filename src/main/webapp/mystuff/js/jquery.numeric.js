(function ($) {
    // 숫자 제외하고 모든 문자 삭제.
    $.fn.removeText = function(_v){
        //console.log("removeText: 숫자 제거 합니다.");
        if (typeof(_v)==="undefined")
        {
            $(this).each(function(){
                this.value = this.value.replace(/[^0-9]/g,'');
            });
        }
        else
        {
            return _v.replace(/[^0-9]/g,'');
        }
    };
     
    // php의 number_format과 같은 효과.
    $.fn.numberFormat = function(_v){
        this.proc = function(_v){
            var tmp = '',
                number = '',
                cutlen = 3,
                comma = ','
                i = 0,
                len = _v.length,
                mod = (len % cutlen),
                k = cutlen - mod;
                 
            for (i; i < len; i++)
            {
                number = number + _v.charAt(i);
                if (i < len - 1)
                {
                    k++;
                    if ((k % cutlen) == 0)
                    {
                        number = number + comma;
                        k = 0;
                    }
                }
            }
            return number;
        };
         
        var proc = this.proc;
        if (typeof(_v)==="undefined")
        {
            $(this).each(function(){
                this.value = proc($(this).removeText(this.value));
            });
        }
        else
        {
            return proc(_v);
        }
    };
     
    // 숫자 만 표현
    $.fn.onlyNumber = function (p) {
        $(this).each(function(i) {
            //$(this).attr({'style':'text-align:right'});
             
            this.value = $(this).removeText(this.value);
             
            $(this).bind('keypress keyup',function(e){
                this.value = $(this).removeText(this.value);
            });
        });
    };
    
    //숫자 표현 + 포멧
    $.fn.onlyNumberFormat = function (p) {
        $(this).each(function(i) {
            //$(this).attr({'style':'text-align:right'});
             
            this.value = $(this).removeText(this.value);
            this.value = $(this).numberFormat(this.value);
             
            $(this).bind('keypress keyup',function(e){
                this.value = $(this).removeText(this.value);
                this.value = $(this).numberFormat(this.value);
            });
        });
    };
     
})(jQuery);