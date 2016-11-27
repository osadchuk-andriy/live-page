
$(function(){

    
   
    
    function ad(){
        
        
    var quantity;  
        
    var node=$("#tamplate").html();
    var n= $(node);
    var nodeF = $(".row_up");
        var t;
       
    t=nodeF.find("#inputValue").val();
    nodeF.find("#inputValue").val("");
    nodeF.find("#inputValue").focus();
       
        
    var $input=n.find("#changeText");    
    var $text = n.find("#text");
    var $c_b_box = n.find(".center_button_box");
    var $m_b= n.find("#minus");
    var $number=n.find("#num");
    var $p_b=n.find("#plus");
    var $r_b_box= n.find(".righr_button_box");
    var $buy=n.find("#buy");
    var $n_buy=n.find("#n_buy");
    var $x=n.find(".x");
        
   // $text.val("sdfsdf");
    //alert(t);
    //n.append(t);
    //var n= $(node);
            quantity=1;    
        
        var node2=$("#template_2").html();
        var g=$(node2);
        var f=$(node2);
        var $punktG=g.find("#text_punkt");
        var $roundG=g.find("#round");
          var $punktF=f.find("#text_punkt");
        var $roundF=f.find("#round")
        
        function af(text){ 
            $punktG.text(text);
            $roundG.text(quantity);
            $punktF.text(text);
            $roundF.text(quantity);
            f.addClass("not_visible");
            $("#row_1").append(g);
            $("#row_2").append(f);
            }
        
        
           if(t){
        $text.text(t);
        $number.text(quantity);
               af(t);
            $("#left_1").append(n);
        
         $p_b.click(function pl(){
            
             quantity++;    
             
              $roundG.text(quantity);
                  $roundF.text(quantity);
              
             if(quantity>1){
                 $m_b.removeClass("minus_button_nActive"); 
                 $m_b.addClass("minus_button");
             }
              $number.text(quantity);
              $round.text(quantity);
            
         });    
        
        $m_b.click(function mn(){
            
             if(quantity>1){
                 
             quantity--;  
                 
                  $roundG.text(quantity);
                  $roundF.text(quantity);
                 
                  if(quantity==1){
               
                $m_b.removeClass("minus_button"); 
                $m_b.addClass("minus_button_nActive"); 
               }
                  $number.text(quantity);
                  $round.text(quantity);
                  
             }
            
         });  
             
        $buy.click(function buy(){
             $text.addClass("text-through");
             $buy.addClass("not_visible");
             $n_buy.removeClass("not_visible");
             $x.addClass("not_visible");
             f.removeClass("not_visible");
             g.addClass("not_visible");
            f.addClass("text-through");
        });
         $n_buy.click(function n_buy(){
             $text.removeClass("text-through");
             $n_buy.addClass("not_visible");
             $buy.removeClass("not_visible");
             $x.removeClass("not_visible");
             g.removeClass("not_visible");
             f.addClass("not_visible");
             
             
        });
             
         $x.click(function x(){
               n.remove();
             f.remove();
             g.remove();
                 
         });
               
               
            $text.click(function(){
              
             $text.addClass("not_visible");
             $input.removeClass("not_visible");
             $input.focus();
             $input.val($text.text());
             
             $input.on('keypress', function(e){
                 if(e.which===13){
                     
                      $text.removeClass("not_visible");
                      $input.addClass("not_visible");
                     $text.text($input.val());
                 }
             });
             
             
             $input.focusout(function(){
                        $text.removeClass("not_visible");
                      $input.addClass("not_visible");
                     $text.text($input.val());
              });
                   
         });
        }
       }
    
    
    
    
    $("#inputValue").on('keypress', function(e){
                 if(e.which===13){
                      ad();
                 }
             });
    $("#addButton").click(ad);
    $(".buy").click(function buy(){
    
        
    });
});