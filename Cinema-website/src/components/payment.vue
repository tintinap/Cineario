<template>

<div>
<div class="paymenttotal center" id="vue2">ยอดชำระ ____  บาท </div>

<div class="container margindown4em" style="align-items: center;">
    <div class="row margindown4em">
<div class="col-3"></div>  
        
<aside class="col-7">
    <article class="card shadow_1 ">
        <!--start 2 button buy and book -->
                <ul class="nav bg-light nav-pills rounded nav-fill em2" role="tablist">
                    <li class="nav-item shadow_2">
                        <a class="nav-link active" data-toggle="pill" href="#pay">ซื้อตั๋วภาพยนตร์<hr><i class="fas fa-shopping-cart"></i></a></li>
                    <li class="nav-item shadow_2">
                        <a class="nav-link" data-toggle="pill" href="#test">จองตั๋วภาพยนตร์ <hr><i class="fas fa-film"></i></a>
                    </li>
                </ul>
        <!--end 2 button buy and book -->
       
        <div class="card-body"> <!-- start card-body  -->
            <div class="tab-content"> <!-- start tab-content -->
                    <div class="tab-pane active" id="pay" ><!-- start number 1 tab-content buy ticket -->
                        <form novalidate>
                            <div class="center marup50 em2">เลือกช่องทางชำระเงิน</div>
                <!-- start 3 button card pay moviecard-->
                                <div class="row">
                                    <div class="col-1"></div>
                                    <div class="col-lg-10" style="text-align: center;">
                                        <ul class="nav bg-light nav-pills rounded nav-fill  mb-5" role="tablist">
                                            <li class="nav-item shadow_2"><a class="nav-link active" data-toggle="pill" href="#nav-tab-card"><i class="fa fa-credit-card "></i>&nbsp; CreditCard</a></li>
                                            <li class="nav-item  shadow_2" style="margin-right:10px;margin-left:10px;"><a class="nav-link" data-toggle="pill" href="#nav-tab-paypal"><i class="fab fa-paypal"></i> &nbsp;PromptPay</a></li>
                                            <li class="nav-item shadow_2" ><a class="nav-link" data-toggle="pill" href="#nav-tab-bank"><i class="fas fa-chalkboard-teacher"> </i> &nbsp;&nbsp;&nbsp;Movie Card</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                 <!-- end 3 button card pay moviecard-->

                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-2"></div>
                                    <div class="col-lg-8">
                                        <div class="row">
                                            <!-- start  carditCard form-->
                                            <div class="tab-content margindown4em">


                                                <div class="tab-pane  show active" id="nav-tab-card" style="margin: 0 auto;">
                                                    <form>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" name="username" placeholder="ชื่อผู้ถือบัตร" required="">
                                                        </div>
                                                            <div class="form-group">
                                                                <div class="input-group">
                                                                    <input type="text" class="form-control" name="cardNumber" placeholder="หมายเลขบัตร" required  pattern="[0-9]{16}">
                                                                        <div class="input-group-append">
                                                                        <span class="input-group-text ">
                                                                            <i class="fab fa-cc-visa"></i>   
                                                                            <i class="fab fa-cc-amex"></i>   
                                                                            <i class="fab fa-cc-mastercard"></i> 
                                                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            <div class="row">
                                                                <div class="col-sm-8">
                                                                    <div class="form-group">
                                                                        <label class="hidden-xs">Expiration</label>
                                                                        <div class="input-group">
                                                                            <input type="number" class="form-control" placeholder="MM" required  pattern="[0-9]{2}">
                                                                            <input type="number" class="form-control " placeholder="YY" required  pattern="[0-9]{2}">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-4">
                                                                    <div class="form-group">
                                                                        <label>CVV <i class="fa fa-question-circle"></i></label>
                                                                        <input type="number" class="form-control"  pattern="[0-9]{3}">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button class="subscribe btn btn-primary btn-block lastbuttom height shadow_2" type="submit" data-target="#exampleModal1" data-toggle="modal">Confirm</button>
                                                    </form>
                                                </div>

                                                <div class="tab-pane fade" id="nav-tab-paypal">
                                                    <div class="row em12">
                                                        <div class="col-sm-12">
                                                            <h4 class="center">กรุณากรอกข้อมูลสำหรับการจ่ายเงินPromptPay</h4>
                                                        </div>
                                                        <div class="col" style="text-align: center; margin-top: 30px;">
                                                            <img src="../assets/logo.png" style="width: 200px;height: auto;">
                                                        </div>
                                                    </div>
                                                    <button class="subscribe btn btn-primary btn-block lastbuttom height shadow_2" type="submit" data-target="#exampleModal1" data-toggle="modal">Confirm</button>
                                                </div>

                                                <div class="tab-pane fade" id="nav-tab-bank">
                                                    <div class="row em12">
                                                        <p class="center">กรุณากรอกข้อมูลสำหรับการจ่ายเงินด้วย MovieCard</p>
                                                        <div class="col-lg-12 center">
                                                            <input type="text" class="form-control" name="cardNumber1" placeholder="รหัสหน้าบัตร 16 หลัก" required=""  pattern="[0-9]{16}"> 
                                                            <p class="marup10"></p>
                                                            <input type="text" class="form-control" name="cardNumber2" placeholder="PIN ด้านหลังบัตร" required >
                                                        </div>
                                                    </div>
                                                    <button class="subscribe btn btn-primary btn-block lastbuttom height shadow_2" type="submit" data-target="#exampleModal1" data-toggle="modal">Confirm</button>
                                                </div>

                                            </div><!-- end  carditCard form-->
                                        </div><!-- end  row-->
                                    </div>  <!-- close 8 col -->
                                </div><!-- end  row-->
                            </div><!-- end  container creditcard-->
                        </form><!--end form-->
                    </div><!--end all buy ticket -->


    <!-- book form -->
        <div class="tab-pane fade margindown4em" id="test">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 center">
                        <h1 class="headmargin">ยืนยันการจองตั๋วภาพยนตร์</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <form>
                            <div class="row em12">
                                <p>กรุณากรอกข้อมูลสำหรับการจองตั๋วชมภาพยนตร์</p>
                                <div class="col-lg-12 ">
                                    <p>E-mail</p>
                                    <input type="email" class="form-control" name="cardNumber"  required="">
                                    <p class="marup10">เบอร์โทร</p>
                                    <input type="text" class="form-control" name="cardNumber"  required="" >
                                </div>
                            </div>
                            <button class="subscribe btn btn-primary btn-block lastbuttom height shadow_2" type="submit" data-toggle="modal">Confirm</button>
                        </form>
                    </div>
                    <div class="col-lg-1"></div>
                </div>
            </div>
        </div>

    <!-- / book form -->
           


        </div>
    </div> <!-- end card body-->
    </article><!--end card-->
  </aside><!--end 7 col -->
</div><!-- super row-->
</div><!-- super container -->
</div>
</template>