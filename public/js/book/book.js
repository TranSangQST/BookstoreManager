
/*------------------------------------------------------------------------------------------------------------------------------- */
/*--------------------------------------------------Global variable-------------------------------------------------------------- */
/*------------------------------------------------------------------------------------------------------------------------------- */

let bookTbRowLimit = 0;

let books = [];
let pagination = null;

const pathname = location.pathname;
let urlParams = new URLSearchParams(location.search);


let tableDataSource; // = $("#tableDataTemplate").html();
let tableDataTemplate; // = Handlebars.compile(tableDataSource);

let paginationSource; // = $("#paginationTemplate").html();
let paginationTemplate; // = Handlebars.compile(paginationSource);

// init data

function initDataTemplate(){
    tableDataSource = $("#tableDataTemplate").html();

    // console.log("tableDataSource: ", tableDataSource);

    tableDataTemplate = Handlebars.compile(tableDataSource);

    // console.log("tableDataTemplate: ", tableDataTemplate);

    paginationSource = $("#paginationTemplate").html();
    // console.log("paginationSource: ", paginationSource);

    paginationTemplate = Handlebars.compile(paginationSource);
    // console.log("paginationTemplate: ", paginationTemplate);
}





/*------------------------------------------------------------------------------------------------------------------------------- */
/*-------------------------------------------------Init UI----------------------------------------------------------------------- */
/*------------------------------------------------------------------------------------------------------------------------------- */



function updateTablePagination(item, clickPageNum){
    const tableData = $("#bookTableBody");
    
    let itemPage = $(item).attr('href').split('=')[1];
    urlParams.set("page",itemPage);

    console.log("tableData: ", tableData);

    tableData.html(tableDataTemplate({books}));
    // console.log("tableData: ",tableData.html());
    console.log("tableData : ", tableDataTemplate({books}));

    pagination.page = clickPageNum;
    $("#pagination") .html(paginationTemplate({pagination, paginationClass: "pagination"}));
    console.log("pagi: ",$("pagination") .html());

    //Sau khi hi???n th??? d??? li???u m???i, ta load lai page-link
    loadPageLink(urlParams, pathname);


    // updatePageIp(pagination.page);
}



function initUI(){

    // In /public/js/general/pagination/pagination.js
    initPagination(urlParams, pathname);
}




/*------------------------------------------------------------------------------------------------------------------------------- */
/*-------------------------------------------------init event------------------------------------------------------------------- */
/*------------------------------------------------------------------------------------------------------------------------------- */


function initEvent(){
    $("#pagination").on('click', '.page-link', async function(e) {

        console.log("pagination click");
        //Ng??n ch???n load l???i trang khi click v??o page-link
        e.preventDefault();
    
        //item l?? page-link element
        const item = $(e.target).closest("li").find("a");;
    
        const pageHref = item.attr('href');
    
        //filter l?? params c??a filter m?? ta ch???n
        //ta c??ch ra sau "?" c???a page-link href
        const filter = pageHref.split("?")[1]
    
        //Url c???a API
        const urlApi = "/api" + "/book" + "?"+ filter;
        console.log("urlApi: ", urlApi);
    
    
        const clickPageNum = pageHref.split("page=")[1];
        console.log("clickPageNum: ",clickPageNum);
    


        const tableDataAndPagination = await getTableDataAndPagination(urlApi);

        console.log("tableDataAndPagination: ", tableDataAndPagination);

        if (tableDataAndPagination){
            books = tableDataAndPagination.books;
            pagination = tableDataAndPagination.pagination;

            console.log("books: ", books);
            console.log("pagination: ", pagination);

            updateTablePagination(item, clickPageNum);
        }
        
    })

}







/*------------------------------------------------------------------------------------------------------------------------------- */
/*-----------------------------------------------Define function----------------------------------------------------------------- */
/*------------------------------------------------------------------------------------------------------------------------------- */




/*------------------------------------------------------------------------------------------------------------------------------- */
/*-----------------------------------------------Ajax function----------------------------------------------------------------- */
/*------------------------------------------------------------------------------------------------------------------------------- */

async function getTableDataAndPagination(urlApi){


        
    let pagination = null;
    let books = null;

    await $.ajax({
        url: urlApi,
        success: function (data){
            console.log("data: ", data);
            console.log("data.pagination: ", data.pagination);
            console.log("data.books: ", data.books);

            pagination = data.pagination;
            books = data.books;
        }
    })

    console.log("pagination: ", pagination);
    console.log("books: ", books);

    if (pagination && books){
        console.log("succces");
        return {pagination, books};
    }


    return null;

}



/*------------------------------------------------------------------------------------------------------------------------------- */
/*----------------------------------------------------------Main----------------------------------------------------------------- */
/*------------------------------------------------------------------------------------------------------------------------------- */

initDataTemplate();
$(document).ready(async function() {
    initUI();
    
    initEvent();



})
