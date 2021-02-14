/* drawer.jpの利用宣言 */
$(document).ready(function () {
    $('.drawer').drawer();
});

/* wow.jsの利用宣言 */
new WOW().init();

/* スムーススクロール */
$(function () {
    $('a[href ^= "#"]').on('click', function () {
        var header = $('.header').innerHeight();
        var speed = 500;
        var id = $(this).attr('href');
        var target = $("#" === id ? 'html' : id);
        var position = $(target).offset().top - header;
        $('html, body').animate({scrollTop:position}, speed);
        return false;
    });
});

/* Google Formの非同期処理 */
var $form = $('#js-form');
$form.submit(function (e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                // 送信に成功した時の処理
                $form.slideUp();
                $('#js-success').slideDown();
            },
            200: function () {
                // 送信に失敗した時の処理
                $form.slideUp();
                $('#js-error').slideDown();
            }
        }
    });
    e.preventDefault();
});

/* formに入力されたらボタン反転 */
var $submit = $('#js-submit');
$('#js-form input, #js-form textarea').on('change', function () {
    if(
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== ""&&
        $('#js-form textarea').val() !== "" &&
        $('#js-form input[name="entry.644758834"]').prop('checked') === true
    ) {
        $submit.prop('disabled', false);
        $submit.addClass('is-active');
    } else {
        $submit.prop('disabled', true);
        $submit.removeClass('is-active');
    }
});