//clockIN
const clockIN = document.querySelector('.clockIN');
clockIN.addEventListener("click",function(e){
    clockIN.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/cafeshop-d4c16.appspot.com/o/sign-in-done.png?alt=media&token=da8196e0-1e76-4ba2-ab4d-7c80bbdfa261");
})

//signIN
let signIn = document.querySelector('.signIN');
signIn.addEventListener("click",function(e){
    let str=`<a href="#" class="btn btn-primary text-nowrap rounded-0 radius-bottom-l border-end-dark btn-border-top nav-btn-hover nav-hover fw-medium w-100"><i class="bi bi-cart-fill"></i>購物車</a>
  <div class="btn-group dropup">
      <a href="#" class="btn btn-primary dropdown-up text-nowrap rounded-0 radius-bottom-r btn-border-top nav-btn-hover fw-medium" data-bs-toggle="dropdown"><i class="bi bi-person-fill"></i>帳戶</a>
      <ul class="dropdown-menu dropdown-menu-end me-3 mb-3 p-3 border-2px">
          <li class="py-2 px-5"><a href="personal.html" class="text-gray-60 li-hover"><i class="bi bi-person-circle"></i> 個人資料</a></li>
          <li class="py-2 px-5"><a href="" class="text-gray-60 li-hover"><i class="bi bi-star"></i> 積分紀錄</a></li>
          <li class="py-2 px-5"><a href="" class="text-gray-60 li-hover"><i class="bi bi-bell"></i> 訊息通知</a></li>
          <li class="py-2 px-5 border-bottom-black"><a href="" class="text-gray-60 li-hover"><i class="bi bi-gear"></i> 設定</a></li>
          <li class="py-2 px-5 logOut"><a href="" class="text-gray-60 li-hover"><i class="bi bi-box-arrow-right"></i> 登出</a></li>
      </ul>
  </div>`
    signIn.innerHTML= str;
    signIn="";
});

