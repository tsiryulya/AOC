import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
require('datatables.net')(window, $)
require('datatables.net-dt')(window, $)
require('datatables.net-bs4')(window, $)
import './_scss/main.scss';
import './_scss/mixin/font-face.scss';



import {
    bro
} from './js/bro';
console.log(bro('Sup'));
console.log(`I've been required by Webpack////`);
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
$("m").html("dddd");

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("activeDropdown");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function changePagination() {
    $('#tableId_next a')[0].innerHTML = '';
    $('#tableModalId_next a')[0].innerHTML = '';
    $('#tableModalId_previous a')[0].innerHTML = '';
    $('#tableModalConnectionId_paginate').unwrap();
    $('#tableModalConnectionId_info').unwrap();
    $('#tableModalConnectionId_info').wrap('<div class="col-sm-12 col-md-12"></div>');
    $('#tableModalConnectionId_paginate').remove();
    $('.next a').append('<i class="fas fa-chevron-right"></i>');
    $('#tableId_previous a')[0].innerHTML = '';
    $('.previous a').append('<i class="fas fa-chevron-left"></i>');
    $('.pagination').css('justify-content', 'flex-end');
    $('.pagination li').css('padding', '0 0.2rem');
    $('.page-item.active .page-link').css({
        'background-color': '#A0A0A0',
        'border-radius': '0.2rem',
        'border': '0'
    });
    $('.paginate_button').css('border-radius', '0.2rem');
    $('#tableModalConnectionId thead th').css('background', 'url(src/img/sort-arrows.png) no-repeat right 0.75rem center/12px 13px');
};


function changeTable() {
    $('#tableId_filter').unwrap();
    $('#tableId_filter').remove();
    $('#tableId_length').find('label')[0].innerHTML = $('#tableId_length').find('select')[0].outerHTML;
    $('#tableId_length label').insertAfter();
    $('#tableId_length').unwrap();
    $('#tableId_length label').css('margin', '1rem 0 0');
    $('.custom-select ').css('background', 'none');
    $('.custom-select ').css('background', 'url(src/img/arrow-down.png) no-repeat right 0.75rem center/13px 14px');
    $('#tableId_length').wrap('<div class="col-sm-12 col-md-12 d-flex justify-content-end"></div>');
    $('#tableId thead th:not(:first):not(:last)').css('background', 'url(src/img/sort-arrows.png) no-repeat right 0.75rem center/12px 13px');
    $('.table .tableMain').css('background-color', '#F0F0F0!important');
    $('.table .tableMain tbody tr:nth-of-type(odd)').css('background-color', '#ffffff!important');
    $('.table .tableMain thead tr').css('background-color', '#C2E4F1!important');
}
//<div class="col-sm-12 col-md-6"><div id="tableModalId_filter" class="dataTables_filter"><i class="fas fa-search p-1"></i><input type="search" class="form-control form-control-sm" placeholder="" aria-controls="tableModalId"></div></div>


function changeModalTable(tableModalId_filter, tableModalId_length, tableModalId_wrapper) {
    $('#' + tableModalId_filter).unwrap();
    $('#' + tableModalId_filter).remove();
    $('#' + tableModalId_length).find('label')[0].innerHTML = $('#' + tableModalId_length).find('select')[0].outerHTML;
    $('#' + tableModalId_wrapper + ' .row:first').addClass('form-inline');
    $('#' + tableModalId_wrapper + ' .row:first').append('<div class="col-sm-12 col-md-6"><div id="tableModalId_filter" class="dataTables_filter"><i class="fas fa-search"></i><input type="search" class="input-search form-control form-control-sm" placeholder="Поиск..." aria-controls="tableModalId"></div></div>');
    $('.input-search').css({
        'border-radius': '0',
        'transform': 'none',
        'border': '0',
        'font-size': '12px'
    });
    $('#' + tableModalId_length).unwrap();
    $('#' + tableModalId_length).remove();
    $('#' + tableModalId_wrapper + ' .row:first').append('<div class="col-sm-12 col-md-6 d-flex justify-content-end"><div class="dataTables_length" id="tableModalId_length"><label><select name="tableModalId_length" aria-controls="tableModalId" class="custom-select custom-select-sm form-control form-control-sm" style="background: url(&quot;src/img/arrow-down.png&quot;) right 0.75rem center / 13px 14px no-repeat;"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div>');
}

function infoDetail() {
    $('#tableId tbody th').append('<a href="#" data-toggle="modal" data-target="#myModal" class="infoDetail"><i class="fas fa-eye"></i></a>');
    $('.infoDetail').css('color', '#395D7A');
}

$(document).ready(function () {
    $('#tableId').DataTable();
    $('#tableModalId').DataTable();
    $('#tableModalConnectionId').DataTable();
    changePagination();
    changeTable();
    changeModalTable('tableModalId_filter', 'tableModalId_length', 'tableModalId_wrapper');
    changeModalTable('tableModalConnectionId_filter', 'tableModalConnectionId_length', 'tableModalConnectionId_wrapper');
    $('.table thead th').click(function () {
        changePagination();
    });
    infoDetail();
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });


});


$('#myModal').on('show.bs.modal', function (event) {
    var infoBtn = $(event.relatedTarget);
    //var recipient = infoBtn.data();
});
