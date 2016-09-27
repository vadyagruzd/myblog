$('#birthdate').datetimepicker({
    //language:  'fr',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    endDate: '+0d',
    format: 'dd/mm/yyyy'
});
    
var info, ele;
 
$(document).ready(function(){
    var jVal = {
        'loginCorrect' : function() {
            if($('#loginInfo').length == 0){
                $('.login-group').append('<div class="col-sm-5">\n\
                                          <div class="form-control" id="loginInfo"></div></div>');
            }
            info = $('#loginInfo');
            ele = $('input[name=login]');
            if(!/^[a-zA-Z][a-zA-Z0-9-_\.]{5,15}$/.test(ele.val())) {
                jVal.errors = true;
                info.removeClass('bg-success').addClass('bg-danger')
                        .html('<span class="glyphicon glyphicon-remove" /> at least 6 and not more than 16 latin letters or numbers').show();
                $('.login-group').removeClass('has-success').addClass('has-error');
            } else {
                info.removeClass('bg-danger').addClass('bg-success')
                        .html('<span class="glyphicon glyphicon-ok" /> Login is correct').show();
                $('.login-group').removeClass('has-error').addClass('has-success');
            }                
        },
        'passwordCorrect' : function() {
            if($('#passwordInfo').length == 0){
                $('.password-group').append('<div class="col-sm-5">\n\
                                          <div class="form-control" id="passwordInfo"></div></div>');
            }
            info = $('#passwordInfo');
            ele = $('input[name=password]');

            if(!/^[a-zA-Z0-9][a-zA-Z0-9-_\.]{5,31}$/.test(ele.val())) {
                jVal.errors = true;
                info.removeClass('bg-success').addClass('bg-danger')
                        .html('<span class="glyphicon glyphicon-remove" /> at least 6 and not more than 32 latin letters or numbers').show();
                $('.password-group').removeClass('has-success').addClass('has-error');
            } else {
                info.removeClass('bg-danger').addClass('bg-success')
                        .html('<span class="glyphicon glyphicon-ok" /> Password is correct').show();
                $('.password-group').removeClass('has-error').addClass('has-success');
            }
        },
        'passwordConfirmCorrect' : function() {
            if($('#passwordConfirmInfo').length == 0){
                $('.password-confirm-group').append('<div class="col-sm-5">\n\
                                          <div class="form-control" id="passwordConfirmInfo"></div></div>');
            }
            info = $('#passwordConfirmInfo');
            ele = $('input[name=password-confirm]');

            if($('input[name=password]').val() != ele.val() || ele.val() == 0 ) {
                jVal.errors = true;
                info.removeClass('bg-success').addClass('bg-danger')
                        .html('<span class="glyphicon glyphicon-remove" /> Passwords not match').show();
                $('.password-confirm-group').removeClass('has-success').addClass('has-error');
            } else {
                info.removeClass('bg-danger').addClass('bg-success')
                        .html('<span class="glyphicon glyphicon-ok" /> Passwords is correct').show();
                $('.password-confirm-group').removeClass('has-error').addClass('has-success');
            }
        },
        'birthdayCorrect' : function() {
            if($('#birthdayInfo').length == 0){
                $('.birthday-group').append('<div class="col-sm-5">\n\
                                          <div class="form-control" id="birthdayInfo"></div></div>');
            }
            info = $('#birthdayInfo');
            ele = $('input[name=birthdate]');

            if(!/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)[0-9][0-9]$/.test(ele.val())) {
                jVal.errors = true;
                info.removeClass('bg-success').addClass('bg-danger')
                        .html('<span class="glyphicon glyphicon-remove" /> Select your birthday!').show();
                $('.birthday-group').removeClass('has-success').addClass('has-error');
            } else {
                info.removeClass('bg-danger').addClass('bg-success')
                        .html('<span class="glyphicon glyphicon-ok" />').show();
                $('.birthday-group').removeClass('has-error').addClass('has-success');
            }
        },
        'emailCorrect' : function() {
            if($('#emailInfo').length == 0){
                $('.email-group').append('<div class="col-sm-5">\n\
                                          <div class="form-control" id="emailInfo"></div></div>');
            }
            info = $('#emailInfo');
            ele = $('input[name=email]');

            if(!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(ele.val())) {
                jVal.errors = true;
                info.removeClass('bg-success').addClass('bg-danger')
                        .html('<span class="glyphicon glyphicon-remove" /> Incorrect Email').show();
                $('.email-group').removeClass('has-success').addClass('has-error');
            } else {
                info.removeClass('bg-danger').addClass('bg-success')
                        .html('<span class="glyphicon glyphicon-ok" /> Email is correct').show();
                $('.email-group').removeClass('has-error').addClass('has-success');
            }
        },
        'firstNameCorrect' : function() {
            if($('#firstnameInfo').length == 0){
                $('.firstname-group').append('<div class="col-sm-5">\n\
                                          <div class="form-control" id="firstnameInfo"></div></div>');
            }
            info = $('#firstnameInfo');
            ele = $('input[name=firstname]');
            if(!/^[a-zA-Z][a-zA-Z]{3,15}$/.test(ele.val())) {
                jVal.errors = true;
                info.removeClass('bg-success').addClass('bg-danger')
                        .html('<span class="glyphicon glyphicon-remove" /> Incorrect input').show();
                $('.firstname-group').removeClass('has-success').addClass('has-error');
            } else {
                info.removeClass('bg-danger').addClass('bg-success')
                        .html('<span class="glyphicon glyphicon-ok" /> Success.').show();
                $('.firstname-group').removeClass('has-error').addClass('has-success');
            }                
        },
        'lastNameCorrect' : function() {
            if($('#lastnameInfo').length == 0){
                $('.lastname-group').append('<div class="col-sm-5">\n\
                                          <div class="form-control" id="lastnameInfo"></div></div>');
            }
            info = $('#lastnameInfo');
            ele = $('input[name=lastname]');
            if(!/^[a-zA-Z][a-zA-Z]{3,15}$/.test(ele.val())) {
                jVal.errors = true;
                info.removeClass('bg-success').addClass('bg-danger')
                        .html('<span class="glyphicon glyphicon-remove" /> Incorrect input').show();
                $('.lastname-group').removeClass('has-success').addClass('has-error');
            } else {
                info.removeClass('bg-danger').addClass('bg-success')
                        .html('<span class="glyphicon glyphicon-ok" /> Success.').show();
                $('.lastname-group').removeClass('has-error').addClass('has-success');
            }                
        },
        'sendIt' : function (){
            if(!jVal.errors) {
                    $('#register-form').submit();
            }
        }
    };
    
    $('#register-btn').click(function (){
        $('html').animate({ scrollTop: $('#register-form').offset().top }, 750, function (){
            jVal.errors = false;
            jVal.loginCorrect();
            jVal.passwordCorrect();
            jVal.passwordConfirmCorrect();
            jVal.birthdayCorrect();
            jVal.emailCorrect();
            jVal.firstNameCorrect();
            jVal.lastNameCorrect();
            jVal.sendIt();
        });
        return false;
    });
    
    $('input[name=login]').change(jVal.loginCorrect);
    $('input[name=password]').change(jVal.passwordCorrect);
    $('input[name=password-confirm]').change(jVal.passwordConfirmCorrect);
    $('input[name=birthdate]').change(jVal.birthdayCorrect);
    $('input[name=email]').change(jVal.emailCorrect);
    $('input[name=firstname]').change(jVal.firstNameCorrect);
    $('input[name=lastname]').change(jVal.lastNameCorrect);    
});
