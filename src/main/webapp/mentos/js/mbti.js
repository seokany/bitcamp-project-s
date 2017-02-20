$(function() {
    // Test only
    $('#test input:radio').click();
    
    $('#btn_submit').click(function() {
        var result = "";
        var score = [0,0,0,0,0,0,0,0];
        var $answers = $('#test input:checked');
        if($answers.size() != 36) {
            alert('Please complete all questions!');
            return false;
        }
        else {
            $('#test').hide();
        }
        
        $answers.each(function() {
            switch($(this).val()) {
                case 'e': score[0]++; break;
                case 'i': score[1]++; break;
                case 's': score[2]++; break;
                case 'n': score[3]++; break;
                case 't': score[4]++; break;
                case 'f': score[5]++; break;
                case 'j': score[6]++; break;
                case 'p': score[7]++; break;
            }
        });
        
        result += (score[0] > score[1]) ? "E" : "I";
        result += (score[2] > score[3]) ? "S" : "N";
        result += (score[4] > score[5]) ? "T" : "F";
        result += (score[6] > score[7]) ? "J" : "P";
        
        $('.ptext').text(result);
        $('#dynamic-links a').each(function() {
            $(this).attr('href', result + $(this).attr('href'));
        });
        $('#personality-descriptions')
            .find('div.'+result.charAt(0)).show().end()
            .find('div.'+result.charAt(1)).show().end()
            .find('div.'+result.charAt(2)).show().end()
            .find('div.'+result.charAt(3)).show();
        $('#result').show();
    });
});